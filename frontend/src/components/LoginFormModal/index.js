import { useState } from "react";
import { Modal } from "../../context/modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="signIn" onClick={ () => setShowModal(true) }>Sign in 
            </button>
            {showModal &&
                <Modal onClose={ () => setShowModal(false) }>
                    <LoginForm />
                </Modal>
            }
        </>
    )
}

export default LoginFormModal