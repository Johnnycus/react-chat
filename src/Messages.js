import React, { Component } from 'react';
import Message from './Message';
import './Spinner.css';

export default class Messages extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  componentDidUpdate() {
    const messageList = document.getElementById('Message-list');
    messageList.scrollTop = messageList.scrollHeight;
  }

  render() {
    const messages = this.props.messages.map((msg, key) => {
      return (
        <Message
          key={key}
          username={msg.username}
          message={msg.message}
        />
      );
    });

    return (
      <div id="Message-list">
        {
          this.state.isLoading
          ? <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          : messages
       }
      </div>
    );
  }
}
