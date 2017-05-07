import React, { Component } from 'react';

export default class MessageInput extends Component {
  state = { myMessage: '' };

  handleChange = (event) => {
    this.setState({ myMessage: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSend(this.state.myMessage);
    this.setState({ myMessage: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Message-input">
        <input className="Message-send" type="submit" value="Send" />
        <div>
          <input
            value={this.state.myMessage}
            onChange={this.handleChange}
            type="text"
            placeholder="Message"
            required
          />
        </div>
      </form>
    );
  }
}
