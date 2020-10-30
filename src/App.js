import './App.css';
import { Header } from './header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Homepage } from './homepage/Homepage';
import { SkillsPage } from '../src/skills/Skills';
import { ProjectPage } from './projects/Projectspage';

function App() {
  return (
  <Router>
        <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/my-projects">
          <ProjectPage />
        </Route>
        <Route path="/skills">
          <SkillsPage />
        </Route>
        
    </Switch>
  </Router>
   
  );
}

export default App;
