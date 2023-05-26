import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      gridTemplateColumns={{ lg: "200px 1fr" }}
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
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" px={3}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
