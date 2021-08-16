import { useEffect, useState } from 'react';
import './App.css';
//import './index.scss';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navigation from './components/shared/Navigation';
import Movies from './components/pages/Movies'
import UploadCSV from './components/pages/UploadCSV';
import SignIn from './components/pages/SignIn'
import Form from './components/pages/Movies/Form'

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
        <Route exact path="/upload" component={UploadCSV} />
        <Route exact path="/movies/:title" component={Form} />
        <Route exact path="/movies/add" component={Form} />
        <Route exact path="/" component={Movies} />
      </Switch>
    </Router>
  );
}

export default App;
