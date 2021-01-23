import counterReducer from './counter'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

const globalReducer = combineReducers({
    counterReducer,
    loggedReducer
})

export default globalReducer