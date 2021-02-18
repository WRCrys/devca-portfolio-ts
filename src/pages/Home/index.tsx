import React from 'react';
import About from '../About';
import Experience from '../Experience';
import Intro from '../Intro';
import Projects from '../Projects';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minHeight: '550vh',
//         backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
//         //paddingTop: 100,
//     }
// }));

const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Experience />
            <Projects />
        </div>
    );
}

export default Home;