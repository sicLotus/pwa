import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import withInitialSetupScreen from './routes/withInitialSetupScreen'

function ShoppingList () {
       return (
            <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagramm</li>
          <li>Whatsapp</li>
          <li>Oculus</li>
        </ul>
      </div>
        );
}


function App() {
 const { t, i18n } = useTranslation();
        // <Route path="/main"><ShoppingList /></Route>
    return (
        <h1>{t("Language")}</h1>
    );
}

export default withInitialSetupScreen(App);