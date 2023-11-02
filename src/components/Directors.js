import React from "react";
import { directors } from "../data";

function Directors() {
  const dataDirector=directors.map((item)=><div
  key={item.name}>
    <h4>{item.name}</h4>
    <ul>{item.movies.map((mv)=><li key={mv}>{mv}</li>)}
      </ul>
  </div>)
  return <div>
    <h1>Directors Page</h1>
    {dataDirector}
  </div>;
}

export default Directors;