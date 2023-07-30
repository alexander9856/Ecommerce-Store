import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Flex,
    NumberInput,
    Slider,
    NumberInputField,
    Box
} from '@chakra-ui/react'
import { useState } from 'react'
export const SliderRangeInput = () => {
    const [startPrice, setStartPrice] = useState(20)
    const [endPrice, setEndPrice] = useState(100)

    const format = (val) => `€` + val;
    const parse = (val) => val.replace(/^\$/, '');

    const onChangeValue = (value) => {
        setStartPrice(value[0])
        setEndPrice(value[1])
    }
    return (

        <Flex direction='column'>
            <Flex>
                <NumberInput maxW='100px' mr='2rem' value={format(startPrice)} onChange={(startPrice) => setStartPrice(parse(startPrice))}>
                    <NumberInputField />
                </NumberInput>

                <NumberInput maxW='100px' mr='2rem' value={format(endPrice)} onChange={(endPrice) => setEndPrice(parse(endPrice))}>
                    <NumberInputField />
                </NumberInput>
            </Flex>


            <RangeSlider
                aria-label={['min', 'max']}
                min={0}
                max={500}
                colorScheme='blackAlpha'
                value={[startPrice, endPrice]}
                mt='2rem'
                onChange={(value) => onChangeValue(value)}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>

                <RangeSliderThumb bgColor='grey' index={0} boxSize={5} />
                <RangeSliderThumb bgColor='grey'  index={1} boxSize={5} />
            </RangeSlider>
        </Flex>

    )
}