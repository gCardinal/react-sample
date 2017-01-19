import {Action} from 'flux-standard-action'
import Actions from 'redux/actions/Actions'

export default (state: boolean = false, action: Action<null>): boolean => {
    switch (action.type) {
        case Actions.LOGIN:
            return true

        case Actions.LOGOUT:
            return false

        default:
            return state
    }
}