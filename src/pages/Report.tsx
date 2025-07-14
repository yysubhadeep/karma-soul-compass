
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
    "@type": ["WebPage", "Report"],
    "name": `${formData?.name}'s Personalized KarmaMap Report`,
    "description": "Complete personality analysis and life guidance report based on birth details and astrological calculations, including archetype analysis, vedic insights, and personalized recommendations.",
    "url": "https://karmamap.lovable.app/report",
    "author": {
      "@type": "Organization",
      "name": "KarmaMap™",
      "url": "https://karmamap.lovable.app"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "KarmaMap™",
      "url": "https://karmamap.lovable.app",
      "publisher": {
        "@type": "Organization",
        "name": "KarmaMap™"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Personality Analysis"
      },
      {
        "@type": "Thing", 
        "name": "Astrology Report"
      },
      {
        "@type": "Thing",
        "name": "Life Guidance"
      },
      {
        "@type": "Thing",
        "name": "Vedic Astrology"
      }
    ],
    "keywords": "astrology report, personality analysis, life guidance, birth chart, personalized reading, vedic astrology, archetype analysis",
    "dateCreated": new Date().toISOString(),
    "inLanguage": "en-US"
  };

  return (
    <>
      <SEO
        title={`${formData.name}'s KarmaMap Report - Personalized Astrology & Life Guidance | KarmaMap™`}
        description={`Complete personalized astrology report for ${formData.name} with insights on personality, career, relationships, and life timing. Discover your unique archetype, vedic insights, and personalized growth recommendations.`}
        keywords="astrology report, personality analysis, life guidance, birth chart, personalized reading, vedic astrology, archetype analysis, psychological profile, spiritual growth, life purpose"
        ogTitle={`${formData.name}'s Personalized KarmaMap Report`}
        ogDescription={`Complete personality analysis and life guidance based on ${formData.name}'s unique birth details and astrological calculations. Includes archetype analysis, vedic insights, and growth recommendations.`}
        ogImage="https://karmamap.lovable.app/og-report-image.jpg"
        canonicalUrl="https://karmamap.lovable.app/report"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <MobileAstrologyReport formData={formData} onBack={handleBack} />
        
        {/* Performance optimization: Preload critical resources */}
        <link rel="preload" href="/fonts" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </div>
    </>
  );
};

export default Report;
