import { IForm } from "../interfaces"
import '../styles/form.css'

export function Form(props: IForm)
{
    return (
        <form
            className="form_container"
            onSubmit={(e) => props.onSubmit(e)}
        >
            {props.children}
            <button type='submit'>
                {props.submitButtonText}
            </button>
        </form>
    )
}