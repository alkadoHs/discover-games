import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      gridTemplateColumns={{ lg: "220px 1fr" }}
      alignItems="start"
      gap="1"
    >
      <GridItem area="nav" px={{ base: 1 }}>
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem
          area="sidebar"
          pl={5}
          pos="sticky"
          top="0.5"
          h="100dvh"
          overflowY="auto"
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" px={3}>
        <HStack spacing={5} py={4}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
