import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./style.css";

class ListOfNotes extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }
  componentDidMount() {
    this.props.notes.register(this.newNotes.bind(this));
  }
  newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="notes-list">
        {this.state.notes.map((note, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <NoteCard
                title={note.title}
                text={note.text}
                index={index}
                category={note.category}
                deleteNote={this.props.deleteNote}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListOfNotes;
