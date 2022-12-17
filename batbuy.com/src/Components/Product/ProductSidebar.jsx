import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Checkbox,
  Box,
  Text,
  Flex,
  VStack,
  Center,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { GiBatMask } from "react-icons/gi";

const ProductSidebar = ({ handleFilterChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box border="0px solid red">
      <Flex
        justifyContent="center"
        width="20"
        border="0px solid red"
        mb="-10"
        _hover={{ cursor: "pointer" }}
      >
        <FaFilter onClick={onOpen} fontSize="40px" color="white" />
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex
              h="20"
              alignItems="center"
              mx="5"
              justifyContent="space-between"
            >
              <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Bat Filters
              </Text>
              <GiBatMask fontSize="40px" />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Brand
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="lenovo"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        Lenovo
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="dell"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        Dell
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="samsung"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        Samsung
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="asus"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        Asus
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="lg"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        LG
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="hp"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        HP
                      </Checkbox>
                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="microsoft"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        Microsoft
                      </Checkbox>
                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="msi"
                        onChange={(e) =>
                          handleFilterChange(e.target.name, e.target.checked)
                        }
                      >
                        MSI
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Price
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="₹ 500 - 999"
                      >
                        ₹ 500 - 999
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="₹ 1000 - 1499"
                      >
                        ₹ 1000 - 1499
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="₹ 1500 - 1999"
                      >
                        ₹ 1500 - 1999
                      </Checkbox>

                      <Checkbox
                        size="lg"
                        colorScheme="yellow"
                        name="₹ 2000 - 2500"
                      >
                        ₹ 2000 - 2500
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Memory
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Features
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Color
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Screen-Size
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Processor
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* 
<AccordionItem>
  {({ isExpanded }) => (
    <>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Price
          </Box>
          {isExpanded ? (
            <MinusIcon fontSize="12px" />
          ) : (
            <AddIcon fontSize="12px" />
          )}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Checkbox size="lg" colorScheme="yellow" name="₹ 500 - 999">
          ₹ 500 - 999
        </Checkbox>

        <Checkbox size="lg" colorScheme="yellow" name="₹ 1000 - 1499">
          ₹ 1000 - 1499
        </Checkbox>

        <Checkbox size="lg" colorScheme="yellow" name="₹ 1500 - 1999">
          ₹ 1500 - 1999
        </Checkbox>

        <Checkbox size="lg" colorScheme="yellow" name="₹ 2000 - 2500">
          ₹ 2000 - 2500
        </Checkbox>
      </AccordionPanel>
    </>
  )}
</AccordionItem> */}

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Delievery Type
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Offers
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="yellow">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>

                      <Checkbox size="lg" colorScheme="gray">
                        Checkbox
                      </Checkbox>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ProductSidebar;
