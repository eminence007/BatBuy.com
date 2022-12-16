import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Select,
  Divider,
  Checkbox,
  Center,
  Button,
  HStack,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { GiBatMask } from "react-icons/gi";
import { ReactText } from "react";

// const LinkItems = [
//   { name: "Home", icon: FiHome },
//   { name: "Trending", icon: FiTrendingUp },
//   { name: "Explore", icon: FiCompass },
//   { name: "Favourites", icon: FiStar },
//   { name: "Settings", icon: FiSettings },
// ];

export default function ProductSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      //   overflow="scroll"
      pt="80px"
      minH="100vh"
      bg={useColorModeValue("#0f0b06", "gray.900")}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="5" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Bat Filters
        </Text>
        <GiBatMask fontSize="30px" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
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
                  colorScheme="gray"
                  name="lenovo"
                  //   onChange={handleFilterChange}
                >
                  Lenovo
                </Checkbox>

                <Checkbox
                  size="lg"
                  colorScheme="gray"
                  name="apple"
                  //   onChange={handleFilterChange}
                >
                  Apple
                </Checkbox>

                <Checkbox
                  size="lg"
                  colorScheme="gray"
                  name="samsung"
                  //   onChange={handleFilterChange}
                >
                  Samsung
                </Checkbox>

                <Checkbox
                  size="lg"
                  colorScheme="gray"
                  name="asus"
                  //   onChange={handleFilterChange}
                >
                  Asus
                </Checkbox>

                <Checkbox
                  size="lg"
                  colorScheme="gray"
                  name="lg"
                  //   onChange={handleFilterChange}
                >
                  LG
                </Checkbox>

                <Checkbox
                  size="lg"
                  colorScheme="gray"
                  name="hp"
                  //   onChange={handleFilterChange}
                >
                  HP
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
                <Checkbox size="lg" colorScheme="gray" name="₹ 500 - 999">
                  ₹ 500 - 999
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 1000 - 1499">
                  ₹ 1000 - 1499
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 1500 - 1999">
                  ₹ 1500 - 1999
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 2000 - 2500">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
                <Checkbox size="lg" colorScheme="gray" name="₹ 500 - 999">
                  ₹ 500 - 999
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 1000 - 1499">
                  ₹ 1000 - 1499
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 1500 - 1999">
                  ₹ 1500 - 1999
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray" name="₹ 2000 - 2500">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
                <Checkbox size="lg" colorScheme="gray">
                  Checkbox
                </Checkbox>

                <Checkbox size="lg" colorScheme="gray">
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
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
