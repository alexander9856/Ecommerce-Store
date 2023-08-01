import { createContext, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { sortData } from '../helpers/sortData'
import data from '../data.json';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    // filter menu
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [selectedProduct, setSelectedProduct] = useState('watches');
    const [sortCriteria, setSortCriteria] = useState('');
    const [paginationNum, setPaginationNum] = useState(20);
    const [colorsCriteria, setColorsCriteria] = useState([]);
    const [priceBetween, setPriceBetween] = useState([]);

    const updateColorsCriteria = (data) => {
        setColorsCriteria(state => {
            if (state.includes(data)) {
                return state.filter(item => item !== data);
            }
            else {
                return [...state, data];
            }
        });
    }

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
        sortedData,
        updateColorsCriteria,
        colorsCriteria,
        setPriceBetween
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
