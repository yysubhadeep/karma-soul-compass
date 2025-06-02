
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WesternAstrologyReport from '@/components/WesternAstrologyReport';

const WesternReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const isWestern = location.state?.isWestern;

  // Fix navigation warning by using useEffect
  useEffect(() => {
    if (!formData || !isWestern) {
      navigate('/western-experiment');
    }
  }, [formData, isWestern, navigate]);

  // Redirect if no form data
  if (!formData || !isWestern) {
    return null;
  }

  const handleBack = () => {
    navigate('/western-experiment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <WesternAstrologyReport formData={formData} onBack={handleBack} />
    </div>
  );
};

export default WesternReport;
