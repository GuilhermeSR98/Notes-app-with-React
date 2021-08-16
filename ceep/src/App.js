import { Component } from "react";
import ListOfNotes from "./components/ListOfNotes/ListOfNotes";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notes = [];
  }
  createNote(title, text) {
    const newNote = { title, text };
    this.notes.push(newNote);
  }
  render() {
    return (
      <section className="content">
        <RegistrationForm createNote={this.createNote.bind(this)} />
        <ListOfNotes notes={this.notes} />
      </section>
    );
  }
}

export default App;
