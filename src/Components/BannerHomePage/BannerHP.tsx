import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";

import banner from "../../assets/banner.jpg";

interface IHeader {
  title: string;
  description: string;
  section: string;
}

export const Banner = ({ title, description, section }: IHeader) => {
  return (
    <Box as="div" h={["48", null, "80"]} w="full">
      <Image
        src={banner}
        h={["48", null, "80"]}
        w="full"
        alt={`Banner Promocional ${section}`}
        objectFit={"cover"}
      />
      <Box maxW="1136px" margin="0 auto" position="relative">
        <Box
          position="absolute"
          bottom={"6"}
          mx={4}
          alignItems="flex-start"
          _dark={{ color: "gray.300" }}
          color={"white"}
        >
          <Heading
            fontSize={["2xl", null, "3xl", "5xl"]}
            fontWeight="bold"
            mb={[2, null, 3, 4]}
          >
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            fontSize={["sm", null, "xl", "2xl"]}
            mb={[2, null, 3, 4]}
          >
            {description}
          </Text>
          <Button
            w={[136, null, null, 160]}
            colorScheme={"blue"}
            borderRadius="none"
            variant={"solid"}
            p="6"
          >
            Ver {section.toUpperCase()}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
