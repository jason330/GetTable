import { useState } from "react";
import { Modal } from "../../context/modal";
import SignupForm from "./SignupForm";
import closeButton from './closeButton.svg'

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className="signUp" onClick={ () => setShowModal(true) }>Sign up 
            </button>
            {showModal &&
                <Modal onClose={ () => setShowModal(false) }>
                    <button className="closeButton" onClick={ () => setShowModal(false) }>
                        <img className="closeButtonImg" src={closeButton} alt="close button" />
                    </button>
                    <SignupForm />
                </Modal>
            }
        </>
    )
}

export default SignupFormModal