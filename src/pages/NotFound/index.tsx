import React from 'react';
import useStyles from './styles';
import galaxy from './assets/galaxy.png';

const NotFound = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={galaxy} alt='' className={classes.galaxy} />
            <div className={classes.content}>
                <h1 className={classes.message}>
                    Ops!! Você entrou em uma galáxia desconhecida.
                </h1>
            </div>
        </div>
    );
}

export default NotFound;