import logo from "../../logo.svg";
import "./App.css";

function App() {
  const addWorkshop = () => {
    console.log("Dodaj warsztat");
  };

  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input onChange={onChange}></input>
      <button onClick={addWorkshop}>Dodaj warsztaty!</button>
    </div>
  );
}

export default App;
