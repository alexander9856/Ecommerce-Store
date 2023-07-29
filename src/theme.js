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
    },

});


const theme = extendTheme({
    components: {
        Text,
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
