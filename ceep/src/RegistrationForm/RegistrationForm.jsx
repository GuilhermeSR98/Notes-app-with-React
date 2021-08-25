import React, { Component } from "react";
import "./style.css";
class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Without category";
  }
  handleTitleChange(event) {
    this.title = event.target.value;
    event.stopPropagation();
  }
  handletextChange(event) {
    this.text = event.target.value;
    event.stopPropagation();
  }
  handleCategoryChange(event){
    this.category = event.target.value;
    event.stopPropagation();
  }
  createNote(event) {
    this.props.createNote(this.title, this.text, this.category);
    event.preventDefault();
    event.stopPropagation();
  }
  render() {
    return (
      <form className="registration-form" onSubmit={this.createNote.bind(this)}>
        <select className="registration-form_input" onChange={this.handleCategoryChange.bind(this)}>
          <option>Without Category</option>
          {this.props.category.map((category) => {
            return <option>{category}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
          onChange={this.handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note here..."
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
