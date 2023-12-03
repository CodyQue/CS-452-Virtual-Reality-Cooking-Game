import { motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './Title.js';
import Video from './Video.js';
import Description from './Description.js';
import Developers from './Developers.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
class Game extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Title />
          <div className='Content'>
            <Switch>
              <Route exact path="/">
                <Video />
              </Route>
              <Route path = "/about">
                <Description />
                <Developers />
              </Route>
            </Switch>
          </div>
         </div>
      </Router>

    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);