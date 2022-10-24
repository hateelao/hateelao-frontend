import "../../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../modules/NavBar";
import { MantineProvider } from "@mantine/core";
import { AuthPage } from "../modules/AuthPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Dosis",
      }}
    >
      {/* <AuthPage></AuthPage> */}
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(340deg, #2B5876 0%, #4E4376 100%)",
          paddingTop: "55px",
          minHeight: "100vh",
        }}
      >
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}

export default MyApp;
