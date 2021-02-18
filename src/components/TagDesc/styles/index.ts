import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: 5,
        marginBottom: 5,
        fontFamily: 'Nunito',
        fontSize: 18,
    },
    emoji: {
        height: 30,
        marginRight: 10,
        marginTop: -5,
    },
}));

export default useStyles;