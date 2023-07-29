import { Flex, Text, } from '@chakra-ui/react'
import { SortMenu } from './SortMenu'

export const TypeAndSort = () => {
    return (
        <Flex justify='space-between' width='80%' mx='auto' px='0.6rem'>
            <Flex direction='column'>
                <Text variant='productTitle'>
                    Watches
                </Text>
                <Text variant='productCount'>4,798 products</Text>
            </Flex>
            <SortMenu />
        </Flex>
    )
}