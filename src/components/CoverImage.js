import React from 'react'

export const CoverImage = props => {
    return (
        <div className="CoverImage">
            <img 
                src={require(`../images/${props.fileName}.png`)}
                alt="single cover"
                style={ props.imagePosition }
            />
        </div>
    )
}
