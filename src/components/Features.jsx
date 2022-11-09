import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";

import { GiPointySword } from "react-icons/gi";
import { FaDiscord, FaCheckCircle } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={"center"}
      borderColor={useColorModeValue("gray.200", "gray.600")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Features() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading
          as="h1"
          fontSize="5xl"
          color="#afe80c"
          fontFamily={"SEBANG_Gothic_Bold"}
        >
          Play, Trade and Connect
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          게임에 대한 정보 확인하고 NFT를 거래하세요.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={10}
        py={10}
      >
        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 280 }}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"#afe80c"}
                fontFamily={"SEBANG_Gothic_Bold"}
                px={3}
                py={1}
                color={"black"}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Information
              </Text>
            </Box>
            <Box py={4} px={12} fontFamily={"SEBANG_Gothic_Bold"}>
              <Text fontWeight="500" fontSize="2xl" margin="15px 0px 10px 0px">
                게임 정보
              </Text>
              <HStack justifyContent="center">
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  margin={"0px 0px 15px 0px"}
                >
                  게임사에서 제공하는 기본 정보와 함께 0xchip에서 분석한 리서치
                  자료를 제공합니다.
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <GiPointySword size="100" color="#afe80c" />
              <Box w="80%" pt={7}></Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 280 }}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"#afe80c"}
                fontFamily={"SEBANG_Gothic_Bold"}
                px={3}
                py={1}
                color={"black"}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                NFT MARKET
              </Text>
            </Box>
            <Box py={4} px={12} fontFamily={"SEBANG_Gothic_Bold"}>
              <Text fontWeight="500" fontSize="2xl" margin="15px 0px 10px 0px">
                NFT 거래
              </Text>
              <HStack justifyContent="center">
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  margin={"0px 0px 15px 0px"}
                >
                  게임플레이 등 다양한 활동을 통해 획득한 NFT를 빠르고 안전하게
                  거래하세요.
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <FaHandsHelping size="100" color="#afe80c" />
              <Box w="80%" pt={7}></Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 280 }}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"#afe80c"}
                fontFamily={"SEBANG_Gothic_Bold"}
                px={3}
                py={1}
                color={"black"}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                COMMUNITY
              </Text>
            </Box>
            <Box py={4} px={12} fontFamily={"SEBANG_Gothic_Bold"}>
              <Text fontWeight="500" fontSize="2xl" margin="15px 0px 10px 0px">
                커뮤니티
              </Text>
              <HStack justifyContent="center">
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  margin={"0px 0px 15px 0px"}
                >
                  게임별 커뮤니티 게시판에서 게임 공략 등 다양한 정보를 유저들과
                  나눠보세요.
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <FaDiscord size="100" color="#afe80c" />
              <Box w="80%" pt={7}></Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
