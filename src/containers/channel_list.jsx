import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {

  handleClick = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div className="ChannelList">Redux Chat
        {
          this.props.channels.map((channel) => {
            return <div onClick={this.handleClick}>{channel}</div>;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchMessages: fetchMessages },
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(ChannelList);


