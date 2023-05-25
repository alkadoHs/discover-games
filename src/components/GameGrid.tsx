import { Grid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <Grid>
      {error && <Text color={"red"}>{error}</Text>}
      {games.map((game) => (
        <Text key={game.id}>{game.name}</Text>
      ))}
    </Grid>
  );
};

export default GameGrid;
