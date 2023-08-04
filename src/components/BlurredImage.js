import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { Image as ChakraImage } from '@chakra-ui/react'
export const BlurredImage = ({ imageURL, name }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = imageURL;
    }, [imageURL]);
    return (
        <>
            {!imageLoaded ? (
                <Blurhash
                    hash="LMQ]yh%M?vMx?vWBMxoz_NM{D%xu"
                    width={"288px"}
                    height={"288px"}

                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            ) : (
                <ChakraImage
                    src={imageURL}
                    alt={`Picture of ${name}`}
                    roundedTop="lg"
                    boxSize='72'
                    mx='auto'
                    loading='lazy'
                />
            )}
        </>
    );
};
