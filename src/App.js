import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './componenets/Footer/Footer';
import NotFound from './componenets/NotFound/NotFound';
import User from './componenets/User/User';
import Header from './componenets/Header/Header';
import UserDetail from './componenets/UserDetail/UserDetail';
import Home from './componenets/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <User></User>
          </Route>
          <Route path='/user'>
            <User></User>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/userdetails/:userId">
              <UserDetail></UserDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      
      </Router>
        </div>
  );
}

export default App;
