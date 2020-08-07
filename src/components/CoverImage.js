import React from 'react'

export const CoverImage = props => {
    return (
        <div>
            <img 
                src={require(`../images/${props.fileName}.png`)}
                alt="single cover"
                style={ props.imagePosition }
            />
        </div>
    )
}
