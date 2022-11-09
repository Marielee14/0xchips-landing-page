import { extendTheme } from "@chakra-ui/react";
import "@fontsource/aldrich";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#1f1f1f",
        color: "white",
      },
    },
  },

  fonts: {
    body: ` "Aldrich", sans-serif; `, 
    heading: `"Aldrich", sans-serif;  `,
  },
});

export default theme;
