import { Box, Image, Text, Avatar } from '@chakra-ui/react'
// import { } from '@chakra-ui/icons'
import logo from '../assets/shopee.svg'
import user from '../assets/user.svg'
export const Header = () => {
    return (
        <Box
            as='nav'
            p="0.5rem 1rem"
            display='flex'
            justifyContent='space-between'
            // backgroundColor='lightblue'
            alignItems='center'
            borderBottom='2px solid #EDEDED'
        >
            <Box
                display="flex"
                alignItems="center"
                cursor="pointer"
                _hover={[{ textDecoration: "none" }, { opacity: "80%" }]}
            >
                <Image
                    src={logo}
                    boxSize="30"
                />
                <Text
                    margin='0px 0px 0px 8px'
                    fontSize={["16px", "16px", "16px", "17px"]}
                >
                    ShopNexa
                </Text>
            </Box>
            <Avatar
                src={user}
                display="flex"
                cursor="pointer"
                boxSize="2.2rem"
                _hover={{ opacity: "80%" }}
            />
        </Box>
    )
}