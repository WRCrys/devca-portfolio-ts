import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '57vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
        color: 'white',
        fontFamily: 'Nunito',
        position: 'relative',
    },
    galaxy: {
        height: 370,
    },
    content: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    message: {
        // position: 'absolute',
        // bottom: 0,
    }
}));

export default useStyles;