import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";


export default function EditGenre () {
  const {id} : any = useParams();
  return (
    <>
      <h3>Edit Genre</h3>
      <GenreForm model={{name:''}} 
      onSubmit = {(value) => {
        //when the form is posted
        console.log(id);
        console.log(value);
      }}
      />
    </>
  )
}


