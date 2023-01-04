import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  goerli,
  avalanche as avalancheRaw,
  avalancheFuji as avalancheFujiRaw,
  polygon as polygonRaw,
  polygonMumbai as polygonMumbaiRaw,
  Chain,
} from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

import { siwe } from "~/pages/api/siwe";

const isMainnet = /production/.test(
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV || "development"
);

const avalanche: Chain = {
  ...avalancheRaw,
  rpcUrls: {
    default: {
      http: ["https://api.avax.network/ext/bc/C/rpc"],
      webSocket: ["wss://api.avax.network/ext/bc/C/rpc"],
    },
  },
};

const avalancheFuji: Chain = {
  ...avalancheFujiRaw,
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
      webSocket: ["wss://api.avax-test.network/ext/bc/C/rpc"],
    },
  },
};

const polygon: Chain = {
  ...polygonRaw,
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com"],
      webSocket: ["wss://polygon-rpc.com"],
    },
  },
};

const polygonMumbai: Chain = {
  ...polygonMumbaiRaw,
  rpcUrls: {
    default: {
      http: ["https://matic-mumbai.chainstacklabs.com"],
      webSocket: ["wss://matic-mumbai.chainstacklabs.com"],
    },
  },
};

// Main wagmi configuration
export const { provider, webSocketProvider, chains } = configureChains(
  isMainnet
    ? [mainnet, avalanche, polygon]
    : [goerli, avalancheFuji, polygonMumbai],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY || "" }),
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "" }),
    publicProvider(),
  ]
);

const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: "Rens Metaverse",
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    infuraId: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    chains,
    provider,
    webSocketProvider,
  })
);

function BlockchainProvider(props: React.PropsWithChildren<{}>) {
  return (
    <WagmiConfig client={client}>
      <siwe.Provider>
        <ConnectKitProvider>{props.children}</ConnectKitProvider>
      </siwe.Provider>
    </WagmiConfig>
  );
}

export default BlockchainProvider;
