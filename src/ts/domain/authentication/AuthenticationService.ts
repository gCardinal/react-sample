export interface AuthenticationService {
    login: () => void
    logout: () => void
    isAuthenticated: () => boolean
}