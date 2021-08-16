import { useEffect, useState } from 'react';
import './App.css';
import { setMovies,countMovies } from './redux/actions';

import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom'

import Navigation from './components/shared/Navigation';
import Movies from './components/pages/Movies'
import UploadCSV from './components/pages/UploadCSV';
import SignIn from './components/pages/SignIn'
import MovieForm from './components/pages/Movies/Form'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { AppState } from './redux/reducers';

function App() {
  const [token,setToken] = useState(""); 
  const {movies,count}:any = useSelector((store:AppState) => store.moviesReducer)
  
  const params = {
      filter: {
          offset: 0,
          limit: 12,
          skip:0,
          order: "",
          fields: {
              title: true,
              description: true,
              year: true
          }
      }
  }

  //useEffect(() => {
  //  const t:string | null = localStorage.getItem('token');
  //  t? setToken(t) : setToken("")
  //}, [])

  useEffect(() => {
    axios.get(`http://192.168.0.10:5000/movies`,{params})
    .then(result => {
        dispatch(setMovies(result.data));
    })
    .catch(error => {console.log(error)});
    axios.get(`http://192.168.0.10:5000/movies/count`)
    .then(result => {
        dispatch(countMovies(result.data));
    })
    .catch(error => {console.log(error)});       

},[movies]);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/upload" component={UploadCSV} />
        <Route exact path="/movies/add"><MovieForm action="create"/></Route>
        <Route exact path="/movies/:title"><MovieForm action="update"/></Route>
        <Route exact path="/" component={Movies} />
      </Switch>
    </Router>
  );
}

export default App;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

