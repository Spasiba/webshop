import React from 'react'

import { List, Datagrid, DeleteButton, TextField, EditButton } from 'react-admin';


const PostListTickets = (props) => {
  return (
    <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="sum" />
        <TextField source="count" />
        <EditButton />
        <DeleteButton/>
    </Datagrid>
    </List>
  )
}

export default PostListTickets