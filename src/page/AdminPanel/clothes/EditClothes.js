import React from 'react'
import {  Edit, SimpleForm, TextInput,NumberInput , DateInput, SelectInput, SelectArrayInput } from 'react-admin';


const EditClothes = (props) => {
  return (
    <Edit title="Редактировать вещь" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="priceSale" />
             <TextInput disabled source="image" />
            <TextInput source="title" />
            <NumberInput source="price" />
            <NumberInput  source="inStock" />
            <SelectInput source="category" choices={[
                {
                    id: "hoodie",
                    name: "hoodie"
                },
                 {
                    id: "cardigan",
                    name: "cardigan"
                },
                {
                    id: "coat",
                    name: "coat"
                },
                {
                    id: "sweatshirt",
                    name: "sweatshirt"
                }
         
            ]}/>
            <SelectArrayInput source="size" choices={[
                  {
                    id: "xs",
                    name: "xs"
                },
                 {
                    id: "s",
                    name: "s"
                },
                 {
                    id: "m",
                    name: "m"
                },
                {
                    id: "l",
                    name: "l"
                },
                {
                    id: "xl",
                    name: "xl"
                }
            ]}/>
            <SelectArrayInput source="colors" choices={[
                  {
                    id: "black",
                    name: "black"
                },
                 {
                    id: "white",
                    name: "white"
                },
                 {
                    id: "green",
                    name: "green"
                },
                {
                    id: "red",
                    name: "red"
                },
                {
                    id: "blue",
                    name: "blue"
                },
                {
                    id: "orange",
                    name: "orange"
                }
            ]}/>
        </SimpleForm>
    </Edit>
  )
}

export default EditClothes