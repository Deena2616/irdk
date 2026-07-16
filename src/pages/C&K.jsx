import React from 'react';
import { useNavigate } from 'react-router-dom';
import BagStoreImage from '../assets/BagStore.png';
import '../css/Acs.css';

const CK = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0 vh-100 position-relative bg-dark">
      <button
        onClick={() => navigate(-1)}
        className="btn position-absolute top-0 start-0 m-4 shadow-sm acs-back-button"
      >
        ←
      </button>

      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          src={BagStoreImage}
          alt="C&K Detail"
          className="img-fluid w-100 h-100"
        />
      </div>
    </div>
  );
};

export default CK;
