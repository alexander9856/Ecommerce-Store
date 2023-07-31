import {
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Box,
    Stack,
    Checkbox,
    CheckboxGroup,
    Text
} from '@chakra-ui/react';

const capitalize = (value) =>  value[0].toUpperCase() + value.slice(1)

export const AccordionMenu = ({ colors }) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple >
            <AccordionItem  >
                <AccordionButton display='flex' justifyContent='space-between' borderBottom='1px solid #e2e8f0'>
                    <Text variant="filterBy" my='0'>Color</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='8px' pl='1rem'>
                    <CheckboxGroup >
                        <Stack spacing={[1, 2]} direction='column' borderBottom='none'>
                            {colors.map((x, index) => <Checkbox key={index} value={x} css={`> span:first-of-type {box-shadow: unset}`} >{capitalize(x)}</Checkbox>)}
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}