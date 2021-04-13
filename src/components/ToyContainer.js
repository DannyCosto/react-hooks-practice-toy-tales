import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, onDelete}) {

  const toyComponents = toyData.map(toy => {
    return( <ToyCard key={toy.id} toy={toy} onDelete={onDelete}/>)
  })

  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
