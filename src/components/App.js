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
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(songsArray[currentTrack].backgroundColor);

  useEffect(() => {
      //makePlayer(currentTrack)
      // eslint-disable-next-line
    }, []);

  useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor])

  useEffect(() => {
    setBackgroundColor(songsArray[currentTrack].backgroundColor)
  }, [currentTrack])

  const makePlayer = trackToPlay => {

  //   if ( isLoaded ) {
  //     player.current.dispose();
  //     setIsLoaded(false);
  //   }

  //   const date = new Date ()
  //   if (songsArray[currentTrack].releaseDate < date.getTime()) {
      
  //     player.current = new Player({
  //       url: `./audio/${songsArray[trackToPlay].fileName}.mp3`,
  //       autostart: true,
  //       onload: () => { setIsLoaded(true) },
  //       onstop: () => { pause() }
  //     }).toDestination();
  //     setCurrentTrack(trackToPlay)
  //     setIsPlaying(true)

  //     setIsReleased(true)
  //   }
   }

  const getReleaseDate = () => {
    const releaseDate = new Date(songsArray[currentTrack].releaseDate)
    return releaseDate.toUTCString().slice(0, 15).toLowerCase();
  }

  const play = () => {
    // player.current.start(0, pausePoint);
    // setIsPlaying(true)
  }

  const pause = () => {
    // setPausePoint(player.current.now())
    // setIsPlaying(false)
    // player.current.stop();
    // if ( player.current.now() >= songsArray[currentTrack].duration) {
    //   next();
    // }
  }

  const next = () => {
    // if ( currentTrack < songsArray.length - 1 ) {
    //   setCurrentTrack( currentTrack + 1 )
    //   makePlayer(currentTrack + 1);
    // } else {
    //   setCurrentTrack( 0 );
    //   makePlayer( 0 );
    // }
  }

  const back = () => {
    // if ( currentTrack > 0 ) {
    //   makePlayer( currentTrack - 1 );
    //   setCurrentTrack( currentTrack - 1 )
    // } else {
    //   makePlayer( songsArray.length - 1 );
    //   setCurrentTrack( songsArray.length - 1 )
    // }
  }

  return ( 
    <div className="App" >
          <About 
            iconColor={ songsArray[currentTrack].iconColor }
          />
          { true || isReleased ? 
            <VideoPlayer source={"here-is-the-world-there-is-beyond"} />
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
    </div>
  );
}