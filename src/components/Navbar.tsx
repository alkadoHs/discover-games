import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./Searchinput";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justify="space-between" alignItems={"center"}>
      <Image src={logo} boxSize="60px" objectFit={"cover"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
