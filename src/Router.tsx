import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin'

function Router() {
  return <BrowserRouter>
    <Switch>
      <Route path="/:coinId">
        {/* Router에게 URL이 변수값을 갖는다는 걸 말해주는 방식 */}
        {/* localhost:3000/btc로 입력해도 Coin이 화면에 표시됨 */}
        <Coin />
      </Route>
      <Route path="/">
        <Coins />
      </Route>
    </Switch>
  </BrowserRouter>
}

export default Router;