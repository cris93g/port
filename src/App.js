import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes';
import Nav from './Components/Nav/Nav'
function App() {
  return (
    <Router>
      <Nav/>
      {routes}
    </Router>
  );
}

export default App;
