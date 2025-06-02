
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EasternAstrologyReport from '@/components/EasternAstrologyReport';

const EasternReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const isEastern = location.state?.isEastern;

  // Fix navigation warning by using useEffect
  useEffect(() => {
    if (!formData || !isEastern) {
      navigate('/easternexperiment');
    }
  }, [formData, isEastern, navigate]);

  // Redirect if no form data
  if (!formData || !isEastern) {
    return null;
  }

  const handleBack = () => {
    navigate('/easternexperiment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <EasternAstrologyReport formData={formData} onBack={handleBack} />
    </div>
  );
};

export default EasternReport;
