import React, { useState, useRef, useEffect } from 'react';
import { Player } from 'tone';

import { songsArray } from "../songs-array.js";

import '../App.css';
import { About } from './About.js';
import { CoverImage } from './CoverImage'
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

  useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor])

  useEffect(() => {
    setBackgroundColor(songsArray[currentTrack].backgroundColor)
  }, [currentTrack])

  const makePlayer = currentTrack => {

    if ( isLoaded ) {
      player.current.dispose();
      setIsLoaded(false);
    }
    
    player.current = new Player({
      url: `./audio/${songsArray[currentTrack].fileName}.mp3`,
      autostart: true,
      onload: () => { setIsLoaded(true) },
      onstop: () => { pause() }
    }).toDestination();
    setIsPlaying(true)
  }

  const play = () => {
    player.current.start(0, pausePoint);
    setIsPlaying(true)
  }

  const pause = () => {
    let now = player.current.now();
    setPausePoint(now)
    setIsPlaying(false)
    player.current.stop();
    if ( now >= songsArray[currentTrack].duration) {
      next();
    }
  }

  const next = () => {
    if ( currentTrack < maxTracks ) {
      setCurrentTrack( currentTrack + 1 )
    } else {
      setCurrentTrack( 0 )
    }
    makePlayer(currentTrack);
  }

  const back = () => {
    if ( currentTrack > 0 ) {
      setCurrentTrack( currentTrack - 1 )
    } else {
      setCurrentTrack( maxTracks )
    }
    makePlayer(currentTrack);
  }

  return ( 
    <div className="App" >
      { isLoaded ?
        <>
          <About 
            iconColor={ songsArray[currentTrack].iconColor }
          />
          <CoverImage 
            fileName={ songsArray[currentTrack].fileName }
            imagePosition={songsArray[currentTrack].imagePosition}
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
          <p className="loading">loading...</p>
        </>
      }
    </div>
  );
}