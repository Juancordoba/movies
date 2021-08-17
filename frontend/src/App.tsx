import { useEffect } from 'react';
import './App.css';
import { setMovies,countMovies } from './redux/actions';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navigation from './components/shared/Navigation';
import Movies from './components/pages/Movies'
import UploadCSV from './components/pages/UploadCSV';
import SignIn from './components/pages/SignIn'
import MovieForm from './components/pages/Movies/Form'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './redux/reducers';

function App() {
  const {filter,offset,limit,count}:any = useSelector((store:AppState) => store.moviesReducer)
  const dispatch = useDispatch();
  
  const params = {
      filter: {
          offset: offset,
          limit: limit,
          skip:0,
          order: "",
          "where" : {
            "title" : {like : `%${filter}%`}
          },
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
  /*  axios.get(`http://192.168.0.10:5000/movies`,{params})
    .then(result => {
        dispatch(setMovies(result.data));
    })
    .catch(error => {console.log(error)});
    axios.get(`http://192.168.0.10:5000/movies/count`)
    .then(result => {
        dispatch(countMovies(result.data.count));
        console.log(count)
    })
    .catch(error => {console.log(error)});       
*/
},[]);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/upload" component={UploadCSV} />
        <Route exact path="/movies/add"><MovieForm action="create"/></Route>
        <Route exact path="/movies/:title"><MovieForm action="update"/></Route>
        <Route exact path="/"><Movies /></Route>
      </Switch>
    </Router>
  );
}

export default App;



