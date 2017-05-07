import React from 'react';

const Message = ({ username, message }) => {
  return (
    <div className="Message">
      <div className="Username">
        <p>{username}</p>
      </div>
      <div className="Message-body">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
