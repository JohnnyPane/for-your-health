import React from 'react'
import { createRoot } from 'react-dom/client';
import Blurbs from './Blurbs/Blurbs'
import Categories from './Categories/Categories';
import Profile from './ProfilePage/Profile';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blurbs />,
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/user/:id",
    element: <Profile />
  }
]);

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('wellness-app');
  const root = createRoot(container);
  root.render(<RouterProvider router={router} />);
})