import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Component as Home } from '../components/Home/sync';

export default () => (
  <BrowserRouter basename="">
    <switch>
      <Route path="/Home" component={Home} />
    </switch>
  </BrowserRouter>
);
