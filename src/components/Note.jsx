import { showFormattedDate } from "../utils/index";
import Card from "./Card";

const Note = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="m-auto mb-6 max-w-5xl">
      <h2>Catatan Aktif</h2>
      <div className="flex flex-wrap gap-1 justify-center">
        {notes.filter((note) => !note.archived).length <= 0 && (
          <p>Tidak ada catatan</p>
        )}

        {notes.map((note) => {
          return !note.archived ? (
            <>
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                created={showFormattedDate(note.createdAt)}
                archive={note.archived}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            </>
          ) : null;
        })}
      </div>

      <h2>Arsip</h2>
      <div className="flex flex-wrap gap-1 justify-center">
        {notes.filter((note) => note.archived).length <= 0 && (
          <p>Tidak ada catatan</p>
        )}
        {notes.map((note) => {
          return note.archived ? (
            <>
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                archive={note.archived}
                created={showFormattedDate(note.createdAt)}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            </>
          ) : null;
        })}
      </div>
    </div>
  );
};
export default Note;
