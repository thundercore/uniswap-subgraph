export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: 'TT-DAI',
    name: 'TT-DAI',
    tokenAddress: '0x2b31e3b88847f03c1335e99a0d1274a2c72059de',
    tokenDecimals: 18,
    exchangeAddress: '0x837b5a92f14992ce803e6743a0275c67722475e7'
  },
  {
    symbol: 'PMT',
    name: 'Planet Master Token',
    tokenAddress: '0xff99e917cf1e081a4e52836bbe8df610cbab9dd7',
    tokenDecimals: 18,
    exchangeAddress: '0x762d27f9abe403fd9f1fd092bb1ddff18e27274e'
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    tokenAddress: '0x4f3c8e20942461e2c3bdd8311ac57b0c222f2b82',
    tokenDecimals: 6,
    exchangeAddress: '0x3e9ada9f40cd4b5a803cf764ece1b4dae6486204'
  },
  {
    symbol: 'NICER',
    name: 'NICER',
    tokenAddress: '0x1f489e0282cfa883a4224c91309bc4d4c062ed93',
    tokenDecimals: 18,
    exchangeAddress: '0x3fd0d6e5461c535fc3d4c996561763a15334aecd'
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    tokenAddress: '0x18fb0a62f207a2a082ca60aa78f47a1af4985190',
    tokenDecimals: 8,
    exchangeAddress: '0x4d5cade82907d04f89063a27079e026f42aa16fc'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    tokenAddress: '0x22e89898a04eaf43379beb70bf4e38b1faf8a31e',
    tokenDecimals: 6,
    exchangeAddress: '0xd8d020934f008fbd10bd2b47263eb4e751acf1a2'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    tokenAddress: '0x6576bb918709906dcbfdceae4bb1e6df7c8a1077',
    tokenDecimals: 18,
    exchangeAddress: '0xa91f09a91ea6c5fcb2f4953fd0383b55506e8d52'
  },
  {
    symbol: 'RISER',
    name: 'RISER',
    tokenAddress: '0xc1e7000f379f2247ae930ba98d5568cd9d0b924b',
    tokenDecimals: 18,
    exchangeAddress: '0x1d1018c8b2bf965f0077ca25b5d7decb7f70615d'
  },
  {
    symbol: 'BUSD',
    name: 'Binance USD',
    tokenAddress: '0xbeb0131d95ac3f03fd15894d0ade5dbf7451d171',
    tokenDecimals: 18,
    exchangeAddress: '0x0646ccb4983a65b1ad6b7c34d62fe2fcfbbd8b1b'
  },
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    tokenAddress: '0x8ef1a1e0671aa44852f4d87105ef482470bb3e69',
    tokenDecimals: 18,
    exchangeAddress: '0x2fdc081adba636458965927c66e124f7bf0b7c9f'
  },
  {
    symbol: 'PUNCH',
    name: 'Punch',
    tokenAddress: '0x8c2eeccd83752db11594e699bbc8f756c4d03cb9',
    tokenDecimals: 18,
    exchangeAddress: '0xbf1754ba478267e88b40a488acf78e56a7deba6e'
  },
  {
    symbol: 'RAM',
    name: 'Ram',
    tokenAddress: '0xfe146d5710015d4075355fb7be8d133346ec63c2',
    tokenDecimals: 18,
    exchangeAddress: '0x28cc382df937cf3e2aa0f41686329bb61cf10a11'
  },
  {
    symbol: 'OOL',
    name: 'Oolong',
    tokenAddress: '0x47fe33d321EEF4719FdFf38EA72B1dFC7f0cdf10',
    tokenDecimals: 18,
    exchangeAddress: '0x5179Cdc003f5d993E91b5C1989bE24b993721068'
  },
  {
    symbol: 'GuessToken',
    name: 'GuessToken',
    tokenAddress: '0xe15c1cbF2de3fd15864F48A66b9da07736dAF578',
    tokenDecimals: 18,
    exchangeAddress: '0x71783060ce590992ba0652dd3cdb610b93260c6c'
  },
  {
    symbol: 'DICEZ',
    name: 'Zippy Dice',
    tokenAddress: '0xfcdea9f405bc6bd85c2e90c1debb9f3ca7a59d8f',
    tokenDecimals: 18,
    exchangeAddress: '0x1355cabc77854e123113b02964a0c39d2ea5f0c8'
  },
  {
    symbol: 'ZIPPY',
    name: 'ZIPPY',
    tokenAddress: '0xd46d770b3032d92d9e1d4e5b925bb8840cdb4314',
    tokenDecimals: 18,
    exchangeAddress: '0xeff4108645593329235edad644ec2ec1a63cf764'
  },
  {
    symbol: 'ACORN',
    name: 'Acorn',
    tokenAddress: '0x6e690dac861fe7441770f84146f263d1cfbe909c',
    tokenDecimals: 18,
    exchangeAddress: '0x1356d3bbf34451b624d5ae10a498bb01debbc8b8'
  },
  {
    symbol: 'HUSD',
    name: 'HUSD',
    tokenAddress: '0xfd6ec3e37f112bd30bbd726e7b0e73000cc2b98d',
    tokenDecimals: 8,
    exchangeAddress: '0x20c198e0ade7695d70953dac32a2904151cba0ee'
  },
  {
    symbol: 'HT',
    name: 'Huobi Token',
    tokenAddress: '0x0212b1f75503413b01a98158434c4570fb6e808c',
    tokenDecimals: 18,
    exchangeAddress: '0x77fa7040447745bc8ff4d519afeecfffcb0cdd57'
  },
  {
    symbol: 'FTT',
    name: 'Farm Thunder Token',
    tokenAddress: '0xd441cd6ecfa027721b4d9ea5d9a6a9649ad8b3da',
    tokenDecimals: 18,
    exchangeAddress: '0xc54d9feca39b8c9c65062f7732045e0aacf653d4'
  }
]
