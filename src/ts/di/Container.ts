import {Container} from 'inversify'
import ActionCreatorContainerModule from 'di/containerModule/ActionCreatorContainerModule'
import StoreCreatorContainerModule from 'di/containerModule/StoreCreatorContainerModule'
import LocalStorageAuthentication from 'domain/authentication/LocalStorageAuthentication'
import {AuthenticationService} from 'domain/authentication/AuthenticationService'
import WindowFacade from 'utils/WindowFacade'
import Types from 'di/Types'

const container: Container = new Container()

container.bind<WindowFacade>(Types.WindowFacade).toConstantValue(new WindowFacade(window))
container.bind<AuthenticationService>(Types.AuthenticationService).to(LocalStorageAuthentication)

container.load(ActionCreatorContainerModule)
container.load(StoreCreatorContainerModule)

export default container