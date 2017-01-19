import * as React from 'react'
import {Router} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Provider} from 'react-redux'
import Routing from 'routing/Routing'

export interface AppProps {
    store: any
    history: any
}

export default class App extends React.Component<AppProps, null> {
    public render() {
        return (
            <MuiThemeProvider>
                <Provider store={this.props.store}>
                    <Router history={this.props.history} routes={Routing()} />
                </Provider>
            </MuiThemeProvider>
        )
    }
}