import React from 'react'

import { Links } from './Links.js';
import { ArtistImage } from './ArtistImage';

export const About = props => {
    return (
        <div className="About">
            <div className="symbols">
                <img
                    src={`../../public/icons/${props.iconColor}/symbols/sound.png`} />
                <img 
                    src={`../../public/icons/${props.iconColor}/symbols/shape.png`} />
                <img 
                    src={`../../public/icons/${props.iconColor}/symbols/place.png`} />
                <img 
                    src={`../../public/icons/${props.iconColor}/symbols/memory.png`} />
            </div>
            <img 
                src="../images/artistImage.png" />
        </div>
    )
}
