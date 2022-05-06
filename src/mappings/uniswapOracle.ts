import { Exchange } from '../types/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'
import { equalToZero, zeroBD } from '../helpers'

export function uniswapUSDOracle(blockNum: BigInt): BigDecimal {
  const USDT_EXCHANGE = '0x3e9ada9f40cd4b5a803cf764ece1b4dae6486204'
  const USDT_BLOCK_CONTRACT_CREATION = 12844092

  const USDC_EXCHANGE = '0xd8d020934f008fbd10bd2b47263eb4e751acf1a2'
  const USDC_BLOCK_CONTRACT_CREATION = 51180627

  const BUSD_EXCHANGE = '0x0646ccb4983a65b1ad6b7c34d62fe2fcfbbd8b1b'
  const BUSD_BLOCK_CONTRACT_CREATION = 63651963

  const HUSD_EXCHANGE = '0x20c198e0ade7695d70953dac32a2904151cba0ee'
  const HUSD_BLOCK_CONTRACT_CREATION = 76191543

  let oneUSDInEth: BigDecimal
  const blockNumInt = blockNum.toI32()

  if (blockNumInt > HUSD_BLOCK_CONTRACT_CREATION) {
    const husdExchange = Exchange.load(HUSD_EXCHANGE)
    const husdPrice = husdExchange.price

    const busdExchange = Exchange.load(BUSD_EXCHANGE)
    const busdPrice = busdExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const usdtExchange = Exchange.load(USDT_EXCHANGE)
    const usdtPrice = usdtExchange.price

    const averagePrice = husdPrice
      .plus(busdPrice)
      .plus(usdcPrice)
      .plus(usdtPrice)
      .div(BigDecimal.fromString('4'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt > BUSD_BLOCK_CONTRACT_CREATION) {
    const busdExchange = Exchange.load(BUSD_EXCHANGE)
    const busdPrice = busdExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const usdtExchange = Exchange.load(USDT_EXCHANGE)
    const usdtPrice = usdtExchange.price

    const averagePrice = busdPrice
      .plus(usdcPrice)
      .plus(usdtPrice)
      .div(BigDecimal.fromString('3'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt > USDC_BLOCK_CONTRACT_CREATION) {
    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const usdtExchange = Exchange.load(USDT_EXCHANGE)
    const usdtPrice = usdtExchange.price

    const averagePrice = usdcPrice
      .plus(usdtPrice)
      .div(BigDecimal.fromString('2'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt >= USDT_BLOCK_CONTRACT_CREATION) {
    const usdtExchange = Exchange.load(USDT_EXCHANGE)
    const usdtPrice = usdtExchange.price

    if (!equalToZero(usdtPrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(usdtPrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else {
    // probably only for a few events, before the dai exchange was made
    oneUSDInEth = BigDecimal.fromString('0')
    return oneUSDInEth
  }
}
