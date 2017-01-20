import {createSelector} from 'reselect'
import {State} from 'domain/State'

export default class UserSelector {
    public static firstName = (state: State) => state.user.firstName
    public static lastName = (state: State) => state.user.lastName

    public static userName = createSelector(
        UserSelector.firstName, UserSelector.lastName,
        (firstName: string, lastName: string) => {
            if (firstName && lastName) {
                return `${firstName} ${lastName}`
            }

            return null
        }
    )
}