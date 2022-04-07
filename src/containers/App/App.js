import { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "./App.css";

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

  return (
    <div>
      <p>Nazwa warsztatów: {name}</p>
      <input value={name} onChange={onChange}></input>
      <button onClick={addWorkshop}>Dodaj warsztaty!</button>
      <div>{workshops.join(",")}</div>
    </div>
  );
}

export default App;
