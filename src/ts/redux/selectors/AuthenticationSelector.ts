import {State} from 'domain/State'

export default class AuthenticationSelector {
    public static isAuthenticated = (state: State) => state.authentication
}