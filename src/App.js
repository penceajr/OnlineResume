import './App.css';
import { Header } from './header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Homepage } from './homepage/Homepage';




function App() {
  return (
    <div>
 
        <Router>
        <Header />
          <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
