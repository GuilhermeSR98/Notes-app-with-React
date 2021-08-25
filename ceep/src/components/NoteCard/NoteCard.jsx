import React, { Component } from "react";
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";
class NoteCard extends Component {
  handleDeleteNote() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.title}</h3>
          <img
            src={deleteSVG}
            alt="deleteSVG"
            onClick={this.handleDeleteNote.bind(this)}
          />
          <h4>{this.props.category}</h4>
        </header>
        <p className="note-card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;
