import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Home from './Home';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda Smurf Village</h1>
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">Village List</NavLink>
            <NavLink to="/addSmurf">Add Member</NavLink>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/addSmurf" component={AddSmurf} />
      </div>
    );
  }
}
export default App;
