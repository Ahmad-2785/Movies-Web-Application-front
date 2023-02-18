import React from 'react'
import MovieForm from './MovieForm'

export default function CreateMovie () {
  return (
    <div>
      <h3>Create Movie</h3>
      <MovieForm model={{title:'', inTheaters: false, trailer:''}}
       onSubmit={values=> console.log(values)}  
       />
    </div>
  )
}


