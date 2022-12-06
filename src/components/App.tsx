import { useState } from "react"
import { EmailValidator, NameValidator, PasswordValidator, StringValidator } from "../validators"
import { Form } from "./Form"
import { Modal } from "./Modal"
import '../styles/app.css'
import { ICreateUserData, IHandleModal } from "../interfaces"
import { request } from "../utils/request"

export function App()
{
    const [modalOpen, toggleModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    async function handleCreateUserSubmit(event : React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault()
        try
        {
            const formData = new FormData(event.target as HTMLFormElement)
            

            const bodyValue = Object.fromEntries(formData.entries())

            new NameValidator(bodyValue.first_name)
            new NameValidator(bodyValue.last_name)
            new StringValidator(bodyValue.username)
            new EmailValidator(bodyValue.email)
            new PasswordValidator(bodyValue.password)

            const notAdmin = {
                is_admin : false
            }

            const fullBodyValue = Object.assign(bodyValue, notAdmin);

            const data = await request<ICreateUserData>('http://localhost:8080/api/users', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(fullBodyValue)});
            
            handleToggleModal({ isOpen : modalOpen, modalMessage : `Usuário criado com sucesso! Admin=${data.userType}` })
        }
        catch (error)
        {
            if (error instanceof Error)
            {
                handleToggleModal({ isOpen : modalOpen, modalMessage : `Erro: ${error.message}` })
            }
            else
            {
                console.log(error)
            }
        }
    }

    async function handleLoginSubmit(event : React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault()
        try
        {
            const formData = new FormData(event.target as HTMLFormElement)

            const bodyValue = Object.fromEntries(formData.entries())

            new EmailValidator(bodyValue.email)
            new PasswordValidator(bodyValue.password)

            const data = await request<ICreateUserData>('http://localhost:8080/api/login', {method: 'POST', headers: {"Content-Type": "application/json", "credentials": "include", "mode" : 'cors'}, body: JSON.stringify(bodyValue)})

            handleToggleModal({ isOpen : modalOpen, modalMessage : `Login efetuado! Admin =${data.userType}`})
        }
        catch (error)
        {
            if (error instanceof Error)
            {
                handleToggleModal({ isOpen : modalOpen, modalMessage : `Erro: ${error.message}`})
            }
            else
            {
                console.log(error)
            }
        }
    }

    function handleToggleModal(params : IHandleModal)
    {
        toggleModal(!params.isOpen)
        if (params.modalMessage) setModalMessage(params.modalMessage)
    }

    return (
        <div className='page_container'>
            <Modal
                isOpen={modalOpen}
                toggle={handleToggleModal}
                modalMessage={modalMessage}
            />
            <Form
                onSubmit={handleCreateUserSubmit}
                submitButtonText='Criar Usuário'
            >
                <label htmlFor='create_user_form_first_name'>Primeiro Nome</label>
                <input id='create_user_form_first_name' type='text' name='first_name' />
                <label htmlFor='create_user_form_last_name'>Último Nome</label>
                <input id='create_user_form_last_name' type='text' name='last_name' />
                <label htmlFor='create_user_form_username'>Nome de Usuário</label>
                <input id='create_user_form_username' type='text' name='username' />
                <label htmlFor='create_user_form_email'>Email</label>
                <input id='create_user_form_email' type='email' name='email' />
                <label htmlFor='create_user_form_password'>Senha</label>
                <input id='create_user_form_password' type='password' name='password' />
            </Form>
            <Form
                onSubmit={handleLoginSubmit}
                submitButtonText='Fazer Login'
            >
                <label htmlFor='login_form_email'>Email</label>
                <input id='login_form_email' type='email' name='email'/>
                <label htmlFor='login_form_password'>Senha</label>
                <input id='login_form_password' type='password' name='password'/>
            </Form>
        </div>
    )
}