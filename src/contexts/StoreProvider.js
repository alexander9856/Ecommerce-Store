import { createContext, useEffect, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { sortData } from '../helpers/sortData'
import data from '../data.json';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState('watches')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sortCriteria, setSortCriteria] = useState('');
    const [paginationNum, setPaginationNum] = useState(20);

    const categoryProducts = data[selectedProduct];
    const sortedData = sortData(categoryProducts, sortCriteria);
    const sliced = sortedData.slice(0, paginationNum);
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
        categoryProducts,
        sortedData
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
