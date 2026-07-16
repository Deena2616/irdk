import React from 'react';
import rightDecor from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView9 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={rightDecor} 
            alt="Store View 9" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView9;
