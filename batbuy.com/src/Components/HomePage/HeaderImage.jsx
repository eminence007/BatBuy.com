import React from "react";
import { Image, Box } from "@chakra-ui/react";

export const HeaderImage = () => {
  return (
    <Box paddingTop="80px" boxSize="full">
      <Image
        h={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
        }}
        src="https://www.redwolf.in/image/cache/catalog/banners/official-merch/batman-merchandise-india1-1920-1920x350.jpg"
        alt="Batman"
      />
    </Box>
  );
};

// https://64.media.tumblr.com/da0ee8b50c06b7ae9d025255092e1011/7192d0de0fd9d111-c9/s640x960/0b7ef701d8e69fdff3d65efa11858b32f753289c.pnj
