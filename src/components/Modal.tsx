import { IModal } from "../interfaces"
import '../styles/modal.css'

export function Modal(props : IModal)
{
    return (
        props.isOpen ?
        <div 
            className='modal_container'
            onClick={() => props.toggle(props.isOpen)}
        >
            <div
                className='modal_box'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type='button'
                    onClick={() => props.toggle(props.isOpen)}
                >
                    Fechar Modal
                </button>
                <p>
                    Login Realizado!
                </p>
            </div>
        </div> : 
        <></>
    )
}