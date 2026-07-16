import React from 'react';
import brand1 from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView4 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={brand1} 
            alt="Store View 4" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView4;
