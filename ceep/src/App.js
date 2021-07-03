import ListOfNotes from './components/ListOfNotes'
function App() {
  return (
    <section>
      <form>
        <input type='text' placeholder='title'/>
        <textarea placeholder='Write your note'/>
        <button>Create note</button>
      </form>
      <ListOfNotes/>
    </section>
  );
}

export default App;
