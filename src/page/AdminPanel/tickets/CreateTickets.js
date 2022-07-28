import React from 'react'
import {  Create, ImageField, ImageInput, NumberInput, SelectArrayInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const CreateTickets = (props) => {
  return (
    <Create title="Create item" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="sum" />
            <NumberInput source="count" />
        </SimpleForm>
    </Create>
  )
}

export default CreateTickets