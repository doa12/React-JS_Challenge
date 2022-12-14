import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoinsList = styled.ul``

const coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
    /* 글씨 밖까지 클릭되게 하기 위해서 block 처리 */
    /* display: block; */
  }
  &:hover {
    a {
      color: ${props =>props.theme.accentColor};
    }
  }
`

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    }
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams<RouteParams>();
  const {state} = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  // console.log(state.name);
  useEffect(() => {
    (async() => {
      const infoData = await (
        await fetch('https://api.coinpaprika.com/v1/coins/${coinId}')
      ).json();
      const priceData = await (
        await fetch('https://api.coinpaprika.com/v1/tickers/${coinId}')
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId])
  return <Container>
  <Header>
    <Title>{state?.name || "Loading.."}</Title>;
  </Header>
  {loading ? (
      <Loader>Loading...</Loader>
    ) : null}</Container>;
}

export default Coin;