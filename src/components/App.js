import React, { useState, useRef, useEffect } from 'react';
import { Player } from 'tone';

import {songsArray} from "../songs-array.js";

import '../App.css';
import { About } from './About.js';

export const App = () => {

  const [currentTrack, setCurrentTrack] = useState(0);
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
      onload: () => {isLoaded.current = true}
    }).toDestination();
  }

  return (
    <div className={`App`}>
      <About 
        iconColor={songsArray[currentTrack].iconColor}
      />
    </div>
  );
}