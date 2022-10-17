import {
  Flex,
  Heading,
  Image,
  Link as LinkChakraUI,
  Text,
} from "@chakra-ui/react";

interface ICard {
  img: string;
  title: string;
  price: number;
  id: number;
}

export const Card = ({ id, img, price, title }: ICard) => {
  return (
    <Flex
      flexDirection={"column"}
      w={[156, 166, 176]}
      alignSelf={"stretch"}
      gap={2}
      _dark={{ bg: "gray.800" }}
      p={1}
      borderRadius="md"
    >
      <Image src={img} alt={title} h="176px" objectFit={"cover"} />
      <Heading
        as={"h4"}
        color={"gray.400"}
        _dark={{ color: "gray.100" }}
        fontWeight={"medium"}
        fontSize="md"
      >
        {title}
      </Heading>
      <Text
        as={"span"}
        color={"gray.400"}
        _dark={{ color: "gray.100" }}
        fontWeight={"bold"}
      >
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </Text>
      <LinkChakraUI
        color={"blue.600"}
        fontWeight={"bold"}
        _dark={{ color: "blue.200" }}
      >
        Ver produto
      </LinkChakraUI>
    </Flex>
  );
};
