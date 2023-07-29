import { ItemCard } from "./ItemCard";
import { Center, Stack } from '@chakra-ui/react';
export const ItemCardList = () => {
    return (
        <Center mt='2rem'>
            <Stack
                direction={['column', 'column', 'row', 'row']}
                spacing={10}
                justify={'center'}
                flexWrap={'wrap'}
                w='90%'
            >
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />

            </Stack>
        </Center>
    );
}