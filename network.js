export default {
  id: 'cosmos-hub-mainnet',
  name: 'Cosmos Mainnet',
  description:
    'Cosmos is a network of independent parallel blockchains, powered by BFT consensus algorithms like Tendermint.',
  logo: `logo.svg`,
  website: 'https://cosmos.network',
  apiURL: 'https://lcd.nylira.net', // use `npx lcp --proxyUrl https://lcd.nylira.net`
  rpcURL: 'https://rpc.nylira.net/',
  stakingDenom: 'ATOM',
  coinLookup: [
    {
      viewDenom: 'ATOM',
      chainDenom: 'uatom',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/atom.png`,
    },
  ],
  addressPrefix: 'cosmos',
  validatorAddressPrefix: 'cosmosvaloper',
  validatorConsensusaddressPrefix: 'cosmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'ATOM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,
  localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
}
