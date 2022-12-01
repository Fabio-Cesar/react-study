import { ReactNode } from "react"

export interface IForm {
    onSubmit : () => void,
    submitButtonText : string,
    children : ReactNode
}

export interface IModal {
    isOpen : boolean,
    toggle : (isOpen: boolean) => void
}