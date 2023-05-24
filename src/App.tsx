import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      gridTemplateColumns={{ lg: "200px 1fr" }}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem bg="pink.300" area="sidebar">
          Sidebar
        </GridItem>
      </Show>

      <GridItem bg="green.300" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
