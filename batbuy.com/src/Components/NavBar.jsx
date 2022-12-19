import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon,
} from "@chakra-ui/icons";

import { GiBatMask } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box>
      <Flex
        position="fixed"
        zIndex="999"
        top="0"
        w="100%"
        bg={useColorModeValue("#0f0b06", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            onClick={() => navigate(`/`)}
            h="60px"
            src="/altbatman_logo.png"
            cursor="pointer"
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
        >
          <Link fontSize={"2xl"} fontWeight="500" color="white" href="#">
            Cart
          </Link>
          <GiBatMask fontSize="30px" color="white" />
          <Button
            as={"a"}
            display={{ base: "block", md: "inline-flex" }}
            fontSize={"xl"}
            fontWeight={600}
            color={"white"}
            bg={"#0f0b06"}
            href={"#"}
            variant="outline"
            onClick={() => navigate(`/login`)}
            _hover={{
              bg: "white",
              color: "#0f0b06",
              border: "1px solid black",
            }}
          >
            Login
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const navigate = useNavigate();
  // const linkColor = useColorModeValue("black", "gray.200");
  // const linkHoverColor = useColorModeValue("gray.800", "white");
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack display="flex" alignItems="center" direction={"row"} spacing={4}>
      <Menu w="100px">
        <MenuButton
          bg="#0f0b06"
          color="white"
          colorScheme="#fbd309"
          fontSize="2xl"
          borderRadius="0px"
          as={Button}
          leftIcon={<HamburgerIcon />}
          _hover={{ bg: "#0f0b06", color: "white" }}
        >
          MENU
        </MenuButton>

        <MenuList bg="#0f0b06" color="#fbd309">
          <MenuGroup color="white" bg="#0f0b06" title="Bat Categories">
            <MenuItem
              onClick={() => navigate(`/products/laptops`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              Laptops
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/phones`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              Mobiles
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/tv`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              TVs
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/macbook`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              MacBooks
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/speakers`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              Speakers
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/gaming`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              Gaming Zone
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/smartwatch`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              Watches
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/products/excuisite`)}
              bg="#0f0b06"
              _hover={{ bg: "#fbd309", color: "#0f0b06" }}
            >
              Excuisite Stuff
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Stack spacing={3}>
        <InputGroup ml="12" w="199%">
          <InputRightElement
            pointerEvents="none"
            children={<Search2Icon color="gray.800" />}
          />
          <Input
            bg="white"
            color="gray.800"
            type="search"
            placeholder="Search Bat Buy"
          />
        </InputGroup>
      </Stack>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      position="fixed"
      top="0"
      bg={useColorModeValue("#0f0b06", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
