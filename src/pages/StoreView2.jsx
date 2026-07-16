import React from 'react';
import pizzaLogo from '../assets/topimage_dining.png';
import '../css/StoreView.css';

export const StoreView2 = () => {
  return (
    <div className="store-view-page">
      <div className="container-fluid p-0">
        <div className="store-image-wrapper">
          <img 
            src={pizzaLogo} 
            alt="Store View 2" 
            className="store-image w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreView2;
