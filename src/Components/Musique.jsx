import React, { useState, useRef } from "react";

function Musique(){

  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const srcMusique = '/bereshit-olam.mp3'

  const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <path d="M19 8a5 5 0 0 1 0 8" />
      <path d="M21 5a9 9 0 0 1 0 14" />
    </svg>
  );
  
  const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <line x1="19" y1="9" x2="23" y2="15" />
      <line x1="23" y1="9" x2="19" y2="15" />
    </svg>  
  );

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (

    <div className="musique">
      <audio style={{display: 'none'}} ref={audioRef} src={srcMusique} autoPlay controls />
      <button onClick={handleMute}>
        {isMuted ? <PlayIcon /> : <PauseIcon /> }
      </button>
    </div>
  );
  
};

export default Musique;