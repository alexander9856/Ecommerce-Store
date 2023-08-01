import { createContext, useEffect, useState } from 'react';
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
    const categoryProducts = data[selectedProduct];
    const maxPrice = Math.max(...categoryProducts.map(x => x.price))
    const [priceBetween, setPriceBetween] = useState([0, maxPrice]);

    const [isFiltered, setIsFiltered] = useState(false)
    const [filtered, setFiltered] = useState("");

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

    let dataList = isFiltered ? filtered : categoryProducts;
    dataList = sortData(dataList, sortCriteria);
    const sliced = dataList.slice(0, paginationNum);

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
        categoryProducts,
        dataList,
        updateColorsCriteria,
        colorsCriteria,
        setPriceBetween,
        filtered,
        setFiltered,
        priceBetween,
        sliced,
        setColorsCriteria,
        setIsFiltered,
        categoryProducts,
        maxPrice
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};
