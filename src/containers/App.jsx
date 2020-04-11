import React from 'react';
import MessageList from './message_list';

function App() {
  return (
    <div className="App">
      <div className="LogoHolder">
        <img src="/lewagon-logo.png" alt="" id="logo"/>
      </div>
      <div className="ChannelList">Redux Chat</div>
      <MessageList />
    </div>
  );
}

export default App;
