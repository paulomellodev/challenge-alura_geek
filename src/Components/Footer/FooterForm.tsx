import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { Input } from "../FormsComponents/Input";
import { TextArea } from "../FormsComponents/TextArea";

export const FooterForm = () => {
  return (
    <Flex flexDirection="column" flex="1" p={2}>
      <Heading as="h3" fontSize="md" fontWeight="bold" mb={4}>
        Fale Conosco
      </Heading>

      <VStack as="form">
        <Input name="name" label="Nome" placeholder="Digite seu nome" />
        <TextArea
          name="description"
          label="Sua mensagem"
          placeholder="Escreva sua mensagem aqui..."
          mb={3}
        />
        <Button
          w={[165]}
          colorScheme={"blue"}
          borderRadius="none"
          variant={"solid"}
          p="6"
          alignSelf={"start"}
        >
          Enviar mensagem
        </Button>
      </VStack>
    </Flex>
  );
};
