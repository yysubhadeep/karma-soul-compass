
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
      <header className="px-4 py-4 sm:py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">Vedic KarmaMap™</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-3 sm:px-4 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div>
            <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-200">
              🕉️ Ancient Vedic Wisdom Meets Modern Precision
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Vedic Archetype</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              Experience the most authentic archetype mapping using 5,000-year-old Vedic astrology, sidereal calculations, and time-tested Eastern wisdom traditions.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-orange-600" />
              <span>Swiss Ephemeris Precision</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-orange-600" />
              <span>Sidereal Calculations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-orange-600" />
              <span>Ancient Vedic Methods</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 sm:px-4 py-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Benefits */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Why Choose <span className="text-orange-600">Vedic</span> Over Western Astrology?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While Western astrology uses the tropical zodiac, Vedic astrology uses the actual star positions (sidereal zodiac), providing more accurate insights into your true cosmic blueprint.
              </p>
            </div>

            {/* Comparison Points */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-start space-x-3 bg-white/70 rounded-lg p-4 border border-orange-200">
                <span className="text-2xl">🕉️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Ancient Accuracy</h3>
                  <p className="text-sm text-gray-600">5,000-year-old system using actual star positions, not seasons</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/70 rounded-lg p-4 border border-orange-200">
                <span className="text-2xl">🌟</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Nakshatra Precision</h3>
                  <p className="text-sm text-gray-600">27 lunar mansions reveal deeper personality layers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/70 rounded-lg p-4 border border-orange-200">
                <span className="text-2xl">🧘</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Spiritual Depth</h3>
                  <p className="text-sm text-gray-600">Karma, dharma, and soul purpose integrated into analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/70 rounded-lg p-4 border border-orange-200">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Remedial Wisdom</h3>
                  <p className="text-sm text-gray-600">Practical solutions and spiritual practices for growth</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">Most Authentic Vedic Reading</span>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Finally, a truly accurate reading based on real star positions, not outdated Western methods" - Beta User
              </p>
            </div>
          </div>

          {/* Right Content - CTA Form */}
          <div className="order-1 lg:order-2">
            {!showForm ? (
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-2xl">
                <CardContent className="p-6 sm:p-8 text-center space-y-6">
                  <div className="text-4xl sm:text-5xl mb-4">🕉️</div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    Get Your Sacred Vedic KarmaArchetype
                  </h2>
                  <p className="text-sm sm:text-lg opacity-90 mb-6">
                    Experience authentic archetype calculation using ancient Vedic wisdom and precise sidereal calculations.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span>✨</span>
                      <span>Swiss Ephemeris precision</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🕉️</span>
                      <span>Ancient Vedic calculations</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🌙</span>
                      <span>Nakshatra mapping included</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🔒</span>
                      <span>Completely secure & private</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg" 
                    className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full touch-manipulation"
                  >
                    Start Your Sacred Reading
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  
                  <p className="text-xs opacity-80 mt-4">
                    ⚡ True sidereal calculations • Ancient accuracy
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20">
                <EasternKarmaForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            🕉️ Vedic Precision Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the depth and accuracy that only authentic Vedic astrology can provide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Sidereal Accuracy",
              description: "Real star positions, not seasonal approximations like Western astrology",
              icon: "🌟"
            },
            {
              title: "Nakshatra Wisdom",
              description: "27 lunar mansions reveal your deepest personality layers",
              icon: "🌙"
            },
            {
              title: "Karma Mapping",
              description: "Understand your soul's purpose and karmic patterns",
              icon: "🎯"
            },
            {
              title: "Vedic Remedies",
              description: "Ancient practices and solutions for spiritual growth",
              icon: "🌿"
            }
          ].map((feature, index) => (
            <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-base sm:text-lg text-orange-700">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vedic vs Western Comparison */}
      <section className="px-4 py-12 sm:py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vedic vs Western: The Truth About Accuracy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Due to Earth's precession, Western astrology is now 24° off from actual star positions. Vedic astrology accounts for this.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700 flex items-center space-x-2">
                  <span>🕉️</span>
                  <span>Vedic (Sidereal) Astrology</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-sm">Uses actual star positions</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-sm">Accounts for Earth's precession</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-sm">5,000+ years of refinement</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-sm">Includes 27 Nakshatras</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <span>✅</span>
                  <span className="text-sm">Spiritual & karmic insights</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 bg-gray-50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-700 flex items-center space-x-2">
                  <span>♈</span>
                  <span>Western (Tropical) Astrology</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-red-600">
                  <span>❌</span>
                  <span className="text-sm">Uses seasonal calendar, not stars</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <span>❌</span>
                  <span className="text-sm">24° off from actual positions</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-600">
                  <span>⚠️</span>
                  <span className="text-sm">2,000 years old system</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <span>❌</span>
                  <span className="text-sm">No Nakshatra system</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-600">
                  <span>⚠️</span>
                  <span className="text-sm">Limited spiritual context</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
            <span className="text-xl sm:text-2xl font-bold">Vedic KarmaMap™</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Ancient Vedic wisdom meets Swiss precision
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Vedic KarmaMap™. Authentic sidereal calculations since time immemorial
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EasternAstroExperiment;
