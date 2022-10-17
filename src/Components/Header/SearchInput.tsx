import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
  useBreakpoint,
  useOutsideClick,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface ISearchInput {
  show: boolean;
  setShow: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  size: string;
}

export const SearchInput = ({ show, setShow, size }: ISearchInput) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (size === "sm") {
      setShow.off();
    } else {
      setShow.on();
    }
  }, [size]);

  useOutsideClick({
    ref: ref,
    handler: () => {
      if (size === "sm") {
        setShow.off();
      }
    },
  });

  return (
    <InputGroup
      display={"flex"}
      flexBasis={"1"}
      borderRadius="50px"
      bg={"gray.100"}
      p="2"
      gap="1"
    >
      <Input
        colorScheme={"gray"}
        p="5"
        w={["210px", "250px", null, "320px"]}
        borderRadius={"full"}
        border="none"
        _focusVisible={{ border: "none" }}
        ref={ref}
        _placeholder={{ color: "gray.200" }}
        placeholder="O que deseja encontrar?"
        display={show ? "inline-block" : "none"}
      />
      <InputRightElement
        position="relative"
        children={
          <IconButton
            colorScheme={"gray"}
            borderRadius="50%"
            aria-label="Search button"
            icon={<FaSearch />}
            onClick={show ? () => console.log("true") : setShow.toggle}
            _dark={{ color: "gray.400" }}
          />
        }
      />
    </InputGroup>
  );
};
