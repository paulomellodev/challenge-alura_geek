import { Link, VStack } from "@chakra-ui/react";

export const MenuFooter = () => {
  return (
    <VStack
      display="flex"
      justifyContent="space-evenly"
      alignItems={["center", null, "flex-start"]}
      h={["full"]}
    >
      <Link p={2}>Quem somos nós</Link>
      <Link p={1}>Política de privacidade</Link>
      <Link p={1}>Programa fidelidade</Link>
      <Link p={1}>Nossas lojas</Link>
      <Link p={1}>Quero ser franqueado</Link>
      <Link p={2}>Anucie aqui</Link>
    </VStack>
  );
};
