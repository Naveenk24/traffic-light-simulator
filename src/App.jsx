import React from 'react';
import TrafficLight from './components/TrafficLight/index';
import PedestrianButton from './components/PedestrianButton/index';
import EmergencyButton from './components/EmergencyButton/index';
import { TrafficLightProvider } from './context/TrafficLightContext/index';
import './App.css'

function App() {
  return (
    <TrafficLightProvider>
      <div className="App">
        <h1 className="heading">Traffic Light Simulator</h1>
        <TrafficLight />
        <PedestrianButton />
        <EmergencyButton />
      </div>
    </TrafficLightProvider>
  );
}

export default App;
