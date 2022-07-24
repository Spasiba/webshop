import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import './adminPanel.scss'
import PostListClothes from './clothes/PostListClothes';
import EditClothes from './clothes/EditClothes';
import CreateClothes from './clothes/CreateClothes';

const AdminPanel = () => {
  return (
    <section >
        <Admin dataProvider={restProvider('http://localhost:3000')}>
          <Resource edit={EditClothes} name="clothes" list={PostListClothes} create={CreateClothes} />
        </Admin>
    </section>
  )
}

export default AdminPanel