import React from 'react';
import leftDecor from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView8 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={leftDecor} 
            alt="Store View 8" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView8;
