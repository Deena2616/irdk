import React from 'react';
import brand2 from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView5 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={brand2} 
            alt="Store View 5" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView5;
