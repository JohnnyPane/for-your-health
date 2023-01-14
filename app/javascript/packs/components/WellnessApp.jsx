import React from 'react'
import { createRoot } from 'react-dom/client';
import axios from 'axios'

import Blurbs from './Blurbs/Blurbs';
import Categories from './Categories/Categories';
import Category from './Categories/Category';
import Navbar from './Navbar/Navbar';
import Profile from './ProfilePage/Profile';
import UserCategory from './UserCategories/UserCategory';
import WellnessGroups from './WellnessGroups/WellnessGroups';
import WellnessGroup from './WellnessGroups/WellnessGroup';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/blurbs",
        element: <Blurbs />,
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/categories/:categoryId",
        element: <Category />
      },
      {
        path: "/user/:userId",
        element: <Profile />
      },
      {
        path: "/user/:userId/categories/:categoryId",
        element: <UserCategory />
      },
      {
        path: "/user/:userId/groups",
        element: <WellnessGroups />
      },
      {
        path: "/user/:userId/groups/:groupId",
        element: <WellnessGroup />
      }
    ]
  }
]);

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('wellness-app');
  const root = createRoot(container);
  root.render(<RouterProvider router={router} />);
})