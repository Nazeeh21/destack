import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import Layout from "../components/Layout";
import { WagmiConfig } from "wagmi";
import { chains, client } from "../client";
// import { LensProvider } from "@lens-protocol/react";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      {/* <LensProvider config={lensConfig}> */}
      <RainbowKitProvider theme={darkTheme()} coolMode chains={chains}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </RainbowKitProvider>
      {/* </LensProvider> */}
    </WagmiConfig>
  );
}
