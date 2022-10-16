import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle theme"
      rounded="full"
      size={["xs", "md", "lg"]}
      position="absolute"
      top={4}
      right={4}
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
  );
};
