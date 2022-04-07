const WorkshopCard = ({ id, name, deleteHandler }) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => deleteHandler(id)}>Usuń warsztat</button>
    </div>
  );
};

export default WorkshopCard;
