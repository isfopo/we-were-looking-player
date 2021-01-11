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
    const { source } = props;
    const playerRef = useRef();



    return (
        <div data-vjs-player>
            <ReactPlayer url={`./video/${source}.mp4`} playing="true" />
        </div>
    );
}