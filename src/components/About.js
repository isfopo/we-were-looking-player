import React from 'react'

import { Links } from './Links.js';
import { Symbol } from './Symbol.js';
import artistImage from "../images/artistImage.png";

export const About = props => {
    return (
        <div className="About">
            <div className="symbols">
                <img
                    src={`./public/icons/${props.iconColor}/symbols/sound.png`} 
                    alt="sound icon"    
                />
                <img 
                    src={`./public/icons/${props.iconColor}/symbols/shape.png`} 
                    alt="shape icon"  
                />
                <img 
                    src={`./public/icons/${props.iconColor}/symbols/place.png`} 
                    alt="place icon"  
                />
                <img 
                    src={`./public/icons/${props.iconColor}/symbols/memory.png`} 
                    alt="memory icon"  
                />
            </div>
            <img 
                src={artistImage} />
        </div>
    )
}
