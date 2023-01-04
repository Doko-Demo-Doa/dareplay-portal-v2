import {
  mainnet,
  goerli,
  bsc,
  bscTestnet,
  avalanche,
  avalancheFuji,
  polygon,
  polygonMumbai,
} from "wagmi/chains";

// Should be mapped correctly with process.env.NEXT_PUBLIC_DEPLOYMENT_ENV
const ADDR_ENV_DEV = "development";
const ADDR_ENV_STG = "staging";
const ADDR_ENV_PROD = "production";

export const NATIVE_TOKEN = "0x0000000000000000000000000000000000000000";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const supportedTestnets = [
  polygonMumbai.id,
  goerli.id,
  avalancheFuji.id,
];
export const supportedTestnetsExtra = [...supportedTestnets, bscTestnet.id];

export const supportedMainnets = [polygon.id, mainnet.id, avalanche.id];
export const supportedMainnetsExtra = [...supportedMainnets, bsc.id];

export const networkMaps = {
  [mainnet.id]: {
    name: "Ethereum",
    symbol: "ETH",
  },
  [goerli.id]: {
    name: "Goerli Testnet",
    symbol: "ETH",
  },
  [bscTestnet.id]: {
    name: "BSC Testnet",
    symbol: "BNB",
  },
  [bsc.id]: {
    name: "BSC Chain",
    symbol: "BNB",
  },
  [polygon.id]: {
    name: "Polygon",
    symbol: "MATIC",
  },
  [polygonMumbai.id]: {
    name: "Polygon Testnet",
    symbol: "MATIC",
  },
  [avalanche.id]: {
    name: "Avalanche",
    symbol: "AVAX",
  },
  [avalancheFuji.id]: {
    name: "Avalanche Testnet",
    symbol: "AVAX",
  },
};
