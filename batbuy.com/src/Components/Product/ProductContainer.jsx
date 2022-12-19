import React from "react";
import {
  Box,
  Grid,
  Text,
  Heading,
  Flex,
  HStack,
  Select,
  Divider,
} from "@chakra-ui/react";
import ProductCardNew from "./ProductCardNew";
import { Pagination } from "../Pagination";
import ProductSidebar from "./ProductSidebar";

const ProductContainer = ({
  data,
  totalCount,
  page,
  setPage,
  limit,
  handleSortAndLimit,
  handleFilterChange,
}) => {
  return (
    <Box px="10" pt="110px" bg="#0f0b06" width="100%">
      <ProductSidebar handleFilterChange={handleFilterChange} />
      <Flex direction="column" margin="auto" border="0px solid red" width="85%">
        <Flex mb="10px" justifyContent="space-between">
          <Heading size="2xl" textTransform="capitalize" color="white">
            {data.length && data[0]["category"]}
          </Heading>

          <Flex border="0px solid red" gap="5px" alignItems="center" mr="-80px">
            <Text fontSize="xl" color="white">Sort By:</Text>
            <Select
              variant="outline"
              color="black"
              bg="white"
              placeholder="Best Match"
              borderRadius="4"
              w=""
              onChange={(e) => handleSortAndLimit(e.target.value)}
            >
              <option value="pr-htl"> Price: High to Low</option>
              <option value="pr-lth"> Price: Low to High</option>
              <option value="rt-htl"> Highest Rated </option>
              <option value="12pp">Products Per Page: 12</option>
              <option value="16pp">Products Per Page: 16</option>
              <option value="20pp">Products Per Page: 20</option>
            </Select>
          </Flex>
        </Flex>
      </Flex>

      <Grid
        // pt="100px"

        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {data.map((item) => {
          return <ProductCardNew key={item.id} item={item} />;
        })}
      </Grid>
      <Pagination
        totalCount={totalCount}
        limit={limit}
        current={page}
        onChange={(value) => setPage(value)}
      />
      {/* <Divider mt={0} mb={0}/> */}
    </Box>
  );
};

export default ProductContainer;
