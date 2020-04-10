import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="LogoHolder">
        <img src="https://uikit.lewagon.com/assets/logo-0c157df32d93155001ae8d8b1b7740b3082e698b4ad0cc91792e8725deb68d85.png" alt="" id="logo"/>
      </div>
      <div className="ChannelList">Redux Chat</div>
      <div className="MessageList">
        <div className="ChannelTitle">Channel</div>
        <div className="Messages"></div>
        <div className="MessageForm">
          <form class="form-inline">
            <div class="form-group">
              <input type="message" class="form-control" id="inputMessage"></input>
              <button type="submit" class="btn btn-danger" id="messageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
