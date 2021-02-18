import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'Nunito',
        marginTop: 50,
        [theme.breakpoints.down("md")]: {
            marginTop: 70,
        },

    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
    },
    rocketHappy: {
        height: 250,
        marginLeft: '17%',
        marginTop: -50,
        transform: 'rotate(25deg)',
    },
    appleLogo: {
        height: 100,
        marginLeft: '17%',
        [theme.breakpoints.down("md")]: {
            marginTop: 200,
        }
    },
    androidLogo: {
        height: 100,
        marginLeft: '77%',
    },
}));

export default useStyles;