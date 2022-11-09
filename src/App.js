import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@components/NavBar";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import theme from "./theme";
import HeroHorizontal from "@components/HeroHorizontal";
import Fonts from "./Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <HeroHorizontal />

      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
