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
            _hover:{opacity:"80%"}
        },
    },

});

const theme = extendTheme({
    components: {
        Text
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
