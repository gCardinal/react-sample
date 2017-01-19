import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import AuthenticationReducer from 'redux/reducers/AuthenticationReducer'

export default combineReducers({
    authentication: AuthenticationReducer,
    routing: routerReducer,
})