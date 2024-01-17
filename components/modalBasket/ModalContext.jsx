"use client";

import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({});

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const setModalContent = (newContent) => setContent(newContent);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content, setModalContent }}>
      {children}
    </ModalContext.Provider>
  );
};