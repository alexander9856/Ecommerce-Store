import React from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const Search = () => {
    return (
        <InputGroup size="sm" w='70%' >
            <Input type="text" placeholder="Search (keywords, etc...)" />
            <InputRightElement
                pointerEvents="none"
                children={<Search2Icon color="gray.600" />}
            />
        </InputGroup>
    );
};
