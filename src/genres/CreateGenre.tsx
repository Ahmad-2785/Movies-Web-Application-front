import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlGenres } from "../endpoints";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";

export default function CreateGenre() {
  const history = useHistory();

  async function create (genre : genreCreationDTO){
    try {
      console.log(genre)
      await axios.post(urlGenres, genre);
      history.push('/genres');
    }
    catch(error){
        console.error(error);
    }
  }

  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm model={{name:''}} 
        onSubmit={async value => {
          await create(value);
        }}
      />
    </>
  );
}
