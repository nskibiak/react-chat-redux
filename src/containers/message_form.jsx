import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions'


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.createMessage('general', this.props.author, this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div className="MessageForm">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="message" className="form-control" id="inputMessage" value={this.state.value} onChange={this.handleChange}></input>
            <button type="submit" className="btn btn-danger" id="messageButton">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    author: state.currentUser,
    channel: state.channel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

