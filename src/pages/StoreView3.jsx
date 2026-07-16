import React from 'react';
import candyLogo from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView3 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={candyLogo} 
            alt="Store View 3" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView3;
