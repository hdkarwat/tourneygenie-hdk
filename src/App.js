import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Home} from './Components/Home'
import {TourneyInfo} from './Components/TourneyInfo'
import {TeamInfo} from './Components/TeamInfo'

import Button from 'react-bootstrap/Button'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
    <div className="container"> 
    <Button variant='primary'> Bootstrap Button</Button>

    <h3 className="m-3 d-flex justify-content-center"> Tourney Genie</h3>

    <h5 className="m-3 d-flex justify-content-center"> Pocket Tournament Director </h5>



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
