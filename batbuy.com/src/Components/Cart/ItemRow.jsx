import { CloseIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");
const ItemRow = ({ item, removeProduct, changeQuantity, cartData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let { id, product, quantity } = item;
  let totalPrice = product.price * quantity;
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Product from Cart
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  removeProduct(id);
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Flex
        p={"10px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={"1px solid #ddd"}
        borderRadius={"lg"}
      >
        <Flex alignItems={"center"}>
          <Box w={useBreakpointValue({ base: "100%", md: "70%" })}>
            <Image src={product.image} w="100%" />
          </Box>
          <VStack
            lineHeight={"15px"}
            alignItems={"left"}
            color="#fcde04"
            pl={useBreakpointValue({ base: "5px", md: "50px" })}
          >
            <Text textTransform="capitalize" fontWeight={"bold"}>
              {product.brand}
            </Text>
            <Text noOfLines={1}>{product.desc}</Text>
            <Select
              bg="#fcde04"
              color="black"
              value={quantity}
              focusBorderColor="#fcde04"
              size={"xs"}
              w={"fit-content"}
              variant={"filled"}
              onChange={(e) => {
                changeQuantity(id, e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Select>
            <Text>
              Price: ${dollarIndianLocale.format(product.price)} / per unit
            </Text>
          </VStack>
        </Flex>
        <VStack>
          <Button colorScheme="yellow" variant="outline" onClick={onOpen}>
            <CloseIcon />
          </Button>
          <Text color="#fcde04" fontWeight={"bold"}>
            Total Price: ${dollarIndianLocale.format(totalPrice)}
            /-
          </Text>
        </VStack>
      </Flex>
    </>
  );
};
export default ItemRow;
