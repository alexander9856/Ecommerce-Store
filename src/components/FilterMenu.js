import { StoreContext } from '../contexts/StoreProvider'
import {
    Text,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerBody,
    Button,
    DrawerHeader,
    Checkbox,
    CheckboxGroup,
    Stack
} from '@chakra-ui/react'
import { useContext } from 'react'
import { SliderInput } from './SliderInput'

export const FilterMenu = () => {
    const { isOpen, onClose } = useContext(StoreContext)
    return (
        <>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Filter Criteria</DrawerHeader>
                    <DrawerBody>
                        <Text variant="filterBy">Choose color: </Text>
                        <CheckboxGroup colorScheme='gray'>
                            <Stack spacing={[1, 5]} direction='column'>
                                <Checkbox value='white'>White</Checkbox>
                                <Checkbox value='black'>Black</Checkbox>
                                <Checkbox value='green'>Green</Checkbox>
                                <Checkbox value='blue'>Blue</Checkbox>
                                <Checkbox value='yellow'>Yellow</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                        <Text variant="filterBy" mt='2rem'>Price between: </Text>
                        <SliderInput />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}





