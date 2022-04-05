function App() {
  const handleClick = () => {
    console.log("Dodano warsztaty!");
  };

  const handleChange = (event) => {
    console.log("Nazwa warsztatów: ", event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Dodaj warsztaty</button>
    </div>
  );
}

export default App;
