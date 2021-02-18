import React from 'react';
import JobRight from '../../components/JobRight';
import JobLeft from '../../components/JobLeft';
import useStyles from './styles';
import catHugEarth from './assets/cat-hug-earth.svg';
import astronautMoon from './assets/astronaut-moon.svg';
import alien from './assets/alien.svg';
import spaceshipPlane from './assets/spaceship-plane.svg';

const Experience = () => {

    const classes = useStyles();
    const [job] = React.useState({
        jobs: [
            {
                id: 1,
                image: catHugEarth,
                enterprise: 'Pague Menos',
                started: '14/Dez/2020',
                finish: null,
                text: 'Desenvolvimento de software usando C# com React e manutanção em VB VBNet e C#.',
                side: 'right'
            },
            {
                id: 2,
                image: astronautMoon,
                enterprise: 'Wipro - IVIA',
                started: '24/Jun/2019',
                finish: '11/Dez/2020',
                text: 'Manutenção de softawares usando VB, VBNet, C# e React. Correção de bug e pequenas melhorias.',
                side: 'left'
            },
            {
                id: 3,
                image: alien,
                enterprise: 'Prolins',
                started: '01/Mar/2019',
                finish: '22/Jun/2019',
                text: 'Desenvolvimento de apps mobile híbridos usando Ionic.',
                side: 'right'
            },
            {
                id: 4,
                image: spaceshipPlane,
                enterprise: 'AGBTEC',
                started: '01/Jan/2018',
                finish: '28/Abr/2018',
                text: 'Desenvolvimento de apps Android usando Java.',
                side: 'left'
            },
        ]
    });

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.title}>
                    <h2 style={{ fontSize: 50 }}>Experiência</h2>
                </div>
                <div>
                    {job.jobs.map((j) => (
                        j.side === 'right' ?
                            <JobRight
                                key={j.id}
                                image={j.image}
                                enterprise={j.enterprise}
                                started={j.started}
                                finish={j.finish}
                                text={j.text} />
                            :
                            <JobLeft
                                key={j.id}
                                image={j.image}
                                enterprise={j.enterprise}
                                started={j.started}
                                finish={j.finish}
                                text={j.text} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Experience;