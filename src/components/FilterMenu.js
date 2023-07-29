import { StoreContext } from '../contexts/StoreProvider'
import {
    Text,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerBody,
    Button,
    DrawerHeader
} from '@chakra-ui/react'
import { useContext } from 'react'

export const FilterMenu = () => {
    const { isOpen, onClose } = useContext(StoreContext)
    return (
        <>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Filter Criteria</DrawerHeader>
                    <DrawerBody>
                        <Text>Price</Text>
                        <Text>Color</Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}





