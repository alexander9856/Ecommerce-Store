import { createContext, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState('shoes')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sortCriteria, setSortCriteria] = useState('');
    const [paginationNum, setPaginationNum] = useState(20);

    const contextValues = {
        selectedProduct,
        setSelectedProduct,
        isOpen,
        onOpen,
        onClose,
        sortCriteria,
        setSortCriteria,
        paginationNum,
        setPaginationNum
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
