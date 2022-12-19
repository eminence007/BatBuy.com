import React from "react";
import CartContainer from "../Components/Cart/CartContainer";
import CartTotal from "../Components/Cart/CartTotal";
import { Flex } from "@chakra-ui/react";

const Cart = () => {
  
  return (
    <Flex>
      <CartContainer />
      <CartTotal />
    </Flex>
  );
};

export default Cart;
