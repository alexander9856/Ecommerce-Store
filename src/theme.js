import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
    variants: {
        menu: {
            p: '2px',
            fontSize: '18px',
            cursor: 'pointer',
            _hover: [{ opacity: '80%' }, { borderBottom: "1px solid black" }]
        },
        mobileMenu: {
            p: '2px',
            fontSize: '18px',
            cursor: 'pointer',
            _hover: { opacity: "80%" }
        },
        listHeader: {
            fontWeight: '500',
            fontSize: 'lg',
            mb: 2,
            fontWeight: 'bold',
            textDecoration: 'underline',
            textAlign: ['center',"left","left","left"]
        },
        footerLink: {
            _hover:{opacity:'80%'},
            cursor:'pointer',
            textAlign: ['center',"left","left","left"]
        }
    },

});
const Button = defineStyleConfig({
    variants: {
        social: {
            rounded: 'full',
            w: 8,
            h: 8,
            cursor: 'pointer',
            as: 'a',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
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
