import { Box, Flex, Text } from '@chakra-ui/react'
import { ItemCardList } from '../components/ItemCardList';

export const Home = () => {
    return (
        <Box minHeight='80vh'>
            <Flex direction='column' textAlign='center' mt='2rem'>
                <Text fontWeight='bold' letterSpacing='1.5px' fontSize={['16px', '17px', '18px', '20px']} textTransform='uppercase'>
                    Watches
                </Text>
                <Text opacity='80%' fontStyle="italic" fontSize='14px'>4,798 products</Text>
            </Flex>
            <ItemCardList />
        </Box>
    )
}