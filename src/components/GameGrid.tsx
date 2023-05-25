import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
      {error && <Text color={"red"}>{error}</Text>}
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
