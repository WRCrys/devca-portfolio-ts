import React from 'react';
import Console from '../../components/Console';
import useStyles from './styles';
import Astronaut from '../../components/Astronaut';

const Intro = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Console />
      <Astronaut />
    </div>
  );
}

export default Intro