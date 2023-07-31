import { useContext } from 'react'
import { StoreContext } from '../contexts/StoreProvider'
import { ItemCard } from "./ItemCard";
import { Center, Stack, Box, Button } from '@chakra-ui/react';
import { ScrollToTop } from '../components/ScrollToTop';

export const ItemCardList = () => {
    const { setPaginationNum, sliced, categoryProducts } = useContext(StoreContext)

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
                    {sliced.map((x, index) => (<ItemCard key={index} item={x} />))}
                </Stack>

            </Center>
            {categoryProducts.length !== sliced.length && (
                <Box display='flex' justifyContent='center' mt="5rem">
                    <Button
                        variant='loadMore'
                        onClick={() => setPaginationNum(state => state + 20)}
                    >
                        Load More
                    </Button>
                </Box>
            )}
            <ScrollToTop />


        </>
    );
}