import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "../../public/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "app/components/layouts/Header";
import Footer from "app/components/layouts/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
