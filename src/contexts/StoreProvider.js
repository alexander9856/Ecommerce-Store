import { createContext, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { sortData } from '../helpers/sortData'
import data from '../data.json';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState('shoes')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sortCriteria, setSortCriteria] = useState('');
    const [paginationNum, setPaginationNum] = useState(20);

    let sortedData = sortData(data[selectedProduct], sortCriteria)
    const sliced = sortedData.slice(0, paginationNum)

    const contextValues = {
        selectedProduct,
        setSelectedProduct,
        isOpen,
        onOpen,
        onClose,
        sortCriteria,
        setSortCriteria,
        paginationNum,
        setPaginationNum,
        sliced,
        data
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
