import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }

    },
    contentParallax: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1
    },
    parallaxCsharp: {
        position: 'absolute',
        left: 660,
        top: 300,
    },
    csharpLogo: {
        width: 90,
        //marginTop: 100,
        [theme.breakpoints.down("md")]: {
            width: '16%',
            marginTop: 35,
            marginLeft: 100,
        },
        [theme.breakpoints.up("xl")]: {
            marginLeft: '56%',
            //marginTop: 60,
        }
    },
    parallaxReact: {
        position: 'absolute',
        top: 200,
        left: 70,
    },
    reactLogo: {
        width: 70,
        marginLeft: 35,
        //marginTop: -45,
        [theme.breakpoints.down("md")]: {
            width: '12%',
        }
    },
    parallaxDocker: {
        position: 'absolute',
        top: 120,
        right: 30,
    },
    dockerLogo: {
        width: 80,
        [theme.breakpoints.down("md")]: {
            width: 50,
            //marginLeft: 240,
            marginTop: 270,
        }
    }
}));

export default useStyles;