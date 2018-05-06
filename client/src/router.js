import React, {Component} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import Header from './components/header/Header';
import APP from './components/App';
import Tutor from './components/tutor/Tutor'

 class Router extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/tutor' component={Tutor}/>
          <Route path='/' component={APP}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
