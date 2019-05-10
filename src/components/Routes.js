import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from './../lib/PrivateRoute';

import Home from './../containers/Home';
import Book from './../containers/Book'
import Signin from './../containers/Signin';

import NotFound from './NotFound';
import Terms from './Terms';
import Faqs from './Faqs';
import About from './About';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/book/:massageId/:calendarView" component={Book} />
    <Route path="/signin" component={Signin} />
    <Route path="/terms" component={Terms} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={Faqs} />

    <Redirect from="/old-match" to="/will-match" />
    <PrivateRoute path="/protected" component={Protected} />
    <Route component={NotFound} />
  </Switch>;


function Protected() {
  return <h3>Protected</h3>;
}
