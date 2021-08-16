import React, { Component } from "react";
import "./style.css";
class RegistrationForm extends Component {
  render() {
    return (
      <form className="registration-form">
        <input
          type="text"
          placeholder="title"
          className="registration-form_input"
        />
        <textarea
          rows={15}
          placeholder="Write your note"
          className="registration-form_input"
        />
        <button className="registration-form_input registration-form_submit">
          Create note
        </button>
      </form>
    );
  }
}
export default RegistrationForm;
