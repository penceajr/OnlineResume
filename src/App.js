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
import { Employement } from './workplace/Workplace';
import { Aboutme } from './aboutme/Aboutme';
import { Contact } from './Contact/Contact';

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
        <Route path="/employement">
          <Employement />
        </Route>
        <Route path="/about-me">
          <Aboutme />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
    </Switch>
  </Router>
   
  );
}

export default App;
