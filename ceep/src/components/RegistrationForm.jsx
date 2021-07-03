import React, { Component } from "react";

class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title" />
        <textarea placeholder="Write your note" />
        <button>Create note</button>
      </form>
    );
  }
}
export default RegistrationForm;
