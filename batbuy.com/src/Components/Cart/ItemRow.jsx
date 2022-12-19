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
  Image,
  Select,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");
const ItemRow = ({ item, removeItem, changeQty }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let { id, product, qty } = item;
  let totalPrice = product.price * qty;
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
              Delete Item from Bag
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
                  removeItem(id);
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
          <Box w={useBreakpointValue({ base: "100%", md: "70px" })}>
            <Image src={product.image} w="100%" />
          </Box>
          <VStack
            lineHeight={"15px"}
            alignItems={"left"}
            pl={useBreakpointValue({ base: "5px", md: "50px" })}
          >
            <Text fontWeight={"bold"}>{product.brand}</Text>
            <Text noOfLines={1}>{product.desc}</Text>
            <Select
              value={qty}
              focusBorderColor="pink.400"
              size={"xs"}
              w={"fit-content"}
              variant={"filled"}
              onChange={(e) => {
                changeQty(id, e.target.value);
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
              Price: ₹{dollarIndianLocale.format(product.price)} / per unit
            </Text>
          </VStack>
        </Flex>
        <VStack>
          <Button colorScheme="pink" variant="ghost" onClick={onOpen}>
            <CloseIcon />
          </Button>
          <Text fontWeight={"bold"}>
            Total Price: ₹{dollarIndianLocale.format(totalPrice)}
            /-
          </Text>
        </VStack>
      </Flex>
    </>
  );
};
export default ItemRow;
