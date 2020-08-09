import React, { useState } from 'react'

export const TrackList = props => {

    const [isShowing, setIsShowing] = useState(false)

    const show = () => {
        setIsShowing(true)
    }

    const hide = () => {
        setIsShowing(false)
    }

    const toggle = () => {
        if (isShowing) {
            setIsShowing(false)
        } else {
            setIsShowing(true)
        }
    }

    return (
        <div 
            className="TrackList"
            onMouseEnter={() => { show() }}>
            <img
                className="list-icon"
                src={require('../icons/controls/list.png')}
                alt="tracklist"
                onTouchStart={() => { toggle() }}
                onTouchCancel={() => { hide() }}
            />
            { isShowing ? 
                <div className="list">
                    <ul 
                        onMouseLeave={() => { hide() }}>
                        {props.songsArray.map( ( song, index ) => <li key={index} onClick={() => {props.makePlayer(index)}}>{song.name}</li>)}
                    </ul>
                    </div>
                    : 
                    <div className="display">
                        <p onTouchStart={() => { show() }}>{ props.songsArray[props.currentTrack].name }</p>
                    </div> 
                }
        </div>
    )
}
