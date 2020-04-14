import React from 'react';
import MessageList from './message_list';
import ChannelList from './channel_list';

function App() {
  return (
    <div className="App">
      <div className="LogoHolder">
        <img src="/lewagon-logo.png" alt="" id="logo"/>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
}

export default App;
