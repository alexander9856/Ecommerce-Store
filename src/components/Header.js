import { Box, Image, Text, Avatar } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from '../assets/shopee.svg'
import user from '../assets/user.svg'
import { useState } from 'react'
export const Header = () => {
    const [showBurger, setShowBurger] = useState(false);

    const onClickBurger = () => setShowBurger(state => !state);

    return (
        <Box>
            {(showBurger) && (
                <Box
                    w="100vw"
                    h="100vh"
                    position="absolute"
                    top="0"
                    left="0"
                    onClick={() => setShowBurger(false)}
                ></Box>
            )}

            <Box
                as='header'
                p="0.5rem 1.5rem"
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom='2px solid #EDEDED'
                position='sticky'
                width='100%'
                zIndex="999"
                
            >
                {/* logo and title */}
                <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    _hover={[{ textDecoration: "none" }, { opacity: "80%" }]}

                >
                    <Image
                        src={logo}
                        boxSize="45"
                    />
                    <Text
                        margin='7px 0px 0px 8px'
                        fontWeight='bold'
                        fontSize='19'
                    >
                        ShopNexa
                    </Text>
                </Box>

                {/* desktop menu */}
                <Box display={["none", "none", "flex", "flex"]} gap='2rem' fontSize='17px' >
                    <Text variant='menu'>Watches</Text>
                    <Text variant='menu'>Bags</Text>
                    <Text variant='menu'>Clothes</Text>
                    <Text variant='menu'>Shoes</Text>
                </Box>

                {/* mobile menu */}
                <Box display={["block", "block", "none", "none"]} >
                    <Box display={showBurger === false ? "none" : "flex"} >
                        <Box
                            backgroundColor="blackAlpha.500"
                            width="100vw"
                            color='#fff'
                            pos="fixed"
                            top="16"
                            zIndex='10'
                            left="0"
                            overflowY="auto"
                            display="flex"
                            flexDirection="column"
                            textAlign="center"
                        >
                            <Text variant='mobileMenu'>Watches</Text>
                            <Text variant='mobileMenu'>Bags</Text>
                            <Text variant='mobileMenu'>Clothes</Text>
                            <Text variant='mobileMenu'>Shoes</Text>
                        </Box>
                    </Box>
                </Box>

                <Box display="flex">
                    <HamburgerIcon
                        display={["block", "block", "none", "none"]}
                        cursor="pointer"
                        boxSize="2.2rem"
                        onClick={onClickBurger}
                        mr='1rem'
                    />
                    <Avatar
                        src={user}
                        cursor="pointer"
                        boxSize="2.2rem"
                        onClick={() => setShowBurger(false)}
                        _hover={{ opacity: "80%" }}
                    />
                </Box>

            </Box >
        </Box>

    )
}