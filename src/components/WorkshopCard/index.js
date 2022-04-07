import { Card, Button } from "react-bootstrap";

const WorkshopCard = ({ id, name, deleteHandler }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => deleteHandler(id)}
        >
          Usuń warsztat
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WorkshopCard;
