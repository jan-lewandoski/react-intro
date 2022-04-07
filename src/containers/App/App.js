import { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";
import WorkshopCard from "../../components/WorkshopCard";

function App() {
  const [name, setName] = useState("");
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Gdy komponent sie wyrenderuje, pobierzmy warsztaty z pamięci przeglądarki
    const workshopsStr = localStorage.getItem("workshops");

    if (workshopsStr) {
      const workshapsArr = workshopsStr.split(",");
      setWorkshops(workshapsArr);
    }
  }, []);

  useEffect(() => {
    // Za kazdym razem, gdy zmieni sie lista warsztatów - zapiszmy je w pamięci przeglądarki
    if (workshops.length > 0) {
      localStorage.setItem("workshops", workshops);
    }
  }, [workshops]);

  const addWorkshop = () => {
    setWorkshops([...workshops, name]);
    setName("");
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  const deleteHandler = (id) => {
    const newWorkshops = workshops.filter((workshopName, idx) => idx !== id);
    setWorkshops(newWorkshops);
  };

  return (
    <div>
      <p>Nazwa warsztatów: {name}</p>
      <input value={name} onChange={onChange}></input>
      <button onClick={addWorkshop}>Dodaj warsztaty!</button>
      {workshops.map((workshop, index) => (
        <WorkshopCard
          id={index}
          key={index}
          name={workshop}
          deleteHandler={deleteHandler}
        />
      ))}
      {workshops.length === 0 && <p>Brak warsztatów</p>}
    </div>
  );
}

export default App;
