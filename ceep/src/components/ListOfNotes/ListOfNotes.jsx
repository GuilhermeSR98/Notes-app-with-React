import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./style.css";

class ListOfNotes extends Component {
  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <div>{note}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListOfNotes;
