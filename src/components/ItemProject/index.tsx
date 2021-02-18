import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import AstronautCoding from '../../assets/astronaut_listening_music_with_laptop.jpg'
import useStyles from './styles';
import csharp from './assets/csharp-logo.svg';
import reactLogo from './assets/react-logo.svg';
import androidLogo from './assets/android-logo.svg';
import { FC } from 'react';

interface ItemProjectProps {
    title: string,
    description: string,
}

const ItemProject : FC<ItemProjectProps> = (props) => {

    const classes = useStyles();
    const [stack] = React.useState({
        tech: [
            {
                id: 1,
                name: 'csharp',
                image: csharp,
            },
            {
                id: 2,
                name: 'react',
                image: reactLogo,
            },
            {
                id: 3,
                name: 'android',
                image: androidLogo,
            },
        ],
    });

    return (
        <Grid item sm={12} md={12} lg={3} xl={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt=""
                        height="260"
                        image={AstronautCoding}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.customFont}>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.customFont}>
                            {props.description}
                        </Typography>
                        <Typography variant='inherit' component='h4' className={classes.customFont}>
                            Desenvolvido em:
                        </Typography>
                        <div style={{ display: 'inline' }}>
                            {stack.tech.map((t) => <img key={t.id} src={t.image} alt={t.name} style={{ height: 40 }} />)}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Grid>
    );
}

export default ItemProject;