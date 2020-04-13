import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

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
    alert('A name was submitted: ' + this.state.value);
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

export default MessageForm
