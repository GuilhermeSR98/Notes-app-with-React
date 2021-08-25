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
      category: [],
    };
  }
  addCategory(categoryName) {
    const newCategory = [...this.state.category, categoryName];
    const newState = { ...this.state, category: newCategory };
    this.setState(newState);
  }
  createNote(title, text, category) {
    const newNote = { title, text, category };
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
        <RegistrationForm
          createNote={this.createNote.bind(this)}
          category={this.state.category}
        />
        <main className="main-content">
          <CategoryList
            addCategory={this.addCategory.bind(this)}
            category={this.state.category}
          />
          <ListOfNotes
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
