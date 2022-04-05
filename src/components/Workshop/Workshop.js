const Workshop = ({ name, onDelete }) => {
  return (
    <div>
      {name}
      <button onClick={() => onDelete(name)}>Usuń</button>
    </div>
  );
};

export default Workshop;
