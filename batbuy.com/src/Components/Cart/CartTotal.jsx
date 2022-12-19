import {
  Box,
  Button,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const totalCalc = (data) => {
  let sum = 0;
  data.forEach((el) => {
    sum += el.product.price * el.qty;
  });
  return "₹" + dollarIndianLocale.format(sum) + "/-";
};

const CartTotal = ({ cartData }) => {
  return (
    <Box
      border={"1px solid #ddd"}
      p={"20px"}
      w={useBreakpointValue({ base: "100%", md: "40%" })}
    >
      <Heading as="h3" size="lg">
        Cart Total
      </Heading>
      <Heading as="h3" size="sm">
        Product Details
      </Heading>
      <Flex direction={"column"} color={"gray.600"}>
        <Flex
          justifyContent={"space-between"}
          borderBottom={"1px solid #ddd"}
          alignItems={"center"}
        >
          <Box>Total MRP</Box>
          <Box>{totalCalc(cartData)}</Box>
        </Flex>
        <Flex justifyContent={"space-between"} borderBottom={"1px solid #ddd"}>
          <Box>Discount on MRP</Box>
          <Box>0</Box>
        </Flex>
        <Flex justifyContent={"space-between"} borderBottom={"1px solid #ddd"}>
          <Box>Coupon Discount</Box>
          <Box>
            <Button variant={"ghost"} colorScheme={"pink"}>
              Apply Coupon
            </Button>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          borderBottom={"1px solid #ddd"}
          fontWeight={"bold"}
        >
          <Box>Total Amount</Box>
          <Box>{totalCalc(cartData)}</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartTotal;
