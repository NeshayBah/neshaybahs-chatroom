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

// UPDATED Music Player Hook with Album Cover Logic
const useMusicPlayer = () => {
  const audioRef = useRef(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Function to convert song name to album cover filename
  const getSongCoverFileName = (filename) => {
    // Extract song name from filename: "Jeff Buckley - Lover You Shouldve Come Over.mp3"
    const nameWithoutExtension = filename.replace('.mp3', '');

    // Split by ' - ' and take the song name part (after the artist)
    const parts = nameWithoutExtension.split(' - ');
    const songName = parts.length > 1 ? parts[1] : parts[0];

    // Convert to lowercase, replace spaces and special characters
    const cleanName = songName
      .toLowerCase()
      .replace(/'/g, '') // Remove apostrophes
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters except spaces
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim();

    return `${cleanName}.png`;
  };

  // Initialize playlist from music folder
  useEffect(() => {
    // You'll need to put your MP3 files in the public/music folder
    // and list them here or load them dynamically
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

    console.log('Processed playlist:', processedPlaylist); // Debug log to see the generated paths

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
      albumCover: 'https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca' // Default fallback
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

// Helper to get display data (custom profile → Google → fallback)
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

function App() {
  const [user] = useAuthState(auth);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>NeshayBahs Chatroom</h1>
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

function ProfileSettings({ user, onClose }) {
  const { customProfile, displayData, updateProfile } = useUserProfile(user);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempPhoto, setTempPhoto] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setTempName(customProfile?.displayName || "");
      setTempPhoto(customProfile?.photoURL || "");
    }
  }, [isEditing, customProfile]);

  const handleSave = async () => {
    setIsSaving(true);

    const profileData = {};
    if (tempName.trim()) profileData.displayName = tempName.trim();
    if (tempPhoto.trim()) profileData.photoURL = tempPhoto.trim();

    const success = await updateProfile(profileData);

    if (success) {
      setIsEditing(false);
    } else {
      alert("Failed to update profile. Please try again.");
    }

    setIsSaving(false);
  };

  const handleReset = async () => {
    if (window.confirm("Reset to Google profile data?")) {
      setIsSaving(true);

      // Clear custom profile data
      const success = await updateProfile({
        displayName: null,
        photoURL: null
      });

      if (success) {
        setIsEditing(false);
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
          <label className="form-label">Profile Picture URL</label>
          <input
            type="url"
            className="form-control"
            value={tempPhoto}
            onChange={(e) => setTempPhoto(e.target.value)}
            placeholder={user?.photoURL || "Enter image URL"}
          />
          {tempPhoto && (
            <div className="mt-2">
              <small className="text-muted">Preview:</small>
              <br />
              <img
                src={tempPhoto}
                alt="Preview"
                className="profile-avatar mt-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
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

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out btn btn-outline-light" onClick={() => signOut(auth)}>
        <i className="bi bi-box-arrow-right me-2"></i> Sign Out
      </button>
    )
  );
}

function MusicPlayer() {
  const {
    audioRef,
    currentTrack,
    isPlaying,
    togglePlayPause,
    nextTrack,
    previousTrack
  } = useMusicPlayer();

  // Default fallback album cover
  const defaultAlbumCover = "https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca";

  // Handle image loading errors
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

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, "messages");
  const [user] = useAuthState(auth);
  const { displayData } = useUserProfile(user);

  const q = query(messagesRef, orderBy("createdAt"), limit(100));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  // Auto-scroll when messages update
  useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.trim()) return;

    const { uid } = auth.currentUser;

    try {
      // Use current display data from profile (custom or Google fallback)
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL: displayData.photoURL,
        displayName: displayData.displayName,
      });

      setFormValue("");
    } catch (err) {
      console.error("Error sending message:", err);
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

          <form onSubmit={sendMessage} className="chat-form">
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Message something dude"
            />
            <button type="submit" disabled={!formValue.trim()}>
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function ChatMessage({ message }) {
  const { text, uid, photoURL, displayName, createdAt } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  // Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={photoURL || "https://ui-avatars.com/api/?name=" + encodeURIComponent(displayName || "User")}
        alt="avatar"
      />
      <div className="message-content">
        <div className="message-header">
          <span className="message-timestamp">{formatTime(createdAt)}</span>
          <strong>{displayName || "Unknown"}</strong>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;