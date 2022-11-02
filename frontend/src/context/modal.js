import React, { useContext, useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom";
import './Modal.css'

const ModalContext = React.createContext()

function ModalProvider(props) {
    const modalRef = useRef();
    const [value, setValue] = useState()

    useEffect( () => {
        setValue(modalRef.current)
    }, [] )

    return(
        <>
            <ModalContext.Provider value={value}>
                {props.children}
            </ModalContext.Provider>
            <div ref={modalRef}>

            </div>
        </>
    )
}

export const Modal = ({onClose, children}) => {
    const modalNode = useContext(ModalContext)

    if ( modalNode === false ) return null;

    return(
        ReactDOM.createPortal(
            (<div id="modal">
                <div id="modal-background" onClick={onClose} />
                <div id="modal-content">
                    {children}
                </div>
            </div>),
            modalNode
        )
    )
}

export default ModalProvider