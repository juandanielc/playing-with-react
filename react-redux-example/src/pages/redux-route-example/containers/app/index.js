import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/redux-route-example">Home</Link>
      <Link to="/redux-route-example/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/redux-route-example" component={Home} />
      <Route exact path="/redux-route-example/about-us" component={About} />
    </main>
  </div>
)

export default App;
