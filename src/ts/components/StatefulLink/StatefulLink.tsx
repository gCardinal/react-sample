import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import * as styles from './StatefulLink.scss'
import {Link} from 'react-router'

export interface StatefulLinkProps {
    to: string
}

@CSSModules(styles)
export default class StatefulLink extends React.Component<StatefulLinkProps, null> {
    public render() {
       return (
           <Link to={this.props.to} activeClassName={styles.active}>
               {this.props.children}
           </Link>
       )
    }
}