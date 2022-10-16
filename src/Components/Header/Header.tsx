import {
  Box,
  Button,
  HStack,
  useBoolean,
  useBreakpoint,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";

import logoALura from "../../assets/Logo.png";

export const Header = ({}) => {
  const [show, setShow] = useBoolean(true);
  const size = useBreakpoint();

  return (
    <Box
      h={["72px", null, null, "115px"]}
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      w={["100%", "100%", "90%"]}
      maxW="1136px"
      padding="0 10px 0"
      margin="auto"
    >
      <HStack>
        <Logo src={logoALura} alt="Logo AluraGeek" />
        <SearchInput show={show} setShow={setShow} size={size} />
      </HStack>
      <Button
        display={show && size === "sm" ? "none" : "flex"}
        w={[125, 125, 165, 165, 182]}
        colorScheme={"blue"}
        border={"2px"}
        variant={"outline"}
        p="6"
      >
        Login
      </Button>
    </Box>
  );
};
