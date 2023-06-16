import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import './sass/app.scss';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import App from './App';
import AuthLayout from './AuthLayout/login';
import ULayout from './ULayout/Index';
import ILayout from './ILayout/Index';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/institute'>
          <ILayout />
        </Route>
        <Route exact path='/user' >
          <ULayout />
        </Route>
        <Route >
          <AuthLayout />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
