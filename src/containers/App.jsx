import React from 'react';

function App() {
  return (
    <div className="App">
      <img src="https://uikit.lewagon.com/assets/logo-0c157df32d93155001ae8d8b1b7740b3082e698b4ad0cc91792e8725deb68d85.png" alt="" id="logo"/>
      <div className="ChannelList"></div>
      <div className="MessageList">
        <div className="ChannelTitle"></div>
        <div className="Messages"></div>
        <div className="MessageForm">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <input type="message" class="form-control" id="inputMessage"></input>
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
