import {injectable, inject} from 'inversify'
import {Action} from 'flux-standard-action'
import Actions from 'redux/actions/Actions'
import Types from 'di/Types'
import {AuthenticationService} from 'domain/authentication/AuthenticationService'

@injectable()
export default class UserActionCreator {
    public saveUserFirstName(firstName: string): Action<string> {
        return {
            payload: firstName,
            type: Actions.FIRST_NAME_SAVED,
        }
    }

    public saveUserLastName(lastName: string): Action<string> {
        return {
            payload: lastName,
            type: Actions.LAST_NAME_SAVED
        }
    }

    public saveUserName(firstName: string, lastName: string): Function {
        return dispatch => {
            dispatch(this.saveUserFirstName(firstName))
            dispatch(this.saveUserLastName(lastName))
        }
    }
}