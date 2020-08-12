import React from 'react'

export const SpotifyButton = props => {
    return (
        <div className="SpotifyButton">
            <iframe 
                title="spotifyButton"
                src={`https://open.spotify.com/follow/1/?uri=spotify:artist:6sFIWsNpZYqfjUpaCgueju&size=basic&theme=${props.iconColor}&show-count=0`}
                width="200" 
                height="25" 
                scrolling="no" 
                frameBorder="0" 
                style={{border:"none", overflow:"hidden"}}
                allowtransparency="true">
            </iframe>
        </div>
    )
}
