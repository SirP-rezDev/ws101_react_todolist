import { useState } from 'react';
import './main.css';

function Main() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add a note
  const addNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, { text: inputValue, id: Date.now() }]);
      setInputValue(''); // Clear input after adding
    }
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Function to edit a note
  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    const newNoteText = prompt('Edit your note:', noteToEdit.text);
    if (newNoteText !== null && newNoteText.trim() !== '') {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, text: newNoteText.trim() } : note
        )
      );
    }
  };

  return (
    <div className="Main">
      <div className="nav">
        <div id="word">
          <h3>SirP-rezDev</h3>
        </div>
        <div id="name">
          <h2>Todo List</h2>
        </div>
      </div>
      <div className="body">
        <div id="mainbody">
          <h2>Notes</h2>
          <input
            id="input"
            type="text"
            placeholder="Anything..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="btn">
            <button id="btn" onClick={addNote}>
              Enter
            </button>
          </div>

          {/* Display the notes */}
          <div id="notes">
            {notes.map((note) => (
              <div id='notes' key={note.id} className="note">
                <span>{note.text}</span>
                <div id='des'>
                  <button onClick={() => editNote(note.id)}>Edit</button>
                  <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
