import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      gridTemplateColumns={{ lg: "200px 1fr" }}
      gap="1"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="sidebar">Sidebar</GridItem>
      </Show>

      <GridItem area="main" px={10}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
