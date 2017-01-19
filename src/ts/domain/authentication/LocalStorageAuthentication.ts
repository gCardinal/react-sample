import {injectable, inject} from 'inversify'
import {AuthenticationService} from 'domain/authentication/AuthenticationService'
import Types from 'di/Types'
import WindowFacade from 'utils/WindowFacade'

@injectable()
export default class LocalStorageAuthentication implements AuthenticationService {
    private windowFacade: WindowFacade
    private storageKey: string = 'authentication'

    public constructor(@inject(Types.WindowFacade) windowFacade: WindowFacade) {
        this.windowFacade = windowFacade
    }

    public login() {
        this.windowFacade.setItemInLocalStorage(this.storageKey, true)
    }

    public logout() {
        this.windowFacade.setItemInLocalStorage(this.storageKey, false)
    }

    public isAuthenticated(): boolean {
        const itemValue: string = this.windowFacade.getItemInLocalStorage(this.storageKey)
        return itemValue && itemValue === 'true'
    }
}