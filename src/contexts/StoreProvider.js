import { createContext, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const contextValues = {
        isOpen,
        onOpen,
        onClose
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
