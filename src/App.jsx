import "./App.css";
import { useState } from "react";
import { getInitialData } from "./utils/index";
import Form from "./components/Form";
import Note from "./components/Note";
import Navbar from "./components/navbar";

export default function App() {
  const [notes, setNotes] = useState(getInitialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDelete = (noteId) => {
    setNotes(notes.filter((note) => noteId !== note.id));
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleArchived = (idToArchive) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === idToArchive ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Form addNote={handleAddNote} />
        <Note
          notes={filteredNotes}
          onDelete={handleDelete}
          onArchive={handleArchived}
        />
      </main>
    </>
  );
}
