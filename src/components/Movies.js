import React from "react";
import { movies } from "../data";

const movieData=movies.map((item)=><div key={item.title}>
<p>{item.title}</p>
<p>{item.time}</p>
<ul>{item.genres.map((gne,index)=><li key={index} >{gne}</li>)}</ul>
</div>
)
function Movies() {
  return <div>
  <h1>Movies Page</h1>
  <div>
{movieData}
  </div>
  </div>;
}

export default Movies;