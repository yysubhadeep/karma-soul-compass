
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Compass, Calendar, Star } from "lucide-react";
import KarmaForm from '@/components/KarmaForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="px-4 py-4 sm:py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">KarmaMap™</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Mobile-First Hero Section with Prominent CTA */}
      <section className="px-3 sm:px-4 py-4 md:py-16 max-w-6xl mx-auto">
        {/* Mobile Layout: CTA First */}
        <div className="block lg:hidden space-y-6">
          {/* Mobile CTA - First Fold */}
          <div className="text-center space-y-4">
            <div>
              <span className="inline-block bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                🌟 Discover Your Life Purpose
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight px-2">
                Find Your True Path with <span className="text-orange-600">KarmaMap™</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 px-2">
                Get instant clarity on who you are and what you're meant to do. Powered by AI and ancient wisdom.
              </p>
            </div>

            {/* Mobile CTA Card - Prominent */}
            {!showForm ? (
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-xl mx-2 sm:mx-4">
                <CardContent className="p-4 sm:p-6 text-center space-y-4">
                  <div className="text-3xl sm:text-4xl mb-3">🧭</div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3">
                    Get Your FREE KarmaArchetype
                  </h2>
                  <p className="text-xs sm:text-sm opacity-90 mb-4">
                    Discover your unique personality type and life purpose in just 3 minutes.
                  </p>
                  
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-center space-x-2">
                      <span>✨</span>
                      <span>Instant personalized report</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🔒</span>
                      <span>100% secure & private</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🆓</span>
                      <span>Completely free forever</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg" 
                    className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-full touch-manipulation"
                  >
                    Start My Free Reading
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs opacity-80 mt-3">
                    ⚡ Takes only 3 minutes • No payment required
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-orange-200 mx-1 sm:mx-2">
                <KarmaForm />
              </div>
            )}

            {/* Social Proof - Mobile */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 sm:p-4 border border-green-200 mx-2 sm:mx-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">Trusted by 10,000+ people</span>
              </div>
              <p className="text-xs text-gray-600 italic text-center">
                "Finally understood my life patterns" - Priya, Mumbai
              </p>
            </div>
          </div>

          {/* Mobile Benefits - Second Fold */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-8 px-2">
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">🎯</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Find Purpose</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">💡</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Career Clarity</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">💕</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Love Insights</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-2 sm:p-3">
              <span className="text-lg sm:text-xl">⏰</span>
              <span className="font-medium text-gray-800 text-xs sm:text-sm">Perfect Timing</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Original Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🌟 Discover Your Life Purpose
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Find Your True Path with <span className="text-orange-600">KarmaMap™</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Get instant clarity on who you are, what you're meant to do, and when to take action. 
                Powered by AI and ancient wisdom.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">🎯</span>
                <span className="font-medium text-gray-800">Find Your Purpose</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">💡</span>
                <span className="font-medium text-gray-800">Career Clarity</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">💕</span>
                <span className="font-medium text-gray-800">Relationship Insights</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 rounded-lg p-3">
                <span className="text-2xl">⏰</span>
                <span className="font-medium text-gray-800">Perfect Timing</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">Trusted by 10,000+ people</span>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Finally understood my life patterns and made decisions with confidence" - Priya, Mumbai
              </p>
            </div>
          </div>

          {/* Right Content - CTA Form */}
          <div className="lg:pl-8">
            {!showForm ? (
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-2xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="text-5xl mb-4">🧭</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Get Your FREE KarmaArchetype
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    Discover your unique personality type, life purpose, and growth path in just 3 minutes.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span>✨</span>
                      <span>Instant personalized report</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span>🔒</span>
                      <span>100% secure & private</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span>🆓</span>
                      <span>Completely free forever</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg" 
                    className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full"
                  >
                    Start My Free Reading
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs opacity-80 mt-4">
                    ⚡ Takes only 3 minutes • No payment required
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <KarmaForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <section className="px-4 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why we built this for <span className="text-orange-600">Bharat</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6 text-sm sm:text-lg text-gray-700 leading-relaxed">
          <p>Most of us in Bharat grow up with pressure, confusion, and comparisons.</p>
          
          <div className="bg-white/70 p-4 sm:p-6 rounded-2xl border border-orange-200">
            <p className="mb-4">We follow what society says:</p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <span>📚</span>
                <span>Choose a stream.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>👨‍💼</span>
                <span>Get a job.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>💍</span>
                <span>Settle down.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p>But inside, so many are quietly asking:</p>
            <div className="pl-4 sm:pl-6 border-l-4 border-orange-300 space-y-2 italic">
              <p>"Why do I feel stuck?"</p>
              <p>"Why am I repeating the same mistakes?"</p>
              <p>"What am I really meant to do in this life?"</p>
            </div>
          </div>

          <p>
            We asked the same questions too.<br />
            And we realized—most people aren't lost.<br />
            <strong>They're just disconnected from their inner map.</strong>
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 What You Get
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Your KarmaArchetype™",
              description: "Your karmic personality type",
              icon: "🌟"
            },
            {
              title: "Life Insights",
              description: "Clear insights on career, love, life timing",
              icon: "💡"
            },
            {
              title: "Weekly Guidance",
              description: "Weekly guidance via KarmaSync™",
              icon: "📅"
            },
            {
              title: "Personalized Reports",
              description: "Affordable reports in English, Hindi, and more",
              icon: "📋"
            }
          ].map((feature, index) => (
            <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
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

      {/* Built for Bharat */}
      <section className="px-4 py-12 sm:py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            🪔 Built for Bharat
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-gray-700 text-left max-w-3xl mx-auto">
            <p>This isn't for the elite.</p>
            <p>It's for every young person who's confused.</p>
            <p>Every parent who wants to guide better.</p>
            <p>Every teacher, founder, or seeker trying to live a life that feels aligned.</p>
            
            <div className="bg-white/70 p-4 sm:p-6 rounded-2xl border border-orange-200">
              <p className="font-semibold mb-4">You don't need to be spiritual.</p>
              <p className="font-semibold">You just need to be curious.</p>
            </div>
            
            <p className="text-lg sm:text-xl font-bold text-center text-gray-900">
              Because your life has a map.<br />
              And it's time to read it.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
            <span className="text-xl sm:text-2xl font-bold">KarmaMap™</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Discover your true path with AI-powered ancient wisdom
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 KarmaMap™. Built for Bharat with 🧡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
