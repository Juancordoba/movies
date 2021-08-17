import { combineReducers } from 'redux'
import moviesReducer from './movies'
import userReducer from './user'

const rootReducer = combineReducers({
    userReducer,
    moviesReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;