/**
 *  movies : array con las peliculas obtenidas segun el filtrado
 *  count: numero total de peliculas en la base de datos
 * */

import { SET_MOVIES, COUNT_MOVIES, DEL_MOVIE, SET_FILTER, SET_OFFSET } from '../actions';

const initialState = {
    movies: [],
    count:0,
    filter:"",
    offset: 0, 
    limit: 10
}

function moviesReducer(state = initialState, action: any): any {
    switch (action.type) {
      case SET_MOVIES:
        return {
          ...state,
          movies: action.movies,
        };
        case SET_FILTER:
          return {
            ...state,
            filter: action.filter,
          };
        case DEL_MOVIE:
          return {
            ...state,
             movies: state.movies.filter((movie: { title: any; }) => movie.title !== action.title)
          };
        case COUNT_MOVIES:
          console.log(action.count)
          return {
            ...state,
            count: action.count,
          };
          case SET_OFFSET:
            return {
              ...state,
              offset: action.offset,
            };
      default:
        return state;
    }
  }
  
  export default moviesReducer;