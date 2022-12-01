import { useState } from "react"
import EmailValidator from "../validators/emailValidator"
import PasswordValidator from "../validators/passwordValidator"
import { Form } from "./Form"
import { Modal } from "./Modal"
import '../styles/app.css'

export function App()
{
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginModalOpen, toggleLoginModal] = useState(false)

    function handleLoginSubmit()
    {
        try
        {   
            new EmailValidator(loginEmail)
            new PasswordValidator(loginPassword)
            
            handleToggleLoginModal(loginModalOpen)
        }
        catch (error)
        {
            if (error instanceof Error)
            {
                console.log(error.message)
            }
            else
            {
                console.log(error);
            }
        }
    }

    function handleToggleLoginModal(isOpen : boolean)
    {
        toggleLoginModal(!isOpen)
    }

    return (
        <div className='page_container'>
            <Modal
                isOpen={loginModalOpen}
                toggle={handleToggleLoginModal}
            />
            <Form
                onSubmit={handleLoginSubmit}
                submitButtonText='Fazer Login'
            >
                <input 
                    type='email'
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                    type='password'
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
            </Form>
        </div>
    )
}