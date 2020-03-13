import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from '../App';
import LanguageSelector from '../components/LanguageSelector';

const routes = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/settings",
    component: LanguageSelector,
    // routes: [
    //   {
    //     path: "/tacos/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart
    //   }
    // ]
  }
];

export default routes;