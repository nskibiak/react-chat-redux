import React, { Component } from 'react';

// var colors = ['red', 'green', 'blue']

// var randomColor = colors[Math.floor(Math.random()*colors.length)]

// var sectionStyle = {
//   color: randomColor
// };

class App extends Component {

  render() {
    return (
      <div className="Message">
        <div className="topLine">
          <div className="userName">{this.props.message.author}&nbsp;&nbsp;</div><div className="timeStamp">- {this.props.message.created_at.slice(11,19)}</div>
        </div>
        <div className="messageContent">{this.props.message.content}</div>
      </div>
    );
  };
};

export default App;
