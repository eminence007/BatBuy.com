import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { GiBatMask } from "react-icons/gi";
import { Link as RouteLink } from "react-router-dom";

let initialState = {
  name: "",
  last_name: "",
  email: "",
  password: "",
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formstate, dispatch] = useReducer(reducer, initialState);


  return (
    <Flex
      pt="80px"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="#fbd309"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text
            alignItems="center"
            display="flex"
            fontSize={"lg"}
            color={"#0f0b06"}
            gap="5px"
          >
            Become a Bat Member <GiBatMask fontSize="25px" color="#0f0b06" />
          </Text>
        </Stack>
        <Box rounded={"lg"} bg="#0f0b06" color="white" boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Enter First Name"/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Enter Last Name"/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter Email"/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} placeholder="Enter Password"/>
                <InputRightElement h={"full"}>
                  <Button
                    bg="#fbd309"
                    color="#0f0b06"
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                variant="outline"
                size="lg"
                bg="#fbd309"
                color="#0f0b06"
                _hover={{
                  bg: "#0f0b06",
                  color: "#fbd309",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouteLink style={{ color: "#fbd309" }} to="/login">
                  Login
                </RouteLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
