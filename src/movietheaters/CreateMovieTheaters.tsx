import React from "react";
import MovieTheaterForm from "./movieTheaterForm";

export default function CreateMovieTheaters() {
  return (
    <div>
      <h3>Create Movie Theater</h3>
      <MovieTheaterForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
