import { GridItem, Grid } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Grid
      templateAreas={`"logo searchbar toggle"`}
      gridTemplateColumns={"100px 1fr 100px"}
      gridTemplateRows={"auto"}
      alignItems={"center"}
      gap="2"
    >
      <GridItem fontSize={19} area="logo">
        logo
      </GridItem>

      <GridItem area="searchbar">searchBar</GridItem>

      <GridItem area="toggle">DarkMode</GridItem>
    </Grid>
  );
};

export default Navbar;
