import React, { useState } from 'react'

import artistImage from "../images/artistImage.png";

export const About = props => {

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
                src={require(`../icons/${props.iconColor}/symbols/sound.png`)} 
                alt="sound icon"  
            /> 
        { isShowing ?
            <>
                <img 
                    src={require(`../icons/${props.iconColor}/symbols/shape.png`)} 
                    alt="shape icon"  
                />
                <img 
                    src={require(`../icons/${props.iconColor}/symbols/place.png`)} 
                    alt="place icon"  
                />
                <img 
                    src={require(`../icons/${props.iconColor}/symbols/memory.png`)} 
                    alt="memory icon"  
                />
            <h1 
                style={ props.iconColor === "dark" ? {color: "#000000" } : {color: "#FFFFFF"}} 
                className="bio"
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
                            src={require(`../icons/${props.iconColor}/links/email.png`)} 
                            alt="email"  
                        />
                    </a>
                    <a href="https://soundcloud.com/these-elements-combined" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={require(`../icons/${props.iconColor}/links/soundcloud.png`)} 
                            alt="soundcloud"  
                        />
                    </a>
                    <a href="https://theseelementscombined.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={require(`../icons/${props.iconColor}/links/bandcamp.png`)} 
                            alt="bandcamp"  
                        />
                    </a>
                    <a href="https://www.instagram.com/theseelementscombined" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={require(`../icons/${props.iconColor}/links/instagram.png`)} 
                            alt="instagram"  
                        />
                    </a> 
                </div>
            </> : <></>
            }
        </div>
    )
}
