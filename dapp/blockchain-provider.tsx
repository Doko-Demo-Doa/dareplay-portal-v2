import {
  Chain,
  configureChains,
  createClient,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

import { extraChains } from "dapp/config";

// Extra provider: BSC
const bscTestnetChain: Chain = {
  id: extraChains.BSC_TESTNET,
  name: "BNB",
  network: "Binance Smartchain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BSC",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  blockExplorers: {
    default: { name: "bscscan", url: "https://testnet.bscscan.com/" },
  },
  testnet: true,
};

const avalancheChain: Chain = {
  id: extraChains.AVALANCHE_C_CHAIN,
  name: "AVAX",
  network: "Avalanche C-Chain",
  nativeCurrency: {
    decimals: 18,
    name: "AVAX",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: "https://api.avax.network/ext/bc/C/rpc",
  },
  blockExplorers: {
    default: {
      name: "c-chain",
      url: "https://snowtrace.io/",
    },
  },
  testnet: false,
};

const avalancheTestnetChain: Chain = {
  id: extraChains.BSC_TESTNET,
  name: "AVAX",
  network: "Avalanche Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "AVAX",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: "https://api.avax-test.network/ext/bc/C/rpc",
  },
  blockExplorers: {
    default: { name: "fuji-c-chain", url: "https://testnet.snowtrace.io/" },
  },
  testnet: true,
};

// Main wagmi configuration
const { provider, chains } = configureChains(
  [...defaultChains, bscTestnetChain, avalancheChain, avalancheTestnetChain],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        // if (chain.id !== extraChains.BSC_TESTNET) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: "Rens",
    chains,
  })
);

function BlockchainProvider(props: React.PropsWithChildren<{}>) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>{props.children}</ConnectKitProvider>
    </WagmiConfig>
  );
}

export default BlockchainProvider;
