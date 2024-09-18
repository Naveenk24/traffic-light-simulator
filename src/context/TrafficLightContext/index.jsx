import React, { createContext, useReducer, useContext, useEffect } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',
  pedestrianRequest: false,
  emergencyOverride: false,
  countdown: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload.light, countdown: action.payload.countdown };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequest: true };
    case 'RESET_CROSSING':
      return { ...state, pedestrianRequest: false };
    case 'EMERGENCY_OVERRIDE':
      return { 
        ...state, 
        currentLight: 'red', 
        emergencyOverride: true, 
        countdown: action.payload ? action.payload.countdown : 10 
      };
    case 'END_EMERGENCY':
      return { ...state, emergencyOverride: false, currentLight: 'green', countdown: 10 };
    case 'DECREMENT_COUNTDOWN':
      return { ...state, countdown: state.countdown - 1 };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setInterval(() => {
      if (state.countdown > 0) {
        dispatch({ type: 'DECREMENT_COUNTDOWN' });
      } else {
        handleLightChange();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [state.countdown]);

  const handleLightChange = () => {
    if (state.emergencyOverride) {
      if (state.countdown <= 0) {
        dispatch({ type: 'END_EMERGENCY' });
      }
    } else if (state.pedestrianRequest && state.currentLight !== 'red') {
      const redLightDuration = state.pedestrianRequest ? 12 : 7;
      dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'red', countdown: redLightDuration } });
      setTimeout(() => dispatch({ type: 'RESET_CROSSING' }), 5000);
    } else {
      switch (state.currentLight) {
        case 'green':
          dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'yellow', countdown: 3 } });
          break;
        case 'yellow':
          dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'red', countdown: state.pedestrianRequest ? 12 : 7 } });
          break;
        case 'red':
          dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'green', countdown: 10 } });
          break;
        default:
          break;
      }
    }
  };

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLight = () => useContext(TrafficLightContext);
