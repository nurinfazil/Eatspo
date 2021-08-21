import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todo from './components/examples/Todo';
import Login from "./components/Login"
import Home from "./components/Home/Home"
import Error from "./components/Error"

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/feed' component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;