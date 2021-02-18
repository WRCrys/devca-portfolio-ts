import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';
import menuHome from './assets/menu-home.png';
import menuMe from './assets/menu-me.png';
import menuWork from './assets/menu-work.png';
import menuCode from './assets/menu-code.png';
import { useHistory } from 'react-router';

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        right: false,
        top: false,
    });

    const [menu] = React.useState(
        {
            itemMenu: [
                {
                    id: 1,
                    name: 'Início',
                    icon: menuHome,
                    route: '/',
                },
                {
                    id: 2,
                    name: 'Sobre Mim',
                    icon: menuMe,
                    route: '/about',
                },
                {
                    id: 3,
                    name: 'Experiência',
                    icon: menuWork,
                    route: '/experience',
                },
                {
                    id: 4,
                    name: 'Projetos',
                    icon: menuCode,
                    route: '/projects',
                },
            ]
        }
    );

    const history = useHistory();

    const changePage = (route:string) => {
        history.push(route);
    }

    type Anchor = 'right' | 'top';

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top'
        })}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
        >
            <List>
                {menu.itemMenu.map((menu) => (
                    <ListItem key={menu.id} button onClick={() => { changePage(menu.route) }}>
                        <ListItemIcon>
                            <img src={menu.icon} alt={menu.name} className={classes.iconMenu} />
                        </ListItemIcon>
                        <ListItemText primary={menu.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: '#000' }} >
                <Toolbar>
                    <h1 className={classes.title}>
                        Crystyano
                        <span className={classes.titleStyle}>
                            Almeida
                        </span>
                    </h1>
                    <div>
                        {isMobile ? (
                            <div>
                                {(['right'] as Anchor[]).map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <IconButton
                                            edge='start'
                                            className={classes.menuButton}
                                            color='inherit'
                                            aria-label='menu'
                                            onClick={toggleDrawer(anchor, true)}>
                                            <MenuIcon  />
                                        </IconButton>
                                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                                <div className={classes.buttonStyle}>
                                    {menu.itemMenu.map((menu) => (
                                        <Button onClick={() => { changePage(menu.route) }} color='secondary' key={menu.id}>{menu.name}</Button>
                                    ))}
                                </div>
                            )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;