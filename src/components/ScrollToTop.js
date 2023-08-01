import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 1400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <Box
                    onClick={scrollToTop}
                    position='fixed'
                    bottom='20px'
                    right={7}
                    zIndex={3}
                    color='white'
                    rounded='full'
                    boxSize='10'
                    backgroundColor='blackAlpha.500'
                    cursor='pointer'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    >
                    <ChevronUpIcon
                    boxSize='7'
                    />
                </Box>

            )}
        </>
    );
}