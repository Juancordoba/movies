/**
 *  movies : array con las peliculas obtenidas segun el filtrado
 *  count: numero total de peliculas en la base de datos
 * */

import { SET_MOVIES, COUNT_MOVIES } from '../actions';

const initialState = {
    movies: [],
    count:0  
}

function moviesReducer(state = initialState, action: any): any {
    switch (action.type) {
      case SET_MOVIES:
        return {
          ...state,
          movies: action.movies,
        };
        case COUNT_MOVIES:
          return {
            ...state,
            count: action.count,
          };
      default:
        return state;
    }
  }
  
  export default moviesReducer;