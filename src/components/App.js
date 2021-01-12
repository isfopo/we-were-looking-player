import React, { useState, useEffect } from 'react';

import { songsArray } from "../songs-array.js";

import '../App.css';

import { About } from './About.js';
import { VideoPlayer } from './VideoPlayer';
import { TrackList } from './TrackList';
import { Controls } from './Controls.js';

export const App = () => { //TODO: add logo

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(songsArray[currentTrack].backgroundColor);

  useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor])

  useEffect(() => {
    setBackgroundColor(songsArray[currentTrack].backgroundColor)
  }, [currentTrack])

  const handleSetIsLoaded = (isLoaded) => {
    setIsLoaded(isLoaded);
  }

  const selectTrack = index => {
    setCurrentTrack(index);
  }

  const getReleaseDate = (track) => {
    return new Date(songsArray[track].releaseDate);
  }
  const isReleased = (track) => {
    return getReleaseDate(track).getTime() < Date.now();
  }

  const play = () => {
    setIsPlaying(true);
  }

  const pause = () => {
    setIsPlaying(false);
  }

  const next = () => {
    if ( currentTrack < songsArray.length - 1 ) {
      setCurrentTrack( currentTrack + 1 )
    } else {
      setCurrentTrack(0)
    }
  }

  const back = () => {
    if ( currentTrack > 0 ) {
      setCurrentTrack( currentTrack - 1 )
    } else {
      setCurrentTrack(songsArray.length - 1)
    }
  }
// TODO: put my spotify URI
  return ( 
    <div className="App" >
          <About 
            iconColor={ songsArray[currentTrack].iconColor }
          />
          { isReleased(currentTrack) ? 
            <VideoPlayer 
              source={ songsArray[currentTrack].fileName } 
              next={() => next()}
              isPlaying={isPlaying}
              setIsLoaded={handleSetIsLoaded}
            />
          :
            <h2 className={`unreleased ${songsArray[currentTrack].iconColor}`}>
              this song will be released {
                getReleaseDate(currentTrack).toUTCString().slice(0, 16).toLowerCase()
              }
            </h2>
          }
          <div className="bottom-bar">
            <TrackList 
              songsArray={ songsArray }
              selectTrack={ selectTrack }
              currentTrack={ currentTrack }
            />
            { isLoaded &&
              <Controls 
                isPlaying={isPlaying}
                play={play}
                pause={pause}
                next={next}
                back={back}
              />
            }
          </div>
    </div>
  );
}