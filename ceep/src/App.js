import { Component } from "react";
import ListOfNotes from "./components/ListOfNotes/ListOfNotes";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  render() {
    return (
      <section className="content">
        <RegistrationForm />
        <ListOfNotes />
      </section>
    );
  }
}
    
export default App;
