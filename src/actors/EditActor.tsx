import React from "react";
import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <div>
      <h3>Edit Actor</h3>
      <ActorForm model={{ name: 'Tom Holland', 
      dateOfBirth: new Date('1996-06-01T00:00:00') }} 
      onSubmit={values => console.log(values)}/>
    </div>
  );
}
