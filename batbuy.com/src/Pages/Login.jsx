import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };

    case "password":
      return { ...state, password: action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function Login() {
  const { login } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
    console.log(state);
  };

  const handleSubmit = (e) => {
    login(state);
    dispatch({
      type: "reset",
    });
  };

  return (
    <Stack
      bg="
      #010101"
      color="white"
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1}>
        <Image
          h="100%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/login-bat.jpg"}
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Login to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              onChange={handleChange}
              value={state.email}
              type="email"
              placeholder="Enter email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              onChange={handleChange}
              value={state.password}
              type="password"
              placeholder="Enter password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox colorScheme="yellow">Remember me</Checkbox>
              <Link color={"#ede527"}>Forgot password?</Link>
            </Stack>
            <Button
              onClick={handleSubmit}
              bg="#ede527"
              color="#020202"
              variant={"outline"}
              _hover={{ color: "#ede527", bg: "#020202" }}
            >
              Login
            </Button>
            <Stack pt={6}>
              <Text align={"center"}>
                Not a Bat Member yet?{" "}
                <RouteLink style={{ color: "#e9e126" }} to="/signup">
                  Sign Up
                </RouteLink>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
