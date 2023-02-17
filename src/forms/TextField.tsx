import { Field, ErrorMessage } from 'formik'
import React from 'react'

export default function TextField (props: textFieldProps){
  return (
    <div>
      <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>
            <Field name={props.field} id={props.field} className="form-control" />
            <ErrorMessage name={props.field} className="text-danger">{msg => 
            <div>{msg}</div>}</ErrorMessage>
          </div>
    </div>
  )
}


interface textFieldProps{
    field: string;
    displayName: string;
}

