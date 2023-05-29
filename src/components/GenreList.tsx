import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  onclick?: () => void;
}

const GenreList = ({ onSelectGenre, selectedGenre, onclick }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text color={"red"}>Error fetching genres</Text>;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} pb={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                whiteSpace={"normal"}
                textAlign={"start"}
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                color={genre.id == selectedGenre?.id ? "green.400" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                  onclick;
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
