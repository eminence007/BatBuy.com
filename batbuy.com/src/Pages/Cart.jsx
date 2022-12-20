import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useToast,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContainer from "../Components/Cart/CartContainer";
import CartTotal from "../Components/Cart/CartTotal";
import { AuthContext } from "../Contexts/AuthContext";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const { batUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [buttonLoading, setButtonLoading] = useState(false);
  useEffect(() => {
    handleCartData();
  }, []);

  const handleCartData = () => {
    //setLoader(true);
    axios
      .get(`http://localhost:8080/cart`, {
        params: {
          userId: batUser.id,
        },
      })
      .then((res) => {
        Promise.resolve(res);
        setCartData(res.data);
      })
      .catch((err) => {
        Promise.reject(err);
        console.log("err:", err);
      });
    // .finally(() => setLoader(false));
  };

  // this function will handle the delete the item from the cart
  const removeProduct = (id) => {
    axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then((res) => {
        Promise.resolve(res);
        toast({
          title: "Product removed",
          description: "Product is successfully removed from the cart.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        handleCartData();
      })
      .catch((err) => {
        Promise.reject(err);
        console.log(err);
      });
  };

  // this function will handle the quantity change
  const changeQuantity = (id, quantity) => {
    axios
      .patch(`http://localhost:8080/cart/${id}`, {
        quantity: +quantity,
      })
      .then((res) => {
        Promise.resolve(res);
        handleCartData();
      })
      .catch((err) => {
        Promise.resolve(err);
        console.log(err);
      });
  };

  // this function will place the order
  const handlePlaceOrder = () => {
    if (cartData.length === 0) {
      toast({
        title: "Cart in empty",
        description: "Kindly Add the Product to the cart",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    let order = {
      userId: batUser.id,
      products: cartData,
      status: "Confirmed",
    };
    setButtonLoading(true);
    axios
      .post(`http://localhost:8080/orders`, order)
      .then(async () => {
        toast({
          title: "Order Successfull",
          description: "Your Order has been placed successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        await clearCart(0);
        navigate("/");
      })
      .catch((err) => {
        console.log("batman");
        toast({
          title: "Order Failed",
          description:
            "Something went wrong with your order, Please try again!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  const clearCart = (ind) => {
    if (cartData.length === ind) {
      setButtonLoading(false);
      return Promise.resolve("done");
    }
    axios
      .delete(`http://localhost:8080/cart/${cartData[ind].id}`)
      .then((res) => {
        Promise.resolve(res);
        clearCart(++ind);
      })
      .catch((err) => {
        Promise.reject(err);
        console.log(err);
      });
  };
  return (
    <>
      <Box
        color="white"
        bg="#0f0b06"
        px={useBreakpointValue({ base: "10px", md: "100px" })}
        py={"100px"}
      >
        <Heading textAlign={"center"} color={"#fbd309"} mb={"20px"}>
          {batUser.name}'s Cart
        </Heading>
        <Box
          p="10"
          w="full"
          bg="#000000"
          style={{ display: cartData.length === 0 ? "block" : "none" }}
        >
          <Image
            margin="auto"
            src="https://i.pinimg.com/564x/3a/e5/e0/3ae5e0e6f80ba741689fbedb10aa161f.jpg"
            alt="Empty Cart"
          />
          <Center p="10">
            <Heading color="#fbd309">Ahhh, This Seems Empty</Heading>
          </Center>
          <Center>
            <Button
              mt={"20px"}
              color="black"
              bg="#fcde04"
              _hover={{ bg: "black", color: "#fcde04" }}
              variant="outline"
              onClick={() => navigate("/")}
            >
              Explore!
            </Button>
          </Center>
        </Box>

        <Flex
          direction={useBreakpointValue({ base: "column", md: "row" })}
          gap={"30px"}
        >
          <CartContainer
            cartData={cartData}
            removeProduct={removeProduct}
            changeQuantity={changeQuantity}
          />
          <CartTotal
            cartData={cartData}
            handlePlaceOrder={handlePlaceOrder}
            buttonLoading={buttonLoading}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Cart;
