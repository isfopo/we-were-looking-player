import React, { useState, useRef, useEffect } from 'react';
import { Player } from 'tone';

import { songsArray } from "../songs-array.js";

import '../App.css';
import { About } from './About.js';
import { TrackList } from './TrackList';
import { Controls } from './Controls.js';

export const App = () => {

  const [currentTrack, setCurrentTrack] = useState(0);
  const [maxTracks] = useState(1);
  const [pausePoint, setPausePoint] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(songsArray[currentTrack].backgroundColor);

  const player = useRef(null);

  useEffect(() => {
    makePlayer(currentTrack)
      // eslint-disable-next-line
    }, []);

  const makePlayer = currentTrack => {

    if ( isLoaded ) {
      player.current.dispose();
      setIsLoaded(false);
    }
    
    player.current = new Player({
      url: songsArray[currentTrack].audioPath,
      autostart: true,
      onload: () => { setIsLoaded(true) }
    }).toDestination();
    setIsPlaying(true)
  }

  const play = () => {
    player.current.start(pausePoint);
    setIsPlaying(true)
  }

  const pause = () => {
    setPausePoint(player.current.now())
    setIsPlaying(false)
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
      { isLoaded ?
        <>
          <About 
            iconColor={songsArray[currentTrack].iconColor}
          />
          <div className="bottom-bar">
            <TrackList 
              songsArray={ songsArray }
              makePlayer={ makePlayer }
              currentTrack={ currentTrack }
            />
            <Controls 
              isPlaying={isPlaying}
              play={play}
              pause={pause}
              next={next}
              back={back}
            />
          </div>
        </>
      :
        <>
          <p className="loading">loading</p>
        </>
      }
    </div>
  );
}