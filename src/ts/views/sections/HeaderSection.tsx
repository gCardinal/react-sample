import * as React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import {State} from 'domain/State'
import Routes from 'routing/Routes'
import Container from 'di/Container'
import Types from 'di/Types'
import AuthenticationActionCreator from 'redux/actions/AuthenticationActionCreator'
import StatefulLink from 'components/StatefulLink/StatefulLink'
import AuthenticationSelector from 'redux/selectors/AuthenticationSelector'

export interface HeaderSectionProps {
    isAuthenticated: boolean
    onLogoutClicked: () => void
    onLoginClicked: () => void
}

export class HeaderSection extends React.Component<HeaderSectionProps, null> {
    public render() {
        return (
            <AppBar
                title={this.renderMenu()}
                showMenuIconButton={false}
                iconElementRight={this.renderAuthenticationButton()}
            />
        )
    }

    public renderMenu() {
        return (
            <div>
                <StatefulLink to={Routes.HOME}>
                    <FlatButton label='Home' style={{color: 'white'}}/>
                </StatefulLink>
                <StatefulLink to={Routes.SECOND}>
                    <FlatButton label='Second Section' style={{color: 'white'}}/>
                </StatefulLink>
            </div>
        )
    }

    public renderAuthenticationButton() {
        if (this.props.isAuthenticated) {
            return <FlatButton onTouchTap={this.props.onLogoutClicked} label='Logout'/>
        }

        return <FlatButton onTouchTap={this.props.onLoginClicked} label='Login'/>
    }
}

export function mapStateToProps(state: State): HeaderSectionProps {
    return {
        isAuthenticated: AuthenticationSelector.isAuthenticated(state),
    } as HeaderSectionProps
}

export function mapDispatchToProps(dispatch): HeaderSectionProps {
    const authenticationActionCreator = Container.get<AuthenticationActionCreator>(Types.AuthenticationActionCreator)

    return {
        onLoginClicked: () => dispatch(authenticationActionCreator.login()),
        onLogoutClicked: () => dispatch(authenticationActionCreator.logout()),
    } as HeaderSectionProps
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection)