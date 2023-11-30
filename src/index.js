import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Description from './Description.js'
import MultipleLayer from './MultipleLayer.js';
  
class Game extends React.Component {
  render() {
    return (
      <div>
        <MultipleLayer />
       
      </div>
      
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);