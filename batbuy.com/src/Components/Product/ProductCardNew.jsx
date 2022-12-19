import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          return <BsStar color="#fcde04" key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function ProductCardNew({ item }) {
  const { name, image, price, ratings, categories, id } = item;
  const handleAddToCart = () => {
    let obj = {
      product: item,
      quantity: 1
    };
    
  };
  return (
    <Box>
      {/* <Divider mt={12} mb={12} /> */}
      <Flex mt={17.5} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          color="#0f0b06"
          maxW="xs"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          textAlign="center"
          pt="5px"
        >
          <Link to={`/product-details/${id}`}>
            <Box>
              <Image
                h="200px"
                p="10px"
                src={image}
                alt={`Picture of ${name}`}
                roundedTop="lg"
              />

              <Box p="6">
                {/* <Box d="flex" alignItems="baseline">
              {isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box> */}
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    noOfLines={2}
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {name}
                  </Box>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                  <Rating ratings={ratings} />
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("#0f0b06", "white")}
                  >
                    <Box as="span" color={"#0f0b06"} fontSize="lg">
                      $
                    </Box>
                    {price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Link>
          <Box>
            <Button
              textAlign="center"
              mb="5"
              mx="1"
              px="2"
              bg="#fbd309"
              color="black"
              size="md"
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductCardNew;
