import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppIcon from '../../images/logo_udpf.png';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        maxWidth: 80,
    },
  });

const Home = () => {
    const styles = useStyles();
    const [value, setValue] = React.useState(2);

    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return (
        <React.Fragment>
            <Container fixed className={styles.root}>
                <Typography variant="h5" component="h1">
                    Benjamins - Sub 9
                </Typography>
            </Container>
            <Tabs
                value={value}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Geral" />
                <Tab label="Notícias" />
                <Tab label="Jogos" />
                <Tab label="Tabela" />
            </Tabs>
        </React.Fragment>
    )
}

export default Home;
