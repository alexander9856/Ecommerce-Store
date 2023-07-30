import { ItemCard } from "./ItemCard";
import { Center, Stack, Box, Button } from '@chakra-ui/react';
import data from '../data.json'
export const ItemCardList = () => {
    console.log(data)
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
                    {data.shoes.map((x, index) => (<ItemCard key={index} item={x} />))}
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