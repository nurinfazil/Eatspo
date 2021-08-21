import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todo from './components/examples/Todo';
import Login from "./components/Login"
import Error from "./components/Error"

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Login} />
        <Route component={Error} />

      </Switch>
    </main>
    // <div className="App">
    //   <Todo />
    // </div>
  );
}

export default App;