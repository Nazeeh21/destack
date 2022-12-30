import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { LensConfig, sources, staging } from "@lens-protocol/react";
import { localStorage } from "@lens-protocol/react/web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

export const { chains, provider, webSocketProvider } = configureChains(
  [polygon, mainnet],
  [publicProvider()]
);
export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  sources: [sources.lenster, sources.orb, 'any-other-app-id'],
  environment: staging,
  storage: localStorage(),
};
