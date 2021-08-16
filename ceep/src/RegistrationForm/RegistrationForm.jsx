import React, { Component } from "react";

class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title" />
        <textarea rows={15} placeholder="Write your note" />
        <button>Create note</button>
      </form>
    );
  }
}
export default RegistrationForm;
