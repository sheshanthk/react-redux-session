import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './component/About';
import UrlUsers from './component/UrlUsers';

function App() {
  return (
    <div className="app-component">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/url-users' component={UrlUsers} />
          <Route path='/' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
