import React from 'react'
import { createRoot } from 'react-dom/client';
import axios from 'axios'

import Blurbs from './Blurbs/Blurbs';
import Categories from './Categories/Categories';
import Category from './Categories/Category'
import Profile from './ProfilePage/Profile';
import UserCategory from './UserCategories/UserCategory';
import Navbar from './Navbar/Navbar';

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
        path: "/categories/:id",
        element: <Category />
      },
      {
        path: "/user/:userId",
        element: <Profile />
      },
      {
        path: "/user/:id/categories/:categoryId",
        element: <UserCategory />
      }
    ]
  }
]);

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('wellness-app');
  const root = createRoot(container);
  root.render(<RouterProvider router={router} />);
})