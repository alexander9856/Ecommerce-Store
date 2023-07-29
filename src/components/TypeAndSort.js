import { Button, Flex, Text, Box } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'

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
            <Box display='flex' gap={5}>
                <Button
                    backgroundColor='#fff'
                    border='3px solid #edf2f7'
                    rightIcon={<SmallAddIcon boxSize={5} />}
                >
                    Open Filter
                </Button>
                <SortMenu />
            </Box>
        </Flex>
    )
}