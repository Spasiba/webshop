import React from 'react'
import {  Edit, SimpleForm, TextInput,NumberInput  } from 'react-admin';


const EditUsers = (props) => {
  return (
    <Edit title="Редактировать вещь" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="password" />
            <TextInput source="email" />
            <TextInput source="login" />
            <NumberInput source="phone" />
        </SimpleForm>
    </Edit>
  )
}

export default EditUsers