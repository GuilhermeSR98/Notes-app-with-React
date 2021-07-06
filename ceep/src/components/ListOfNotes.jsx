import React, { Component } from "react";
import NoteCard from "./NoteCard/NoteCard";

class ListOfNotes extends Component {
  render() {
    return (
      <ul>
        {Array.of("Job", "Studies", "Job").map((category, index) => {
          return (
            <li key = {index}>
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
