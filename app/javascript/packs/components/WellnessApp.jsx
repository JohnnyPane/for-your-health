import React from 'react'
import { createRoot } from 'react-dom/client';
import Blurbs from './Blurbs'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class WellnessApp extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <Blurbs />
      </>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('wellness-app');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<WellnessApp tab="home" />);
})