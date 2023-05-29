import {
  Card,
  CardBody,
  HStack,
  Heading,
  Img,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { useRef } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId>();

  function addToast() {
    toastIdRef.current = toast({
      description:
        "Hi 👋, nafanyia kazi hili. Kwenye version 2 ijayo utaweza kuona detail za game hili.",
      isClosable: true,
    });
  }
  return (
    <Card rounded={10} overflow={"hidden"} onClick={addToast}>
      <Img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justify={"space-between"} mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
