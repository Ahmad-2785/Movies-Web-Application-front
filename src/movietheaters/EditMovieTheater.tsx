import React from "react";
import MovieTheaterForm from "./movieTheaterForm";

export default function EditMovieTheater() {
  return (
    <div>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{ name: "QTU", latitude: 41.328278, longitude: 19.818639 }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
