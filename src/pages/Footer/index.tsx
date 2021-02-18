import React from 'react';
import useStyles from './styles';
import reactLogo from './assets/react-logo.svg';

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ display: 'contents' }}>
            <h3 className={classes.textStyle}>Crystyano Almeida</h3>
            <h3 className={classes.textStyle}>-</h3>
                <h3 className={classes.textStyle}>Desenvolvido em</h3>
                <div style={{ display: 'inline' }}>
                    <img src={reactLogo} alt='react' className={classes.imageFooter} />
                </div>
            </div>
        </div>
    );
}

export default Footer;