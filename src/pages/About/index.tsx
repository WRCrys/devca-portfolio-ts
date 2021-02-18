import React from 'react';
import { Avatar } from '@material-ui/core';
import useStyles from './styles';
import TagDesc from '../../components/TagDesc';

//Page Images
import me from './assets/me.png';
import xbox from './assets/xbox.png';
import code from './assets/code.png';
import hacking from './assets/anonymous.svg';
import development from './assets/development.png';
import basketball from './assets/basketball.png';
import astronautHoldingCupCoffe from './assets/astronaut-holding-cup-coffe.svg';
import csharp from './assets/csharp-logo.svg';
import react from './assets/react-logo.svg';
import sqlserver from './assets/sql-server.svg';
import git from './assets/git.svg';
import torontoRaptors from './assets/toronto-raptors.png';

const About = () => {

  const classes = useStyles();
  const [crystyano] = React.useState({
    name: 'Crystyano Almeida',
    subtitle: 'Desenvolvedor FullStack',
    tags: [
      {
        id: 1,
        icon: code,
        text: 'Desenvolvedor Front-End e Back-End.',
      },
      {
        id: 2,
        icon: hacking,
        text: 'Amante de tecnologia e segurança da informação.',
      },
      {
        id: 3,
        icon: development,
        text: 'Aspirante a arquiteto de software.',
      },
      {
        id: 4,
        icon: xbox,
        text: 'Apaixonado por jogos.',
      },
      {
        id: 5,
        icon: basketball,
        text: 'Amante de basquete.',
      },
      {
        id: 6,
        icon: torontoRaptors,
        text: '#WeTheNorth',
      },
    ],
    description: 'Venho desde 2017 desenvolvendo novas soluções. Nesse meio tempo já desenvolvi Apps para Android, sistemas Web, desktop e hoje em várias linguaguens de programação. Hoje solidifico e aprimoro meus conhecimentos em C# usando desde um MVC até uma API Rest, React JS usando o próprio JavaScript e até mesmo TypeScript para desenvolver os SPA das aplicações.',
  });

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Sobre Mim</h2>
      <div className={classes.content}>
        <div className={classes.contentImageProfile}>
          <Avatar alt="me" src={me} className={classes.imageProfile} />
          <div className={classes.apresetation}>
            <span>
              {crystyano.name}
            </span>
            <span>
              {crystyano.subtitle}
            </span>
            <div style={{ display: 'inline' }}>
              <img src={csharp} alt="" style={{ height: 35 }} />
              <img src={react} alt="" style={{ height: 35 }} />
              <img src={sqlserver} alt="" style={{ height: 35 }} />
              <img src={git} alt="" style={{ height: 35 }} />
            </div>
            <img src={astronautHoldingCupCoffe} alt="" className={classes.astronaut} />
          </div>
        </div>
        <div className={classes.contentDescriptionProfile}>
          <div className={classes.contentDescriptionTags}>
            {crystyano.tags.map((tag) => (
              <TagDesc key={tag.id} image={tag.icon} text={tag.text} />
            ))}
          </div>
          <div className={classes.descriptionText}>
            <p>
              {crystyano.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;