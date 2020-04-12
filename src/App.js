import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shell from './components/Shell';

import Topnav from './components/Topnav';
import Intro from './pages/Intro';
import Tech from './pages/Tech';
import Projects from './pages/Projects';
import Personal from './pages/Personal';
import Connect from './pages/Connect';
import Success from './pages/Success';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Topnav />
        <Switch>
          <Route exact path="/" component={Shell(Intro)}></Route>
          <Route path="/tech" exact component={Shell(Tech)}></Route>
          <Route path="/projects" exact component={Shell(Projects)}></Route>
          <Route path="/personal" exact component={Shell(Personal)}></Route>
          <Route path="/connect" exact component={Shell(Connect)}></Route>
          <Route path="/connect/success" exact component={Shell(Success)}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    )
  }
}

