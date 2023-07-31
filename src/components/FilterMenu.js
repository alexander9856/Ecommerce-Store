import { StoreContext } from '../contexts/StoreProvider'
import {
    Text,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    Checkbox,
    CheckboxGroup,
    Stack,
    Button,
    Flex,
    color
} from '@chakra-ui/react'
import { useContext } from 'react'
import { SliderRangeInput } from './RangeSlider'
import { AccordionMenu } from './Accordion'

export const FilterMenu = () => {
    const { isOpen, onClose, sortedData } = useContext(StoreContext);
    const colors = [...new Set(sortedData.map((element) => element.color))];
    return (
        <>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerHeader>Filter Criteria</DrawerHeader>
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





