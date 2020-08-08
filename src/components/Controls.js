import React from 'react'

export const Controls = props => {
    return (
        <div className="Controls">
            <img 
                className="backNext"
                onClick={() => {props.back()}}
                src={require(`../icons/controls/back.png`)}
                alt="back"
            />
            { props.isPlaying ?
                <>
                    <img onClick={() => {props.pause()}}
                        src={require(`../icons/controls/pause.png`)}
                        alt="pause"
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
            <img 
                className="backNext"
                onClick={() => {props.next()}}
                src={require(`../icons/controls/next.png`)}
                alt="next"
            />
        </div>
    )
}
