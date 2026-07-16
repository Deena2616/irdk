import React from 'react';
import brand4 from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView7 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={brand4} 
            alt="Store View 7" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView7;
