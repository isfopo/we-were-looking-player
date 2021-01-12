import React from 'react';
import ReactPlayer from 'react-player';

export const  VideoPlayer = (props) => {
    const { source, isPlaying, setIsLoaded, next } = props;

    return (
        <div className="player">
            <ReactPlayer 
                url={`./video/${source}.mp4`} 
                playing={isPlaying}
                onReady={setIsLoaded}
                onEnded={() => next()}
                width='100%'
                height='100%'
            />
        </div>
    );
}