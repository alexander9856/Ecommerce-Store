import { useContext } from 'react'
import { StoreContext } from '../contexts/StoreProvider'
import { ItemCard } from "./ItemCard";
import { Center, Stack, Box, Button, Text } from '@chakra-ui/react';
import { ScrollToTop } from '../components/ScrollToTop';

export const ItemCardList = () => {
    const { setPaginationNum, sliced, dataList } = useContext(StoreContext);
    return (
        <>
            <Center mt='2rem'>
                {dataList.length > 0 ?
                    <Stack
                        direction={['column', 'column', 'row', 'row']}
                        spacing={10}
                        justify={'center'}
                        flexWrap={'wrap'}
                        w='90%'
                    >
                        {sliced.map((x, index) => (<ItemCard key={index} item={x} />))}
                    </Stack>

                    : <Text mt='10rem' fontSize='22px'>No products with the given criteria</Text>
                }


            </Center>
            {dataList.length !== sliced.length && (
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