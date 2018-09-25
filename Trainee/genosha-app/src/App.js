import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

 componentDidMount() {
   fetch('/users')
     .then(res => res.json())
     .then(users => this.setState({ users }));
 }

  render() {
    return (
      <div className="App">
          <div className="Biggest">
            <div className="Middlest">
              <div className="Smallest"></div>
            </div>
          </div>
          <h1 className="Title">GENOSHA</h1>
            <h1 className="Users">Users</h1>
          {this.state.users.map(user =>
            <div className="Users" key={user.id}>{user.username}</div>
          )}
      </div>
    );
  }
}

export default App;
