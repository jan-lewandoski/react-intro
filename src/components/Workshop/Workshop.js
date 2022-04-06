import { Card, Button } from "react-bootstrap";

const Workshop = ({ id, name, onDelete }) => {
  return (
    <Card style={{ width: "16rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Button
        className="m-4"
        onClick={() => onDelete(id)}
        variant="outline-danger"
        size="sm"
      >
        Usuń
      </Button>
    </Card>
  );
};

export default Workshop;
