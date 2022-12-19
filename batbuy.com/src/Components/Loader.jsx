import React from "react";
import { Image, Box } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box bg="#f4ff3c" w="full">
      <Image
        w="50%"
        margin="auto"
        src="https://media.giphy.com/media/EE1RWGH0iXQBRB5B2j/giphy.gif"
        alt="bat loader"
      />
      <br />
      <Image
        w="70%"
        margin="auto"
        src="https://tenor.com/wYgV.gif"
        alt="bat loader 2"
      />
    </Box>
  );
};
