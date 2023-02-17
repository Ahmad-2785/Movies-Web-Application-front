import GenreForm from "./GenreForm";

export default function CreateGenre() {
  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm model={{name:''}} 
      onSubmit = {(value) => {
        //when the form is posted
        console.log(value);
      }}
      />
    </>
  );
}
