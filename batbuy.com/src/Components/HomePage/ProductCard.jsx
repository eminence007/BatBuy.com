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
import { useNavigate } from "react-router-dom";

function Rating({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#fcde04" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf color="#fcde04" key={i} style={{ marginLeft: "1" }} />
            );
          }
          return (
            <BsStar color="##fcde04" key={i} style={{ marginLeft: "1" }} />
          );
        })}
    </Box>
  );
}

function ProductCard({ name, image, isNew, price, rating, id }) {
  const navigate = useNavigate();
  return (
    <Box bg="#0f0b06" minWidth="25%">
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
          {isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            h="200px"
            src={image}
            alt={`Picture of ${name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
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
              <Rating rating={rating} />
              <Box fontSize="2xl" color={useColorModeValue("#0f0b06", "white")}>
                <Box as="span" color={"#0f0b06"} fontSize="lg">
                  $
                </Box>
                {price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
          <Button
            onClick={() => navigate(`/product-details/${id}`)}
            textAlign="center"
            mb="5"
            mx="1"
            px="2"
            bg="#fbd309"
            color="black"
            size="md"
          >
            Shop Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductCard;
