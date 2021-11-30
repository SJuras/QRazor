import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router";

import Home from './pages/Home.jsx';
import Terms from './pages/Terms.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import Security from './pages/Security.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/disclaimer" exact component={Disclaimer} />
        <Route path="/security" exact component={Security} />
      </Switch>
    </Router>
  );
}

export default App;
