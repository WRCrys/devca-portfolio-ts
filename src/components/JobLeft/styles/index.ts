
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Nunito',
        fontSize: 14,
        color: 'white',
        margin: 'auto',
        textAlign: 'right',
    },
    contentImage: {
        display: 'flex',
    },
    imageSize: {
        height: 300,
        [theme.breakpoints.down("md")]: {
            height: 150,
        },
    },
    jobInformation: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Nunito',
        flexDirection: 'column',

    },titleEnterprise: {
        fontSize: 35,
        [theme.breakpoints.down("md")]: {
            fontSize: 22,
        }
    },
    workTime: {
        marginTop: -17,
        fontSize: 22,
        [theme.breakpoints.down("md")]: {
            fontSize: 12,
        },
    },
    description: {
        whiteSpace: 'normal', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        marginLeft: 20,
        [theme.breakpoints.down("md")]: {
            fontSize: 12,
        },
    }
}));

export default useStyles;