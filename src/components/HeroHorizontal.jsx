import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import MW2 from "@assets/MW2.jpg";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}>
            {/* <Heading
          fontWeight={800}
          
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          All your{" "}
          <Text as={"span"} color={`#afe80c`}>
            {""} {"{Gaming NFT trades}"}
          </Text>{" "}
          in one place
        </Heading> */}
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                //bg: "blue.400",
                zIndex: -1,
              }}
              //textShadow={"0 0 0.15em #afe80c"}
            >
              All your {""}
              <Text as={"span"} color={`#afe80c`}>
                Gaming NFT Tradings
              </Text>
              {""}
              <br /> In one place
            </Text>
            {/* <Text color={"blue.400"} as={"span"}></Text>{" "} */}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            We help you Find your game and manage your NFT assets. Trade your
            gaming NFTs fast and safe!
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              height={"50px"}
              bg={"black"}
              color={"white"}
              _hover={{
                bg: "grey",
              }}
            >
              Find your game
            </Button>
            <Button
              rounded={"full"}
              bg={"black"}
              height={"50px"}
              color={"white"}
              _hover={{
                bg: "grey",
              }}
            >
              Trade your NFTs
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={MW2} />
      </Flex>
    </Stack>
  );
}
