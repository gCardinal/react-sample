import * as React from 'react'
import * as CSSModule from 'react-css-modules'
import * as styles from '../styles/HomeSection.scss'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import UserSelector from 'redux/selectors/UserSelector'
import UserActionCreator from 'redux/actions/UserActionCreator'
import Container from 'di/Container'
import Types from 'di/Types'

export interface HomeSectionProps {
    userName: string
    nameSaveHandler: (firstName: string, lastName: string) => void
}

export interface HomeSectionState {
    firstNameValue: string
    lastNameValue: string
}

@CSSModule(styles)
export class HomeSection extends React.Component<HomeSectionProps, HomeSectionState> {
    public constructor(props) {
        super(props)
        this.state = {
            firstNameValue: '',
            lastNameValue: '',
        }
    }

    public render() {
        const welcomeText: string = this.props.userName ?
            `Welcome ${this.props.userName}` :
            'May I please know your name?'

        return (
            <div>
                <h1>{`Super Simple React Example`}</h1>
                <div styleName='column'>
                    <TextField
                        value={this.state.firstNameValue}
                        floatingLabelText='Your first name?'
                        onChange={(event) => {
                            this.setState({
                                firstNameValue: event.target.value,
                            } as HomeSectionState)
                        }}
                    />
                    <TextField
                        value={this.state.lastNameValue}
                        floatingLabelText='Your last name?'
                        onChange={(event) => {
                            this.setState({
                                lastNameValue: event.target.value,
                            } as HomeSectionState)
                        }}
                    />
                    <RaisedButton
                        label='Save your name'
                        primary={true}
                        onTouchTap={() => this.props.nameSaveHandler(this.state.firstNameValue, this.state.lastNameValue)}
                    />
                </div>
                <div styleName='column'>
                    <p>{welcomeText}</p>
                </div>
            </div>
        )
    }
}

export function mapStateToProps(state): HomeSectionProps {
    return {
        userName: UserSelector.userName(state)
    } as HomeSectionProps
}

export function mapDispatchToProps(dispatch): HomeSectionProps {
    const userActionCreator = Container.get<UserActionCreator>(Types.UserActionCreator)

    return {
        nameSaveHandler: (firstName: string, lastName: string) => {
            dispatch(userActionCreator.saveUserName(firstName, lastName))
        }
    } as HomeSectionProps
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSection)