import { StoreContext } from '../contexts/StoreProvider';
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Flex,
    NumberInput,
    NumberInputField,
    Box,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'

export const SliderRangeInput = () => {
    const { priceBetween, setPriceBetween, maxPrice } = useContext(StoreContext);
    const [startPrice, setStartPrice] = useState(priceBetween[0])
    const [endPrice, setEndPrice] = useState(priceBetween[1])

    const format = (val) => `€` + val;
    const parse = (val) => val.replace(/^\$/, '');

    const onChangeValue = (value) => {
        setStartPrice(value[0]);
        setEndPrice(value[1]);
    }

    return (
        <Flex direction='column' px='1rem'>
            <Flex justify='space-between' px='0.5rem'>
                <NumberInput maxW='100px' value={format(startPrice)} onChange={(startPrice) => setStartPrice(parse(startPrice))}>
                    <NumberInputField />
                </NumberInput>

                <NumberInput maxW='100px' value={format(endPrice)} onChange={(endPrice) => setEndPrice(parse(endPrice))}>
                    <NumberInputField />
                </NumberInput>
            </Flex>

            <Box px='0.5rem'>
                <RangeSlider
                    aria-label={['min', 'max']}
                    min={0}
                    max={maxPrice}
                    colorScheme='blackAlpha'
                    value={[startPrice, endPrice]}
                    mt='2rem'
                    onChange={(value) => onChangeValue(value)}
                    onChangeEnd={() => setPriceBetween([startPrice, endPrice])}

                >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>

                    <RangeSliderThumb bgColor='grey' index={0} boxSize={5} />
                    <RangeSliderThumb bgColor='grey' index={1} boxSize={5} />
                </RangeSlider>
            </Box>
        </Flex>
    )
}