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
    Flex
} from '@chakra-ui/react'
import { useContext } from 'react'
import { SliderRangeInput } from './RangeSlider'

export const FilterMenu = () => {
    const { isOpen, onClose } = useContext(StoreContext)
    return (
        <>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Filter Criteria</DrawerHeader>
                    <DrawerBody>
                        <Flex direction='column'>
                            <Text variant="filterBy">Color :</Text>
                            <CheckboxGroup>
                                <Stack spacing={[1, 5]} direction='column' borderBottom='1px solid #e2e8f0' pb='2rem'>
                                    <Checkbox value='white'>White</Checkbox>
                                    <Checkbox value='black'>Black</Checkbox>
                                    <Checkbox value='green'>Green</Checkbox>
                                    <Checkbox value='blue'>Blue</Checkbox>
                                    <Checkbox value='yellow'>Yellow</Checkbox>
                                </Stack>
                            </CheckboxGroup>
                            <Text variant="filterBy" mt='2rem'>Price between : </Text>
                            <SliderRangeInput />

                            <Button
                                mt='3rem'
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





