import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import themeFile from './theme/theme';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { NavBar } from './modules/nav-bar';
import { BottomNav } from './modules/bottom-nav';
import { Home } from './pages/home';
import { Squad } from './pages/squad';

const theme = createTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/squad" component={Squad} />
              <Route path="/legue" component={Squad} />
              <Route path="/announcesSquads" component={Squad} />
            </Switch>
          </div>
          <BottomNav />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;