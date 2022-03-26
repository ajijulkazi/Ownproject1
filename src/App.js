import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './componenets/Footer/Footer';
import Header from './componenets/Header/Header';
import User from './componenets/User/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route>
          <User></User>
          </Route>
        </Switch>

        <Footer></Footer>
      
      </Router>
        </div>
  );
}

export default App;
