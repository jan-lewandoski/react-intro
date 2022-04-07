const WorkshopCard = ({ name, deleteHandler }) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => deleteHandler(name)}>Usuń warsztat</button>
    </div>
  );
};

export default WorkshopCard;
