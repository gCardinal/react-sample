import * as React from 'react'
import * as CSSModule from 'react-css-modules'
import * as styles from '../styles/NotFoundSection.scss'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Routes from 'routing/Routes'

@CSSModule(styles)
export default class NotFoundSection extends React.Component<null, null> {
    public render() {
        return (
            <div styleName='error'>
                <h1>{`Oops! Page wasn't found...`}</h1>
                <Link to={Routes.HOME}>
                    <RaisedButton primary label='Back to the homepage' />
                </Link>
            </div>
        )
    }
}