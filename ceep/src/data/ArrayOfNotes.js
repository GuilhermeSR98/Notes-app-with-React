export default class ArrayOfNotes {
  constructor() {
    this.notes = [];
    this.enrolled = [];
  }
  addNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }
  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
  register(func) {
    this.enrolled.push(func);
  }
  unregister(func) {
    this.enrolled = this.enrolled.filter((f) => f !== func);
  }
  notify() {
    this.enrolled.forEach((func) => {
      func(this.notes);
    });
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
