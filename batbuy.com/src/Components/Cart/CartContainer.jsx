import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ItemRow from "./ItemRow";

const CartContainer = ({ cartData, removeProduct, changeQuantity }) => {
  return (
    <Box
      border={"1px solid #ddd"}
      p={"20px"}
      w={useBreakpointValue({ base: "100%", md: "60%" })}
    >
      <Heading as="h3" size="lg">
        Products
      </Heading>
      <Flex direction={"column"} gap={"10px"}>
        {cartData.map((item) => {
          return (
            <ItemRow
              key={item.id}
              cartData={cartData}
              item={item}
              removeProduct={removeProduct}
              changeQuantity={changeQuantity}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default CartContainer;
