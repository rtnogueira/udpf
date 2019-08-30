import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { actionsTypes as drawerActionsTypes } from '../../shared/state/redux-drawer';
import { makeStyles, useTheme } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import AppIcon from '../../images/logo_udpf.png';

const useStyles = (drawerWidth) => makeStyles((theme) => (
    {
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        logo: {
            maxWidth: 40,
            marginRight: 10,
        }
    }
));

const Navbar = (props) => {
    const drawer = useSelector(state => state.drawer);
    const dispatch = useDispatch()
    const classes = useStyles(drawer.width)();
    const theme = useTheme();

    function handleDrawerOpen() {
        dispatch({ type: drawerActionsTypes.OPEN });
    }

    function handleDrawerClose() {
        dispatch({ type: drawerActionsTypes.CLOSE });
    }

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classnames(classes.appBar, {
                    [classes.appBarShift]: drawer.open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classnames(classes.menuButton, drawer.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={AppIcon} alt="ud ponte frielas" className={classes.logo} />
                    <Typography variant="h6" noWrap>
                        U.D. Ponte Frielas
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={drawer.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button component="a" href="/" key={'Home'}>
                        <ListItemIcon>
                            <AssignmentInd />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button component="a" href="/squad" key={'Plantel'}>
                        <ListItemIcon>
                            <AssignmentInd />
                        </ListItemIcon>
                        <ListItemText primary='Plantel' />
                    </ListItem>
                    <ListItem button component="a" href="/legue" key={'Liga'}>
                        <ListItemIcon>
                            <AssignmentInd />
                        </ListItemIcon>
                        <ListItemText primary='Liga' />
                    </ListItem>
                    <ListItem button component="a" href="/announcesSquads" key={'Convocatória'}>
                        <ListItemIcon>
                            <AssignmentInd />
                        </ListItemIcon>
                        <ListItemText primary='Convocatória' />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;
