import {injectable} from 'inversify'
import {Store, createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {StoreCreator} from 'redux/store/StoreCreator'
import rootReducer from 'redux/reducers/RootReducer'
import thunk from 'redux-thunk'
import {State} from 'domain/State'

@injectable()
export default class ProdStoreCreator implements StoreCreator {
    public create(browserHistory: any, initialState: any): Store<State> {
        return createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(
                    thunk,
                    routerMiddleware(history as any) as any
                ),
            ) as any,
        )
    }
}