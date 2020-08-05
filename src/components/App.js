import React, { useState, useRef, useEffect } from 'react';
import {createUseStyles} from 'react-jss'
import { Player } from 'tone';

import {songsArray} from "../songs-array.js";

import '../App.css';
import { About } from './About.js';

export const App = () => {

  const [currentTrack, setCurrentTrack] = useState(0);
  const [maxTracks] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(songsArray[currentTrack].backgroundColor);

  const player = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    makePlayer(currentTrack)
      // eslint-disable-next-line
    }, []);

  const makePlayer = currentTrack => {
    isLoaded.current = false

    player.current = new Player({
      url: songsArray[currentTrack].audioPath,
      autostart: true,
      onload: () => { isLoaded.current = true },
      onstop: () => { next() }
    }).toDestination();
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

  return (
    <div className="App" style={{ background: backgroundColor }}>
      <About 
        iconColor={songsArray[currentTrack].iconColor}
      />
    </div>
  );
}