import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions'

import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {

  componentDidMount() {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    return (
      <div className="MessageList">
        <div className="ChannelTitle">Channel</div>
        <div className="Messages">
          {this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);


