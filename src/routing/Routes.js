import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import About from '../components/About';
import ContactUs from '../components/ContactUs'


const Routes = ()=> (
  <div className="routes">
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component = {ContactUs}/>
  </Switch>
  </div>
)

export default Routes;