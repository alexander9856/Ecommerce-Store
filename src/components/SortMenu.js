import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const SortMenu = () => {
    return (
        <Menu placement="bottom-end">
            <MenuButton
                backgroundColor='#fff'
                border='3px solid #edf2f7'
                _hover={{ opacity: '70%' }}
                fontSize={['14px', 'inherit', 'inherit', 'inherit']}
                as={Button} rightIcon={<ChevronDownIcon />}
            >
                Sort
            </MenuButton>
            <MenuList zIndex='1'>
                <MenuItem>A-Z</MenuItem>
                <MenuItem>Z-A</MenuItem>
                <MenuItem>Price Descending</MenuItem>
                <MenuItem>Price Ascending</MenuItem>
            </MenuList>
        </Menu>
    )
}