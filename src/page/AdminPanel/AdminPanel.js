import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import './adminPanel.scss'
import PostListClothes from './clothes/PostListClothes';
import EditClothes from './clothes/EditClothes';
import CreateClothes from './clothes/CreateClothes';
import PostListUsers from './users/PostListUsers';
import EditUsers from './users/EditUsers';
import PostListTickets from './tickets/PostListTickets';
import EditTickets from './tickets/EditTickets';
import CreateTickets from './tickets/CreateTickets';
import PostListOrders from './orders/PostListOrders';

const AdminPanel = () => {
  return (
    <section >
        <Admin dataProvider={restProvider('https://womazings.herokuapp.com')}>
          <Resource edit={EditClothes} name="clothes" list={PostListClothes} create={CreateClothes} />
          <Resource  name="users" list={PostListUsers} edit={EditUsers} />
          <Resource  name="tickets" list={PostListTickets} edit={EditTickets} create={CreateTickets}/>
          <Resource  name="orders" list={PostListOrders} />
        </Admin>
    </section>
  )
}

export default AdminPanel