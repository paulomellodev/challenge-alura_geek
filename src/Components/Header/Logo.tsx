import { Image } from "@chakra-ui/react";
import { ImgHTMLAttributes } from "react";

interface ILogo extends ImgHTMLAttributes<HTMLImageElement> {}

export const Logo = ({ ...props }: ILogo) => {
  return (
    <Image
      marginRight={["1", "1", null, "8"]}
      objectFit={"contain"}
      w={[100, 100, 145, 176]}
      {...props}
    />
  );
};
