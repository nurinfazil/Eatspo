import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todo from './components/examples/Todo';
import Login from "./components/Login"
import Home from "./components/Home/Home"
import Error from "./components/Error"

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Login} />
        <Route path='/feed' component={Home} />
        <Route component={Error} />

      </Switch>
    </main>
    // <div className="App">
    //   <Todo />
    // </div>
  );
}

export default App;