import { Flex, Heading, HStack, Link as LinkChakraUI } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Card } from "./Card";

interface IProductData {
  img: string;
  title: string;
  price: number;
  id: number;
}

interface ISection {
  section: string;
  products: IProductData[];
}

export const Section = ({ products, section }: ISection) => {
  return (
    <Flex
      flexDirection={"column"}
      w={["100%", null, "90%"]}
      maxW={"1136px"}
      my="16"
      mx={"auto"}
      p={["2", null, 0]}
    >
      <HStack justifyContent={"space-between"} w="full" mb={4}>
        <Heading
          as={"h2"}
          color={"gray.400"}
          _dark={{ color: "gray.200" }}
          fontSize={["xl", null, null, "4xl"]}
        >
          {section}
        </Heading>
        <LinkChakraUI
          color={"blue.600"}
          fontWeight={"bold"}
          fontSize={["sm", null, "md"]}
          _dark={{ color: "blue.200" }}
        >
          Ver tudo
          <ArrowForwardIcon />
        </LinkChakraUI>
      </HStack>
      <HStack flexWrap={"wrap"} justifyContent="center">
        {products.map((product, index) => {
          if (index < 6) {
            return (
              <Card
                key={product.id}
                id={product.id}
                img={product.img}
                price={product.price}
                title={product.title}
              />
            );
          }
        })}
      </HStack>
    </Flex>
  );
};
