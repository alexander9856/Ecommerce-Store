import { StoreContext } from '../contexts/StoreProvider'
import {
    Text,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    Button,
    Flex,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { SliderRangeInput } from './RangeSlider'
import { AccordionMenu } from './Accordion'
import { filterData } from '../helpers/filterData'
export const FilterMenu = () => {
    const { isOpen, onClose, categoryProducts, setFiltered, colorsCriteria, priceBetween, setIsFiltered } = useContext(StoreContext);
    const colors = [...new Set(categoryProducts.map((element) => element.color))];

    const onFilterHandler = () => {
        const filteredData = filterData(categoryProducts, colorsCriteria, priceBetween)
        setFiltered(filteredData);
        setIsFiltered(true)
        onClose();
    }
    return (
        <>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerHeader p='1rem'>Filter Criteria</DrawerHeader>
                    <DrawerBody px={0} border='none' sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            display: 'none'
                        },
                    }}>
                        <Flex direction='column'>
                            <AccordionMenu colors={colors} />
                            <Text variant="filterBy" px='1rem'>Price between : </Text>
                            <SliderRangeInput />
                        </Flex>
                        <Flex justify='center' mt='2rem'>
                            <Button
                                px='5rem'
                                backgroundColor='#fff'
                                border='1px solid black'
                                borderRadius='2px'
                                _hover={[{ opacity: '80%' }, { backgroundColor: 'gray.100' }]}
                                onClick={onFilterHandler}
                            >
                                See Results
                            </Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}





