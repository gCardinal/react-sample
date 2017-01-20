import {Action} from 'flux-standard-action'
import {combineReducers} from 'redux'
import Actions from 'redux/actions/Actions'

export function firstName(state: string = null, action: Action<string>): string {
    switch (action.type) {
        case Actions.FIRST_NAME_SAVED:
            return action.payload

        case Actions.NAME_CLEARED:
            return null

        default:
            return state
    }
}

export function lastName(state: string = null, action: Action<string>): string {
    switch (action.type) {
        case Actions.LAST_NAME_SAVED:
            return action.payload

        case Actions.NAME_CLEARED:
            return null

        default:
            return state
    }
}

export default combineReducers({
    firstName: firstName,
    lastName: lastName,
})