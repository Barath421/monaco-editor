import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Flex,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)}>
        <MenuButton as={Button} rightIcon={menuOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}>
          <Flex align="center">
            {language}
          </Flex>
        </MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
