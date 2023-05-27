import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Rating</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Popularity</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
