import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

const config = {
    file: {
        forceVideo: "true",
        attributes: {
            autoplay: "true"
        }
    }
}
export const  VideoPlayer = (props) => {
    const { source, isPlaying } = props;
    return (
        <div className="player">
            <ReactPlayer url={`./video/${source}.mp4`} playing={isPlaying} />
        </div>
    );
}