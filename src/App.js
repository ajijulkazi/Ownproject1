import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './componenets/Footer/Footer';
import NotFound from './componenets/NotFound/NotFound';
import User from './componenets/User/User';
import Header from './componenets/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/'>
          <User></User>
          </Route>
          <Route path='/home'>
            <User></User>
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
