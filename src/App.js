import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Home} from './Components/Home'
import {TourneyInfo} from './Components/TourneyInfo'
import {TeamInfo} from './Components/TeamInfo'
import {Navigation} from './Components/Navigation'

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
    <div className="container"> 
  
    <h1 className="m-3 d-flex justify-content-center"> Tourney Genie</h1>

    <p className="m-3 d-flex justify-content-center"> The Pocket Tournament Director</p>

    <Navigation/> 

    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/TourneyInfo' component={TourneyInfo} exact/>
      <Route path='/TeamInfo' component={TeamInfo} exact/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
