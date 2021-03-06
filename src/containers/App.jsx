import React from 'react';
import MessageList from './message_list';
import ChannelList from './channel_list';

const App = (props) => {
  return(
    <div className="App">
      <div className="LogoHolder">
        <img src="/lewagon-logo.png" alt="" id="logo"/>
      </div>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
