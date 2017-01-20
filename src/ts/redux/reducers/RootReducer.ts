import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import AuthenticationReducer from 'redux/reducers/AuthenticationReducer'
import UserReducer from 'redux/reducers/UserReducer'

export default combineReducers({
    authentication: AuthenticationReducer,
    user: UserReducer,
    routing: routerReducer,
})