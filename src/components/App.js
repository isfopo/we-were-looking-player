import React, { useState, useRef, useEffect } from 'react';
import { Player } from 'tone';

import { songsArray } from "../songs-array.js";

import '../App.css';
import { About } from './About.js';
import { TrackList } from './TrackList';
import { Controls } from './Controls.js';

export const App = () => {

  const [currentTrack, setCurrentTrack] = useState(0);
  const [maxTracks] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(songsArray[currentTrack].backgroundColor);

  const player = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    makePlayer(currentTrack)
      // eslint-disable-next-line
    }, []);

  const makePlayer = currentTrack => {
    isLoaded.current = false

    if ( isPlaying ) {
      stop()
    }
    
    player.current = new Player({
      url: songsArray[currentTrack].audioPath,
      autostart: true,
      onload: () => { isLoaded.current = true },
      onstop: () => { next() }
    }).toDestination();
    setIsPlaying(true)
  }

  const play = () => {
    player.current.start();
  }

  const stop = () => {
    player.current.stop();
  }

  const next = () => {
    if ( currentTrack < maxTracks ) {
      setCurrentTrack( currentTrack + 1 )
    } else {
      setCurrentTrack( 0 )
    }
    makePlayer(currentTrack);
    setBackgroundColor(songsArray[currentTrack].backgroundColor)
  }

  const back = () => {
    if ( currentTrack > 0 ) {
      setCurrentTrack( currentTrack - 1 )
    } else {
      setCurrentTrack( maxTracks )
    }
    makePlayer(currentTrack);
    setBackgroundColor(songsArray[currentTrack].backgroundColor)
  }

  return ( 
    <div className="App" style={{ background: backgroundColor }}>
      { !isLoaded.current ?
        <>
          <About 
            iconColor={songsArray[currentTrack].iconColor}
          />
          <TrackList 
            songsArray={ songsArray }
            makePlayer={ makePlayer }
            currentTrack={ currentTrack }
          />
          <Controls 
            isPlaying={isPlaying}
            play={play}
            stop={stop}
            next={next}
            back={back}
          />
        </>
      :
        <>
          <p className="loading">loading</p>
        </>
      }
    </div>
  );
}