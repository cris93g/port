import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
export default (
  <Switch>
    <Route component={Home} exact path='/' />
    <Route component={Projects}  path='/projects' />
    <Route component={Contact}  path='/contact' />
    <Route component={About}  path='/about' />
  </Switch>
);