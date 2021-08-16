import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import './style.css'

class ListOfNotes extends Component {
  render() {
    return (
      <ul className = 'notes-list'>
        {Array.of("Job", "Studies", "Job").map((category, index) => {
          return (
            <li className = 'notes-list_item' key={index}>
              <div>{category}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListOfNotes;
