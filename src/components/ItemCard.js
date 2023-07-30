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
    Text,
    Button
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { data } from '../data'
import { RatingStars } from './RatingStars'

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

                <Box position='relative'>
                    <Image
                        src={data.imageURL}
                        alt={`Picture of ${data.name}`}
                        roundedTop="lg"
                        boxSize='60'
                        mx='auto'

                    />
                    <Badge
                        px='2'
                        py='1'
                        fontSize="12px"
                        color='#fff'
                        backgroundColor='#f93131'
                        position='absolute'
                        bottom={2}
                        left={2}
                        borderRadius={0}
                        letterSpacing='1.5px'
                    >
                        -19%
                    </Badge>
                    {data.isNew && (<Circle size="10px" position="absolute" top={2} right={2} bg="blue.200" />)}

                </Box>


                <Box p="3">
                    <Box display="flex" alignItems="baseline">
                        {data.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.5em" color='#fff' colorScheme="blue">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Text
                            fontSize="md"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {data.brand}
                        </Text>

                        <Flex fontSize="md" color='gray.800' gap={3}>
                            <Text>€{' '} {data.price.toFixed(2)}</Text>
                            <Text textDecoration={'line-through'} color={'#f93131'}>
                                €{' '} {data.price.toFixed(2)}
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex justify='space-between' alignContent="center" mt="0.5rem">
                        <Text fontSize='sm'>{data.description}</Text>
                        <RatingStars rating={data.rating} numReviews={data.numReviews} />
                    </Flex>
                </Box>
                <Flex
                    justify='center'
                    pb='1rem'
                    mt='0.7rem'
                >
                    <Button
                        rightIcon={<Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />}
                        backgroundColor='#fff'
                        border='1px solid black'
                        borderRadius='2px'
                        fontSize='13px'
                        h='4vh'
                        _hover={{ opacity: '70%' }}
                    >
                        Add to Card
                    </Button>
                </Flex>

                <Text ml="2" mb='2' color="gray.600" fontSize="sm" >
                    {data.numReviews} review{data.numReviews !== 1 ? 's' : ''}
                </Text>
            </Box>
        </Flex>
    );
}



