import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext/index';

const YellowLight = () => {
  const { state } = useTrafficLight();
  return (
    <div className={`light yellow ${state.currentLight === 'yellow' ? 'active' : ''}`}>
      {state.currentLight === 'yellow' && <span>{state.countdown}</span>}
    </div>
  );
};

export default YellowLight;
