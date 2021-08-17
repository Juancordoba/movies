import { TOGGLE_ISLOGGED } from '../actions';

const initialState = {
    isLoggeed:false
}

function userReducer(state = initialState, action: any): any {
    switch (action.type) {
      case TOGGLE_ISLOGGED:
        return {
          ...state,
          isLoggeed: !state.isLoggeed,
        };
      default:
        return state;
    }
  }
  
  export default userReducer;