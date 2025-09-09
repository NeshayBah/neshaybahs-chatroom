import React, { useRef, useState, useEffect } from "react";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp, doc, getDoc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData, useDocument, useCollection } from "react-firebase-hooks/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQSuvCd5mb-lbvoaZrwGl7fXhFRZWI0ZU",
  authDomain: "neshaybahs-chatroom.firebaseapp.com",
  projectId: "neshaybahs-chatroom",
  storageBucket: "neshaybahs-chatroom.firebasestorage.app",
  messagingSenderId: "120115708605",
  appId: "1:120115708605:web:b2956f68690d946f5badd4"
};

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

  useEffect(() => {
    const musicFiles = [
      'Frank Ocean - American Wedding.mp3',
      'Jeff Buckley - Lover You Shouldve Come Over.mp3',
      'wifiskeletton - Nope your too late i already died.mp3'
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

// User Profile Management
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

// Image Upload Utility
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

    const errorMessages = {
      'Invalid upload preset': "Upload preset 'chat_uploads' not found or not configured properly in Cloudinary",
      'Invalid cloud name': "Cloud name 'dssbbkavm' not found in Cloudinary",
      'Unauthorized': "Upload preset is not configured for unsigned uploads"
    };

    for (const [key, message] of Object.entries(errorMessages)) {
      if (error.message.includes(key)) {
        return { success: false, error: message };
      }
    }

    return {
      success: false,
      error: error.message || "Failed to upload image to Cloudinary"
    };
  }
};

// Image Preview Component
function ImagePreview({ file, onRemove }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
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
      <button className="remove-preview-btn" onClick={onRemove} type="button">
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
}

// Main App Component
function App() {
  const [user] = useAuthState(auth);
  const [showSettings, setShowSettings] = useState(false);

  // Fix viewport height on mobile devices
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
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <h1>NeshayBahs Chatroom</h1>
        </div>
        <div className="d-flex gap-2">
          {user && (
            <button
              className="btn btn-outline-light settings-btn"
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
              src={displayData.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayData.displayName)}`}
              alt="Profile"
              className="profile-avatar"
            />
            <div>
              <h5 className="mb-0">{displayData.displayName}</h5>
              <small>
                {customProfile?.displayName ? "Custom Profile" : "Using Google Profile"}
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
          <button className="btn btn-primary" onClick={handleSave} disabled={isSaving}>
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

// Authentication Components
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
      <p className="mt-2">Made by NeshayBah w/ abit of vibe coding</p>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out signout-btn btn btn-outline-light" onClick={() => signOut(auth)}>
        <i className="bi bi-box-arrow-right me-2"></i> Sign Out
      </button>
    )
  );
}

// Music Player Components
function MobileMiniPlayer() {
  const { audioRef, currentTrack, isPlaying, togglePlayPause, nextTrack, previousTrack } = useMusicPlayer();
  const defaultAlbumCover = "https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca";

  const handleImageError = (e) => {
    e.target.src = defaultAlbumCover;
  };

  return (
    <div className="mobile-mini-player">
      <audio ref={audioRef} />
      <img
        src={currentTrack.albumCover}
        alt="Album Cover"
        className="mini-album-cover"
        onError={handleImageError}
      />
      <div className="mini-track-info">
        <p className="mini-song-name">{currentTrack.songName}</p>
        <p className="mini-artist-name">{currentTrack.artist}</p>
      </div>
      <div className="mini-controls">
        <button className="mini-skip-back" onClick={previousTrack}>
          <i className="bi bi-skip-start"></i>
        </button>
        <button className="mini-play-pause" onClick={togglePlayPause}>
          <i className={`bi bi-${isPlaying ? 'pause' : 'play'}`}></i>
        </button>
        <button className="mini-skip-forward" onClick={nextTrack}>
          <i className="bi bi-skip-end"></i>
        </button>
      </div>
    </div>
  );
}

function MusicPlayer() {
  const { audioRef, currentTrack, isPlaying, togglePlayPause, nextTrack, previousTrack } = useMusicPlayer();
  const defaultAlbumCover = "https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca";

  const handleImageError = (e) => {
    e.target.src = defaultAlbumCover;
  };

  return (
    <div className="media-controls desktop-player">
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
  const [snapshot, loading, error] = useCollection(q);

  const [formValue, setFormValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [editingMessage, setEditingMessage] = useState(null);
  const [editText, setEditText] = useState("");

  const messages = snapshot?.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) || [];

  useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const deleteMessage = async (messageId) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(firestore, "messages", messageId));
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Failed to delete message. Please try again.");
      }
    }
  };

  const startEditing = (message) => {
    setEditingMessage(message.id);
    setEditText(message.text || "");
  };

  const cancelEditing = () => {
    setEditingMessage(null);
    setEditText("");
  };

  const saveEdit = async (messageId) => {
    if (!messageId || !editText.trim()) {
      alert("Message cannot be empty");
      return;
    }

    try {
      const messageRef = doc(firestore, "messages", messageId);
      await updateDoc(messageRef, {
        text: editText.trim(),
        editedAt: serverTimestamp()
      });
      setEditingMessage(null);
      setEditText("");
    } catch (error) {
      console.error("Error updating message:", error);
      alert("Failed to update message. Please try again.");
    }
  };

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

    if (!formValue.trim() && !selectedImage) return;

    setIsUploading(true);

    const { uid } = auth.currentUser;
    let imageUrl = null;

    try {
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

      setFormValue("");
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (err) {
      console.error("Error sending message:", err);

      const errorMessages = {
        'permission-denied': "Permission denied. Check your Firestore security rules.",
        'unavailable': "Firestore is currently unavailable. Please try again."
      };

      alert(errorMessages[err.code] || `Error: ${err.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <MobileMiniPlayer />
      <MusicPlayer />

      <div className="chat-panel d-flex flex-column">
        <div className="messages-container flex-grow-1">
          <main className="messages-list">
            {messages && messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                onDelete={deleteMessage}
                onStartEdit={startEditing}
                onCancelEdit={cancelEditing}
                onSaveEdit={saveEdit}
                editingMessage={editingMessage}
                editText={editText}
                setEditText={setEditText}
              />
            ))}
            <span ref={dummy}></span>
          </main>

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

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageSelect}
              accept="image/*"
              style={{ display: 'none' }}
            />

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

// Chat Message Component with Reactions
function ChatMessage({ message, onDelete, onStartEdit, onCancelEdit, onSaveEdit, editingMessage, editText, setEditText }) {
  const messageId = message.id;
  const { text, uid, photoURL, displayName, createdAt, imageUrl, editedAt, reactions } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const isOwner = uid === auth.currentUser.uid;
  const isEditing = editingMessage === messageId;

  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showReactionMenu, setShowReactionMenu] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState(null);
  const [reactionTimer, setReactionTimer] = useState(null);

  const menuRef = useRef(null);
  const reactionMenuRef = useRef(null);
  const clickTimeoutRef = useRef(null);
  const clickCountRef = useRef(0);

  const [user] = useAuthState(auth);
  const { displayData } = useUserProfile(user);

  const availableEmojis = ['❤️', '😂', '😮', '😢', '😡', '👍', '👎', '🔥', '✨', '💯'];

  // Add reaction to message
  const addReaction = async (emoji) => {
    if (!user || !messageId) return;

    try {
      const messageRef = doc(firestore, "messages", messageId);
      const messageDoc = await getDoc(messageRef);

      if (messageDoc.exists()) {
        const currentReactions = messageDoc.data().reactions || {};

        if (!currentReactions[emoji]) {
          currentReactions[emoji] = {};
        }

        // Toggle reaction
        if (currentReactions[emoji][user.uid]) {
          delete currentReactions[emoji][user.uid];
          if (Object.keys(currentReactions[emoji]).length === 0) {
            delete currentReactions[emoji];
          }
        } else {
          currentReactions[emoji][user.uid] = {
            displayName: displayData.displayName,
            timestamp: serverTimestamp()
          };
        }

        await updateDoc(messageRef, { reactions: currentReactions });
      }
    } catch (error) {
      console.error("Error adding reaction:", error);
    }
  };

  // Handle double-click for quick heart reaction
  const handleMessageClick = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('.reaction-pill')) {
      return;
    }

    clickCountRef.current += 1;

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = setTimeout(() => {
      if (clickCountRef.current === 2) {
        addReaction('❤️');
      }
      clickCountRef.current = 0;
    }, 300);
  };

  // Handle reaction selection
  const handleReactionSelect = (emoji) => {
    addReaction(emoji);
    setShowReactionMenu(false);
  };

  // Get reaction data for display
  const getReactionData = () => {
    if (!reactions) return [];

    return Object.entries(reactions)
      .map(([emoji, users]) => ({
        emoji,
        count: Object.keys(users).length,
        users: Object.entries(users).map(([userId, userData]) => ({
          userId,
          displayName: userData.displayName
        })),
        userReacted: user && users[user.uid]
      }))
      .filter(reaction => reaction.count > 0);
  };

  const reactionData = getReactionData();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
      if (reactionMenuRef.current && !reactionMenuRef.current.contains(event.target)) {
        setShowReactionMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      if (longPressTimer) {
        clearTimeout(longPressTimer);
      }
      if (reactionTimer) {
        clearTimeout(reactionTimer);
      }
    };
  }, [longPressTimer, reactionTimer]);

  // Mobile long press handlers
  const handleTouchStart = (e) => {
    // Reaction menu timer
    const rTimer = setTimeout(() => {
      setShowReactionMenu(true);
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, 500);
    setReactionTimer(rTimer);

    if (isOwner) {
      const mTimer = setTimeout(() => {
        setShowMenu(true);
      }, 800);
      setLongPressTimer(mTimer);
    }
  };

  const handleTouchEnd = () => {
    if (reactionTimer) {
      clearTimeout(reactionTimer);
      setReactionTimer(null);
    }
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "";

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let datePart;
    if (target.getTime() === today.getTime()) {
      datePart = "Today";
    } else if (target.getTime() === yesterday.getTime()) {
      datePart = "Yesterday";
    } else {
      datePart = date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    }

    const timePart = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${datePart} ${timePart}`;
  };

  const handleImageLoad = () => setImageLoading(false);
  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div
      className={`message ${messageClass} ${isOwner ? 'message-owner' : ''}`}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleMessageClick}
    >
      <img
        src={photoURL || "https://ui-avatars.com/api/?name=" + encodeURIComponent(displayName || "User")}
        alt="avatar"
        className="user-avatar"
      />
      <div className="message-content">
        <div className="message-header">
          <span className="message-timestamp">
            {formatTime(createdAt)}
            {editedAt && <span className="edited-indicator"> (edited)</span>}
          </span>
          <strong>{displayName || "Unknown"}</strong>
        </div>

        {text && !isEditing && <p>{text}</p>}

        {isEditing && (
          <div className="message-edit-container">
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="message-edit-input"
              rows={Math.min(Math.max(editText.split('\n').length, 1), 4)}
              autoFocus
            />
            <div className="message-edit-actions">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onSaveEdit(messageId)}
              >
                Save
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={onCancelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

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

        {/* Message Reactions */}
        {reactionData.length > 0 && (
          <div className="message-reactions">
            {reactionData.map(({ emoji, count, users, userReacted }) => (
              <button
                key={emoji}
                className={`reaction-pill ${userReacted ? 'user-reacted' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleReactionSelect(emoji);
                }}
                title={users.map(u => u.displayName).join(', ')}
              >
                <span className="reaction-emoji">{emoji}</span>
                <span className="reaction-count">{count}</span>
              </button>
            ))}
          </div>
        )}

        {/* Reaction Menu */}
        {showReactionMenu && (
          <div className="reaction-menu" ref={reactionMenuRef}>
            <div className="reaction-menu-content">
              {availableEmojis.map(emoji => (
                <button
                  key={emoji}
                  className="reaction-menu-emoji"
                  onClick={() => handleReactionSelect(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message Menu */}
        {showMenu && !isEditing && (
          <div className="message-menu" ref={menuRef}>
            <button
              className="message-menu-item"
              onClick={(e) => {
                e.stopPropagation();
                setShowReactionMenu(!showReactionMenu);
              }}
            >
              <i className="bi bi-emoji-smile"></i>
              React
            </button>
            {isOwner && text && (
              <button
                className="message-menu-item"
                onClick={() => onStartEdit(message)}
              >
                <i className="bi bi-pencil"></i>
                Edit
              </button>
            )}
            {isOwner && (
              <button
                className="message-menu-item message-menu-delete"
                onClick={() => onDelete(messageId)}
              >
                <i className="bi bi-trash"></i>
                Delete
              </button>
            )}
          </div>
        )}

        {/* Reaction Menu */}
        {showReactionMenu && (
          <div className="reaction-menu" ref={reactionMenuRef}>
            <div className="reaction-menu-content">
              {availableEmojis.map(emoji => (
                <button
                  key={emoji}
                  className="reaction-menu-emoji"
                  onClick={() => handleReactionSelect(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;