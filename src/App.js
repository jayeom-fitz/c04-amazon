import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

import { useStateValue } from './StateProvider';
import Header from './Header';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Payment from './pages/payment/Payment';

function App() {
  const [{  }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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

          <Route path='/payment'>
            <Header /> <Payment />
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
