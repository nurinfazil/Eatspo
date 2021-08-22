import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todo from './components/examples/Todo';
import Login from "./components/Login"
import NewPost from "./components/Home/NewPost"
import Home from "./components/Home/Home"
import Discover from "./components/Discover/Discover"
import Profile from "./components/Profile/Profile"
import Error from "./components/Error"

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/discover' component={Discover} />
        <Route path='/profile' component={Profile} />
        <Route path='/new-post' component={NewPost} />
        <Route path='/feed' component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;