import React, { useState } from 'react'

export const TrackList = props => {

    const [isShowing, setIsShowing] = useState(false)

    const show = () => {
        setIsShowing(true)
    }

    const hide = () => {
        setIsShowing(false)
    }

    return (
        <div>
            <ul 
                onMouseEnter={() => { show() }}
                onMouseLeave={() => { hide() }}
                >
                { isShowing ? 
                    props.songsArray.map( ( song, index ) => <li key={index} onClick={() => {props.makePlayer(index)}}>{song.name}</li>)
                    : 
                    <>
                        <li>{ props.songsArray[props.currentTrack].name }</li>
                    </>
                     
                }
            </ul>
        </div>
    )
}
