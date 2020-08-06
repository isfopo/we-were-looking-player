import React from 'react'

export const Controls = props => {
    return (
        <div className="Controls">
            <img onClick={() => {props.back()}}
                src={require(`../icons/controls/back.png`)}
                alt="back"
            />
            { props.isPlaying ?
                <>
                    <img onClick={() => {props.stop()}}
                        src={require(`../icons/controls/pause.png`)}
                        alt="stop"
                    />
                </>
                :
                <>
                    <img onClick={() => {props.play()}}
                        src={require(`../icons/controls/play.png`)}
                        alt="play"
                    />
                </>
            }
            <img onClick={() => {props.next()}}
                src={require(`../icons/controls/next.png`)}
                alt="next"
            />
        </div>
    )
}
