
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, MapPin, Clock, Star, Brain, Target, Heart, Zap, Shield, Users, Lightbulb, Briefcase, MessageCircle } from "lucide-react";
import { getArchetypeData } from '@/data/archetypeData';

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface MobileAstrologyReportProps {
  formData: FormData;
  onBack: () => void;
}

// Fixed personality-based archetype calculation with more balanced mappings
const calculatePersonalityArchetype = (
  corePersonality: string,
  emotionalStyle: string,
  behaviorPattern: string,
  primaryDriver: string,
  cognitiveStyle: string,
  energyType: string
): { primary: string; secondary: string; scoreBreakdown: Record<string, number> } => {
  
  const scores: Record<string, number> = {
    "The Builder": 0,
    "The Dreamer": 0,
    "The Leader": 0,
    "The Healer": 0,
    "The Seeker": 0,
    "The Rebel": 0,
    "The Mystic": 0,
    "The Visionary": 0,
    "The Connector": 0,
    "The Strategist": 0,
    "The Performer": 0,
    "The Alchemist": 0
  };

  // Core personality scoring (Weight: +12) - More specific mappings
  const corePersonalityScoring: Record<string, string> = {
    "The Achiever": "The Builder",
    "The Innovator": "The Visionary", 
    "The Intuitive": "The Mystic",
    "The Pioneer": "The Leader",
    "The Builder": "The Builder",
    "The Communicator": "The Connector",
    "The Nurturer": "The Healer",
    "The Creator": "The Performer",
    "The Analyzer": "The Strategist",
    "The Harmonizer": "The Connector",
    "The Transformer": "The Alchemist",
    "The Explorer": "The Seeker"
  };

  if (corePersonalityScoring[corePersonality]) {
    scores[corePersonalityScoring[corePersonality]] += 12;
  }

  // Primary driver scoring (Weight: +10) - More diverse mappings
  const driverScoring: Record<string, string[]> = {
    "Achievement": ["The Builder", "The Leader"],
    "Innovation": ["The Visionary", "The Rebel"],
    "Connection": ["The Connector", "The Healer"],
    "Independence": ["The Rebel", "The Seeker"],
    "Security": ["The Builder", "The Healer"],
    "Growth": ["The Seeker", "The Dreamer"]
  };

  if (driverScoring[primaryDriver]) {
    driverScoring[primaryDriver].forEach(archetype => {
      scores[archetype] += 5; // Split the weight
    });
  }

  // Cognitive style scoring (Weight: +8) - More balanced distribution
  const cognitiveScoring: Record<string, string[]> = {
    "Practical": ["The Builder", "The Healer"],
    "Intuitive": ["The Mystic", "The Dreamer", "The Visionary"],
    "Analytical": ["The Strategist", "The Seeker"]
  };

  if (cognitiveScoring[cognitiveStyle]) {
    const archetypes = cognitiveScoring[cognitiveStyle];
    archetypes.forEach(archetype => {
      scores[archetype] += Math.floor(8 / archetypes.length);
    });
  }

  // Energy type scoring (Weight: +6)
  const energyScoring: Record<string, string[]> = {
    "High-energy": ["The Leader", "The Performer", "The Rebel"],
    "Steady-energy": ["The Builder", "The Connector", "The Healer"],
    "Reflective-energy": ["The Mystic", "The Dreamer", "The Strategist"]
  };

  if (energyScoring[energyType]) {
    const archetypes = energyScoring[energyType];
    archetypes.forEach(archetype => {
      scores[archetype] += Math.floor(6 / archetypes.length);
    });
  }

  // Emotional style scoring (Weight: +8) - Direct mapping to archetypes
  const emotionalToArchetypeMap: Record<string, string> = {
    "Achiever": "The Builder",
    "Innovator": "The Visionary",
    "Intuitive": "The Mystic", 
    "Pioneer": "The Leader",
    "Builder": "The Builder",
    "Communicator": "The Connector",
    "Nurturer": "The Healer",
    "Creator": "The Performer",
    "Analyzer": "The Strategist",
    "Harmonizer": "The Connector",
    "Transformer": "The Alchemist",
    "Explorer": "The Seeker"
  };

  if (emotionalToArchetypeMap[emotionalStyle]) {
    scores[emotionalToArchetypeMap[emotionalStyle]] += 8;
  }

  // Add randomization factor to prevent same results (Weight: +2 to +4)
  const birthDate = new Date();
  const randomSeed = (birthDate.getTime() + behaviorPattern.length) % 12;
  const archetypeNames = Object.keys(scores);
  const randomArchetype = archetypeNames[randomSeed];
  scores[randomArchetype] += 2 + (randomSeed % 3); // 2-4 bonus points

  console.log("=== ARCHETYPE CALCULATION DEBUG ===");
  console.log("Input data:", { corePersonality, emotionalStyle, behaviorPattern, primaryDriver, cognitiveStyle, energyType });
  console.log("Core personality mapping:", corePersonality, "->", corePersonalityScoring[corePersonality]);
  console.log("Driver mapping:", primaryDriver, "->", driverScoring[primaryDriver]);
  console.log("Cognitive mapping:", cognitiveStyle, "->", cognitiveScoring[cognitiveStyle]);
  console.log("Energy mapping:", energyType, "->", energyScoring[energyType]);
  console.log("Emotional mapping:", emotionalStyle, "->", emotionalToArchetypeMap[emotionalStyle]);
  console.log("Random bonus for:", randomArchetype, "=", 2 + (randomSeed % 3));
  console.log("Final scores:", scores);

  // Find primary and secondary archetypes
  const sortedScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a);

  console.log("Sorted scores:", sortedScores);
  console.log("Selected primary:", sortedScores[0][0], "with score:", sortedScores[0][1]);
  console.log("Selected secondary:", sortedScores[1][0], "with score:", sortedScores[1][1]);

  return {
    primary: sortedScores[0][0],
    secondary: sortedScores[1][0],
    scoreBreakdown: scores
  };
};

const MobileAstrologyReport = ({ formData, onBack }: MobileAstrologyReportProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  // Generate psychological profile based on birth data patterns
  const generatePsychologicalProfile = () => {
    const birthDate = new Date(formData.dateOfBirth);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // Psychological personality patterns based on birth timing
    const getPersonalityPattern = (month: number, day: number) => {
      const dayMonth = day + month;
      
      // More varied personality distribution
      if (dayMonth % 12 === 0) {
        return { name: "The Achiever", trait: "Goal-oriented", tendency: "Structured thinking" };
      } else if (dayMonth % 12 === 1) {
        return { name: "The Innovator", trait: "Forward-thinking", tendency: "Independent mindset" };
      } else if (dayMonth % 12 === 2) {
        return { name: "The Intuitive", trait: "Empathetic", tendency: "Emotional intelligence" };
      } else if (dayMonth % 12 === 3) {
        return { name: "The Pioneer", trait: "Action-oriented", tendency: "Leadership drive" };
      } else if (dayMonth % 12 === 4) {
        return { name: "The Builder", trait: "Practical", tendency: "Steady persistence" };
      } else if (dayMonth % 12 === 5) {
        return { name: "The Communicator", trait: "Adaptable", tendency: "Quick learning" };
      } else if (dayMonth % 12 === 6) {
        return { name: "The Nurturer", trait: "Caring", tendency: "Protective instincts" };
      } else if (dayMonth % 12 === 7) {
        return { name: "The Creator", trait: "Confident", tendency: "Self-expression drive" };
      } else if (dayMonth % 12 === 8) {
        return { name: "The Analyzer", trait: "Detail-oriented", tendency: "Systematic approach" };
      } else if (dayMonth % 12 === 9) {
        return { name: "The Harmonizer", trait: "Balanced", tendency: "Relationship focus" };
      } else if (dayMonth % 12 === 10) {
        return { name: "The Transformer", trait: "Intense", tendency: "Deep thinking" };
      } else {
        return { name: "The Explorer", trait: "Optimistic", tendency: "Growth mindset" };
      }
    };

    const corePersonality = getPersonalityPattern(month, day);

    // Generate more varied secondary psychological patterns
    const personalityTypes = ["Achiever", "Innovator", "Intuitive", "Pioneer", "Builder", "Communicator", "Nurturer", "Creator", "Analyzer", "Harmonizer", "Transformer", "Explorer"];
    const timeHour = parseInt(formData.timeOfBirth.split(':')[0]);
    const timeMinute = parseInt(formData.timeOfBirth.split(':')[1] || '0');
    
    // More varied distribution for emotional style and behavior
    const emotionalStyle = personalityTypes[(timeHour + day * 2) % 12];
    const behaviorPattern = personalityTypes[(timeMinute + month * 3) % 12];
    
    // Generate dominant psychological drivers with more variation
    const motivationalDrivers = ["Achievement", "Innovation", "Connection", "Independence", "Security", "Growth"];
    const primaryDriver = motivationalDrivers[(timeHour + day) % 6];
    const cognitiveStyle = ["Analytical", "Intuitive", "Practical"][(timeHour + month) % 3];
    const energyType = ["High-energy", "Steady-energy", "Reflective-energy"][(day * month) % 3];

    console.log("=== PROFILE GENERATION DEBUG ===");
    console.log("Birth date:", formData.dateOfBirth);
    console.log("Month:", month, "Day:", day, "Hour:", timeHour, "Minute:", timeMinute);
    console.log("Generated profile:", {
      corePersonality: corePersonality.name,
      emotionalStyle,
      behaviorPattern,
      primaryDriver,
      cognitiveStyle,
      energyType
    });

    // Calculate archetype using the fixed personality-based system
    const archetypeResult = calculatePersonalityArchetype(
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

  // Call to Action Component
  const CallToActionCard = () => (
    <Card className="border-4 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 mt-4">
      <CardContent className="text-center py-6 space-y-4">
        <div className="text-4xl mb-3">✨</div>
        <h3 className="text-lg font-bold text-purple-900 mb-2">Want Deeper Insights?</h3>
        <p className="text-sm text-gray-800 leading-relaxed mb-4">
          Get personalized answers about your love life, career path, and spiritual growth.
        </p>
        
        <div className="flex justify-center">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 text-sm rounded-lg max-w-xs"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Ask Your First Question FREE
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-xs text-purple-700 font-medium mt-3">
          <div className="flex flex-col items-center space-y-1">
            <span>💜</span>
            <span>Love</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span>🎯</span>
            <span>Career</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span>🌟</span>
            <span>Purpose</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Button 
            onClick={onBack}
            size="sm"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-3 py-2"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <h1 className="text-lg font-bold text-gray-900 truncate">KarmaArchetype Report</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Personal Info Card */}
        <Card className="border-orange-200">
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">{formData.name}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-600">Birth Date</span>
                </div>
                <span className="font-medium">{formData.dateOfBirth}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-600">Birth Time</span>
                </div>
                <span className="font-medium">{formData.timeOfBirth}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-600">Birth Place</span>
                </div>
                <span className="font-medium text-right">{formData.placeOfBirth}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simplified Tabs for Mobile Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1">
            <TabsTrigger value="profile" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Star className="h-4 w-4" />
                <span>Your Profile</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="vedic" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Brain className="h-4 w-4" />
                <span>Vedic Insights</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="reading" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <MessageCircle className="h-4 w-4" />
                <span>Get Reading</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Your Profile Tab - Consolidated Content */}
          <TabsContent value="profile" className="space-y-4 mt-4">
            {/* Main Archetype */}
            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="text-center p-6">
                <div className="text-5xl mb-3">{getArchetypeEmoji(profile.archetype)}</div>
                <h2 className="text-xl font-bold text-orange-800 mb-2">Your Primary KarmaArchetype</h2>
                <div className="text-2xl font-bold text-orange-900 mb-3">{profile.archetype}</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Based on your psychological analysis, you embody the essence of <strong>{profile.archetype}</strong>.
                </p>
                <div className="bg-white/50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-600">
                    💫 Your secondary archetype is <strong>{profile.secondaryArchetype}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Life Purpose */}
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Heart className="h-5 w-5 text-blue-600" />
                  <span>Your Life Purpose</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed text-sm">{archetypeData.lifePurpose}</p>
              </CardContent>
            </Card>

            {/* Core Patterns */}
            <Card className="border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🧠 Core Psychological Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Core Personality Type</h4>
                  <p className="text-lg font-bold text-orange-600">{profile.corePersonality.name}</p>
                  <p className="text-xs text-gray-600">{profile.corePersonality.trait} • {profile.corePersonality.tendency}</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Primary Motivation</h4>
                  <p className="text-lg font-bold text-orange-600">{profile.primaryDriver}</p>
                  <p className="text-xs text-gray-600">What drives your decisions</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Energy Type</h4>
                  <p className="text-lg font-bold text-orange-600">{profile.energyType}</p>
                  <p className="text-xs text-gray-600">Your natural energy rhythm</p>
                </div>
              </CardContent>
            </Card>

            {/* Strengths & Growth */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span>Your Natural Superpowers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">{archetypeData.strengths}</p>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-xs text-green-700 font-medium">
                    🌟 Amplified by your {profile.emotionalStyle} emotional processing
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Growth Areas */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Target className="h-5 w-5 text-yellow-600" />
                  <span>Your Growth Edges</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">{archetypeData.growthAreas}</p>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-xs text-yellow-700 font-medium">
                    💪 Use your {profile.cognitiveStyle.toLowerCase()} approach to transform challenges
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <Card className="border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                  <span>Aligned Career Paths</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 mb-4">
                  {archetypeData.careerPaths.slice(0, 4).map((career, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg text-center">
                      <p className="font-medium text-gray-800 text-sm">{career}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-gray-600 text-center text-xs">
                    These paths align with your {profile.archetype} energy and {profile.corePersonality.name} drive
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action after Profile */}
            <CallToActionCard />
          </TabsContent>

          {/* Vedic Insights Tab */}
          <TabsContent value="vedic" className="space-y-4 mt-4">
            {/* Vedic Insights */}
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🕉️ Ancient Wisdom Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-amber-900 font-medium text-sm leading-relaxed">
                    <strong>Ancient Wisdom View:</strong> {archetypeData.vedicInsights.view}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {/* Start Doing */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
                      <span className="mr-2">✅</span>
                      Start Doing
                    </h4>
                    <ul className="space-y-1">
                      {archetypeData.vedicInsights.startDoing.slice(0, 5).map((item, index) => (
                        <li key={index} className="text-xs text-green-700 flex items-start">
                          <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stop Doing */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <h4 className="text-sm font-bold text-red-800 mb-2 flex items-center">
                      <span className="mr-2">❌</span>
                      Stop Doing
                    </h4>
                    <ul className="space-y-1">
                      {archetypeData.vedicInsights.stopDoing.slice(0, 5).map((item, index) => (
                        <li key={index} className="text-xs text-red-700 flex items-start">
                          <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shadow Work */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span>Shadow Integration Work</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.shadows}</p>
              </CardContent>
            </Card>

            {/* Healing Practices */}
            <Card className="border-rose-200 bg-rose-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🧘 Healing & Growth Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.healingPractices}</p>
              </CardContent>
            </Card>

            {/* Call to Action after Vedic */}
            <CallToActionCard />
          </TabsContent>

          {/* Get Personal Reading Tab */}
          <TabsContent value="reading" className="space-y-4 mt-4">
            {/* Main Call to Action */}
            <Card className="border-4 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
              <CardContent className="text-center py-8 space-y-6">
                <div className="text-6xl mb-4">✨</div>
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Ready to Go Deeper?</h2>
                <p className="text-base text-gray-800 leading-relaxed mb-6">
                  Get personalized answers to your most pressing questions about love, career, purpose, and personal growth.
                </p>
                
                <div className="bg-white/70 rounded-2xl p-6 border-2 border-purple-200">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-purple-800">Ask Your First Question FREE</h3>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 text-base rounded-lg max-w-xs"
                    >
                      <Star className="h-5 w-5 mr-2" />
                      Get My FREE Personal Reading
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-purple-700 font-medium">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-2xl">💜</span>
                      <span>Love & Relationships</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-2xl">🎯</span>
                      <span>Career & Money</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-2xl">🌟</span>
                      <span>Life Purpose</span>
                    </div>
                  </div>
                </div>

                {/* What You'll Get */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
                  <h4 className="text-lg font-bold text-indigo-900 mb-3">What You'll Get:</h4>
                  <div className="space-y-2 text-sm text-indigo-800">
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>Personalized answers to your specific questions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>Deeper insights into your {profile.archetype} nature</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>Guidance for your next life steps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>No commitment - first question is completely free</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MobileAstrologyReport;
