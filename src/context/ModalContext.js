// context/ModalContext.js
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [procedure, setProcedure] = useState('');

    const openModal = (procedureTitle) => {
        setProcedure(procedureTitle);
        setShow(true);
    };

    const closeModal = () => setShow(false);

    return (
        <ModalContext.Provider value={{ show, procedure, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
