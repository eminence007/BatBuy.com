import React from "react";
import { Image, Box } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box bg="#f4ff3c" w="full">
      <Image
        w="70%"
        src="https://media.giphy.com/media/EE1RWGH0iXQBRB5B2j/giphy.gif"
        alt="bat loader"
      />
    </Box>
  );
};
