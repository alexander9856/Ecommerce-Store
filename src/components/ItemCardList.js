import { useContext } from 'react'
import { StoreContext } from '../contexts/StoreProvider'
import { ItemCard } from "./ItemCard";
import { Center, Stack, Box, Button } from '@chakra-ui/react';
import data from '../data.json';
import { sortData } from '../helpers/sortData'
export const ItemCardList = () => {
    const { sortCriteria } = useContext(StoreContext)
    let sortedData = sortData(data.shoes, sortCriteria)
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
                >
                    Load More
                </Button>
            </Box>
        </>
    );
}