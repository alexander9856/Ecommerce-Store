import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';

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
                <ChevronUpIcon
                    onClick={scrollToTop}
                    position='fixed'
                    bottom='20px'
                    right={3}
                    zIndex={3}
                    color='white'
                    rounded='full'
                    boxSize='8'
                    backgroundColor='blackAlpha.500'
                    cursor='pointer'
                />
            )}
        </>
    );
}