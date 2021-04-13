import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([]);

  useEffect ( () => {
    fetch("http://localhost:3001/toys")
      .then( r => r.json() )
      .then( (toyArr) => {setToyData(toyArr)} )

  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAdd(newToy){
    setToyData([...toyData, newToy])
  }

  function onDelete(id){
    const updatedToyArr = toyData.filter((toy) => toy.id !== id)
    setToyData(updatedToyArr)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAdd={handleAdd}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} onDelete={onDelete}/>
    </>
  );
}

export default App;
