import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

export default class App extends Component {
  state = { username: localStorage.getItem('username'), isLoggedIn: localStorage.username ? true : false }

  handleUserChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handleUserSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    localStorage.setItem('username', this.state.username);
  }

  handleLogout = () => {
    this.setState({ username: '', isLoggedIn: false });
    localStorage.removeItem('username');
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn
          ? <Chat username={this.state.username} handleLogout={this.handleLogout} />
          : <form onSubmit={this.handleUserSubmit} className="Join-container">
              <h1>Join chat</h1>
              <div>
                <input
                  onChange={this.handleUserChange}
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <input type="submit" value="Login" />
            </form>
        }
      </div>
    );
  }
}
