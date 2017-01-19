import {interfaces} from 'inversify'
import Context = interfaces.Context
import ServiceIdentifier = interfaces.ServiceIdentifier

export default (context: Context) => {
    return <T>(type: ServiceIdentifier<T>, name?: string): T => {
        if (!name) {
            return context.container.get<T>(type)
        } else {
            return context.container.getNamed<T>(type, name)
        }
    }
}