import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Image,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

const Feature = ({ name, image, price, category }) => {
  const navigate = useNavigate();
  return (
    <GridItem>
      <Image src={image} alt={name} />
      <chakra.h3
        noOfLines={1}
        color="#dfdfdf"
        px="1"
        fontSize="l"
        fontWeight="600"
      >
        <b>
          <span style={{ color: "#fbd309", textDecoration: "underline" }}>
            Bat Buy
          </span>
          {name}
        </b>
      </chakra.h3>
      <chakra.p fontWeight="500" color="#dfdfdf" px="1">
        ${price}.00
      </chakra.p>
      <Button
        onClick={() => {
          navigate(`/products/${category}`);
        }}
        mx="1"
        px="2"
        bg="#fbd309"
        color="black"
        size="sm"
      >
        Shop Now
      </Button>
    </GridItem>
  );
};

export default function MidTop() {
  const navigate = useNavigate();
  return (
    <Box color="white" bg="#0f0b06" as={Container} maxW="full" p={10}>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="4xl" fontWeight="700">
              <span style={{ color: "#fbd309" }}>Batman fans</span>, savings and
              more.
            </chakra.h2>
            <Button
              onClick={() => {
                navigate(`/products/laptops`);
              }}
              bg="#fbd309"
              color="black"
              size="md"
            >
              Shop Now
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.h5 fontSize="xl">
              Are you a die-hard Batman fan? Look no further! <br />
              We have a wide variety of high-quality products that includes
              laptops, mobiles, games, and much more. Each item features high
              quality & latest technology are sure to impress fans of the{" "}
              <span style={{ color: "#fbd309" }}>Caped Crusader</span>.
            </chakra.h5>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          name={": Official Wireless Headphones"}
          image={
            "https://www.redwolf.in/image/cache/catalog/headphones/dc-comics-batman-logo-wireless-headphones-india-1-700x700.jpg"
          }
          price={49}
          category={"headphones"}
        />
        <Feature
          name={": Official Smart Watch"}
          image={
            "https://64.media.tumblr.com/9f35770194c70927f503f97bc2429a43/1be70d3fab230852-1c/s500x750/4f1d747550b9a9ad5390c2ade09c97bdeb700d2a.pnj"
          }
          price={149}
          category={"smartwatch"}
        />
        <Feature
          name={": Official VR HeadSet"}
          image={
            "https://64.media.tumblr.com/dbb74bbce30f7dfc1d13dc6457260394/cdbf18fda296ee95-48/s640x960/701cd3b12c48e5994ba940e6c044683f02cb5ade.pnj"
          }
          price={999}
          category={"vr-headset"}
        />
        <Feature
          name={": Official Apple iPhone 13 Pro"}
          image={
            "https://64.media.tumblr.com/6441e95757d493ba474b78815cf9597b/c46b99c404a2b62d-1b/s500x750/850177f15a37895f1fb3fc4936151d8052a6af82.pnj"
          }
          price={799}
          category={"iphone"}
        />
      </Grid>
    </Box>
  );
}
