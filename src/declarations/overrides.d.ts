/* tslint:disable */

interface Auth0LockStatic {
    getUserInfo(token: string, callback: (error: Auth0Error, profile: Auth0UserProfile) => void) : void;
}

declare namespace JSX {
    interface IntrinsicAttributes extends React.Attributes {
        styleName?: string
        className?: string
        maxLength?: string
        styles?: any
    }
}

interface EventTarget {
    value: string
}