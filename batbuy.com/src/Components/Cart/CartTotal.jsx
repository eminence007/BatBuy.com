import {
  Box,
  Button,
  Flex,
  Heading,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const finalTotal = (data) => {
  let sum = 0;
  data.forEach((el) => {
    sum += el.product.price * el.quantity;
  });
  return "$" + dollarIndianLocale.format(sum) + "/-";
};

const CartTotal = ({ cartData, handlePlaceOrder, buttonLoading }) => {
  return (
    <Box
      maxH="300px"
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
      <Flex direction={"column"} color={"#fcde04"}>
        <Flex
          justifyContent={"space-between"}
          borderBottom={"1px solid #ddd"}
          alignItems={"center"}
        >
          <Box>Total MRP</Box>
          <Box>{finalTotal(cartData)}</Box>
        </Flex>
        <Flex justifyContent={"space-between"} borderBottom={"1px solid #ddd"}>
          <Box>Discount on MRP</Box>
          <Box>0</Box>
        </Flex>
        <Flex justifyContent={"space-between"} borderBottom={"1px solid #ddd"}>
          <Box>Coupon Discount</Box>
          <Box >
            <Button
              variant={"outline"}
              focusBorderColor="#fcde04"
              color="black"
              bg="#fcde04"
              _hover={{ bg: "black", color: "#fcde04" }}
            >
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
          <Box>{finalTotal(cartData)}</Box>
        </Flex>
      </Flex>
      <Center>
        <Button
          mt={"20px"}
          isLoading={buttonLoading}
          onClick={handlePlaceOrder}
          color="black"
          bg="#fcde04"
          _hover={{ bg: "black", color: "#fcde04" }}
          variant="outline"
        >
          Place Your Order
        </Button>
      </Center>
    </Box>
  );
};

export default CartTotal;
