import { chainId } from "wagmi";

export const NATIVE_TOKEN = "0x0000000000000000000000000000000000000000";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const extraChains = {
  BSC_TESTNET: 97,
  BSC_MAINNET: 56,
  CRONOS_MAINNET: 25,
  CRONOS_TESTNET: 338,
  AVALANCHE_C_CHAIN: 43_114,
  AVALANCHE_TESTNET: 43_113,
};

export const supportedTestnets = [chainId.rinkeby, extraChains.BSC_TESTNET];
export const supportedMainnets = [chainId.mainnet, extraChains.BSC_MAINNET];

export const RPC_URLS: { [key: string]: string } = {
  [extraChains.BSC_MAINNET]: "https://bsc-dataseed.binance.org/",
  [extraChains.BSC_TESTNET]: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

export const networkMaps = {
  [chainId.rinkeby]: {
    name: "Rinkeby Testnet",
    symbol: "ETH",
  },
  [extraChains.BSC_TESTNET]: {
    name: "Binance Smart Chain Testnet",
    symbol: "TBNB",
  },
  [extraChains.BSC_MAINNET]: {
    name: "Binance Smart Chain",
    symbol: "BNB",
  },
  [chainId.polygonMumbai]: {
    name: "Polygon Mumbai Testnet",
    symbol: "MATIC",
  },
  [extraChains.AVALANCHE_C_CHAIN]: {
    name: "Avalanche C-Chain",
    symbol: "AVAX",
  },
  [extraChains.AVALANCHE_TESTNET]: {
    name: "Avalanche Testnet",
    symbol: "AVAX",
  },
};

export const nativeToken = {
  [chainId.rinkeby]: {
    address: NATIVE_TOKEN,
  },
};

export const layerZeroNetworkIds = {
  // Testnets
  rinkebyTestnet: 10001,
  bscTestnet: 10002,
  avalancheTestnet: 10006,
  polygonTestnet: 10009,
  arbitrumRinkebyTestnet: 10010,
  optimismKovanTestnet: 10011,
  fantomTestnet: 10012,
  // Mainnets
  ethereum: 101,
  bsc: 102,
  avalanche: 106,
  polygon: 109,
  arbitrum: 110,
  optimism: 111,
  fantom: 112,
  swimmer: 114,
  dfk: 115,
  harmony: 116,
  moonbeam: 126,
};
