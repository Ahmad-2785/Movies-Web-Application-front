import React from "react";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "../movies/MoviesList.module.css";
import GenericList from "../utils/GenericList";

export default function MoviesList(props: movieListProps) {
  return (
    <GenericList list={props.movies}>
      <div className={css.div}>
        {props.movies?.map((movie) => (
          <IndividualMovie {...movie} key={movie.id} />
        ))}
      </div>
    </GenericList>
  );
}

interface movieListProps {
  movies?: movieDTO[];
}
