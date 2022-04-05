const Workshop = ({ id, name, onDelete }) => {
  return (
    <div>
      {name}
      <button onClick={() => onDelete(id)}>Usuń</button>
    </div>
  );
};

export default Workshop;
