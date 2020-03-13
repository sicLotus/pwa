import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import ShoppingList from './components/ShoppingList';
import routes from './routes/routes'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import withInitialSetupScreen from './routes/withInitialSetupScreen'

import { slide as Menu } from 'react-burger-menu'

  function showSettings (event) {
    event.preventDefault();
  }


// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
  
function App() {
 const { t, i18n } = useTranslation();
        // <Route path="/main"><ShoppingList /></Route>
    return (
      <Router>
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>

      <div>
              <h1>{t('Language')}</h1>
         <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div> 
      </Router>
    );
}

export default withInitialSetupScreen(App);