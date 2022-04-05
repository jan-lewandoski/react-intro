import { useState, useEffect } from "react";
import Workshop from "../../components/Workshop/Workshop";

function App() {
  const [workshops, setWorkshops] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    // Gdy komponent się wyrenderuje, sprawdz czy są jakieś warsztaty w pamięci przegladarki i dodaj je do stanu

    const workshopsStr = localStorage.getItem("workshops");

    if (workshopsStr) {
      const workshopsArr = workshopsStr.split(",");
      setWorkshops(workshopsArr);
    }
  }, []);

  useEffect(() => {
    // Gdy dodamy nowe warsztaty, zapisz je w pamięci przeglądarki

    if (workshops.length > 0) {
      localStorage.setItem("workshops", workshops);
    }
  }, [workshops]);

  const handleClick = () => {
    setWorkshops([...workshops, name]);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleDelete = (id) => {
    const updatedWorkshops = workshops.filter((n, index) => index !== id);
    setWorkshops(updatedWorkshops);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Dodaj warsztaty</button>
      {workshops.map((name, index) => (
        <Workshop key={index} id={index} name={name} onDelete={handleDelete} />
      ))}
      {workshops.length === 0 && <p>Brak warsztatów</p>}
    </div>
  );
}

export default App;
