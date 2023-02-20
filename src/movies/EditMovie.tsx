import React from "react";
import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];
  const selectedGenres: genreDTO[] = [{ id: 2, name: "Drama" }];

  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Wally" },
  ];
  const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: "Wally" }];

  const selectedActors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Felipe",
      character: "F1 Driver",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg/220px-Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg",
    },
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Toy Story",
          inTheaters: true,
          trailer: "url",
          releaseDate: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={async (values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
