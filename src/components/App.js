import React, { useState, useRef, useEffect } from 'react';
import videojs from 'video.js';

import { songsArray } from "../songs-array.js";

import '../App.css';

import { About } from './About.js';
import { VideoPlayer } from './VideoPlayer';
import { SpotifyButton } from './SpotifyButton';
import { TrackList } from './TrackList';
import { Controls } from './Controls.js';

export const App = () => {

  const [currentTrack, setCurrentTrack] = useState(0);
  const [pausePoint, setPausePoint] = useState(0);
  const [isReleased, setIsReleased] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(songsArray[currentTrack].backgroundColor);

  useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor])

  useEffect(() => {
    setBackgroundColor(songsArray[currentTrack].backgroundColor)
  }, [currentTrack])

  const selectTrack = index => {
    setCurrentTrack(index);
  }

  const getReleaseDate = () => {
    const releaseDate = new Date(songsArray[currentTrack].releaseDate)
    return releaseDate.toUTCString().slice(0, 15).toLowerCase();
  }

  const play = () => {
    setIsPlaying(true);
  }

  const pause = () => {
    setIsPlaying(false);
  }

  const next = () => {
  }

  const back = () => {
  }

  return ( 
    <div className="App" >
          <About 
            iconColor={ songsArray[currentTrack].iconColor }
          />
          { true || isReleased ? 
            <VideoPlayer source={ songsArray[currentTrack].fileName } isPlaying={isPlaying} />
          :
            <h2 className="unreleased">
              this song will be released {
                getReleaseDate()
              }
            </h2>
          }
          <SpotifyButton 
            iconColor={ songsArray[currentTrack].iconColor }
          />
          <div className="bottom-bar">
            <TrackList 
              songsArray={ songsArray }
              selectTrack={ selectTrack }
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
    </div>
  );
}