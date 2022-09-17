// fetcher 함수는 반드시 fetch promise를 return해야 함

const BASE_URL = `https://api.coinpaprika.com/v1`;
// const BASE_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`)
  .then(
    (response) => response.json()
  );
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins${coinId}`)
  .then(
    (response) => response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers${coinId}`)
  .then(
    (response) => response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    // `${BASE_URL}?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}

