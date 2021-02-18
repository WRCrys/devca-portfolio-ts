import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from './styles';

interface JobRightProps {
    enterprise: string,
    started: string,
    finish: string | null,
    text: string,
    image: string,
}

const JobRight : FC<JobRightProps> = (props) => {

    const classes = useStyles();

    console.log(props);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={5} sm={5} md={5} lg={6} xl={6} className={classes.contentImage} >
                    <img src={props.image} alt="" className={classes.imageSize} />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={6} xl={6} className={classes.jobInformation}>
                    <h2 className={classes.titleEnterprise}>{props.enterprise}</h2>
                    <span className={classes.workTime}>
                        {props.started}
                        {props.finish !== null &&
                            <span> - {props.finish}</span>
                        }
                    </span>
                    <div className={classes.description}>
                        <span  >{props.text}</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default JobRight;