import { Field } from 'formik'
import React from 'react'

export default function CheckboxField (props: checkboxField) {
  return (
    <div className="form-check-input">
      <Field className="form-check-input"  id={props.field} name={props.field}
        type="checkbox" 
        />
        <label htmlFor={props.field}>{props.displayName}</label>
    </div>
  )
}

interface checkboxField{
    displayName: string;
    field: string;
}

