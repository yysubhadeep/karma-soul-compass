
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Compass, Calendar } from "lucide-react";
import KarmaForm from '@/components/KarmaForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="px-4 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Compass className="h-8 w-8 text-orange-600" />
          <span className="text-2xl font-bold text-gray-900">KarmaMap™</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🌟 KarmaMap™ Launch Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why we built this for <span className="text-orange-600">Bharat</span> — and why now.
          </h1>
        </div>

        <div className="max-w-4xl mx-auto text-left space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Most of us in Bharat grow up with pressure, confusion, and comparisons.
          </p>
          
          <div className="bg-white/70 p-6 rounded-2xl border border-orange-200">
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
            <div className="pl-6 border-l-4 border-orange-300 space-y-2 italic">
              <p>"Why do I feel stuck?"</p>
              <p>"Why am I repeating the same mistakes?"</p>
              <p>"What am I really meant to do in this life?"</p>
            </div>
          </div>

          <p>
            We asked the same questions too.
            <br />
            And we realized—most people aren't lost.
            <br />
            <strong>They're just disconnected from their inner map.</strong>
          </p>
        </div>
      </section>

      {/* What is KarmaMap */}
      <section className="px-4 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              🧭 That's why we built KarmaMap™.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700">
              <p>Not as a horoscope app.</p>
              <p>Not as another self-help theory.</p>
              <p className="text-xl font-semibold text-gray-900">
                But as a life clarity engine—powered by AI, ancient wisdom, and your birth chart—to help you answer the real questions:
              </p>
              
              <div className="space-y-4 bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl">
                <div className="space-y-3">
                  <p className="font-semibold">Who am I really?</p>
                  <p className="font-semibold">What is my karma trying to teach me?</p>
                  <p className="font-semibold">When is the right time to act?</p>
                  <p className="font-semibold">What path will bring me peace, success, and truth?</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-3xl text-white transform hover:scale-105 transition-transform duration-300">
                <Compass className="h-24 w-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Your Inner Compass</h3>
                <p className="text-lg opacity-90">
                  Discover your true path with AI-powered ancient wisdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 What You Get
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Built for Bharat */}
      <section className="px-4 py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            🪔 Built for Bharat
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 text-left max-w-3xl mx-auto">
            <p>This isn't for the elite.</p>
            <p>It's for every young person who's confused.</p>
            <p>Every parent who wants to guide better.</p>
            <p>Every teacher, founder, or seeker trying to live a life that feels aligned.</p>
            
            <div className="bg-white/70 p-6 rounded-2xl border border-orange-200">
              <p className="font-semibold mb-4">You don't need to be spiritual.</p>
              <p className="font-semibold">You just need to be curious.</p>
            </div>
            
            <p className="text-xl font-bold text-center text-gray-900">
              Because your life has a map.<br />
              And it's time to read it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-12 rounded-3xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🛕 KarmaMap™ is now live.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free KarmaArchetype.<br />
            Start understanding the life you were born to live.
          </p>
          
          {!showForm ? (
            <Button 
              onClick={() => setShowForm(true)}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full"
            >
              Discover Your KarmaArchetype
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <KarmaForm />
            </div>
          )}
          
          <p className="text-sm mt-6 opacity-80">
            🪷 A new Bharat begins with inner clarity.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Compass className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold">KarmaMap™</span>
          </div>
          <p className="text-gray-400 mb-4">
            Discover your true path with AI-powered ancient wisdom
          </p>
          <p className="text-sm text-gray-500">
            © 2025 KarmaMap™. Built for Bharat with 🧡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
