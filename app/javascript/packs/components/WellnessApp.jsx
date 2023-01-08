import React from 'react'
import { createRoot } from 'react-dom/client';
import axios from "axios"
import Blurbs from './Blurbs'
import Blurb from './Blurb'
import BlurbForm from './BlurbForm';

class WellnessApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurbs: []
    };
    this.getBlurbs = this.getBlurbs.bind(this);
    this.createBlurb = this.createBlurb.bind(this);
  }
  
  componentDidMount() {
    this.getBlurbs();
  }

  getBlurbs() {
    axios
      .get("/api/v1/blurbs")
      .then(response => {
        const blurbs = response.data;
        this.setState({ blurbs });
      })
      .catch(error => {
        console.log(error);
      });
  }

  createBlurb(blurb) {
    const blurbs = [blurb, ...this.state.blurbs];
    this.setState({ blurbs });
  }

  render() {
    return (
      <>
        <BlurbForm createBlurb={this.createBlurb} />
        <Blurbs>
          {this.state.blurbs.map(blurb => (
            <Blurb 
              key={blurb.id} 
              blurb={blurb} 
              getBlurbs={this.getBlurbs}
            />
          ))}
        </Blurbs>
      </>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('wellness-app');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<WellnessApp tab="home" />);
})