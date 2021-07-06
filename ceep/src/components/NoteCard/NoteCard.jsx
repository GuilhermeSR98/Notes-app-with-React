import React, { Component } from "react";
import "./style.css";
class NoteCard extends Component {
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">Title</h3>
        </header>
        <p className="note-card_text">Write your note</p>
      </section>
    );
  }
}

export default NoteCard;
