import GenreForm from "./GenreForm";

export default function CreateGenre() {
  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm model={{name:''}} 
      onSubmit = {async value => {
        //when the form is posted
        await new Promise(r => setTimeout(r,1));
        console.log(value);
      }}
      />
    </>
  );
}
