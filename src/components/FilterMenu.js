import {
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    RadioGroup,
    Radio,
    DrawerOverlay,
    DrawerBody,
    Stack,
    Button,
    DrawerHeader
} from '@chakra-ui/react'

export const FilterMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>
                    <DrawerBody>
                        <Text>Price</Text>
                        <Text>Color</Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}





