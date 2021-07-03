import React, { Component } from "react";
import NoteCard from "./NoteCard";

class ListOfNotes extends Component {
  render() {
    return (
      <ul>
        {Array.of("Job", "Studies", "Job").map((category) => {
          return (
            <li>
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
