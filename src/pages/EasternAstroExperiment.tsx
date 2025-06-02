
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import EasternKarmaForm from '@/components/EasternKarmaForm';
import SEO from '@/components/SEO';

const EasternAstroExperiment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vedic Astrology Reading - Sacred Archetype Discovery",
    "description": "Discover your sacred archetype through authentic Vedic astrology calculations. Get personalized insights based on ancient Indian wisdom and planetary positions.",
    "url": "https://karmamap.lovable.app/vedicscience",
    "isPartOf": {
      "@type": "WebSite",
      "name": "KarmaMap™",
      "url": "https://karmamap.lovable.app"
    }
  };

  return (
    <>
      <SEO
        title="Vedic Astrology Reading - Discover Your Sacred Archetype | KarmaMap™"
        description="Get your personalized Vedic astrology reading based on authentic Indian calculations. Discover your sacred archetype, life purpose, and spiritual path through ancient wisdom."
        keywords="vedic astrology, sacred archetype, indian astrology, jyotish, birth chart, life purpose, spiritual guidance, ancient wisdom"
        ogTitle="Free Vedic Astrology Reading - Sacred Archetype Discovery"
        ogDescription="Discover your sacred archetype through authentic Vedic astrology. Get personalized insights based on your birth details and ancient Indian wisdom."
        canonicalUrl="https://karmamap.lovable.app/vedicscience"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        {/* Header with Back Button */}
        <header className="px-4 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🕉️</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Vedic Sciences</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-4 py-8 sm:py-12 max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🌟 Ancient Vedic Wisdom
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Your <span className="text-orange-600">Sacred Archetype</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Experience the profound wisdom of Vedic sciences. Get personalized insights based on your exact birth details and planetary positions, calculated using authentic Indian astrological methods.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-orange-200 bg-white/70">
                <CardHeader className="text-center pb-3">
                  <div className="text-3xl mb-2">🕉️</div>
                  <CardTitle className="text-lg">Authentic Calculations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    Based on traditional Vedic astrology methods passed down through millennia
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white/70">
                <CardHeader className="text-center pb-3">
                  <div className="text-3xl mb-2">🌙</div>
                  <CardTitle className="text-lg">Precise Timing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    Your exact birth time and location for accurate planetary positions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white/70">
                <CardHeader className="text-center pb-3">
                  <div className="text-3xl mb-2">🎯</div>
                  <CardTitle className="text-lg">Life Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    Deep insights into your dharma, karma, and spiritual evolution
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-4 pb-12 max-w-lg mx-auto">
          <EasternKarmaForm />
        </section>

        {/* Trust Signals */}
        <section className="px-4 py-8 bg-gradient-to-r from-orange-100 to-yellow-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              🪔 Rooted in Ancient Tradition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/70 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">📚 Traditional Methods</h3>
                <p className="text-sm text-gray-700">
                  Our calculations use authentic Vedic formulas from classical texts like Brihat Parashara Hora Shastra and Jataka Parijata.
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">🌍 Precise Geography</h3>
                <p className="text-sm text-gray-700">
                  We account for your exact birthplace coordinates and time zone to ensure the most accurate planetary positions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EasternAstroExperiment;
