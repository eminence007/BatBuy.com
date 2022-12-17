import React from "react";
import { Center, Button } from "@chakra-ui/react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

export const Pagination = ({ totalCount, current, onChange, limit }) => {
  const initialFocusRef = React.useRef();

  return (
    <div>
      <Center gap="15px" my="10px" alignItems="center">
        <Button
          colorScheme="yellow"
          onClick={() => onChange(current - 1)}
          disabled={current <= 1}
        >
          <BsCaretLeft />
        </Button>
        {/* <Center
          borderTop="2px solid #fcde04"
          borderBottom="2px solid #fcde04"
          px="10px"
          bg="black"
          color="#fcde04"
        >
          {current}
        </Center> */}
        <Center>
          {new Array(Math.ceil(totalCount / limit)).fill(0).map((a, i) => (
            <Center
              initialFocusRef={current === i + 1}
              border="1px solid #fcde04"
              borderRadius="2px"
              cursor={"pointer"}
              m="2px"
              px="10px"
              // bg="black"
              color={current === i + 1 ? "black" : "#fcde04"}
              _hover={{ bg: " #fcde04", color: "black" }}
              onClick={() => onChange(i + 1)}
              disabled={current === i + 1}
              bg={current === i + 1 ? "#fcde04" : "black"}
            >
              {i + 1}
            </Center>
          ))}
        </Center>

        <Button
          colorScheme="yellow"
          onClick={() => onChange(current + 1)}
          disabled={current === Math.ceil(totalCount / limit)}
        >
          <BsCaretRight />
        </Button>
      </Center>
    </div>
  );
};
