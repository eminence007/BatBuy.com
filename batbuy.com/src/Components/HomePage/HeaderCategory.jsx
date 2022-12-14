import { Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeaderTop from "./HeaderTop";

const categories = [
  {
    name: "Batman",
    src: "https://m.media-amazon.com/images/I/41AFqAAsTXL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "B",
    src: "https://m.media-amazon.com/images/I/41AFqAAsTXL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "an",
    src: "https://m.media-amazon.com/images/I/41AFqAAsTXL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "Batmn",
    src: "https://m.media-amazon.com/images/I/41AFqAAsTXL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "Bman",
    src: "https://m.media-amazon.com/images/I/41AFqAAsTXL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "tman",
    src: "https://m.media-amazon.com/images/I/41AFqAAsTXL._SY300_SX300_QL70_FMwebp_.jpg",
  },
];

export const HeaderCategory = () => {
  return (
    <div>
      <Grid
        templateColumns="repeat(6, auto)"
        justifyContent="space-around"
        alignItems="center"
        h="216px"
        w="full"
        bg="teal"
        gap="5"
        overflow="hidden"
        px={30}
      >
        {categories.map((el) => {
          return (
            <Stack key={el.name}>
              <HeaderTop src={el.src} />
              <Text>{el.name}</Text>
            </Stack>
          );
        })}
      </Grid>
    </div>
  );
};
