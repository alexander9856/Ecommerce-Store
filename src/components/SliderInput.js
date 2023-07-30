import { useState } from 'react';
import {
    Flex,
    NumberInput,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    NumberInputField,
    Text
} from '@chakra-ui/react'
export const SliderInput = () => {
    const [startingValue, setStartingValue] = useState(0)
    const [endValue, setEndValue] = useState(20)

    const format = (val) => `€` + val
    const parse = (val) => val.replace(/^\$/, '')


    return (
        <Flex direction='column'>
            <Flex>
                <NumberInput maxW='100px' mr='2rem' value={format(startingValue)} onChange={(startingValue) => setStartingValue(parse(startingValue))}>
                    <NumberInputField />
                </NumberInput>

                <NumberInput maxW='100px' mr='2rem' value={format(endValue)} onChange={(endValue) => setEndValue(parse(endValue))}>
                    <NumberInputField />
                </NumberInput>
            </Flex>
            <Text variant='filterBy' mb='0'>Starting price :</Text>
            <Slider
                flex='1'
                focusThumbOnChange={false}
                value={startingValue}
                onChange={(startingValue) => setStartingValue(startingValue)}

            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize='sm' boxSize='32px' children={startingValue} />
            </Slider>

            <Text variant='filterBy' mb="0">End price :</Text>

            <Slider
                flex='1'
                focusThumbOnChange={false}
                value={endValue}
                onChange={(endValue) => setEndValue(endValue)}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize='sm' boxSize='32px' children={endValue} />
            </Slider>
        </Flex>
    )
}