import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "../Components/Loader";

function Rating({ ratings }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(ratings * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < ratings ? "#fbd309" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf color="#fbd309" key={i} style={{ marginLeft: "1" }} />
            );
          }
          return (
            <BsStar color="##fcde04" key={i} style={{ marginLeft: "1" }} />
          );
        })}
    </Box>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    handleProduct();
  }, [id]);

  //to fetch the product data
  const handleProduct = () => {
    setLoader(true);
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        setProductDetails(res.data);
        setLoader(false);
      })
      .catch((err) => console.log("err:", err));
  };

  console.log(productDetails);

  const { image, name, price, ratings, brand, details } = productDetails;

  if (loader) return <Loader />;
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={brand}
            src={image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {name}
            </Heading>
            <Text color="gray.900" fontWeight={300} fontSize={"2xl"}>
              ${price} USD
            </Text>
            <Rating ratings={ratings} />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor="gray.200" />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{details}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="yellow.500"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Long Lasting Battery </ListItem>
                  <ListItem>Intel UHD Graphics</ListItem>{" "}
                  <ListItem>Durable Built</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem> HD Touchscreen</ListItem>
                  <ListItem>Wi-Fi 5 + Bluetooth 6</ListItem>
                  <ListItem>Multiple Ports + Fast Charging</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="yellow.500"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    CPU Model:
                  </Text>{" "}
                  Intel Core i7-1250U CPU
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Graphics:
                  </Text>{" "}
                  Iris Xe Graphics
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Memory:
                  </Text>{" "}
                  16GB RAM, 1TB SSD
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Operating System:
                  </Text>{" "}
                  Windows 11 Pro
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Color:
                  </Text>{" "}
                  Tech Black with super matte finish on the body & mousepad
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Card Description:
                  </Text>{" "}
                  Integrated{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg="gray.900"
            color="white"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
