import {injectable, inject} from 'inversify'
import {Action} from 'flux-standard-action'
import Actions from 'redux/actions/Actions'
import Types from 'di/Types'
import {AuthenticationService} from 'domain/authentication/AuthenticationService'

@injectable()
export default class AuthenticationActionCreator {
    private authenticationService: AuthenticationService

    public constructor(@inject(Types.AuthenticationService) authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService
    }

    public login(): Action<null> {
        this.authenticationService.login()
        return {
            type: Actions.LOGIN
        }
    }

    public logout(): Action<null> {
        this.authenticationService.logout()
        return {
            type: Actions.LOGOUT
        }
    }
}