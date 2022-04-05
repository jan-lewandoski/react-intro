import { useState, useEffect } from "react";

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

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Dodaj warsztaty</button>
      <p>{workshops.join(",")}</p>
    </div>
  );
}

export default App;
