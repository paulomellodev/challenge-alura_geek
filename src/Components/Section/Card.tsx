import {
  Flex,
  Heading,
  Image,
  Link as LinkChakraUI,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface ICard {
  img: string;
  title: string;
  price: number;
  id: number;
  position: number;
}

export const Card = ({ id, img, price, title, position }: ICard) => {
  const [isIntersection, setIsIntersection] = useState(false);
  const ref = useRef(null);
  let odd = true;

  if (position % 2 !== 0) {
    odd = false;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersection(true);
        }
      },
      { rootMargin: "-50px" }
    );

    if (ref.current !== null) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current !== null) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <SlideFade in={isIntersection} offsetX={odd ? "-200px" : "200px"}>
      <Flex
        ref={ref}
        flexDirection={"column"}
        w={[155, 165, 175]}
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
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        <LinkChakraUI
          color={"blue.600"}
          fontWeight={"bold"}
          _dark={{ color: "blue.200" }}
        >
          Ver produto
        </LinkChakraUI>
      </Flex>
    </SlideFade>
  );
};
