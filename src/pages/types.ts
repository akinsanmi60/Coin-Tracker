export type CPProp = {
    [x: string]: number
     }
export type HistoricalProp = {
  block_time_in_minutes: number
  categories: [string]
  coingecko_rank: number
  coingecko_score: number
  description: {
    en: string,
    ja: string,
    ko: string,
  }
  genesis_date: string
  id: string
  image: {
    small: string
    thumb: string
    large: string
  }
  last_updated: string
  links: {
    homepage: [number]
    official_forum_url: [number]
  }
  liquidity_score: number
    market_cap_rank: string
    market_data: {
        current_price: CPProp
    }
  name: string
  symbol: string
}
