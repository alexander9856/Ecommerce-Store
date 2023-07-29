// import React from 'react';
// import {
//     Box,
//     Center,
//     useColorModeValue,
//     Heading,
//     Text,
//     Stack,
//     Image,
// } from '@chakra-ui/react';

// const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

// export const ItemCard = () => {
//     return (
//         <Box
//             p={6}
//             maxW={'280px'}
//             boxShadow={'2xl'}
//             rounded={'lg'}
//             pos={'relative'}
//             zIndex={1}
//             mb='2rem'
//         >
//             <Box
//                 rounded={'lg'}
//                 mt={-12}
//                 pos={'relative'}
//                 height={'230px'}
//                 _after={{
//                     transition: 'all .3s ease',
//                     content: '""',
//                     w: 'full',
//                     h: 'full',
//                     pos: 'absolute',
//                     top: 5,
//                     left: 0,
//                     backgroundImage: `url(${IMAGE})`,
//                     filter: 'blur(15px)',
//                     zIndex: -1,
//                 }}
//                 _groupHover={{
//                     _after: {
//                         filter: 'blur(20px)',
//                     },
//                 }}
//             >
//                 <Image
//                     rounded={'lg'}
//                     height={230}
//                     width={282}
//                     objectFit={'cover'}
//                     src={IMAGE}
//                     alt="#"
//                 />
//             </Box>
//             <Stack pt={10} align={'center'}>
//                 <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//                     Brand
//                 </Text>
//                 <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//                     Nice Chair, pink
//                 </Heading>
//                 <Stack direction={'row'} align={'center'}>
//                     <Text fontWeight={800} fontSize={'xl'}>
//                         $57
//                     </Text>
//                     <Text textDecoration={'line-through'} color={'gray.600'}>
//                         $199
//                     </Text>
//                 </Stack>
//             </Stack>
//         </Box>
//     );
// }

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
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
    isNew: true,
    imageURL:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 2.5,
    numReviews: 34,
};

function Rating({ rating, numReviews }) {
    const roundedRating = Math.round(rating * 2) / 2;

    const renderStar = (index) => {
        if (roundedRating - index >= 1) {
            return <BsStarFill key={index} style={{ marginLeft: '1' }} size='13' color="teal.500" />;
        } else if (roundedRating - index === 0.5) {
            return <BsStarHalf key={index} style={{ marginLeft: '1' }} size='13' />;
        } else {
            return <BsStar key={index} style={{ marginLeft: '1' }} size='13' />;
        }
    };

    return (
        <Box display="flex" alignItems="center">
            {Array(5).fill('').map((_, i) => renderStar(i))}

        </Box>
    );
}

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
                        <Rating rating={data.rating} numReviews={data.numReviews} />
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



