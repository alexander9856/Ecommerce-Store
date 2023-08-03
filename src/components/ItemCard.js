import {
    Flex,
    Box,
    Badge,
    Icon,
    Text,
    Button,
    useToast
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { RatingStars } from './RatingStars'
import { discountCalculator } from '../helpers/discountCalculator';
import { BlurredImage } from './BlurredImage'
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
                    <BlurredImage imageURL={imageURL} name={name} />
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


                <Box px="3" pt='1' pb='3' maxWidth='290px'>
                    <Flex direction='column' >
                        <Text
                            fontSize="md"
                            fontWeight="semibold"
                            as="h4"
                        >
                            {name}
                        </Text>
                        <Flex justify='space-between'>
                            <Text fontSize='sm' mt='0.2rem' opacity='80%' fontStyle='italic'>{category}</Text>
                            <Flex fontSize="md" color='gray.800' gap={1} justify='end'>
                                <Text fontSize='17px' pt='0.5rem'>€{' '} {price.toFixed(2)} </Text>

                                {oldPrice &&
                                    <>
                                        <Text pt='0.5rem' as='span' color='gray.400'>{' /'}</Text>
                                        <Text pt='0.5rem' textDecoration={'line-through'} fontSize='17px' color={'#f93131'}>
                                            € {oldPrice?.toFixed(2)}
                                        </Text>
                                    </>}
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>



                <Flex
                    justify='space-between'
                    px="3"
                    mb='2'
                    alignItems='center'
                >
                    <Flex direction='column' mb='0.5rem' gap={0.5}>
                        <Text color="gray.600" fontSize="sm" >
                            {reviews} review{reviews !== 1 ? 's' : ''}
                        </Text>
                        <RatingStars rating={rating} />
                    </Flex>
                    <Button
                        rightIcon={<Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />}
                        backgroundColor='#fff'
                        border='1px solid black'
                        borderRadius='2px'
                        fontSize='14.5px'
                        h='4.5vh'
                        _hover={{ opacity: '70%' }}
                        onClick={() =>
                            toast({
                                title: `${name} added to cart.`,
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                                position: 'top',
                                containerStyle: { borderRadius: '0', fontSize: "13px" }

                            })
                        }
                    >
                        Add to Card
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
}



