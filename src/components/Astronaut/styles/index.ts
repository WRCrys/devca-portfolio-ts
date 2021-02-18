import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    astronaut: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 34,
        maxHeight: 630,
        maxWidth: 630,
        [theme.breakpoints.down("md")]: {
            minHeight: 470,
            top: -40
        },
        [theme.breakpoints.up("xl")]: {
            minHeight: 687,
            minWidth: 760,
        }
    },
}));

export default useStyles;