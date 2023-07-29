import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Button
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
export const Footer = () => {
    return (
        <Box bg='#2f2f2f' px="2rem" color='#fff'>
            <Container as={Stack} maxW={'6xl'} py={10} display='flex'  px='2.5rem'>
                <SimpleGrid columns={['1', '2', '2', '4']} spacing={8}>
                    <Stack>
                        <Text variant='listHeader'>Company</Text >
                        <Text variant='footerLink'> About Us</Text>
                        <Text variant='footerLink'> Blog </Text>
                        <Text variant='footerLink'> Careers</Text>
                        <Text variant='footerLink'> Contact Us</Text>
                    </Stack>

                    <Stack>
                        <Text variant='listHeader'>Support</Text >
                        <Text variant='footerLink'>Help Center </Text>
                        <Text variant='footerLink'> Safety Center </Text>
                        <Text variant='footerLink'>Community Guidelines</Text>
                    </Stack>

                    <Stack>
                        <Text variant='listHeader'>Legal</Text >
                        <Text variant='footerLink'> Cookies Policy</Text>
                        <Text variant='footerLink'> Privacy Policy</Text>
                        <Text variant='footerLink'>Terms of Service</Text>
                        <Text variant='footerLink'> Law Enforcement </Text>
                    </Stack>

                    <Stack
                        spacing={4}
                        textAlign={['center', "left", "left", "left"]}
                        mt={['2rem', '0', '0', '0']}
                    >
                        <Text variant='listHeader' mb="0">ShopNexus</Text>
                        <Text fontSize='12px' letterSpacing='2px'>©All rights reserved.</Text>
                        <Container
                            as={Stack}
                            maxW={'6xl'}
                            p='0'
                            py={4}
                            direction={['column', 'row']}
                            spacing={4}
                            justify={{ md: 'space-between' }}
                            align={{ md: 'center' }}
                        >
                            <Stack direction={'row'} spacing={6} justifyContent={['center', "left", "left", "left"]}>
                                <Button label={'Twitter'} _hover={{ opacity: "70%" }}>
                                    <FaTwitter />
                                </Button>
                                <Button label={'YouTube'} _hover={{ opacity: "70%" }}>
                                    <FaYoutube />
                                </Button>
                                <Button label={'Instagram'} _hover={{ opacity: "70%" }}>
                                    <FaInstagram />
                                </Button>
                            </Stack>
                        </Container>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
