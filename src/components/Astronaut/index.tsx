import { CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import rocket from '../../assets/astronaut-cute.svg'
import useStyles from './styles';

const Astronaut = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.astronaut}>
            <CardMedia component='img' image={rocket} />
        </Grid>
    );
}

export default Astronaut