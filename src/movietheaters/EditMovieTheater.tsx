import React from 'react'
import MovieTheaterForm from './movieTheaterForm'

export default function EditMovieTheater () {
  return (
    <div>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{ name: "QTU" }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  )
}


