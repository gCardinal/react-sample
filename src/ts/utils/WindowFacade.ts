import * as queryString from 'query-string'

/**
 * Since window is impossible to mock (web browsers refuse to let us touch that object), we use a facade to
 * interact with it. This allows us to test our other objects' behaviors.
 */
export default class WindowFacade {
    private window: Window

    public constructor(window: Window) {
        this.window = window
    }

    public replace(url: string) {
        this.window.location.replace(url)
    }

    public documentHeight(): number {
        return this.window.document.documentElement.clientHeight
    }

    public documentWidth(): number {
        return this.window.document.documentElement.clientWidth
    }

    public setItemInLocalStorage(name: string, value: any) {
        this.window.localStorage.setItem(name, value)
    }

    public getItemInLocalStorage(name: string): string {
        return this.window.localStorage.getItem(name)
    }

    public removeItemFromLocalStorage(name: string) {
        this.window.localStorage.removeItem(name)
    }

    public getCurrentUrl(): string {
        return this.window.location.href
    }

    public getBaseUrl(): string {
        const location = window.location
        return this.window.location.protocol + '//' + location.host
    }

    public getPathName() {
        return this.window.location.pathname
    }

    public getQueryParams() {
        return queryString.parse(this.window.location.search)
    }
}