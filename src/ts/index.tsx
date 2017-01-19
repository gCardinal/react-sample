import 'polyfills'
import * as React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {StoreCreator} from 'redux/store/StoreCreator'
import Container from 'di/Container'
import Types from 'di/Types'
import App from 'App'

const mountNode = document.getElementById('root')
const storeCreator = Container.get<StoreCreator>(Types.StoreCreator)
const store = storeCreator.create(browserHistory, {})
const history = syncHistoryWithStore(browserHistory, store)

render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    mountNode
)

if (module.hot) {
    module.hot.accept('App', () => {
        const NextApp = require('App').default
        render(
            <AppContainer>
                <NextApp store={store} history={history} />
            </AppContainer>,
            mountNode
        )
    })
}