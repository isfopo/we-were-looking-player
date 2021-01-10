import React, { useState, useEffect, useRef } from 'react';
import videojs from 'video.js';


export const  VideoPlayer = (props) => {
    const { source } = props;
    const playerRef = useRef();

    //const [options, setOptions] = useState();

    useEffect(() => {
        const player = videojs(playerRef.current, { autoplay: true, controls: false }, () => {
            player.play();
        });

        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div data-vjs-player>
            <video ref={playerRef} className="video" style={{pointerEvents: "none"}} autoplay playsInline>
                <source src={`./video/${source}.mp4`} type="video/mp4" />
            </video>
        </div>
    );
}