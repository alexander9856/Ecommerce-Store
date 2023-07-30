import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
    variants: {
        listHeader: {
            fontWeight: '500',
            fontSize: 'lg',
            mb: 2,
            fontWeight: 'bold',
            textAlign: ['center', "left", "left", "left"]
        },
        footerLink: {
            _hover: { opacity: '80%' },
            cursor: 'pointer',
            textAlign: ['center', "left", "left", "left"],
            _hover: { textDecoration: "underline" }
        },
        navLink: {
            px: 2,
            py: 1,
            _hover: [{ opacity: '80%' }, { opacity: '80%' }, { borderBottom: '2px solid black' }],
            cursor: 'pointer'
        },
        productTitle: {
            fontWeight: 'bold',
            letterSpacing: '1.5px',
            fontSize: ['16px', '17px', '18px', '20px'],
            textTransform: 'uppercase',
            textAlign: ['center', 'inherit', 'inherit', 'inherit']
        },
        productCount: {
            opacity: '80%',
            fontStyle: "italic",
            fontSize: '14px',
            textAlign: ['center', 'inherit', 'inherit', 'inherit'],
            mb: ['2rem', '0', '0']
        },
        filterBy:{
            my:'1rem',
            fontWeight:'500'
        }
    },

});

const Button = defineStyleConfig({
    variants: {
        loadMore: {
            display: 'block',
            px: ['5rem', '6rem', '8.5rem'],
            border: '1px solid black',
            borderRadius: '0px',
            textAlign: 'center',
            _hover: [{ opacity: '80%' }, { backgroundColor: 'gray.100' }],
            letterSpacing: '1.5px'

        }
    }
})


const theme = extendTheme({
    components: {
        Text,
        Button
    },
    breakpoints: {
        sm: "30em", // 480px
        md: "48em", // 768px
        lg: "62em", // 992px
        xl: "80em", // 1280px
        "2xl": "96em", // 1536px
    },
    ThemeConfig: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
});

export default theme;
