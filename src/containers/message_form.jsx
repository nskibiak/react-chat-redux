import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class MessageForm extends Component {
  render() {
    return (
      <div className="MessageForm">
        <form className="form-inline">
          <div className="form-group">
            <input type="message" className="form-control" id="inputMessage"></input>
            <button type="submit" className="btn btn-danger" id="messageButton">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm
