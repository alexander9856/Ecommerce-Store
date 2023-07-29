import React from 'react';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { data } from '../data'
import { RatingStars } from './RatingStart'

export const ItemCard = () => {
    return (
        <Flex alignItems="center" justifyContent="center" >
            <Box
                bg={'white'}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                {data.isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                )}

                <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" boxSize='60' mx='auto' />

                <Box p="3">
                    <Box display="flex" alignItems="baseline">
                        {data.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.5em" colorScheme="red">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="md"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {data.name}
                        </Box>
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'0.8em'}
                        >
                            <chakra.a cursor='pointer' display={'flex'}>
                                <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center" mt="0.2rem">
                        <RatingStars rating={data.rating} numReviews={data.numReviews} />
                        <Box fontSize="xl" color='gray.800'>
                            <Box as="span" color='gray.600' fontSize="md">
                                £{' '}
                            </Box>
                            {data.price.toFixed(2)}
                        </Box>
                    </Flex>
                </Box>
                <Box as="span" ml="2" color="gray.600" fontSize="sm" >
                    {data.numReviews} review{data.numReviews !== 1 ? 's' : ''}
                </Box>
            </Box>
        </Flex>
    );
}



