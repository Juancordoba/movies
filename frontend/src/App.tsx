import React, { Component, useEffect, useState } from 'react';
import './App.css';
import './index.scss';

import {BrowserRouter as Router, Route, Redirect  , Switch} from 'react-router-dom'

import Navigation from './components/shared/Navigation';
import Movies from './components/pages/Movies'
import UploadCSV from './components/pages/UploadCSV';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn'

function App() {
  const [token,setToken] = useState(""); 

  useEffect(() => {
    const t:string | null = localStorage.getItem('token');
    t? setToken(t) : setToken("")
  }, [])

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/upload" component={UploadCSV} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
