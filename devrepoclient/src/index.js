import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import DeveloperProfile from './components/DeveloperProfile';
 
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/developers/:developerId" component={DeveloperProfile} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);