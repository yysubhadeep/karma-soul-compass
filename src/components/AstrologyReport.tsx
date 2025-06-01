
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Clock, Briefcase, Heart, Brain, Target, Shield, Lightbulb, Users, Zap } from "lucide-react";
import { getArchetypeData, calculateArchetypeFromChart } from '@/data/archetypeData';

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface AstrologyReportProps {
  formData: FormData;
  onBack: () => void;
}

const AstrologyReport = ({ formData, onBack }: AstrologyReportProps) => {
  // Generate report based on birth data
  const generateReport = () => {
    const birthDate = new Date(formData.dateOfBirth);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // Fixed zodiac calculation with correct date ranges
    const getZodiacSign = (month: number, day: number) => {
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return { name: "Capricorn", element: "Earth", ruling: "Saturn" };
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return { name: "Aquarius", element: "Air", ruling: "Uranus" };
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return { name: "Pisces", element: "Water", ruling: "Neptune" };
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return { name: "Aries", element: "Fire", ruling: "Mars" };
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return { name: "Taurus", element: "Earth", ruling: "Venus" };
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return { name: "Gemini", element: "Air", ruling: "Mercury" };
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return { name: "Cancer", element: "Water", ruling: "Moon" };
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return { name: "Leo", element: "Fire", ruling: "Sun" };
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return { name: "Virgo", element: "Earth", ruling: "Mercury" };
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return { name: "Libra", element: "Air", ruling: "Venus" };
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return { name: "Scorpio", element: "Water", ruling: "Mars" };
      } else {
        return { name: "Sagittarius", element: "Fire", ruling: "Jupiter" };
      }
    };

    const zodiac = getZodiacSign(month, day);

    // Generate secondary patterns (simplified)
    const zodiacOrder = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const timeHour = parseInt(formData.timeOfBirth.split(':')[0]);
    const emotionalPattern = zodiacOrder[(timeHour + day) % 12];
    const lifeApproach = zodiacOrder[(timeHour * 2 + month) % 12];
    
    // Generate dominant influences
    const dominantInfluence = zodiac.ruling;
    const dominantElement = zodiac.element;
    const dominantModality = ["Cardinal", "Fixed", "Mutable"][timeHour % 3];

    // Calculate archetype using the new system
    const archetypeResult = calculateArchetypeFromChart(
      zodiac.name,
      emotionalPattern,
      lifeApproach,
      dominantInfluence,
      dominantElement,
      dominantModality
    );

    return {
      zodiac,
      emotionalPattern,
      lifeApproach,
      dominantInfluence,
      dominantElement,
      dominantModality,
      archetype: archetypeResult.primary,
      secondaryArchetype: archetypeResult.secondary,
      scoreBreakdown: archetypeResult.scoreBreakdown
    };
  };

  const report = generateReport();
  const archetypeData = getArchetypeData(report.archetype);
  const secondaryArchetypeData = getArchetypeData(report.secondaryArchetype);

  // Enhanced personalized insights based on psychological profile
  const getPersonalizedInsights = () => {
    const insights = [];
    
    // Core-Emotional combination insight
    insights.push({
      title: "Your Inner-Outer Balance",
      icon: "🌗",
      content: `With your ${report.zodiac.name} core pattern and ${report.emotionalPattern} emotional nature, you present yourself as ${report.zodiac.name === "Leo" ? "confident and radiant" : report.zodiac.name === "Virgo" ? "practical and detail-oriented" : "authentically yourself"} to the world, while internally you process emotions like a ${report.emotionalPattern}. This creates a ${report.zodiac.element}-${getElementForSign(report.emotionalPattern)} dynamic that ${report.zodiac.element === getElementForSign(report.emotionalPattern) ? "harmonizes beautifully" : "requires conscious integration"}.`
    });

    // Dominant element insight
    insights.push({
      title: "Your Elemental Power",
      icon: getElementEmoji(report.dominantElement),
      content: `${report.dominantElement} energy dominates your psychological profile, making you naturally ${getElementTraits(report.dominantElement)}. This manifests in your ${report.archetype} archetype through ${getElementArchetypeConnection(report.dominantElement, report.archetype)}.`
    });

    // Life approach insight
    insights.push({
      title: "How You Navigate Life",
      icon: "🧭",
      content: `Your ${report.lifeApproach} life approach means you handle new situations with ${getApproachTraits(report.lifeApproach)}. This complements your ${report.archetype} nature by ${getApproachArchetypeConnection(report.lifeApproach, report.archetype)}.`
    });

    return insights;
  };

  // Helper functions for enhanced insights
  const getElementForSign = (sign: string) => {
    const elementMap: Record<string, string> = {
      "Aries": "Fire", "Leo": "Fire", "Sagittarius": "Fire",
      "Taurus": "Earth", "Virgo": "Earth", "Capricorn": "Earth",
      "Gemini": "Air", "Libra": "Air", "Aquarius": "Air",
      "Cancer": "Water", "Scorpio": "Water", "Pisces": "Water"
    };
    return elementMap[sign] || "Unknown";
  };

  const getElementEmoji = (element: string) => {
    const emojiMap: Record<string, string> = {
      "Fire": "🔥", "Earth": "🌱", "Air": "💨", "Water": "🌊"
    };
    return emojiMap[element] || "⭐";
  };

  const getElementTraits = (element: string) => {
    const traitsMap: Record<string, string> = {
      "Fire": "passionate, action-oriented, and inspiring to others",
      "Earth": "grounded, practical, and focused on tangible results",
      "Air": "intellectual, communicative, and idea-focused",
      "Water": "intuitive, emotional, and deeply empathetic"
    };
    return traitsMap[element] || "uniquely balanced";
  };

  const getElementArchetypeConnection = (element: string, archetype: string) => {
    return `your natural tendency to ${element === "Fire" ? "initiate and lead" : element === "Earth" ? "build and stabilize" : element === "Air" ? "connect and communicate" : "heal and nurture"}`;
  };

  const getApproachTraits = (sign: string) => {
    const traitsMap: Record<string, string> = {
      "Aries": "bold confidence and direct action",
      "Taurus": "steady determination and practical wisdom",
      "Gemini": "curious adaptability and quick thinking",
      "Cancer": "nurturing caution and emotional intelligence",
      "Leo": "warm charisma and creative self-expression",
      "Virgo": "analytical precision and helpful service",
      "Libra": "diplomatic grace and aesthetic awareness",
      "Scorpio": "intense focus and transformative power",
      "Sagittarius": "adventurous optimism and philosophical insight",
      "Capricorn": "ambitious discipline and strategic planning",
      "Aquarius": "innovative independence and humanitarian vision",
      "Pisces": "intuitive compassion and artistic sensitivity"
    };
    return traitsMap[sign] || "balanced perspective";
  };

  const getApproachArchetypeConnection = (sign: string, archetype: string) => {
    return `giving you the perfect framework to express your ${archetype} energy in the world`;
  };

  const personalizedInsights = getPersonalizedInsights();

  // Get archetype emoji
  const getArchetypeEmoji = (archetype: string) => {
    const emojiMap: Record<string, string> = {
      "The Builder": "🛠️",
      "The Dreamer": "🌙", 
      "The Leader": "🔥",
      "The Healer": "🌿",
      "The Seeker": "🧭",
      "The Rebel": "⚡",
      "The Mystic": "🔮",
      "The Visionary": "🌈",
      "The Connector": "🤝",
      "The Strategist": "🧠",
      "The Performer": "🎭",
      "The Alchemist": "🦂"
    };
    return emojiMap[archetype] || "🌟";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Enhanced Back Button - Much More Visible */}
      <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl border-2 border-orange-300">
        <Button 
          onClick={onBack}
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 text-lg shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 mr-3" />
          Back to Form
        </Button>
        <h2 className="text-3xl font-bold text-gray-900">Your KarmaArchetype Report</h2>
        <div className="w-32"></div> {/* Spacer for centering */}
      </div>

      {/* Personal Info Summary */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <span className="text-2xl">📊</span>
            <span>Personality Analysis Summary for {formData.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{formData.dateOfBirth}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{formData.timeOfBirth}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{formData.placeOfBirth}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Archetype */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
        <CardHeader className="text-center pb-6">
          <div className="text-6xl mb-4">{getArchetypeEmoji(report.archetype)}</div>
          <CardTitle className="text-3xl text-orange-800 mb-4">
            Your Primary KarmaArchetype
          </CardTitle>
          <div className="text-4xl font-bold text-orange-900 mb-2">
            {report.archetype}
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Based on your personality analysis, you embody the essence of <strong>{report.archetype}</strong>.
          </p>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-md text-gray-600">
              💫 Your secondary archetype is <strong>{report.secondaryArchetype}</strong>, adding depth to your psychological blueprint.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Personalized Insights */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">🔮 Your Personalized Psychological Insights</h3>
        {personalizedInsights.map((insight, index) => (
          <Card key={index} className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-lg">
                <span className="text-2xl">{insight.icon}</span>
                <span className="text-purple-800">{insight.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">{insight.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Personality Profile - Vertical Layout */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <span>🧠</span>
            <span>Your Complete Personality Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Primary Patterns */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-orange-200 pb-2">Core Patterns</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Core Identity</h4>
                  <p className="text-sm text-gray-600">Primary Personality Pattern</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{report.zodiac.name}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Emotional Nature</h4>
                  <p className="text-sm text-gray-600">Inner Processing Style</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{report.emotionalPattern}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Life Approach</h4>
                  <p className="text-sm text-gray-600">External Engagement Style</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{report.lifeApproach}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dominant Influences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-red-200 pb-2">Dominant Influences</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Primary Influence</h4>
                  <p className="text-sm text-gray-600">Behavioral Driver</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{report.dominantInfluence}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Element</h4>
                  <p className="text-sm text-gray-600">Energy Type</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{report.dominantElement}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Modality</h4>
                  <p className="text-sm text-gray-600">Life Rhythm</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{report.dominantModality}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vedic Insights Section */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <span className="text-2xl">🕉️</span>
            <span>Vedic Insights for {report.archetype} {getArchetypeEmoji(report.archetype)}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/60 rounded-lg p-4">
            <p className="text-lg text-amber-900 font-medium leading-relaxed">
              <strong>Vedic View:</strong> {archetypeData.vedicInsights.view}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Start Doing */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <span className="text-xl mr-2">✅</span>
                Start Doing
              </h4>
              <ul className="space-y-2">
                {archetypeData.vedicInsights.startDoing.map((item, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stop Doing */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                <span className="text-xl mr-2">❌</span>
                Stop Doing
              </h4>
              <ul className="space-y-2">
                {archetypeData.vedicInsights.stopDoing.map((item, index) => (
                  <li key={index} className="text-sm text-red-700 flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Life Purpose */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <span>Your Life Purpose & Soul Mission</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            {archetypeData.lifePurpose}
          </p>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-md text-blue-700 font-medium">
              💫 As a {report.zodiac.name} with {report.archetype} energy, your mission is amplified by your natural {report.dominantElement.toLowerCase()} essence and {report.dominantInfluence} influence.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Strengths & Growth Areas */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Zap className="h-5 w-5 text-green-600" />
              <span>Your Natural Superpowers</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 leading-relaxed">{archetypeData.strengths}</p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-green-700 font-medium">
                🌟 Enhanced by your {report.emotionalPattern} emotional intelligence and {report.lifeApproach} life approach.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Target className="h-5 w-5 text-yellow-600" />
              <span>Your Growth Edges</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 leading-relaxed">{archetypeData.growthAreas}</p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-yellow-700 font-medium">
                💪 Work with your {report.dominantElement} energy to transform these challenges into wisdom.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Shadow & Relationship Patterns */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Shield className="h-5 w-5 text-purple-600" />
              <span>Shadow Integration Work</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 leading-relaxed">{archetypeData.shadows}</p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-purple-700 font-medium">
                🌙 Your {report.emotionalPattern} emotional nature holds keys to healing these patterns through awareness.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 bg-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Users className="h-5 w-5 text-pink-600" />
              <span>Relationship Patterns</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              In relationships, you likely attract partners who {report.zodiac.name === "Leo" ? "appreciate your warmth but may challenge your need for attention" : report.zodiac.name === "Scorpio" ? "match your intensity or provide grounding stability" : "complement your core nature"}. Your {report.lifeApproach} approach means you initially present as {getApproachTraits(report.lifeApproach).split(" and ")[0]}, which shapes first impressions.
            </p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-pink-700 font-medium">
                💕 Balance your {report.archetype} nature with conscious relationship choices aligned with your growth.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Life Stages */}
      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
            <span>Your Life Evolution Path</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">{archetypeData.lifeStages}</p>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-md text-indigo-700 font-medium">
              🔄 Your {report.dominantModality} modality means you naturally {report.dominantModality === "Cardinal" ? "initiate new phases" : report.dominantModality === "Fixed" ? "sustain and deepen experiences" : "adapt and flow with change"} throughout these stages.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Healing Practices */}
      <Card className="border-rose-200 bg-rose-50">
        <CardHeader>
          <CardTitle className="text-xl">🧘 Personalized Healing & Spiritual Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">{archetypeData.healingPractices}</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-rose-800 mb-2">For Your {report.dominantElement} Energy:</h4>
              <p className="text-sm text-gray-700">
                {report.dominantElement === "Fire" ? "Movement, sun exposure, and energetic practices like martial arts or dance" :
                 report.dominantElement === "Earth" ? "Grounding in nature, gardening, body-based therapies, and routine practices" :
                 report.dominantElement === "Air" ? "Breathwork, journaling, learning, and social connection practices" :
                 "Water-based healing, emotional release work, art therapy, and intuitive practices"}
              </p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-rose-800 mb-2">For Your {report.emotionalPattern} Nature:</h4>
              <p className="text-sm text-gray-700">
                Emotional practices that honor your {report.emotionalPattern} sensitivity and help you process feelings in healthy ways.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Career Paths */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Briefcase className="h-6 w-6 text-orange-600" />
            <span>Your Aligned Career & Life Work</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-3">
            {archetypeData.careerPaths.map((career, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800 text-lg">{career}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/50 rounded-lg p-4 mt-4">
            <p className="text-gray-600 text-center">
              These career paths align with your natural {archetypeData.name} energy and your {report.zodiac.name} drive for {report.zodiac.name === "Leo" ? "creative leadership" : report.zodiac.name === "Virgo" ? "practical service" : "authentic expression"}.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Message */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-100 to-red-100">
        <CardContent className="text-center py-8">
          <div className="text-4xl mb-4">🪷</div>
          <p className="text-xl text-gray-800 mb-4 font-medium">
            This is the beginning of your journey to inner clarity and authentic living.
          </p>
          <p className="text-gray-600 mb-4">
            Your detailed KarmaArchetype report has been sent to {formData.email}
          </p>
          <div className="bg-white/50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700 italic">
              "The privilege of a lifetime is to become who you truly are." - Carl Jung
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AstrologyReport;
