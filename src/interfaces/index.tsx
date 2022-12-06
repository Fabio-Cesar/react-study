import { ReactNode } from "react"

export interface ICreateUserData {
    userType : boolean
}

export interface IRequestError {
    message : string
}
export interface IForm {
    onSubmit : (e : React.FormEvent<HTMLFormElement>) => void,
    submitButtonText : string,
    children : ReactNode
}

export interface IModal {
    isOpen : boolean,
    toggle : (param: IHandleModal) => void,
    modalMessage : string
}

export interface IHandleModal {
    isOpen : boolean,
    modalMessage? : string
}