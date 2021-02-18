import React from 'react';

const FloatImage = (props:any) => {
    return (
        <div className={props.style}>
            <img src={props.src} alt={props.alt} className={props.imageStyle} />
        </div>
    );
}

export default FloatImage;