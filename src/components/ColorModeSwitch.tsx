import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode == "dark"} onChange={toggleColorMode} />
      <Show above="md">
        <Text whiteSpace={"nowrap"}>ColorMode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
