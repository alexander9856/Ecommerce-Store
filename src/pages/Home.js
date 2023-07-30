import { Box } from '@chakra-ui/react'
import { ItemCardList } from '../components/ItemCardList';
import { TypeAndSort } from '../components/TypeAndSort';
import { FilterMenu } from '../components/FilterMenu';
import { ScrollToTop } from '../components/ScrollToTop';

export const Home = () => {
    return (
        <Box minHeight='80vh' py="4rem">
            <FilterMenu />
            <TypeAndSort />
            <ItemCardList />
            <ScrollToTop />
        </Box>
    )
}