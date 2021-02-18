import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 200,
        color: 'white',
        fontFamily: 'Nunito',
    },
    imageFooter: {
        height: 40,
        animation: `$spin infinite 10s linear`,
    },
    textStyle: {
        display: 'inline',
        marginRight: theme.spacing(1),
    },
    '@keyframes spin': {
        'from': {
            transform: 'rotate(0deg)',
        },
        'to': {
            transform: 'rotate(360deg)',
        }
    }
}));

export default useStyles;