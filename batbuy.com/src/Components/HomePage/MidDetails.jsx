import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid "}
      borderColor={useColorModeValue("#fcde04", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel color="white" fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("#fcde04", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function MidDetails() {
  return (
    <Box
      bg="#0f0b06"
      color="#fcde04"
      maxW="full"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      {/* <Divider mt={12} mb={1} /> */}
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        color="#fcde04"
      >
        Become a <span style={{ color: "white" }}>Bat Member</span>, Get your
        products delievered <span style={{ color: "white" }}>FREE</span>.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Free Delievery"}
          stat={"For Bat Members"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Sellers"}
          stat={"1,000+"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Delievery"}
          stat={"All across USA"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
      <Divider mt={12} mb={0} />
    </Box>
  );
}
