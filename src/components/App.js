import React, { useState, useRef, useEffect } from 'react';
import { Player } from 'tone';

import {songsArray} from "../songs-array.js";

import '../App.css';

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

  const play = () => {
    console.log(isLoaded)
    player.current.start();
  }

  return (
    <div className={`App`}>
      
    </div>
  );
}