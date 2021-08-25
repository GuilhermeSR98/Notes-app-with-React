import { Component } from "react";
import ListOfNotes from "./components/ListOfNotes/ListOfNotes";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import Category from "./data/Category";
import ArrayOfNotes from "./data/ArrayOfNotes";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.category = new Category();
    this.notes = new ArrayOfNotes();
  }
  render() {
    return (
      <section className="content">
        <RegistrationForm
          category={this.category.category}
          createNote={this.notes.createNote}
        />
        <main className="main-content">
          <CategoryList
            addCategory={this.category.addCategory}
            category={this.category.category}
          />
          <ListOfNotes
            deleteNote={this.notes.deleteNote}
            notes={this.notes.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
