import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Kaikas from "@assets/kaikas.png";

export default function NavBar({ currentVisibleIndex, onClickNavLink }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pos={"fixed"} top={0} width={"100%"} zIndex={999}>
      <Flex
        bg={"rgba(0,0,0,0.7)"}
        backdropFilter={"blur(7px)"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
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
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize={"lg"}
            textShadow={"0 0 0.15em #1da9cc"}
            
           
          >
            0xchips III
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav
              currentVisibleIndex={currentVisibleIndex}
              onClickNavLink={onClickNavLink}
            />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            width={"200px"}
            height={"28px"}
            fontSize={"md"}
            fontWeight={700}
            variant={"link"}
            href={"#"}
            bg={"rgb(247, 33, 25)"}
            color={"black"}
          >
            Submit Your Game
          </Button>

          <Box as="button" borderRadius="md" bg="white" px={4} h={"29px"}>
            <Image boxSize="20px" objectFit="cover" src={Kaikas} href={"#"} />
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ currentVisibleIndex, onClickNavLink }) => {
  const linkColor = "white";
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = "rgba(94, 92, 93, 0.5)";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => onClickNavLink(index)}
                fontSize={"lg"}
                fontWeight={500}
                color={
                  currentVisibleIndex === index ? "#afe80c" : { linkColor }
                }
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "4f4f50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#FFF01F" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#FFF158"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
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
        <Text fontWeight={600}>{label}</Text>
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
  // {
  //   label: "Games",
  //   children: [
  //     {
  //       label: "Top games ",
  //       subLabel: "Game Ranking",
  //       href: "#",
  //     },
  //     // {
  //     //   label: "Newly Added",
  //     //   subLabel: "Trending games to play",
  //     //   href: "#",
  //     // },
  //   ],
  // },
  {
    label: "Games",
  },
  {
    label: "Features",
    children: [
      {
        label: "What you can do with the service",
        href: "#",
      },
    ],
  },

  {
    label: "Statistics",
    children: [
      {
        label: "Top Games and NFT Ranking",
        href: "#",
      },
    ],
  },

  {
    label: "About Us",
    href: "#",
  },
];
