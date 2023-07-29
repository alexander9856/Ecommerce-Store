import { ItemCard } from "./ItemCard";
import { Center, Stack } from '@chakra-ui/react';
export const ItemCardList = () => {
    return (
        <Center>
            <Stack
                direction={['column','column', 'row','row']}
                spacing={10}
                align={['center', 'flex-start']}
                justify={'center'}
                flexWrap={'wrap'}
                mt='3rem'
            >
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />

            </Stack>
        </Center>
    );
}