import React from 'react'

import { List, Datagrid, DeleteButton, TextField, EditButton, SelectField } from 'react-admin';


const PostListOrders = (props) => {
  return (
    <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="user" />
        <TextField source="price" />
        <TextField source="name" />
        <TextField source="phone" />
        <TextField source="email" />
        <TextField source="message" />
        <TextField source="country" />
        <TextField source="city" />
        <TextField source="street" />
        <TextField source="home" />
        <TextField source="room" />
      



        <TextField source="clothes" />
        
        <DeleteButton/>
    </Datagrid>
    </List>
  )
}

export default PostListOrders