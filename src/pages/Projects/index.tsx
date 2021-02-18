import React from 'react';
import { Grid } from '@material-ui/core';
import ItemProject from '../../components/ItemProject';
import useStyles from './styles';

const Projects = () => {

    const classes = useStyles();
    const [project] = React.useState(
        {
            code: [
                {
                    title: 'Arena Lobo',
                    description: 'Desenvolvido em C# com React, a solução contempla gerenciar vendas e estoque de um bar.',
                },
            ],
        }
    );

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h2 style={{ fontSize: 50 }}>Projetos</h2>
            </div>
            <Grid container spacing={3}>
                {project.code.map((p) => (
                    <ItemProject
                    key={p.title}
                    title={p.title}
                    description={p.description} />
                ))}
            </Grid>
        </div>
    );
}

export default Projects;