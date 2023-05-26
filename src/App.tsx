import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main" px={3}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
