import {ContainerModule, interfaces} from 'inversify'
import Types from 'di/Types'
import ActionCreatorFactory from 'redux/actions/ActionCreatorFactory'
import AuthenticationActionCreator from 'redux/actions/AuthenticationActionCreator'
import UserActionCreator from 'redux/actions/UserActionCreator'
import Factory = interfaces.Factory

export default new ContainerModule((bind) => {
    bind<AuthenticationActionCreator>(Types.AuthenticationActionCreator).to(AuthenticationActionCreator)
    bind<UserActionCreator>(Types.UserActionCreator).to(UserActionCreator)

    bind<Factory<any>>(Types.ActionCreatorFactory).toFactory<any>(ActionCreatorFactory)
})