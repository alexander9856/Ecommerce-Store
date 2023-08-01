import { StoreContext } from '../contexts/StoreProvider'

import {
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Stack,
    Checkbox,
    CheckboxGroup,
    Text
} from '@chakra-ui/react';
import { useContext } from 'react'
export const AccordionMenu = ({ colors }) => {
    const { updateColorsCriteria, colorsCriteria } = useContext(StoreContext);
    return (
        <Accordion defaultIndex={[0]} allowMultiple >
            <AccordionItem  >
                <AccordionButton display='flex' justifyContent='space-between' borderBottom='1px solid #e2e8f0'>
                    <Text variant="filterBy" my='0'>Color</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='8px' pl='1rem'>
                    <Stack spacing={[1, 2]} direction='column' borderBottom='none'>
                        {colors.map((x, index) =>
                            <Checkbox
                                value={x}
                                css={`> span:first-of-type {box-shadow: unset}`}
                                key={index}
                                isChecked={colorsCriteria.includes(x)}
                                onChange={(e) => updateColorsCriteria(e.target.value)}
                            >
                                {capitalize(x)}
                            </Checkbox>)}
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

const capitalize = (value) => value[0].toUpperCase() + value.slice(1);
