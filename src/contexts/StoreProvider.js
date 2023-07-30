import { createContext, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState('Watches')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sortCriteria, setSortCriteria] = useState('')
    const contextValues = {
        selectedProduct,
        setSelectedProduct,
        isOpen,
        onOpen,
        onClose,
        sortCriteria,
        setSortCriteria
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
