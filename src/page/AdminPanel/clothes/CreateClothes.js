import React from 'react'
import {  Create, ImageField, ImageInput, NumberInput, SelectArrayInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const CreateClothes = (props) => {
  return (
    <Create title="Create item" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="price" />
            <ImageInput source="picture" accept="image/*">
                <ImageField source="image"  />
            </ImageInput>
            <NumberInput source="inStock" />
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
    </Create>
  )
}

export default CreateClothes