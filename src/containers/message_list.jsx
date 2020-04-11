import React from 'react';
// import Message from '../components/message';
import messageData from '../data/messages';
import Message from '../components/message';

const MessageList = () => {
  const messages = messageData;

  return (
    <div className="MessageList">
      <div className="ChannelTitle">Channel</div>
      <div className="Messages">
        {messages.map((message) => <Message key={message.created_at} message={message}/>)}
      </div>
      <div className="MessageForm">
        <form className="form-inline">
          <div className="form-group">
            <input type="message" className="form-control" id="inputMessage"></input>
            <button type="submit" className="btn btn-danger" id="messageButton">Send</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default MessageList;
