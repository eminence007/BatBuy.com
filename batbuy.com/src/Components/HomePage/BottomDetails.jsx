import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";

function BottomDetails() {
  return (
    <Container pt="20" bg="#0f0b06" py={10} maxW={"full"}>
      <Divider mt={0} mb={12} />
      <Grid
        color="white"
        w="90%"
        margin="auto"
        bg="#0f0b06"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading color="#fcde04" as={"h2"}>
            Why to be a Bat Member ?
          </Heading>
          <Button
            textAlign="center"
            mb="5"
            mt="5"
            mx="1"
            px="2"
            bg="#fbd309"
            color="black"
            size="md"
          >
            Join Now
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text color="#fcde04" fontSize={"4xl"} fontWeight={"bold"}>
              33%
            </Text>
            <Box fontSize={"sm"}>
              of our customers are{" "}
              <span style={{ color: "#fcde04" }}>Bat Members</span> and they{" "}
              <span style={{ color: "#fcde04" }}>save 50% more</span> than the
              regular customers.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text color="#fcde04" fontSize={"4xl"} fontWeight={"bold"}>
              100%
            </Text>
            <Box fontSize={"sm"}>
              Bat Members get a{" "}
              <span style={{ color: "#fcde04" }}>free Batman T-Shirt</span> for
              our collaborative project to enhance local textile industry.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default BottomDetails;
