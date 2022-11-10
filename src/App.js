import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@components/NavBar";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import theme from "./theme";
import HeroHorizontal from "@components/HeroHorizontal";
import Fonts from "./Fonts";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import AboutUs from "@components/AboutUs";
import { useRef, useEffect, useState } from "react";
import useObserver from "./hooks/useObserver";
import "./App.css";

function App() {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));
  const featuresRef = useObserver(handleVisible(1));
  const statisticsRef = useObserver(handleVisible(2));
  const aboutUsRef = useObserver(handleVisible(3));

  const handleClickNavLink = (index) => {
    const refs = [heroRef, featuresRef, statisticsRef, aboutUsRef];
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar
        currentVisibleIndex={currentVisibleIndex}
        onClickNavLink={handleClickNavLink}
      />
      <HeroHorizontal ref={heroRef} />
      <Features ref={featuresRef} />
      <Statistics ref={statisticsRef} />
      <AboutUs ref={aboutUsRef} />
      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
