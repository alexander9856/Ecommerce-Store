import { useContext } from 'react'
import { StoreContext } from '../contexts/StoreProvider'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const SortMenu = () => {
    const { setSortCriteria, sortCriteria } = useContext(StoreContext)
    const onClickHandler = (e) => setSortCriteria(e.target.value)
    const sortValues = {
        nameDesc: 'A - Z',
        nameAsc: 'Z - A',
        priceDesc: 'Price Descending',
        priceAsc: 'Price Ascending'
    }
    return (
        <Menu placement="bottom-end">
            <MenuButton
                backgroundColor='#fff'
                border='3px solid #edf2f7'
                _hover={{ opacity: '70%' }}
                fontSize={['13px', 'inherit', 'inherit', 'inherit']}
                as={Button} rightIcon={<ChevronDownIcon />}
                textAlign='left'
                minW='12vw'

            >
                {sortCriteria ? sortValues[sortCriteria] : "Sort by"}
            </MenuButton>
            <MenuList zIndex='1'>
                <MenuItem value='nameDesc' onClick={onClickHandler}>A - Z</MenuItem>
                <MenuItem value='nameAsc' onClick={onClickHandler}>Z - A</MenuItem>
                <MenuItem value='priceDesc' onClick={onClickHandler}>Price Descending</MenuItem>
                <MenuItem value='priceAsc' onClick={onClickHandler}>Price Ascending</MenuItem>
            </MenuList>
        </Menu>
    )
}