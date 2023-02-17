import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheaters from "./movietheaters/CreateMovieTheaters";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
  //Genres
  {
    path: "/genres",
    component: IndexGenres,
    exact : true
  },
  {
    path: "/genres/create",
    component: CreateGenre
  },
  {
    path: "/genres/edit/:id (\\d+)",
    component: EditGenre
  },

  //Actors
  {
    path: "/actors",
    component: IndexActors,
    exact : true
  },
  {
    path: "/actors/create",
    component: CreateActor
  },
  {
    path: "/actors/edit/:id (\\d+)",
    component: EditActor
  },

  //Movie Theaters
  {
    path: "/movietheaters",
    component: IndexMovieTheaters,
    exact : true
  },
  {
    path: "/movietheaters/create",
    component: CreateMovieTheaters
  },
  {
    path: "/movietheaters/edit/:id (\\d+)",
    component: EditMovieTheater
  },
  //Movie CRUD
  {
    path: "/movies/create",
    component: CreateMovie,
  },
  {
    path: "/movies/edit/:id (\\d+)",
    component: EditMovie
  },
  {
    path: "/movies/filter",
    component: FilterMovies
  },
  //Main Route
  {
    path: "/",
    component: LandingPage,
    exact: true
  },
  //Catch All parameter
  {
    path:'*',
    component: RedirectToLandingPage
  }
];

export default routes;
