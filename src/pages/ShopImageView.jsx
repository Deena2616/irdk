import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ShopImageView.css';

const ShopImageView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.image;

  const handleBackToShops = () => {
    navigate('/shops');
  };

  if (!imageUrl) {
    // Fallback if no image is provided
    return (
      <div className="store-view-page">
        <div className="container-fluid p-0">
          <div className="position-absolute top-0 start-0 z-10 p-3">
            <button 
              className="btn btn-dark btn-sm d-flex align-items-center gap-2"
              onClick={handleBackToShops}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Back to Shops
            </button>
          </div>
          <div className="store-image-wrapper">
            <img 
              src="../assets/topimage_dining.png" 
              alt="Shop Image" 
              className="store-image w-100"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-image-view-container">
      <div className="container-fluid p-0 h-100">
        {/* Back button */}
        <div className="back-button-container">
          <button 
            className="back-button btn"
            onClick={handleBackToShops}
            aria-label="Back to Shops"
          >
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </button>
        </div>

        {/* Shop image display */}
        <div className="store-image-wrapper">
          <img 
            src={imageUrl} 
            alt="Shop Image" 
            className="store-image img-fluid"
            onLoad={(e) => e.target.classList.add('loaded')}
            onError={(e) => {
              e.target.src = '../assets/topimage_dining.png';
              e.target.classList.add('loaded');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopImageView;
