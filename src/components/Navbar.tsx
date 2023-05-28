import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./Searchinput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justify="space-between" alignItems={"center"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
