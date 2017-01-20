/* tslint:disable */
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