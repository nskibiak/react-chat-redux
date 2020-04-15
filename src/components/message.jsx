import React, { Component } from 'react';

class App extends Component {

  stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }

  render() {
    const name = this.props.message.author;
    const styles = {
      color: this.stringToColor(name)
    }
    return (
      <div className="Message">
        <div className="topLine">
          <div className="userName" style={ styles }>{this.props.message.author}&nbsp;&nbsp;</div><div className="timeStamp">- {this.props.message.created_at.slice(11,19)}</div>
        </div>
        <div className="messageContent">{this.props.message.content}</div>
      </div>
    );
  };
};

export default App;

