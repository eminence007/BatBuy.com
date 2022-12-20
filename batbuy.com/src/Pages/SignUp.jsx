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
  useToast,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { GiBatMask } from "react-icons/gi";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import axios from "axios";

let initialState = {
  name: "",
  last_name: "",
  id: "",
  password: "",
};

const reducer = (formstate, action) => {
  switch (action.type) {
    case "name":
      return { ...formstate, name: action.payload };

    case "last_name":
      return { ...formstate, last_name: action.payload };

    case "id":
      return { ...formstate, id: action.payload };

    case "password":
      return { ...formstate, password: action.payload };

    case "reset":
      return initialState;

    default:
      return formstate;
  }
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formstate, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const val = e.target.name === "email" ? "id" : e.target.name; //we use email as an "id here" to make the email unique.
    dispatch({
      type: val,
      payload: e.target.value,
    });

    console.log(formstate);
  };

  const handleSubmit = (e) => {
    if (formstate.id && formstate.password && formstate.name) {
      axios
        .post(` http://localhost:8080/users`, formstate)
        .then((res) => {
          Promise.resolve("Successful");
          console.log(res);
          navigate("/login");
          toast({
            title: "Account created.",
            description: "Woah, You are a Bat Member now. Login to Explore!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
          Promise.reject("Failed");
          console.log("err: ", err);
          toast({
            title: "Something went wrong.",
            description:
              "This email is already taken. Please try again with another.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "You have missed something!",
        description: "Please fill all the required details.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }

    dispatch({
      type: "reset",
    });
  };

  return (
    <Flex
      pt="80px"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="#e9e126"
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
                  <Input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    value={formstate.name}
                    placeholder="Enter First Name"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="last_name"
                    onChange={handleChange}
                    type="text"
                    value={formstate.last_name}
                    placeholder="Enter Last Name"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                onChange={handleChange}
                type="email"
                value={formstate.id}
                placeholder="Enter Email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  value={formstate.password}
                  placeholder="Enter Password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    bg="#e9e126"
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
                onClick={handleSubmit}
                loadingText="Submitting"
                variant="outline"
                size="lg"
                bg="#e9e126"
                color="#0f0b06"
                _hover={{
                  bg: "#0f0b06",
                  color: "#e9e126",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouteLink style={{ color: "#e9e126" }} to="/login">
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
