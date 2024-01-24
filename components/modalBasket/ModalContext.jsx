"use client";

import { createContext, useState } from "react";


export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contents, setContents] = useState([]);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const addContent = (newContent) => {
        setContents(prevContents => [...prevContents, newContent]);
    };
    const removeContent = (name) => {
        setContents(prevContents => prevContents.filter(content => content.name !== name));
    };
    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, contents, addContent, removeContent }}>
            {children}
        </ModalContext.Provider>
    );
};