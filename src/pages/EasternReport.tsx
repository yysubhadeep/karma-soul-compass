
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EasternAstrologyReport from '@/components/EasternAstrologyReport';
import SEO from '@/components/SEO';

const EasternReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const isEastern = location.state?.isEastern;

  // Fix navigation warning by using useEffect
  useEffect(() => {
    if (!formData || !isEastern) {
      navigate('/vedicscience');
    }
  }, [formData, isEastern, navigate]);

  // Redirect if no form data
  if (!formData || !isEastern) {
    return null;
  }

  const handleBack = () => {
    navigate('/vedicscience');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Your Sacred Archetype Report - Vedic Astrology Analysis",
    "description": "Your complete Vedic astrology report revealing your sacred archetype, dharmic path, and spiritual insights based on authentic calculations.",
    "url": "https://karmamap.lovable.app/vedicreport",
    "isPartOf": {
      "@type": "WebSite",
      "name": "KarmaMap™",
      "url": "https://karmamap.lovable.app"
    }
  };

  return (
    <>
      <SEO
        title={`${formData.name}'s Sacred Archetype Report - Vedic Astrology Analysis | KarmaMap™`}
        description="Your complete Vedic astrology report revealing your sacred archetype, life purpose, and spiritual path. Based on authentic Indian astrological calculations."
        keywords="vedic astrology report, sacred archetype, dharma, spiritual guidance, jyotish reading, indian astrology"
        ogTitle="Your Sacred Archetype Report - Vedic Analysis"
        ogDescription="Complete Vedic astrology report revealing your sacred archetype and spiritual path based on authentic calculations."
        canonicalUrl="https://karmamap.lovable.app/vedicreport"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <EasternAstrologyReport formData={formData} onBack={handleBack} />
      </div>
    </>
  );
};

export default EasternReport;
