import { IForm } from "../interfaces"
import '../styles/form.css'

export function Form(props: IForm)
{
    return (
        <form className="form_container">
            {props.children}
            <button
                type='submit'
                onClick={(e) =>
                    {
                        e.preventDefault()
                        props.onSubmit()
                    }
                }
            >
                {props.submitButtonText}
            </button>
        </form>
    )
}