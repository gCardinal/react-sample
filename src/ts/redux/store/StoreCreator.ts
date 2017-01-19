import {Store} from 'redux'
import {State} from 'domain/State'

export interface StoreCreator {
    create(browserHistory: any, initialState: any): Store<State>
}