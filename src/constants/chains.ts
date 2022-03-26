import { Chain } from "wagmi";

type ChainName =
    | 'bsc'
    | 'bscTestnet'
    | 'localhost'


export const ChainMap: Record<ChainName, Chain> = {
    bsc: {
        id: 56,
        name: 'BSC',
        nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
        rpcUrls: ['https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org'],
        blockExplorers: [
            {
                name: 'Bscscan',
                url: 'https://bscscan.io',
            },
        ],
    },
    bscTestnet: {
        id: 97,
        name: 'Testnet BSC',
        nativeCurrency: { name: "TBNB", symbol: "TBNB", decimals: 18 },
        rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
        blockExplorers: [
            {
                name: "Testnet Bscscan",
                url: "https://testnet.bscscan.com/"
            }
        ]
    },
    localhost: {
        id: 31_337,
        name: 'Hardhat',
        rpcUrls: ['http://127.0.0.1:8545'],
    }
}

export const Chains: Chain[] = [
    ChainMap.bsc,
    ChainMap.bscTestnet,
    ChainMap.localhost
]