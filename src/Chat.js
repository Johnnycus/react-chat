import React, { Component } from 'react';
// import io from 'socket.io-client';
import { database } from './firebase';
import Messages from './Messages';
import MessageInput from './MessageInput';
import './Chat.css';

export default class Chat extends Component {
  state = { dbMessages: [] };
  // state = { messages: [], dbMessages: [] };

  // constructor(props) {
  //   super(props);
    // this.socket = io('http://localhost:3001').connect();

    // this.socket.on('server:message', message => {
    //   this.addMessage(message);
    // })
  // }

  componentWillMount() {
    database.on('value', (snapshot) => {
      const dbMessages = Object.values(snapshot.val());
      this.setState({ dbMessages });
    });
  }

  handleSend = (message) => {
    const { username } = this.props;
    // const myMessage = { username, message: myMessage };

    // Send message to socket.io server
    // this.socket.emit('client:message', myMessage);
    // Send message to firebase db
    database.push({ username, message });

    // this.addMessage(myMessage);
  }

  // addMessage = (message) => {
  //   const messages = this.state.messages;
  //   messages.push(message);
  //   this.setState({ messages });
  // }

  render() {
    return (
      <div className="Container">
        <h3>Chat</h3>
        <a onClick={this.props.handleLogout}>Logout</a>
        <Messages messages={this.state.dbMessages} />
        <MessageInput handleSend={this.handleSend} />
      </div>
    );
  }
}
