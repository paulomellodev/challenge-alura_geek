import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import { MenuFooter } from "./MenuFooter";
import { FooterForm } from "./FooterForm";

import logoALura from "../../assets/Logo.png";

export const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        w="full"
        bgColor={"blue.100"}
        _dark={{ bgColor: "gray.800" }}
        py={["8", null, "12", "16"]}
      >
        <Flex
          display="flex"
          justifyContent={"space-between"}
          flexDirection={["column", null, "row"]}
          w={"98%"}
          maxW="1136px"
          p={2}
          margin="auto"
          gap={5}
        >
          <Box
            display={"flex"}
            flexDirection={["column", null, null, "row"]}
            justifyContent="space-evenly"
            flex={1}
            alignItems={["center", null, null, "flex-start"]}
          >
            <Image
              src={logoALura}
              alt="Logo AluraGeek"
              marginRight={["1", "1", null, "8"]}
              objectFit={"contain"}
              w="44"
              mb={2}
            />
            <MenuFooter />
          </Box>
          <FooterForm />
        </Flex>
      </Box>
      <Box w="full" py={"8"}>
        <Text textAlign={"center"}>
          Desenvolvido por{" "}
          <Link href="">
            <strong>Paulo Mello</strong>
          </Link>
        </Text>
        <Text textAlign={"center"}>2022</Text>
      </Box>
    </>
  );
};
