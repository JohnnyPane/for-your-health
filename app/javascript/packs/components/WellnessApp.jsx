import React from 'react'
import { createRoot } from 'react-dom/client';
import Blurbs from './Blurbs/Blurbs'
import Categories from './Categories/Categories';

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
  }
]);

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('wellness-app');
  const root = createRoot(container);
  root.render(<RouterProvider router={router} />);
})