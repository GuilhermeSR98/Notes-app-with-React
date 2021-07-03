import { Component } from "react";
import ListOfNotes from "./components/ListOfNotes";
import RegistrationForm from "./components/RegistrationForm";
class App extends Component {
  render() {
    return (
      <section>
        <RegistrationForm />
        <ListOfNotes />
      </section>
    );
  }
}

export default App;
