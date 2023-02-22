import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlGenres } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";

export default function CreateGenre() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  async function create (genre : genreCreationDTO){
    try {
      console.log(genre)
      await axios.post(urlGenres, genre);
      history.push('/genres');
    }
    catch(error){
        // if (error && error.response){
        //     setErrors(error.response.data);
        // }
    }
  }

  return (
    <>
      <h3>Create Genre</h3>
      <DisplayErrors errors={errors} />
      <GenreForm model={{name:''}} 
        onSubmit={async value => {
          await create(value);
        }}
      />
    </>
  );
}
