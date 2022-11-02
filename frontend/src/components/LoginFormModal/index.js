import { useState } from "react";
import { Modal } from "../../context/modal";
import LoginForm from "./LoginForm";
import closeButton from './closeButton.svg'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="signIn" onClick={ () => setShowModal(true) }>Sign in 
            </button>
            {showModal &&
                <Modal onClose={ () => setShowModal(false) }>
                    <button className="closeButton" onClick={ () => setShowModal(false) }>
                        <img className="closeButtonImg" src={closeButton} alt="close button" />
                    </button>
                    <LoginForm />
                </Modal>
            }
        </>
    )
}

export default LoginFormModal