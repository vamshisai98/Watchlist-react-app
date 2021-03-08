import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Add from './components/Add';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Watchlist />
        </Route>
        <Route exact path='/watched'>
          <Watched />
        </Route>

        <Route exact path='/add'>
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;