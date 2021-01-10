import React, { useState, useEffect, useRef } from 'react';
import videojs from 'video.js';


export const  VideoPlayer = (props) => {
    const { source } = props;
    const playerRef = useRef();

    //const [options, setOptions] = useState();

    useEffect(() => {
        const player = videojs(playerRef.current, { autoplay: true, controls: false }, () => {
            player.src(source);
        });

        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div>
            <video ref={playerRef} className="video" autoplay playsInline />
        </div>
    );
}