import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
  class Game extends React.Component {
    render() {
      return (
        <div className="title">
          <h1>
            Hello World
          </h1>
          </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  