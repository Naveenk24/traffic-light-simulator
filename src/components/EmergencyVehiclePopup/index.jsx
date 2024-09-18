import React, { useState } from 'react';
import { useTrafficLight } from '../../context/TrafficLightContext';
import './index.css'

const EmergencyVehiclePopup = ({ isOpen, onClose }) => {
    const { dispatch } = useTrafficLight();
    const [seconds, setSeconds] = useState(5); 
  
    const handleSubmit = () => {
      if (seconds > 0) {
        dispatch({ type: 'EMERGENCY_OVERRIDE', payload: { countdown: seconds } });
        onClose(); 
      }
    };
  
    return isOpen ? (
      <>
        <div className="overlay" onClick={onClose} />
        <div className="popup">
          <h2>Emergency Vehicle Override</h2>
          <label>
            Enter seconds for red light:
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
            />
          </label>
          <div>
            <button onClick={handleSubmit}>Start Emergency Override</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </>
    ) : null;
  };

export default EmergencyVehiclePopup;
