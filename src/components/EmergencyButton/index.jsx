import React, { useState } from 'react';

import EmergencyVehiclePopup from '../EmergencyVehiclePopup';

const EmergencyButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEmergency = () => {
    setIsPopupOpen(true); 
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button className="emergency-button" onClick={handleEmergency}>
        Emergency Override
      </button>
      <EmergencyVehiclePopup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </>
  );
};

export default EmergencyButton;
