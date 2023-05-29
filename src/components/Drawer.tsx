import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";
import { MdSettings } from "react-icons/md";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GameDrawer({ onSelectGenre, selectedGenre }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <MdSettings color="gray.500" boxSize={10} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Games zote duniani</DrawerHeader>

          <DrawerBody onClick={onClose}>
            <GenreList
              onSelectGenre={onSelectGenre}
              selectedGenre={selectedGenre}
            />
          </DrawerBody>

          <DrawerFooter>
            <Text>
              Made by{" "}
              <Link color={"red.400"} href="https://github.com/alkadoHs">
                alkado_hs
              </Link>
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
