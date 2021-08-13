import { combineReducers } from 'redux'
import moviesReducer from './movies'

const rootReducer = combineReducers({
    moviesReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;