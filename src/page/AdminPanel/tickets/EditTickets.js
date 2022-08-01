import React from 'react'
import {  Edit, SimpleForm, TextInput,NumberInput  } from 'react-admin';


const EditTickets = (props) => {
  return (
    <Edit title="Редактировать вещь" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <NumberInput source="sum" />
            <NumberInput source="count" />
        </SimpleForm>
    </Edit>
  )
}

export default EditTickets