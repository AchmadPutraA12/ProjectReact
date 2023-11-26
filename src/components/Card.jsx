import styles from './Card.module.css'

const Card = ({ id, title, created, body, onDelete,archive, onArchive }) => {
  return (
    <div className={styles.container}>
      <h1><b>{title}</b></h1>
      <br />
      <p>{created}</p>
      <br />
      <p>{body}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onDelete(id)}
          className="text-red-800 w-full bg-transparent border-0 p-2 font-sans font-bold cursor-pointer border-solid"
        >
          Delete
        </button>
        <button
          onClick={() => onArchive(id)}
          className="text-orange-300 w-full bg-transparent border-0 p-2 font-sans font-bold cursor-pointer border-solid"
        >
          {archive ? "pindahkan" : "arsip"}
        </button>
      </div>
    </div>
  );
};
export default Card;
