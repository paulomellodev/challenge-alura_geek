import { Image, ImageProps } from "@chakra-ui/react";
import { ImgHTMLAttributes } from "react";

interface ILogo extends ImageProps {}

export const Logo = ({ ...props }: ILogo) => {
  return (
    <Image
      marginRight={["1", "1", null, "8"]}
      objectFit={"contain"}
      w={["24", "24", "36", "44"]}
      {...props}
    />
  );
};
