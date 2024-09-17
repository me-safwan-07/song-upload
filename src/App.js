import React, { useState, useRef } from 'react';
import './App.css';
import logo from './realme mad ad logo.jpg';

const App = () => {
  const songs = [
    { id: 1, title: 'Entry song', src: '/songs/entry song.mp3' },
    { id: 2, title: 'Thief entry', src: '/songs/thief song.mp3' },
    { id: 3, title: 'Sahanya Entry', src: '/songs/Sahanya Entry.mp3' },
    { id: 4, title: 'All Entry', src: '/songs/all entry.mp3' },
    { id: 5, title: 'Police Song', src: '/songs/police song.mp3' },
    { id: 6, title: 'Last song', src: '/songs/last song.mp3' },
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const audioRefs = useRef([]);

  const playSong = (index) => {
    if (currentSong !== null) {
      audioRefs.current[currentSong].pause();
    }
    setCurrentSong(index);
    audioRefs.current[index].play();
  };

  const pauseSong = () => {
    if (currentSong !== null) {
      audioRefs.current[currentSong].pause();
      setCurrentSong(null);
    }
  };

  return (
    <div className="app-container">
      {/* <header className="app-header">
        <img src={logo} alt="Logo" className="app-logo" />
      </header> */}
      <div className="song-list">
        <h2>Mad Ad Songs</h2>
        {songs.map((song, index) => (
          <div className="song-container" key={song.id}>
            <p>{song.title}</p>
            <audio ref={(el) => (audioRefs.current[index] = el)} src={song.src} />
            <button onClick={() => playSong(index)}>Play</button>
            <button onClick={pauseSong}>Pause</button>
          </div>
        ))}
      </div>
      <footer>
        <p>Made by Muhammed Safwan</p>
      </footer>
    </div>
  );
};

export default App;




