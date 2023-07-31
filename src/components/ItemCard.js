import React from 'react';
import {
    Flex,
    Box,
    Image,
    Badge,
    Icon,
    Text,
    Button,
    useToast
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { RatingStars } from './RatingStars'
import { discountCalculator } from '../helpers/discountCalculator';

export const ItemCard = ({ item }) => {
    const { name, category, rating, oldPrice, imageURL, price, isNew, reviews } = item;
    const discount = discountCalculator(oldPrice, price);
    const toast = useToast();
    return (
        <Flex alignItems="center" justifyContent="center">
            <Box
                bg={'white'}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
            >

                <Box position='relative' >
                    <Image
                        src={imageURL}
                        alt={`Picture of ${name}`}
                        roundedTop="lg"
                        boxSize='60'
                        mx='auto'
                        loading='lazy'

                    />
                    {discount &&
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
                            -{discount}%
                        </Badge>}

                    {isNew && (
                        <Badge rounded="full" px="2" fontSize="0.5em" position="absolute" top={2} right={2} color='#fff' colorScheme="blue">
                            New
                        </Badge>
                    )}

                </Box>


                <Box px="3" pt='1' pb='3' >
                    <Flex direction='column' maxW='210px'>
                        <Text
                            fontSize="md"
                            fontWeight="semibold"
                            as="h4"
                            h='5vh'
                        >
                            {name}
                        </Text>
                        <Text fontSize='sm' mt='1rem' opacity='80%'>{category}</Text>
                    </Flex>
                    <Flex fontSize="md" color='gray.800' gap={3} justify='end'>
                        {price && <Text>€{' '} {price.toFixed(2)}</Text>}
                        {oldPrice &&
                            <Text textDecoration={'line-through'} color={'#f93131'}>
                                €{' '} {oldPrice?.toFixed(2)}
                            </Text>}
                    </Flex>
                </Box>
                <Flex
                    justify='center'
                    pb='1rem'
                >
                    <Button
                        rightIcon={<Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />}
                        backgroundColor='#fff'
                        border='1px solid black'
                        borderRadius='2px'
                        fontSize='13px'
                        h='4vh'
                        _hover={{ opacity: '70%' }}
                        onClick={() =>
                            toast({
                                title: `${name} added to cart.`,
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                                position: 'top',
                                containerStyle: { fontSize: "13px" }
                            })
                        }
                    >
                        Add to Card
                    </Button>
                </Flex>
                <Flex justify='space-between' mx="2" mb='2'>
                    <Text color="gray.600" fontSize="sm" >
                        {reviews} review{reviews !== 1 ? 's' : ''}
                    </Text>
                    <RatingStars rating={rating} />
                </Flex>
            </Box>
        </Flex>
    );
}



