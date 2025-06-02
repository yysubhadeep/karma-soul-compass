
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Compass, Calendar, Star } from "lucide-react";
import WesternKarmaForm from '@/components/WesternKarmaForm';

const WesternAstroExperiment = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="px-4 py-4 sm:py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">Western KarmaMap™</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
        </nav>
      </header>

      {/* Mobile-First Hero Section with Prominent CTA */}
      <section className="px-3 sm:px-4 py-4 md:py-16 max-w-6xl mx-auto">
        {/* Mobile Layout: CTA First */}
        <div className="block lg:hidden space-y-6">
          {/* Mobile CTA - First Fold */}
          <div className="text-center space-y-4">
            <div>
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                🔮 Western Astrology Precision
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight px-2">
                Discover Your True Archetype with <span className="text-purple-600">Precise Calculations</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 px-2">
                Using advanced astronomical calculations and Western astrology for the most accurate archetype mapping.
              </p>
            </div>

            {/* Mobile CTA Card - Prominent */}
            {!showForm ? (
              <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white border-0 shadow-xl mx-2 sm:mx-4">
                <CardContent className="p-4 sm:p-6 text-center space-y-4">
                  <div className="text-3xl sm:text-4xl mb-3">🔮</div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3">
                    Get Your Precise KarmaArchetype
                  </h2>
                  <p className="text-xs sm:text-sm opacity-90 mb-4">
                    Experience the most accurate archetype calculation using real astronomical data.
                  </p>
                  
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-center space-x-2">
                      <span>⭐</span>
                      <span>Astronomia library precision</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🌟</span>
                      <span>Western astrology methods</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🔒</span>
                      <span>Completely secure & private</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg" 
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-full touch-manipulation"
                  >
                    Start Precise Reading
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs opacity-80 mt-3">
                    ⚡ Advanced calculations • Experimental accuracy
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-purple-200 mx-1 sm:mx-2">
                <WesternKarmaForm />
              </div>
            )}

            {/* Social Proof - Mobile */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-3 sm:p-4 border border-purple-200 mx-2 sm:mx-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">Experimental precision</span>
              </div>
              <p className="text-xs text-gray-600 italic text-center">
                "Most accurate reading I've ever received" - Beta tester
              </p>
            </div>
          </div>

          {/* Mobile Benefits - Second Fold */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-8 px-2">
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">🔮</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Precise Calc</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">⭐</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Real Astronomy</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">🌟</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Western Method</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">🎯</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Exact Timing</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Original Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🔮 Western Astrology Precision
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Discover Your True Archetype with <span className="text-purple-600">Precise Calculations</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Experience the most accurate archetype mapping using real astronomical data and Western astrological methods.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">🔮</span>
                <span className="font-medium text-gray-800">Precise Calculations</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">⭐</span>
                <span className="font-medium text-gray-800">Real Astronomy</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">🌟</span>
                <span className="font-medium text-gray-800">Western Methods</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">🎯</span>
                <span className="font-medium text-gray-800">Exact Timing</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">Experimental precision</span>
              </div>
              <p className="text-sm text-gray-600 italic">
                "The most accurate astrological reading I've ever received" - Beta tester
              </p>
            </div>
          </div>

          {/* Right Content - CTA Form */}
          <div className="lg:pl-8">
            {!showForm ? (
              <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white border-0 shadow-2xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="text-5xl mb-4">🔮</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Get Your Precise KarmaArchetype
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    Experience the most accurate archetype calculation using real astronomical data and advanced algorithms.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span>⭐</span>
                      <span>Astronomia library precision</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span>🌟</span>
                      <span>Western astrology methods</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span>🔒</span>
                      <span>Completely secure & private</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg" 
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full"
                  >
                    Start Precise Reading
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs opacity-80 mt-4">
                    ⚡ Advanced calculations • Experimental accuracy
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <WesternKarmaForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            🔮 Advanced Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Astronomia Library",
              description: "Real astronomical calculations for planetary positions",
              icon: "⭐"
            },
            {
              title: "UTC Conversion",
              description: "Precise timezone handling for accurate timing",
              icon: "🌍"
            },
            {
              title: "Planetary Longitudes",
              description: "Exact positions of all major celestial bodies",
              icon: "🪐"
            },
            {
              title: "Archetype Mapping",
              description: "Advanced scoring system for 12 unique archetypes",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-3">
                <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
            <span className="text-xl sm:text-2xl font-bold">Western KarmaMap™</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Experimental precision in archetype discovery
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Western KarmaMap™. Advanced astronomical calculations
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WesternAstroExperiment;
