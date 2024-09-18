import React from 'react';
import GreenLight from '../GreenLight/index';
import YellowLight from '../YellowLight/index';
import RedLight from '../RedLight/index';
import './index.css'


const TrafficLight = () => {
  return (
    <div className="traffic-light">
      <RedLight />
      <YellowLight />
      <GreenLight />
    </div>
  );
};

export default TrafficLight;
