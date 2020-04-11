import React from 'react';
import MessageList from './message_list';

function App() {
  return (
    <div className="App">
      <div className="LogoHolder">
        <img src="https://uikit.lewagon.com/assets/logo-0c157df32d93155001ae8d8b1b7740b3082e698b4ad0cc91792e8725deb68d85.png" alt="" id="logo"/>
      </div>
      <div className="ChannelList">Redux Chat</div>
      <MessageList />
    </div>
  );
}

export default App;
