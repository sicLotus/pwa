import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import ShoppingList from './components/ShoppingList';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import withInitialSetupScreen from './routes/withInitialSetupScreen'


function App() {
 const { t, i18n } = useTranslation();
        // <Route path="/main"><ShoppingList /></Route>
    return (
      <div>
        <h1>{t('Language')}</h1>
        <ShoppingList name="me"/>
      </div> 
    );
}

export default withInitialSetupScreen(App);