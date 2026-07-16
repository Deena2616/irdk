import React from 'react';
import cafeLogo from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView1 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={cafeLogo} 
            alt="Store View 1" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView1;
