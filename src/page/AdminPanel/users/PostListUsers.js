import React from 'react'

import { List, Datagrid, DeleteButton, TextField, EditButton } from 'react-admin';


const PostListUsers = (props) => {
  return (
    <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="login" />
        <TextField source="phone" />
        <EditButton />
        <DeleteButton/>
    </Datagrid>
    </List>
  )
}

export default PostListUsers