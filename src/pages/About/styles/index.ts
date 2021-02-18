import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        [theme.breakpoints.down("lg")]: {
            marginTop: 50,
        }

    },
    title: {
        fontFamily: 'Nunito',
        fontSize: 50,
    },
    content: {
        backgroundColor: '#3385ff',
        width: '65%',
        height: 550,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        [theme.breakpoints.down("md")]: {
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
        }
    },
    contentImageProfile: {
        display: 'flex',
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    contentDescriptionProfile: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Nunito',
        fontSize: 18,
    },
    contentDescriptionTags: {
        display: 'flex',
        padding: 10,
        margin: 20,
        flexDirection: 'column',
    },
    descriptionText: {
        marginLeft: 32,
        marginRight: 'auto',
    },
    imageProfile: {
        width: '200px !important',
        height: '200px !important',
        [theme.breakpoints.down("md")]: {
            width: '100px !important',
            height: '100px !important',
        }
    },
    earth: {
        width: '17%',
        marginLeft: '5%',
        [theme.breakpoints.down("md")]: {
            width: '24%',
            marginTop: 110,
        },
        [theme.breakpoints.up("xl")]: {
            width: '15%',
            marginTop: -248,
            marginLeft: 160,
        }
    },
    moon: {
        width: '9%',
        marginLeft: '75%',
        marginTop: -80,
        [theme.breakpoints.down("md")]: {
            width: '15%',
            marginTop: 70,
        },
    },
    jsLogo: {
        marginLeft: '85%',
        [theme.breakpoints.down("md")]: {
            marginLeft: '84%',
            width: '15%'
        }
    },
    vscodeLogo: {
        marginLeft: '7%',
        [theme.breakpoints.down("md")]: {
            marginLeft: '2%',
            width: '15%'
        }
    },
    apresetation: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Nunito',
        fontSize: 18,
        margin: 'auto',
    },
    astronaut: {
        height: 250,
        marginTop: -20,
    }
}));

export default useStyles;