import React from "react";
import { Box, Grid, Text, Heading } from "@chakra-ui/react";
import ProductCardNew from "./ProductCardNew";
import { Pagination } from "../Pagination";

const ProductContainer = ({ data }) => {
    
  return (
    <Box pt="120px" bg="#0f0b06">
      <Heading color="white">{data.length && data[0]["category"]}</Heading>


      <Grid
        // pt="100px"
        pr="25px"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {data.map((item) => {
          return <ProductCardNew key={item.id} {...item} />;
        })}
      </Grid>
      <Pagination />
    </Box>
  );
};

export default ProductContainer;
