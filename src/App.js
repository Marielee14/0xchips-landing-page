import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@components/NavBar";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import theme from "./theme";
import HeroHorizontal from "@components/HeroHorizontal";
import Fonts from "./Fonts";
import Features from "@components/Features";
import Tables from "@components/Tables";
import AboutUs from "@components/AboutUs";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <HeroHorizontal />
      <Features />
      <Tables />
      <HeroTwo />
      <AboutUs/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
