import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Home} from './Components/Home'
import {TourneyInfo} from './Components/TourneyInfo'
import {TeamInfo} from './Components/TeamInfo'
import {Navigation} from './Components/Navigation'
import { UmpireInfo } from './Components/UmpireInfo';
import { About } from './Components/About';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
    <div className="container"> 
  
    <h1> Tourney Genie</h1>

    <Navigation/> 

    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/TourneyInfo' component={TourneyInfo} exact/>
      <Route path='/TeamInfo' component={TeamInfo} exact/>
      <Route path='/UmpireInfo' component={UmpireInfo} exact/>
      <Route path='/About' component={About} exact/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
