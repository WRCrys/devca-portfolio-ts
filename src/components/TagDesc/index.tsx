import React, { FC } from 'react';
import useStyles from './styles';

interface TagDescProps {
    image: string,
    text: string,
}

const TagDesc : FC<TagDescProps> = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={props.image} alt="" className={classes.emoji} />
            <span>{props.text}</span>
        </div>
    );
}

export default TagDesc;