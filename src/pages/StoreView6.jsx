import React from 'react';
import brand3 from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView6 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={brand3} 
            alt="Store View 6" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView6;
