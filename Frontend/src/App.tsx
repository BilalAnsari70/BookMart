import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

import BuyerPage from './Pages/BuyerPage';
import SellerPage from './Pages/SellerPage';
import WishlistPage from './Pages/WishlistPage';



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      
            <Route path="/buyer" element={<BuyerPage />} />
      <Route path="/seller" element={<SellerPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  );
};

export default App;
