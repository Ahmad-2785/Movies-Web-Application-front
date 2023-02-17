import { useState, useEffect } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider-Man: Far From Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810",
          },
        ],
        upcomingReleases: [
          {
            id: 3,
            title: "Soul",
            poster:
              "https://i0.wp.com/pixarpost.com/wp-content/uploads/2020/10/b4786-pixar-soul-poster.jpg?fit=1182%2C1478&ssl=1",
          },
        ],
      });
    }, 1000);
    return () => clearTimeout(timerId);
  });
  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </>
  );
}
