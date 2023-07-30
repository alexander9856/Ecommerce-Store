import { useContext } from 'react'
import { StoreContext } from '../contexts/StoreProvider'
import { ItemCard } from "./ItemCard";
import { Center, Stack, Box, Button } from '@chakra-ui/react';
import data from '../data.json';
import { sortData } from '../helpers/sortData'
export const ItemCardList = () => {
    const { sortCriteria, selectedProduct, paginationNum, setPaginationNum } = useContext(StoreContext)
    let sortedData = sortData(data[selectedProduct], sortCriteria).slice(0, paginationNum)

    return (
        <>
            <Center mt='2rem'>
                <Stack
                    direction={['column', 'column', 'row', 'row']}
                    spacing={10}
                    justify={'center'}
                    flexWrap={'wrap'}
                    w='90%'
                >
                    {sortedData.map((x, index) => (<ItemCard key={index} item={x} />))}
                </Stack>

            </Center>
            <Box display='flex' justifyContent='center' mt="5rem">
                <Button
                    variant='loadMore'
                    onClick={() => setPaginationNum(state => state + 20)}
                >
                    Load More
                </Button>
            </Box>
        </>
    );
}