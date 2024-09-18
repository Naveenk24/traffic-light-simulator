import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext/index';

const GreenLight = () => {
  const { state } = useTrafficLight();
  return (
    <div className={`light green ${state.currentLight === 'green' ? 'active' : ''}`}>
      {state.currentLight === 'green' && <span>{state.countdown}</span>}
    </div>
  );
};

export default GreenLight;
