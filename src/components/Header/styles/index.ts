import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Nunito',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
        color: '#fff',
    },
    titleStyle: {
        marginLeft: theme.spacing(1),
        color: '#ff3333',
    },
    appBarWapper: {
        width: '80%',
        margin: '0 auto',
    },
    buttonStyle: {
        '& > *': {
            margin: theme.spacing(1),
            fontFamily: 'Nunito',
            fontSize: 18,
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    iconMenu: {
        height: 40,
    },
}));

export default useStyles;