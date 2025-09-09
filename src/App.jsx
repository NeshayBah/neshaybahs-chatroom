import React, { useRef, useState, useEffect } from "react";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData, useDocument } from "react-firebase-hooks/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBQSuvCd5mb-lbvoaZrwGl7fXhFRZWI0ZU",
  authDomain: "neshaybahs-chatroom.firebaseapp.com",
  projectId: "neshaybahs-chatroom",
  storageBucket: "neshaybahs-chatroom.firebasestorage.app",
  messagingSenderId: "120115708605",
  appId: "1:120115708605:web:b2956f68690d946f5badd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

const CLOUDINARY_CLOUD_NAME = 'dssbbkavm';
const CLOUDINARY_UPLOAD_PRESET = 'chat_uploads';

// Music Player Hook
const useMusicPlayer = () => {
  const audioRef = useRef(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Function to convert song name to album cover filename
  const getSongCoverFileName = (filename) => {
    const nameWithoutExtension = filename.replace('.mp3', '');
    const parts = nameWithoutExtension.split(' - ');
    const songName = parts.length > 1 ? parts[1] : parts[0];

    const cleanName = songName
      .toLowerCase()
      .replace(/'/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();

    return `${cleanName}.png`;
  };

  // Initialize playlist from music folder
  useEffect(() => {
    const musicFiles = [
      'Jeff Buckley - Lover You Shouldve Come Over.mp3',
      'wifiskeletton - Nope your too late i already died.mp3',
    ];

    const processedPlaylist = musicFiles.map(filename => {
      const [artist, songName] = filename.replace('.mp3', '').split(' - ');
      const albumCoverFileName = getSongCoverFileName(filename);

      return {
        filename,
        artist: artist || 'Unknown Artist',
        songName: songName || 'Unknown Song',
        url: `${import.meta.env.BASE_URL}music/${encodeURIComponent(filename)}`,
        albumCover: `${import.meta.env.BASE_URL}album-covers/${encodeURIComponent(albumCoverFileName)}`
      };
    });

    setPlaylist(processedPlaylist);
  }, []);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleEnded = () => nextTrack();

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Load current track
  useEffect(() => {
    if (playlist.length > 0 && audioRef.current) {
      audioRef.current.src = playlist[currentTrackIndex]?.url;
    }
  }, [currentTrackIndex, playlist]);

  const togglePlayPause = () => {
    if (!audioRef.current || playlist.length === 0) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (playlist.length === 0) return;
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const previousTrack = () => {
    if (playlist.length === 0) return;
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const getCurrentTrack = () => {
    return playlist[currentTrackIndex] || {
      artist: 'No Artist',
      songName: 'No Song',
      url: '',
      albumCover: 'https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca'
    };
  };

  const seekTo = (time) => {
    if (audioRef.current && duration) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return {
    audioRef,
    playlist,
    currentTrack: getCurrentTrack(),
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    nextTrack,
    previousTrack,
    setCurrentTrackIndex,
    seekTo
  };
};

// User profile helper functions
const createOrUpdateUserProfile = async (uid, profileData) => {
  try {
    const userDocRef = doc(firestore, "userProfiles", uid);
    await setDoc(userDocRef, {
      ...profileData,
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return true;
  } catch (error) {
    console.error("Error updating user profile:", error);
    return false;
  }
};

const getUserDisplayData = (customProfile, googleUser) => {
  return {
    displayName: customProfile?.displayName || googleUser?.displayName || "Anonymous",
    photoURL: customProfile?.photoURL || googleUser?.photoURL || null
  };
};

// Custom hook to manage user profile
const useUserProfile = (user) => {
  const userDocRef = user ? doc(firestore, "userProfiles", user.uid) : null;
  const [profileDoc, loading, error] = useDocument(userDocRef);
  const [displayData, setDisplayData] = useState({ displayName: "Anonymous", photoURL: null });

  useEffect(() => {
    if (user) {
      const customProfile = profileDoc?.data();
      const googleUser = {
        displayName: user.displayName,
        photoURL: user.photoURL
      };

      const newDisplayData = getUserDisplayData(customProfile, googleUser);
      setDisplayData(newDisplayData);
    }
  }, [user, profileDoc]);

  const updateProfile = async (newProfileData) => {
    if (!user) return false;
    return await createOrUpdateUserProfile(user.uid, newProfileData);
  };

  return {
    customProfile: profileDoc?.data() || null,
    displayData,
    loading,
    error,
    updateProfile
  };
};

// Image upload utility function
const uploadImage = async (file, userId) => {
  try {
    if (file.size > 10 * 1024 * 1024) {
      throw new Error("File size exceeds 10MB limit");
    }

    if (!file.type.startsWith('image/')) {
      throw new Error("File must be an image");
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const cleanUserId = userId.replace(/[^a-zA-Z0-9]/g, '');
    formData.append('folder', `chat_images/${cleanUserId}`);

    const timestamp = Date.now();
    const cleanFileName = file.name.split('.')[0].replace(/[^a-zA-Z0-9]/g, '_');
    formData.append('public_id', `${timestamp}_${cleanFileName}`);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}, response: ${responseText}`);
      try {
        const errorData = JSON.parse(responseText);
        throw new Error(errorData.error?.message || `HTTP ${response.status}: ${responseText}`);
      } catch (parseError) {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }
    }

    const data = JSON.parse(responseText);

    if (data.secure_url) {
      return {
        success: true,
        url: data.secure_url,
        publicId: data.public_id,
        fileName: data.original_filename
      };
    } else {
      throw new Error(data.error?.message || 'Upload failed - no secure_url returned');
    }

  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);

    if (error.message.includes('Invalid upload preset')) {
      return {
        success: false,
        error: "Upload preset 'chat_uploads' not found or not configured properly in Cloudinary"
      };
    } else if (error.message.includes('Invalid cloud name')) {
      return {
        success: false,
        error: "Cloud name 'dssbbkavm' not found in Cloudinary"
      };
    } else if (error.message.includes('Unauthorized')) {
      return {
        success: false,
        error: "Upload preset is not configured for unsigned uploads"
      };
    }

    return {
      success: false,
      error: error.message || "Failed to upload image to Cloudinary"
    };
  }
};

// Image preview component
function ImagePreview({ file, onRemove }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [file]);

  if (!preview) return null;

  return (
    <div className="image-preview">
      <img src={preview} alt="Preview" />
      <button
        className="remove-preview-btn"
        onClick={onRemove}
        type="button"
      >
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
}

// Main App Component
function App() {
  const [user] = useAuthState(auth);
  const [showSettings, setShowSettings] = useState(false);

  // Update CSS custom property for viewport height on mobile
  useEffect(() => {
    const updateVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVH();
    window.addEventListener('resize', updateVH);
    window.addEventListener('orientationchange', updateVH);

    return () => {
      window.removeEventListener('resize', updateVH);
      window.removeEventListener('orientationchange', updateVH);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="d-flex align-items-center">
          <img 
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Logo" 
            style={{ height: '40px', width: 'auto', marginRight: '15px' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <h1>NeshayBahs Chatroom</h1>
        </div>
        <div className="d-flex gap-2">
          {user && (
            <button
              className="btn btn-outline-light"
              onClick={() => setShowSettings(true)}
            >
              <i className="bi bi-gear me-2"></i>Settings
            </button>
          )}
          <SignOut />
        </div>
      </header>

      <div className={`chat-container container-fluid ${user ? 'has-user' : ''}`}>
        {user ? <ChatRoom /> : <SignIn />}
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <>
          <div className="settings-overlay" onClick={() => setShowSettings(false)}></div>
          <div className="settings-panel open">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4>Settings</h4>
              <button
                className="btn-close btn-close-white"
                onClick={() => setShowSettings(false)}
              ></button>
            </div>
            {user && <ProfileSettings user={user} onClose={() => setShowSettings(false)} />}
          </div>
        </>
      )}
    </div>
  );
}
// Profile Settings Component
// Profile Settings Component
function ProfileSettings({ user, onClose }) {
  const { customProfile, displayData, updateProfile } = useUserProfile(user);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempPhoto, setTempPhoto] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    if (isEditing) {
      setTempName(prev => prev || customProfile?.displayName || "");
      setTempPhoto(prev => prev || customProfile?.photoURL || "");
    }
  }, [isEditing]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("Image must be under 10MB.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = async () => {
    setIsSaving(true);

    try {
      let photoURL = tempPhoto;

      // Upload file if selected
      if (selectedFile) {
        const uploadResult = await uploadImage(selectedFile, user.uid);
        if (uploadResult.success) {
          photoURL = uploadResult.url;
        } else {
          alert("Upload failed: " + uploadResult.error);
          setIsSaving(false);
          return;
        }
      }

      const profileData = {};
      if (tempName.trim()) profileData.displayName = tempName.trim();
      if (photoURL) profileData.photoURL = photoURL;

      const success = await updateProfile(profileData);

      if (success) {
        setIsEditing(false);
        setSelectedFile(null);
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    if (window.confirm("Reset to Google profile data?")) {
      setIsSaving(true);

      const success = await updateProfile({
        displayName: null,
        photoURL: null,
      });

      if (success) {
        setIsEditing(false);
        setSelectedFile(null);
      }

      setIsSaving(false);
    }
  };

  if (!isEditing) {
    return (
      <div className="profile-section">
        <div className="profile-display">
          <div className="d-flex align-items-center gap-3 mb-3">
            <img
              src={
                displayData.photoURL ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  displayData.displayName
                )}`
              }
              alt="Profile"
              className="profile-avatar"
            />
            <div>
              <h5 className="mb-0">{displayData.displayName}</h5>
              <small>
                {customProfile?.displayName
                  ? "Custom Profile"
                  : "Using Google Profile"}
              </small>
            </div>
          </div>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setIsEditing(true)}
          >
            <i className="bi bi-pencil me-2"></i>Edit Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-section">
      <div className="profile-editor">
        <h5 className="mb-3">Edit Profile</h5>

        <div className="mb-3">
          <label className="form-label">Display Name</label>
          <input
            type="text"
            className="form-control"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            placeholder={user?.displayName || "Enter display name"}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input
            type="url"
            className="form-control mb-2"
            value={tempPhoto}
            onChange={(e) => setTempPhoto(e.target.value)}
            placeholder={user?.photoURL || "Enter image URL"}
          />
          <label className="form-label">Upload Profile</label>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileSelect}
            className="form-control"
          />

          {selectedFile && (
            <div className="mt-2">
              <ImagePreview file={selectedFile} onRemove={removeSelectedFile} />
            </div>
          )}
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-primary"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setIsEditing(false)}
            disabled={isSaving}
          >
            Cancel
          </button>

          {customProfile?.displayName && (
            <button
              className="btn btn-outline-warning"
              onClick={handleReset}
              disabled={isSaving}
            >
              Reset to Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


// Sign In Component
function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="signin-container text-center mt-5">
      <button className="btn btn-outline-light" onClick={signInWithGoogle}>
        <i className="bi bi-google me-2"></i> Sign in with Google
      </button>
      <p className="mt-2">Made by NeshayBah w/ vibe coding</p>
    </div>
  );
}

// Sign Out Component
function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out btn btn-outline-light" onClick={() => signOut(auth)}>
        <i className="bi bi-box-arrow-right me-2"></i> Sign Out
      </button>
    )
  );
}

// Music Player Component
function MusicPlayer() {
  const {
    audioRef,
    currentTrack,
    isPlaying,
    togglePlayPause,
    nextTrack,
    previousTrack
  } = useMusicPlayer();

  const defaultAlbumCover = "https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca";

  const handleImageError = (e) => {
    e.target.src = defaultAlbumCover;
  };

  return (
    <div className="media-controls">
      <audio ref={audioRef} />
      <img
        src={currentTrack.albumCover}
        alt="Album Cover"
        className="album-cover"
        onError={handleImageError}
      />
      <div className="media-text">
        <p className="song-name">{currentTrack.songName}</p>
        <p className="artist-name">{currentTrack.artist}</p>
      </div>
      <div className="button-group">
        <button className="skip-back" onClick={previousTrack}>
          <i className="bi bi-skip-start"></i>
        </button>
        <button className="play-pause" onClick={togglePlayPause}>
          <i className={`bi bi-${isPlaying ? 'pause' : 'play'}`}></i>
        </button>
        <button className="skip-forward" onClick={nextTrack}>
          <i className="bi bi-skip-end"></i>
        </button>
      </div>
    </div>
  );
}

// Chat Room Component
function ChatRoom() {
  const dummy = useRef();
  const fileInputRef = useRef();
  const messagesRef = collection(firestore, "messages");
  const [user] = useAuthState(auth);
  const { displayData } = useUserProfile(user);

  const q = query(messagesRef, orderBy("createdAt"), limit(100));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Auto-scroll when messages update
  useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size too large. Please select an image under 10MB.");
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert("Please select an image file.");
        return;
      }

      setSelectedImage(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!formValue.trim() && !selectedImage) {
      return;
    }

    setIsUploading(true);

    const { uid } = auth.currentUser;
    let imageUrl = null;

    try {
      // Upload image if selected
      if (selectedImage) {
        const uploadResult = await uploadImage(selectedImage, uid);

        if (uploadResult.success) {
          imageUrl = uploadResult.url;
        } else {
          alert("Failed to upload image: " + uploadResult.error);
          setIsUploading(false);
          return;
        }
      }

      // Create message data
      const messageData = {
        createdAt: serverTimestamp(),
        uid,
        photoURL: displayData.photoURL || null,
        displayName: displayData.displayName || "Anonymous",
      };

      if (formValue.trim()) {
        messageData.text = formValue.trim();
      }

      if (imageUrl) {
        messageData.imageUrl = imageUrl;
        messageData.messageType = 'image';
      } else {
        messageData.messageType = 'text';
      }

      await addDoc(messagesRef, messageData);

      // Clear form
      setFormValue("");
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (err) {
      console.error("Error sending message:", err);

      if (err.code === 'permission-denied') {
        alert("Permission denied. Check your Firestore security rules.");
      } else if (err.code === 'unavailable') {
        alert("Firestore is currently unavailable. Please try again.");
      } else {
        alert(`Error: ${err.message}`);
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {/* Music Player */}
      <MusicPlayer />

      {/* Chat panel */}
      <div className="chat-panel d-flex flex-column">
        <div className="messages-container flex-grow-1">
          <main className="messages-list">
            {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
            <span ref={dummy}></span>
          </main>

          {/* Image preview if selected */}
          {selectedImage && (
            <div className="image-preview-container">
              <ImagePreview file={selectedImage} onRemove={removeSelectedImage} />
            </div>
          )}

          <form onSubmit={sendMessage} className="chat-form">
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Message something dude"
              disabled={isUploading}
            />

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageSelect}
              accept="image/*"
              style={{ display: 'none' }}
            />

            {/* Image upload button */}
            <button
              type="button"
              className="image-upload-btn"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
            >
              <i className="bi bi-image"></i>
            </button>

            <button
              type="submit"
              disabled={(!formValue.trim() && !selectedImage) || isUploading}
            >
              {isUploading ? (
                <i className="bi bi-hourglass-split"></i>
              ) : (
                <i className="bi bi-send-fill"></i>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// Chat Message Component
function ChatMessage({ message }) {
  const { text, uid, photoURL, displayName, createdAt, imageUrl, messageType } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={photoURL || "https://ui-avatars.com/api/?name=" + encodeURIComponent(displayName || "User")}
        alt="avatar"
        className="user-avatar"
      />
      <div className="message-content">
        <div className="message-header">
          <span className="message-timestamp">{formatTime(createdAt)}</span>
          <strong>{displayName || "Unknown"}</strong>
        </div>

        {/* Display text if present */}
        {text && <p>{text}</p>}

        {/* Display image if present */}
        {imageUrl && (
          <div className="message-image-container">
            {imageLoading && (
              <div className="image-loading">
                <i className="bi bi-hourglass-split"></i>
                <span>Loading image...</span>
              </div>
            )}
            {!imageError ? (
              <img
                src={imageUrl}
                alt="Shared image"
                className="message-image"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageLoading ? 'none' : 'block' }}
              />
            ) : (
              <div className="image-error">
                <i className="bi bi-exclamation-triangle"></i>
                <span>Failed to load image</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;