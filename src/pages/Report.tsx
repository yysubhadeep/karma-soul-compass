
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileAstrologyReport from '@/components/MobileAstrologyReport';
import SEO from '@/components/SEO';

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Your Personalized KarmaMap Report",
    "description": "Your complete personality analysis and life guidance report based on your birth details and astrological calculations.",
    "url": "https://karmamap.lovable.app/report",
    "isPartOf": {
      "@type": "WebSite",
      "name": "KarmaMap™",
      "url": "https://karmamap.lovable.app"
    }
  };

  return (
    <>
      <SEO
        title={`${formData.name}'s KarmaMap Report - Personalized Life Guidance | KarmaMap™`}
        description="Your complete personalized astrology report with insights on personality, career, relationships, and life timing. Discover your unique path and purpose."
        keywords="astrology report, personality analysis, life guidance, birth chart, personalized reading"
        ogTitle="Your Personalized KarmaMap Report"
        ogDescription="Complete personality analysis and life guidance based on your unique birth details and astrological calculations."
        canonicalUrl="https://karmamap.lovable.app/report"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <MobileAstrologyReport formData={formData} onBack={handleBack} />
      </div>
    </>
  );
};

export default Report;
