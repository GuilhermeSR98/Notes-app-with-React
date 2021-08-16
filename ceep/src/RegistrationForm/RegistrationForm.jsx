import React, { Component } from "react";
import "./style.css";
class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }
  handleTitleChange(event) {
    this.title = event.target.value;
    event.stopPropagation();
  }
  handletextChange(event) {
    this.text = event.target.value;
    event.stopPropagation();
  }
  createNote(event) {
    this.props.createNote(this.title, this.text);
    event.preventDefault();
    event.stopPropagation();
  }
  render() {
    return (
      <form className="registration-form" onSubmit={this.createNote.bind(this)}>
        <input
          type="text"
          placeholder="title"
          className="registration-form_input"
          onChange={this.handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note"
          className="registration-form_input"
          onChange={this.handletextChange.bind(this)}
        />
        <button className="registration-form_input registration-form_submit">
          Create note
        </button>
      </form>
    );
  }
}
export default RegistrationForm;
