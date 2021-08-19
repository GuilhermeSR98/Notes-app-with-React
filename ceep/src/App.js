import { Component } from "react";
import ListOfNotes from "./components/ListOfNotes/ListOfNotes";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }
  createNote(title, text) {
    const newNote = { title, text };
    const newNotesArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesArray,
    };
    this.setState(newState);
  }
  deleteNote(index) {
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({ notes: notesArray });
  }
  render() {
    return (
      <section className="content">
        <RegistrationForm createNote={this.createNote.bind(this)} />
        <main>
          <CategoryList>
            <ListOfNotes
              notes={this.state.notes}
              deleteNote={this.deleteNote.bind(this)}
            />
          </CategoryList>
        </main>
      </section>
    );
  }
}

export default App;
