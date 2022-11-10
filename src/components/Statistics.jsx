import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  StatHelpText,
  StatArrow,
  Image,
  Stack,
} from "@chakra-ui/react";

import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

import AnkrImage from "@assets/Ankr.PNG";
import GalaGamesImage from "@assets/GalaGames.PNG";
import thesandboxImage from "@assets/thesandbox.PNG";
import { forwardRef } from "react";

function StatsCard(props) {
  const { title, stat, percent, source, icon } = props;
  return (
    <Stat
      px={{ base: 15, md: 20 }}
      py={"5"} 
      shadow={"xl"}
      border={"2px solid"}
      borderColor={"green.700"}
      rounded={"lg"}
      
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={"xl"} fontWeight={"large"} isTruncated color={"green.400"}>
            {title}
          </StatLabel>
          <Stack spacing='24px' direction='row'>  
            <Box> 
              <StatNumber fontSize={"xl"} fontWeight={"medium"}>
                {stat}
              </StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                {percent}
              </StatHelpText>
            </Box>
            <Image boxSize='50px' src={source} />
          </Stack>
        </Box>
        <Box ml={15} my={"auto"} color={"green.300"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Statistics = forwardRef((props, ref) => {
  return (
    <Flex
      direction={"column"}
      px={{ base: 2, sm: 12, md: 17 }}
      justify={"center"}
      align={"center"}
      h={"100vh"}
      pos={"relative"}
      ref={ref}
    >
      <Box
        w={"25%"}
        h={"25%"}
        bgGradient={"linear(to-r,#003300,#006600)"}
        pos={"absolute"}
        zIndex={-3}
        filter={"blur(100px)"}
      ></Box>
      <chakra.h1
        textAlign={"center"}
        fontSize={"6xl"}
        py={10}
        fontWeight={"bold"}
      >
        All Gaming NFT Ranking
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, md: 8 }}>
        <StatsCard
          title={"Top Trending NFT Games"}
          stat={"Ankr"}
          percent={"23.36%"}
          source={AnkrImage}
          icon={<BiTrendingUp size={"3em"} />}
        />
        <StatsCard
          title={"Recently Most Recommended"}
          stat={"Gala Games"}
          percent={"26,753"}
          source={GalaGamesImage}
          icon={<BsFillHandThumbsUpFill size={"3em"} />}
        />
        <StatsCard
          title={"Monthly Active Users"}
          stat={"The Sandbox"}
          percent={"732,593"}
          source={thesandboxImage}
          icon={<BsFillPeopleFill size={"3em"} />}
        />
      </SimpleGrid>
    </Flex>
  );
});

export default Statistics;
