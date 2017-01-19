import * as createLogger from 'redux-logger'
import {injectable} from 'inversify'
import {Store, createStore, compose, applyMiddleware, StoreEnhancer, Middleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {StoreCreator} from 'redux/store/StoreCreator'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from 'redux/reducers/RootReducer'
import thunk from 'redux-thunk'
import {State} from 'domain/State'

@injectable()
export default class DevStoreCreator implements StoreCreator {
    public create(browserHistory: any, initialState: any): Store<State> {
        return createStore(
            rootReducer,
            initialState,
            compose(
                composeWithDevTools(
                    applyMiddleware(
                        thunk,
                        routerMiddleware(history as any) as Middleware,
                        createLogger({
                            collapsed: (getState, action) => action.error !== true,
                        }),
                    ),
                ),
            ) as StoreEnhancer<any>,
        )
    }
}