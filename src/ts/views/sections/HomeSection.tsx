import * as React from 'react'
import * as CSSModule from 'react-css-modules'
import * as styles from '../styles/NotFoundSection.scss'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Routes from 'routing/Routes'

@CSSModule(styles)
export default class HomeSection extends React.Component<null, null> {
    public render() {
        return (
            <div>
                <h1>{`Super Simple React Example`}</h1>
                <p>{`You are on the home page. Yay!`}</p>
            </div>
        )
    }
}