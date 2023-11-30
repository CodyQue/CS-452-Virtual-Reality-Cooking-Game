import React from "react";
import './MultipleLayer.css';  // Import your CSS file
import Title from './Title.js';
import Video from './Video.js';
import Description from './Description.js'

function MultipleLayer() {
    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center">
            <div id="background3"className="backgroundDiv">
                <Title />
                <Video />
            </div>

            <div id="background2" className="backgroundDiv">

            </div>

        </div>
    );
}

export default MultipleLayer;