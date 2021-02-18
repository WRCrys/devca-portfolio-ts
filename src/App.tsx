import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Routes from './routes';

const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: '550vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Routes />
    </div>
  );
}

export default App;
