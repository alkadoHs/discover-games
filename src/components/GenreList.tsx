import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenreList;
