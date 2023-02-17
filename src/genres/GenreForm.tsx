import React from 'react'
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import { genreCreationDTO } from './genres.model';

export default function GenreForm (props: genreFormProps) {
  return (
    <div>
       <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUppercase()
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="Name" displayName="Name" />
            <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
            <Link className="btn btn-secondary" to="/genres">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}

interface genreFormProps{
  model: genreCreationDTO;
  onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>):void;
}