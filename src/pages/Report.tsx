
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileAstrologyReport from '@/components/MobileAstrologyReport';

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  // Fix navigation warning by using useEffect
  useEffect(() => {
    if (!formData) {
      navigate('/');
    }
  }, [formData, navigate]);

  // Redirect if no form data
  if (!formData) {
    return null;
  }

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <MobileAstrologyReport formData={formData} onBack={handleBack} />
    </div>
  );
};

export default Report;
