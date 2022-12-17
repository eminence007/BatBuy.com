import React from "react";
import {
  Box,
  Grid,
  Text,
  Heading,
  Flex,
  HStack,
  Select,
} from "@chakra-ui/react";
import ProductCardNew from "./ProductCardNew";
import { Pagination } from "../Pagination";

const ProductContainer = ({
  data,
  totalCount,
  page,
  setPage,
  limit,
  handleSort,
  handleLimit,
}) => {
  return (
    <Box pt="120px" bg="#0f0b06">
      <Flex
        margin="auto"
        border="1px solid red"
        width="95%"
        justifyContent="space-between"
      >
        <HStack>
          <Select
            variant="filled"
            placeholder="Products Per Page"
            borderRadius="none"
            w=""
            onChange={(e) => handleLimit(e.target.value)}
          >
            <option value="8pp">8</option>
            <option value="12pp">12</option>
            <option value="16pp">16</option>
            <option value="20pp">20</option>
          </Select>
          <Heading color="white">{data.length && data[0]["category"]}</Heading>
          <Select
            variant="filled"
            placeholder="Best Match"
            borderRadius="none"
            w=""
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="pr-htl"> Price: High to Low</option>
            <option value="pr-lth"> Price: Low to High</option>
            <option value="rt-htl"> Highest Rated </option>
          </Select>
        </HStack>
      </Flex>

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
      <Pagination
        totalCount={totalCount}
        limit={limit}
        current={page}
        onChange={(value) => setPage(value)}
      />
    </Box>
  );
};

export default ProductContainer;
