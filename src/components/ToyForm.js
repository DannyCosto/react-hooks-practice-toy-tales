import React, {useState} from "react";

function ToyForm({handleAdd}) {
  const [name, setName] = useState("")
  const [img, setImg] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newToyData = {
      name: name,
      image: img,
      likes: 0
      }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(newToyData)
    })
      .then(res => res.json())
      .then(newToyData => {
        handleAdd(newToyData)
      })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {name}
          onChange = {(e) => {setName(e.target.value)}}
          />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {img}
          onChange = {(e) => {setImg(e.target.value)}}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
