import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
  class Game extends React.Component {
    render() {
      return (
        <div className="container text-center" style={{ backgroundColor: '#BBDEFB' }}>
        <div className="row">
          <div className="col">
          </div>
          <div className="col-10">
            <h1>
              CS 452: VIRTUAL REALITY- Cooking Game
            </h1>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col">
          </div>
          <div className="col-5">
            <h4>
              By Cody, Chase, Azka, Loc
            </h4>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  