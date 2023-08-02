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

    const [isFiltered, setIsFiltered] = useState(false)
    const [filtered, setFiltered] = useState("");

    const [maxPrice, setMaxPrice] = useState(0)
    const [priceBetween, setPriceBetween] = useState([0, 0]);

    let dataList = isFiltered ? filtered : categoryProducts;
    dataList = sortData(dataList, sortCriteria);
    const sliced = dataList.slice(0, paginationNum);

    useEffect(() => {
        setMaxPrice(Math.max(...categoryProducts.map(x => x.price)))
        setPriceBetween([0, Math.max(...categoryProducts.map(x => x.price))])
    }, [categoryProducts]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://64ca74d3700d50e3c704eb35.mockapi.io/api/store/watches')
            const data = await res.json()
            console.log(data)
        })()
    },[])

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
