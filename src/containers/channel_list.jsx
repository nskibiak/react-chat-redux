import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeChannel } from '../actions'

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.changeChannel(channel);
  }

  render() {
    return (
      <div className="ChannelList">Redux Chat
        <div className="ChannelMenu">
        {
          this.props.channels.map((channel, index) => {
            return (
            <div
              className={(channel === this.props.selectedChannel) ? "Channel selected" : "Channel"}
              onClick={() => this.handleClick(channel)}
              key={index}
            >
              #{channel}
            </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel: changeChannel },
    dispatch
  );
}

export default connect(mapStateToProps, null)(ChannelList);


