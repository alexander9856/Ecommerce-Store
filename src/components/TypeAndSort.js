import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreProvider'
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { SortMenu } from './SortMenu';


export const TypeAndSort = () => {
    const { onOpen, selectedProduct, dataList, sliced } = useContext(StoreContext)

    return (
        <Flex justify={'space-between'}
            width={['100%', '100%', '70%', '84%']}
            mx='auto'
            flexDirection={['column', 'column', 'row', 'row']}
        >
            <Flex direction='column' gap={1} textAlign={['center', 'center', 'inherit', 'inherit']}>
                <Text variant='productTitle'>
                    {selectedProduct}
                </Text>
                <Text variant='productCount'>{sliced.length} / {dataList.length} products</Text>
            </Flex>
            <Box display='flex' gap={5} mx={['auto', 'auto', 0, 0]}>
                <Button
                    backgroundColor='#fff'
                    border='3px solid #edf2f7'
                    fontSize={['13px', 'inherit', 'inherit', 'inherit']}
                    rightIcon={<SmallAddIcon boxSize={5} />}
                    onClick={onOpen}
                    _hover={{ opacity: '70%' }}
                >
                    Open Filter
                </Button>
                <SortMenu />
            </Box>
        </Flex>
    )
}