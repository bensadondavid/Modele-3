import React, { useState, useRef } from "react";

function Musique(){

  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (

    <div className="musique">
      <audio style={{display: 'none'}} ref={audioRef} src="/bereshit-olam.mp3" autoPlay controls />
      <button onClick={handleMute}>
        {isMuted ? <img src="/mute.png" className="muted" /> : <img src="volume.png" className="volume" />}
      </button>
    </div>
  );
  
};

export default Musique;