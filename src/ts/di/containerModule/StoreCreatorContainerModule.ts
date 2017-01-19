import {ContainerModule} from 'inversify'
import {StoreCreator} from 'redux/store/StoreCreator'
import DevStoreCreator from 'redux/store/DevStoreCreator'
import ProdStoreCreator from 'redux/store/ProdStoreCreator'
import Types from 'di/Types'

export default new ContainerModule((bind) => {
    if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local') {
        bind<StoreCreator>(Types.StoreCreator).to(DevStoreCreator).inSingletonScope()
    } else {
        bind<StoreCreator>(Types.StoreCreator).to(ProdStoreCreator).inSingletonScope()
    }
})