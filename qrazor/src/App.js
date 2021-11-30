import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router";

import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
