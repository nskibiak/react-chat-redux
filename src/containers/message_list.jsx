import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions'

// import Message from '../components/message';
// import messageData from '../data/messages';
import Message from '../components/message';

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages('general');
  }

  render() {
    return (
      <div className="MessageList">
        <div className="ChannelTitle">Channel</div>
        <div className="Messages">
          {console.log(this.props.messages)}
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
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.channel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
// export default MessageList;

          // {this.props.messages.map((message) => {
          //   return <Message key={message.created_at} message={message} />;
          // })}
