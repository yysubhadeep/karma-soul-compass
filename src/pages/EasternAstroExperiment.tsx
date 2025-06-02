
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Compass, Calendar, Star, Shield, Eye, Heart } from "lucide-react";
import EasternKarmaForm from '@/components/EasternKarmaForm';

const EasternAstroExperiment = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="px-3 sm:px-4 py-3 sm:py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Compass className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange-600" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Vedic KarmaMap™</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-3 sm:px-4 py-6 sm:py-8 md:py-16 max-w-7xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <div>
            <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-orange-200">
              🕉️ 5,000-Year-Old Vedic Wisdom Meets Modern Clarity
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              🕉️ Decode Your Life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Vedic Archetype Mapping™</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0">
              Enter the most accurate self-mapping system—where timeless Vedic astrology reveals your true path in career, wealth, relationships, and the life you're meant to live.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-3 sm:p-4 border border-orange-200 max-w-2xl mx-auto mb-6 sm:mb-8">
              <p className="text-base sm:text-lg font-semibold text-orange-800">
                ✨ Not just a horoscope. A karmic map for your entire life.
              </p>
            </div>

            {/* Enhanced CTA in Hero Section with better mobile alignment */}
            <div className="relative mb-6 sm:mb-8">
              {/* Enhanced attention-grabbing border animation */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-xl sm:rounded-2xl opacity-70 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 animate-bounce">🕉️</div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                  Get Your Vedic Archetype Map Now
                </h2>
                <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-0">
                  Discover your authentic karmic blueprint using 5,000-year-old Vedic wisdom with Swiss-grade astronomical precision.
                </p>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm sm:text-base">✨</span>
                    <span className="text-center leading-tight">True sidereal calculations</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm sm:text-base">🎯</span>
                    <span className="text-center leading-tight">Karmic pattern mapping</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm sm:text-base">🌙</span>
                    <span className="text-center leading-tight">Ancient Vedic wisdom</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm sm:text-base">🔒</span>
                    <span className="text-center leading-tight">Completely secure & private</span>
                  </div>
                </div>
                
                {/* Better aligned CTA section */}
                <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg" 
                    className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-full touch-manipulation transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse min-h-[56px] sm:min-h-[64px] min-w-[280px] sm:min-w-[320px]"
                  >
                    🕉️ Decode My Life Now
                    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </Button>
                  
                  {/* Better aligned urgency indicator */}
                  <div className="bg-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold border border-white/30 inline-flex items-center space-x-2">
                    <span>🚀</span>
                    <span>Get your karmic map in just 3 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600 px-2 sm:px-0">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
              <span>Authentic Vedic Methods</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
              <span>Swiss-Grade Precision</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
              <span>True Sidereal Calculations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal/Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold touch-manipulation w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            >
              ×
            </button>
            <EasternKarmaForm />
          </div>
        </div>
      )}

      {/* Key Areas Section - Top Fold */}
      <section className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            🌟 Key Areas You'll Get Profound Answers About
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
            Discover deep insights across all major life domains through authentic Vedic wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            {
              title: "Life Purpose & Soul Mission",
              description: "Your dharmic path and cosmic calling",
              icon: "🎯"
            },
            {
              title: "Career & Professional Growth",
              description: "Optimal timing and aligned opportunities",
              icon: "💼"
            },
            {
              title: "Relationships & Love Life",
              description: "Compatibility patterns and karmic connections",
              icon: "💕"
            },
            {
              title: "Health & Vitality Patterns",
              description: "Physical constitution and wellness insights",
              icon: "🌿"
            },
            {
              title: "Wealth & Abundance Flow",
              description: "Financial karma and prosperity timing",
              icon: "💰"
            },
            {
              title: "Spiritual Growth Journey",
              description: "Meditation practices and consciousness evolution",
              icon: "🧘"
            }
          ].map((area, index) => (
            <Card key={index} className="border-orange-200 hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
              <CardContent className="p-3 sm:p-4 md:p-5 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">{area.icon}</div>
                <h3 className="font-bold text-orange-700 text-sm sm:text-base mb-1 sm:mb-2 leading-tight">{area.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Benefits */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-3 sm:p-4 md:p-6 border border-orange-200 text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-orange-800 mb-2 sm:mb-3">✨ What Makes This Different?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-base sm:text-lg">🔮</span>
              <span className="font-semibold text-orange-700">Precise Timing</span>
              <span className="text-gray-600 text-xs">Exact planetary periods for decisions</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-base sm:text-lg">🌙</span>
              <span className="font-semibold text-orange-700">Karmic Patterns</span>
              <span className="text-gray-600 text-xs">Understand your soul's journey</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-base sm:text-lg">⚡</span>
              <span className="font-semibold text-orange-700">Practical Remedies</span>
              <span className="text-gray-600 text-xs">Ancient solutions for modern life</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with better mobile alignment */}
      <section className="px-3 sm:px-4 py-6 sm:py-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content - Benefits */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
                Why <span className="text-orange-600">Vedic Sciences</span> for Transformation?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-2 sm:px-0">
                Vedic sciences offer profound transformation through understanding your cosmic blueprint. This ancient wisdom provides psychological alignment and practical tools for future-readiness and personal growth.
              </p>
            </div>

            {/* Transformation Benefits */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-start space-x-2 sm:space-x-3 bg-white/70 rounded-lg p-3 sm:p-4 border border-orange-200">
                <span className="text-xl sm:text-2xl">🧘</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Deep Psychological Alignment</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Understand your mind patterns and emotional blocks for profound growth</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 bg-white/70 rounded-lg p-3 sm:p-4 border border-orange-200">
                <span className="text-xl sm:text-2xl">🌟</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Future-Ready Insights</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Align with your cosmic purpose for sustained success and growth</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 bg-white/70 rounded-lg p-3 sm:p-4 border border-orange-200">
                <span className="text-xl sm:text-2xl">🕉️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Karmic Pattern Recognition</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Identify and transform limiting patterns for spiritual evolution</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 bg-white/70 rounded-lg p-3 sm:p-4 border border-orange-200">
                <span className="text-xl sm:text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Practical Transformation Tools</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Ancient remedies and practices for modern life challenges</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-3 sm:p-4 border border-orange-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Transformative Experience</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 italic">
                "The insights helped me understand my patterns and provided practical tools for growth" - Transformation Journey Client
              </p>
            </div>
          </div>

          {/* Right Content - Enhanced CTA Form with improved mobile alignment */}
          <div className="order-1 lg:order-2">
            {!showForm ? (
              <div className="relative">
                {/* Enhanced attention-grabbing border animation */}
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-2xl sm:rounded-3xl blur-lg opacity-40 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-xl sm:rounded-2xl opacity-60 animate-pulse"></div>
                <Card className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 animate-bounce">🕉️</div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      Get Your Vedic Archetype Map
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6 px-2 sm:px-0">
                      Discover your authentic karmic blueprint using 5,000-year-old Vedic wisdom with Swiss-grade astronomical precision.
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <span>✨</span>
                        <span>True sidereal calculations</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>🎯</span>
                        <span>Karmic pattern mapping</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>🌙</span>
                        <span>Ancient Vedic wisdom</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>🔒</span>
                        <span>Completely secure & private</span>
                      </div>
                    </div>
                    
                    {/* Better aligned CTA section */}
                    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                      <Button 
                        onClick={() => setShowForm(true)}
                        size="lg" 
                        className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 font-bold text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full touch-manipulation transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse min-h-[52px] sm:min-h-[60px] min-w-[240px] sm:min-w-[260px]"
                      >
                        🕉️ Decode My Life Now
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </Button>
                      
                      {/* Better aligned urgency indicator */}
                      <div className="bg-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold border border-white/30 inline-flex items-center space-x-2">
                        <span>🚀</span>
                        <span>Get your karmic map in just 3 minutes</span>
                      </div>
                    </div>
                    
                    <p className="text-xs opacity-80 mt-3 sm:mt-4">
                      ⚡ Authentic Vedic sciences • Swiss-grade precision
                    </p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-white/20">
                <EasternKarmaForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-3 sm:px-4 py-8 sm:py-12 md:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            🕉️ Vedic Sciences Transformation Features
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
            Experience profound transformation through authentic Vedic sciences designed for modern growth and future-readiness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              title: "Cosmic Healing Insights",
              description: "Understand your energetic patterns for deep psychological healing",
              icon: "🌟"
            },
            {
              title: "Sacred Archetype Mapping",
              description: "Discover your soul's blueprint through ancient Vedic wisdom",
              icon: "🌙"
            },
            {
              title: "Karmic Transformation",
              description: "Transform limiting patterns and align with your highest purpose",
              icon: "🎯"
            },
            {
              title: "Future-Ready Practices",
              description: "Ancient remedies adapted for modern life challenges",
              icon: "🌿"
            }
          ].map((feature, index) => (
            <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-2 sm:pb-3">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{feature.icon}</div>
                <CardTitle className="text-sm sm:text-base md:text-lg text-orange-700">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Transformation Benefits Section */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 md:py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
              How Vedic Sciences Transform Your Life
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Experience deep transformation and psychological alignment through time-tested Vedic practices designed for future-readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl text-orange-700 flex items-center space-x-2">
                  <span>🧘</span>
                  <span>Psychological Transformation Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Release deep emotional blocks</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Understand karmic patterns</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Develop emotional intelligence</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Transform limiting beliefs</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Align with authentic purpose</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl text-orange-700 flex items-center space-x-2">
                  <span>🌟</span>
                  <span>Future-Readiness & Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Navigate life transitions gracefully</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Develop intuitive decision-making</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Build resilience and adaptability</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Enhance creative potential</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-xs sm:text-sm">Cultivate spiritual wisdom</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 sm:px-4 py-6 sm:py-8 md:py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-3 sm:mb-4 md:mb-6">
            <Compass className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange-500" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold">Vedic KarmaMap™</span>
          </div>
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base px-2 sm:px-0">
            Ancient Vedic sciences for modern transformation and alignment
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Vedic KarmaMap™. Authentic transformation through sacred wisdom
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EasternAstroExperiment;
