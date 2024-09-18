import React from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext/index';

const PedestrianButton = () => {
  const { dispatch, state } = useTrafficLight();

  const handleCrossRequest = () => {
    if (!state.pedestrianRequest) {
      dispatch({ type: 'REQUEST_CROSSING' });
    }
  };

  return (
    <button className="pedestrian-button" onClick={handleCrossRequest}>
      {state.pedestrianRequest ? 'Wait to Cross' : 'Request Crossing'}
    </button>
  );
};

export default PedestrianButton;
