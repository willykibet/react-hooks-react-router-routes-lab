import React from "react";
import { actors } from "../data";
const actorData=actors.map((actor)=>
<div key={actor.name}>
<h6>{actor.name}</h6>
<ul>{actor.movies.map((mov)=><li key={mov}>{mov}</li>)
}</ul>
</div> )
function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actorData}
  </div>;
}

export default Actors;