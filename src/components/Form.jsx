import { useState, useEffect } from "react";

const Form = ({ addNote }) => {
  const [note, setNote] = useState({
    id: +new Date(),
    title: "",
    body: "",
    createdAt: new Date().toISOString(),
    archived: false,
  });
  const [maxLength, setMaxLength] = useState(50);

  const handleTitle = (e) => {
    const titleInput = e.target.value;
    setMaxLength(50 - titleInput.length);
    if (titleInput.length < 50) {
      setNote({
        ...note,
        title: titleInput,
      });
    }
  };
  const handleBody = (e) => {
    setNote({
      ...note,
      body: e.target.value,
    });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      id: +new Date(),
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      archived: false,
    });
  };

  return (
    <div className="w-full max-w-full m-auto">
      <h1>Buat Catatan</h1>
      {maxLength <= 10 ? (
        <p>
          sisa karakter <span className="text-red-700 "> {maxLength}</span>
        </p>
      ) : (
        <p>
          sisa karakter <span className="text-green-600"> {maxLength}</span>
        </p>
      )}
      <form
        className="flex flex-col items-start gap-6 mt-4 mb-4"
        onSubmit={handleAddNote}
      >
        <input
          required
          name="title"
          value={note.title}
          type="text"
          className="w-full block"
          placeholder=" Title"
          onChange={handleTitle}
        />
        <textarea
          required
          name="body"
          value={note.body}
          className="w-full block"
          placeholder=" Description"
          onChange={handleBody}
        />
        <button
          className="blok w-full p-2 bg-transparent font-sans text-white border-solid border-red-200 rounded font-bold cursor-pointer"
          type="submit"
        >
          Buat
        </button>
      </form>
    </div>
  );
};

export default Form;
