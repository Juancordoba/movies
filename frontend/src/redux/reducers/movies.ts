import { SET_MOVIES } from '../actions';

const initialState = {
    movies: [],
}


function moviesReducer(state = initialState, action: any): any {
    switch (action.type) {
      case SET_MOVIES:
        return {
          ...state,
         state,
        };
      default:
        return state;
    }
  }
  
  export default moviesReducer;