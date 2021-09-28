import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header /> <Checkout />
          </Route>

          <Route path='/'>
            <Header /> <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
