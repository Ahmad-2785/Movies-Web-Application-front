import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { movieCreationDTO } from './movies.model'
import * as Yup from 'yup'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'
import ImageField from '../forms/ImageField'
import DateField from '../forms/DateField'
import TextField from '../forms/TextField'
import CheckboxField from '../forms/CheckboxField'

export default function MovieForm (props: movieFormProps) {
  return (
    <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            title: Yup.string().required('This field is required').firstLetterUppercase()
        })}
        >
      {(formikProps)=>(
        <Form>

            <TextField displayName = "Title" field ="title" />
            <CheckboxField displayName = "In Theaters" field="inTheaters"/>
            <TextField displayName = "Trailer" field ="trailer" />
            <DateField displayName = "Release Date" field ="releaseDate" />
            <ImageField displayName="Poster" field="poster"
                imageURL={props.model.posterURL}
                />

            <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
            <Link className = "btn btn-secondary" to="/genres">Cancel</Link>
        </Form>
      )}
    </Formik>
  )
}


interface movieFormProps{
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
}