import React, { useState } from 'react'

import artistImage from "../images/artistImage.png";

export const About = props => {

    const { iconColor } = props;

    const [isShowing, setIsShowing] = useState(false)

    const show = () => {
        setIsShowing(true)
    }

    const hide = () => {
        setIsShowing(false)
    }

    return (
        <div className="About" onMouseLeave={() => {hide()}}>
            <img onMouseEnter={() => {show()}}
                src={require(`../icons/${iconColor}/symbols/sound.png`)} 
                alt="sound icon"  
            /> 
        { isShowing ?
            <>
                <img 
                    src={require(`../icons/${iconColor}/symbols/shape.png`)} 
                    alt="shape icon"  
                />
                <img 
                    src={require(`../icons/${iconColor}/symbols/place.png`)} 
                    alt="place icon"  
                />
                <img 
                    src={require(`../icons/${iconColor}/symbols/memory.png`)} 
                    alt="memory icon"  
                />
            <h1 
                className={`bio ${iconColor}`}
            >
                sound // shape // place // memory
            </h1>
            <img className="artistImage"
                src={artistImage} 
                alt="Isaac Poole"
            />
                <div className="links">
                    <a href="mailto isaacpoolemusic@gmail.com">
                        <img
                            src={require(`../icons/${iconColor}/links/email.png`)} 
                            alt="email"  
                        />
                    </a>
                    <a href="https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={require(`../icons/${iconColor}/links/spotify.png`)} 
                            alt="spotify"  
                        />
                    </a>
                    <a href="https://theseelementscombined.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={require(`../icons/${iconColor}/links/bandcamp.png`)} 
                            alt="bandcamp"  
                        />
                    </a>
                    <a href="https://www.instagram.com/theselmntscmbnd/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={require(`../icons/${iconColor}/links/instagram.png`)} 
                            alt="instagram"  
                        />
                    </a> 
                </div>
            </> : <></>
            }
        </div>
    )
}
