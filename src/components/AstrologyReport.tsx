
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
  // Generate psychological profile based on birth data patterns
  const generatePsychologicalProfile = () => {
    const birthDate = new Date(formData.dateOfBirth);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // Psychological personality patterns based on birth timing
    const getPersonalityPattern = (month: number, day: number) => {
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return { name: "The Achiever", trait: "Goal-oriented", tendency: "Structured thinking" };
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return { name: "The Innovator", trait: "Forward-thinking", tendency: "Independent mindset" };
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return { name: "The Intuitive", trait: "Empathetic", tendency: "Emotional intelligence" };
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return { name: "The Pioneer", trait: "Action-oriented", tendency: "Leadership drive" };
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return { name: "The Builder", trait: "Practical", tendency: "Steady persistence" };
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return { name: "The Communicator", trait: "Adaptable", tendency: "Quick learning" };
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return { name: "The Nurturer", trait: "Caring", tendency: "Protective instincts" };
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return { name: "The Creator", trait: "Confident", tendency: "Self-expression drive" };
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return { name: "The Analyzer", trait: "Detail-oriented", tendency: "Systematic approach" };
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return { name: "The Harmonizer", trait: "Balanced", tendency: "Relationship focus" };
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return { name: "The Transformer", trait: "Intense", tendency: "Deep thinking" };
      } else {
        return { name: "The Explorer", trait: "Optimistic", tendency: "Growth mindset" };
      }
    };

    const corePersonality = getPersonalityPattern(month, day);

    // Generate secondary psychological patterns
    const personalityTypes = ["Achiever", "Innovator", "Intuitive", "Pioneer", "Builder", "Communicator", "Nurturer", "Creator", "Analyzer", "Harmonizer", "Transformer", "Explorer"];
    const timeHour = parseInt(formData.timeOfBirth.split(':')[0]);
    const emotionalStyle = personalityTypes[(timeHour + day) % 12];
    const behaviorPattern = personalityTypes[(timeHour * 2 + month) % 12];
    
    // Generate dominant psychological drivers
    const motivationalDrivers = ["Achievement", "Innovation", "Connection", "Independence", "Security", "Growth"];
    const primaryDriver = motivationalDrivers[timeHour % 6];
    const cognitiveStyle = ["Analytical", "Intuitive", "Practical"][timeHour % 3];
    const energyType = ["High-energy", "Steady-energy", "Reflective-energy"][(day + month) % 3];

    // Calculate archetype using psychological mapping
    const archetypeResult = calculateArchetypeFromChart(
      corePersonality.name,
      emotionalStyle,
      behaviorPattern,
      primaryDriver,
      cognitiveStyle,
      energyType
    );

    return {
      corePersonality,
      emotionalStyle,
      behaviorPattern,
      primaryDriver,
      cognitiveStyle,
      energyType,
      archetype: archetypeResult.primary,
      secondaryArchetype: archetypeResult.secondary,
      scoreBreakdown: archetypeResult.scoreBreakdown
    };
  };

  const profile = generatePsychologicalProfile();
  const archetypeData = getArchetypeData(profile.archetype);
  const secondaryArchetypeData = getArchetypeData(profile.secondaryArchetype);

  // Enhanced psychological insights
  const getActionableInsights = () => {
    const insights = [];
    
    // Core-Emotional integration insight
    insights.push({
      title: "Your Authentic Self vs. Public Persona",
      icon: "🎭",
      content: `Your core ${profile.corePersonality.name} nature drives you to be ${profile.corePersonality.trait.toLowerCase()}, while your emotional processing style as ${profile.emotionalStyle} creates your inner world. This combination means you likely ${profile.corePersonality.trait === "Goal-oriented" ? "set ambitious targets but need emotional validation" : profile.corePersonality.trait === "Empathetic" ? "feel deeply but may struggle with boundaries" : "balance logic with intuition"}. Action: Practice integrating both aspects consciously in daily decisions.`
    });

    // Behavioral pattern insight
    insights.push({
      title: "Your Natural Operating System",
      icon: "⚙️",
      content: `Your ${profile.cognitiveStyle.toLowerCase()} thinking style combined with ${profile.energyType.toLowerCase().replace('-energy', '')} energy creates a unique approach to life. You naturally ${profile.cognitiveStyle === "Analytical" ? "break down problems systematically" : profile.cognitiveStyle === "Intuitive" ? "trust your gut feelings" : "focus on practical solutions"}. Action: Leverage this natural style while building skills in complementary approaches.`
    });

    // Motivational driver insight
    insights.push({
      title: "What Truly Motivates You",
      icon: "🎯",
      content: `Your primary psychological driver is ${profile.primaryDriver.toLowerCase()}, which explains why you feel most alive when ${profile.primaryDriver === "Achievement" ? "accomplishing meaningful goals" : profile.primaryDriver === "Innovation" ? "creating something new" : profile.primaryDriver === "Connection" ? "building relationships" : profile.primaryDriver === "Independence" ? "having autonomy" : profile.primaryDriver === "Security" ? "creating stability" : "learning and expanding"}. Action: Align your daily activities and long-term goals with this core motivation.`
    });

    return insights;
  };

  // Helper functions for psychological insights
  const getPersonalityTraits = (pattern: string) => {
    const traitsMap: Record<string, string> = {
      "Achiever": "driven, goal-focused, and results-oriented",
      "Innovator": "creative, forward-thinking, and change-oriented",
      "Intuitive": "empathetic, sensitive, and emotionally intelligent",
      "Pioneer": "bold, initiative-taking, and leadership-minded",
      "Builder": "practical, reliable, and methodical",
      "Communicator": "adaptable, social, and information-focused",
      "Nurturer": "caring, protective, and relationship-oriented",
      "Creator": "expressive, confident, and attention-seeking",
      "Analyzer": "detail-oriented, systematic, and improvement-focused",
      "Harmonizer": "balanced, diplomatic, and aesthetically aware",
      "Transformer": "intense, deep-thinking, and change-catalyzing",
      "Explorer": "optimistic, growth-minded, and adventure-seeking"
    };
    return traitsMap[pattern] || "uniquely balanced";
  };

  const getCognitiveDescription = (style: string) => {
    const descriptions: Record<string, string> = {
      "Analytical": "You process information systematically, breaking down complex situations into manageable parts",
      "Intuitive": "You rely on pattern recognition and gut feelings to understand situations quickly",
      "Practical": "You focus on what works, preferring tested solutions over theoretical approaches"
    };
    return descriptions[style] || "You have a balanced cognitive approach";
  };

  const actionableInsights = getActionableInsights();

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
      {/* Enhanced Back Button */}
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
        <div className="w-32"></div>
      </div>

      {/* Personal Info Summary */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <span className="text-2xl">🧠</span>
            <span>Psychological Profile for {formData.name}</span>
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
          <div className="text-6xl mb-4">{getArchetypeEmoji(profile.archetype)}</div>
          <CardTitle className="text-3xl text-orange-800 mb-4">
            Your Primary KarmaArchetype
          </CardTitle>
          <div className="text-4xl font-bold text-orange-900 mb-2">
            {profile.archetype}
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Based on your psychological analysis, you embody the essence of <strong>{profile.archetype}</strong>.
          </p>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-md text-gray-600">
              💫 Your secondary archetype is <strong>{profile.secondaryArchetype}</strong>, adding complexity to your psychological blueprint.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Actionable Insights */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">💡 Your Actionable Psychological Insights</h3>
        {actionableInsights.map((insight, index) => (
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

      {/* Psychological Profile */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <span>🧠</span>
            <span>Your Complete Psychological Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Core Patterns */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-orange-200 pb-2">Core Psychological Patterns</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Core Personality Type</h4>
                  <p className="text-sm text-gray-600">{profile.corePersonality.trait} • {profile.corePersonality.tendency}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{profile.corePersonality.name}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Emotional Processing Style</h4>
                  <p className="text-sm text-gray-600">How you handle emotions internally</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{profile.emotionalStyle}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Behavior Pattern</h4>
                  <p className="text-sm text-gray-600">Your external action style</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{profile.behaviorPattern}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Psychological Drivers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-red-200 pb-2">Psychological Drivers</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Primary Motivation</h4>
                  <p className="text-sm text-gray-600">What drives your decisions</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{profile.primaryDriver}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Cognitive Style</h4>
                  <p className="text-sm text-gray-600">How you process information</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{profile.cognitiveStyle}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Energy Type</h4>
                  <p className="text-sm text-gray-600">Your natural energy rhythm</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{profile.energyType}</p>
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
            <span>Wisdom Insights for {profile.archetype} {getArchetypeEmoji(profile.archetype)}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/60 rounded-lg p-4">
            <p className="text-lg text-amber-900 font-medium leading-relaxed">
              <strong>Ancient Wisdom View:</strong> {archetypeData.vedicInsights.view}
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

      {/* Life Purpose */}
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
              💫 As {profile.corePersonality.name} with {profile.archetype} energy, your mission is enhanced by your {profile.cognitiveStyle.toLowerCase()} thinking and {profile.primaryDriver.toLowerCase()} motivation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Strengths & Growth Areas */}
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
                🌟 Amplified by your {profile.emotionalStyle} emotional processing and {profile.energyType.toLowerCase().replace('-energy', '')} energy approach.
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
                💪 Use your {profile.cognitiveStyle.toLowerCase()} approach to transform these challenges into strengths.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Shadow & Relationship Patterns */}
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
                🌙 Your {profile.emotionalStyle} emotional style provides pathways to healing these patterns through conscious awareness.
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
              In relationships, you likely attract people who {profile.corePersonality.trait === "Goal-oriented" ? "either share your ambition or provide emotional balance" : profile.corePersonality.trait === "Empathetic" ? "appreciate your sensitivity or challenge you to strengthen boundaries" : "complement your natural tendencies"}. Your {profile.behaviorPattern} behavior pattern means you typically {getPersonalityTraits(profile.behaviorPattern).split(",")[0]} in relationships.
            </p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-pink-700 font-medium">
                💕 Balance your {profile.archetype} nature with conscious relationship choices that support mutual growth.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Life Evolution Path */}
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
              🔄 Your {profile.primaryDriver.toLowerCase()} motivation creates natural transitions where you {profile.primaryDriver === "Achievement" ? "set increasingly meaningful goals" : profile.primaryDriver === "Innovation" ? "create more impactful changes" : profile.primaryDriver === "Connection" ? "deepen your relationships" : profile.primaryDriver === "Independence" ? "gain greater autonomy" : profile.primaryDriver === "Security" ? "build stronger foundations" : "expand your understanding"} throughout life.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Healing Practices */}
      <Card className="border-rose-200 bg-rose-50">
        <CardHeader>
          <CardTitle className="text-xl">🧘 Personalized Healing & Growth Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">{archetypeData.healingPractices}</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-rose-800 mb-2">For Your {profile.cognitiveStyle} Mind:</h4>
              <p className="text-sm text-gray-700">
                {getCognitiveDescription(profile.cognitiveStyle)}. Focus on practices that enhance this natural strength.
              </p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-medium text-rose-800 mb-2">For Your {profile.energyType} Nature:</h4>
              <p className="text-sm text-gray-700">
                Practices that honor your natural energy rhythm and help you work with rather than against your inherent patterns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Paths */}
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
              These career paths align with your natural {archetypeData.name} energy and your {profile.corePersonality.name} drive for {profile.corePersonality.trait.toLowerCase()} achievement.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Message */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-100 to-red-100">
        <CardContent className="text-center py-8">
          <div className="text-4xl mb-4">🪷</div>
          <p className="text-xl text-gray-800 mb-4 font-medium">
            This is the beginning of your journey to psychological clarity and authentic living.
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
