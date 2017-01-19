import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import * as styles from '../styles/BaseLayout.scss'
import Paper from 'material-ui/Paper'
import HeaderSection from 'views/sections/HeaderSection'

@CSSModules(styles)
export default class BaseLayout extends React.Component<any, any> {
    public render() {
        return (
            <div styleName='layout'>
                <HeaderSection />
                <Paper styleName='content'>
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}