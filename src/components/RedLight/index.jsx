import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext/index';

const RedLight = () => {
  const { state } = useTrafficLight();
  return (
    <div className={`light red ${state.currentLight === 'red' ? 'active' : ''}`}>
      {state.currentLight === 'red' && <span>{state.countdown}</span>}
    </div>
  );
};

export default RedLight;
