import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import { actorCreationDTO } from './actors.model';
import * as Yup from "yup";
import DateField from '../forms/DateField';

export default function ActorForm (props: actorFormProps) {
  return (
    <Formik 
    initialValues={props.model}
    onSubmit={props.onSubmit}
    validationSchema={Yup.object({
        name: Yup.string().required('This field is required').firstLetterUppercase(),
        dateOfBirth: Yup.date().nullable().required('This field is required')
    })}
    >
    {(formikProps) =>(
        <Form>
            <TextField field="name" displayName="Name"/>
            <DateField field="dateOfBirth" displayName="Date of Birth"/>
            <Button disabled = {formikProps.isSubmitting}
            type = "submit"
            >Save Changes</Button>
            <Link to="/actors" className="btn btn-secondary">Cancel</Link>
        </Form>
    )}  
    </Formik>
  )
}

interface actorFormProps{
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>) : void;
}
