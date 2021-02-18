import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '40%',
        marginTop: 130,
        [theme.breakpoints.down("md")]: {
            marginTop: 120,
            width: '80%',
        },
        [theme.breakpoints.up("xl")]: {
            marginTop: '12%',
            width: '60%',
        },
    },
    console: {
        backgroundColor: '#262626',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 310,
        width: 500,
        [theme.breakpoints.down("md")]: {
            width: '100%',
            height: 180,
        },
        [theme.breakpoints.up("xl")]: {
            width: 700,
            height: 380,
        },

    },
    bar: {
        minHeight: 26,
        display: 'flex',
        backgroundColor: '#e1e1e1',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    groupButtons: {
        display: 'flex',
    },
    groupTitle: {
        position: 'relative',
        justifyContent: 'center',
        display: 'flex',
    },
    consoleTitle: {
        fontSize: 15,
        position: 'relative',
        top: 6,
        left: -30,
    },
    closeButton: {
        backgroundColor: '#fc605b',
        borderRadius: 10,
        position: 'relative',
        top: 5,
        left: 8,
        maxWidth: 15,
        maxHeight: 15,
        minWidth: 15,
        minHeight: 15,
    },
    minimizeButton: {
        backgroundColor: '#fdc041',
        borderRadius: 10,
        position: 'relative',
        top: 5,
        left: 12,
        maxWidth: 15,
        maxHeight: 15,
        minWidth: 15,
        minHeight: 15,
    },
    maxmizeButton: {
        backgroundColor: '#35ca4a',
        borderRadius: 10,
        position: 'relative',
        top: 5,
        left: 16,
        maxWidth: 15,
        maxHeight: 15,
        minWidth: 15,
        minHeight: 15,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    titleStyleClass: {
        color: '#BD8FFA',
        fontSize: 40,
        [theme.breakpoints.down("md")]: {
            fontSize: 25,
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: 55
        }
    },
    titleStyleWhite: {
        color: 'white'
    },
    titleStyleMethod: {
        color: '#45FC75',
    },
}));

export default useStyles;