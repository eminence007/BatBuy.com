import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function BottomNewsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial" || "submitting" || "success");
  const [error, setError] = useState(false);

  return (
    <Flex
      minH={"40vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#fbd309", "gray.800")}
    >
      <Container
        maxW={"lg"}
        bg={useColorModeValue("#0f0b06", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
          color="white"
        >
          Subscribe to our weekly Newsletter
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.800",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "yellow"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text mt={2} textAlign={"center"} color={error ? "red.500" : "white"}>
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}
