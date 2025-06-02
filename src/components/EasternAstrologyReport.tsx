
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Share2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface EasternAstrologyReportProps {
  formData: FormData;
  onBack: () => void;
}

const EasternAstrologyReport = ({ formData, onBack }: EasternAstrologyReportProps) => {
  // Mock Eastern archetype calculation results
  const mockResults = {
    primaryArchetype: "Bhakti Yogi",
    secondaryArchetype: "Tantra Mystic",
    moonSign: "Pisces",
    nakshatra: "Revati",
    lagna: "Cancer",
    atmakaraka: "Moon",
    vedicMessage: "Your emotional intensity is a portal. Love heals your karmic ties."
  };

  const easternArchetypes = {
    "Bhakti Yogi": {
      title: "The Heart-Led Devotee",
      description: "You are driven by love, devotion, and emotional connection. Your path is through the heart.",
      strengths: ["Deep emotional intelligence", "Natural healer", "Compassionate leader", "Intuitive wisdom"],
      challenges: ["Emotional overwhelm", "Boundary issues", "Attachment patterns", "Sensitivity to criticism"],
      career: ["Counseling & therapy", "Spiritual teaching", "Healing arts", "Creative expression"],
      relationships: "You love deeply and seek soul connections. Your challenge is maintaining healthy boundaries while staying open-hearted.",
      remedies: ["Daily prayer/meditation", "Chanting mantras", "Service to others", "Heart-opening practices"]
    },
    "Tantra Mystic": {
      title: "The Esoteric Energy Worker",
      description: "You understand the hidden currents of energy and consciousness. Transformation is your gift.",
      strengths: ["Psychic abilities", "Energy work", "Transformation catalyst", "Occult knowledge"],
      challenges: ["Isolation", "Misunderstood by others", "Intensity", "Power struggles"],
      career: ["Energy healing", "Occult studies", "Research", "Transformational work"],
      relationships: "You seek partners who can handle your intensity and understand your mystical nature.",
      remedies: ["Tantric practices", "Energy clearing", "Shadow work", "Sacred sexuality"]
    }
  };

  const primaryInfo = easternArchetypes[mockResults.primaryArchetype as keyof typeof easternArchetypes];
  const secondaryInfo = easternArchetypes[mockResults.secondaryArchetype as keyof typeof easternArchetypes];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            onClick={onBack}
            variant="outline" 
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Form</span>
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            🕉️ Your Sacred Eastern KarmaArchetype
          </h1>
          <p className="text-lg text-gray-600">
            Based on authentic Vedic calculations for {formData.name}
          </p>
        </div>

        {/* Primary Archetype */}
        <Card className="mb-6 border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">
              Primary Archetype: {mockResults.primaryArchetype}
            </CardTitle>
            <p className="text-center text-orange-100 text-lg">
              {primaryInfo.title}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-700">🌟 Core Essence</h3>
                <p className="text-gray-700 mb-4">{primaryInfo.description}</p>
                
                <h3 className="font-semibold text-lg mb-3 text-orange-700">💪 Strengths</h3>
                <ul className="space-y-1">
                  {primaryInfo.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-2">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-700">🎯 Growth Areas</h3>
                <ul className="space-y-1 mb-4">
                  {primaryInfo.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-semibold text-lg mb-3 text-orange-700">💝 Relationships</h3>
                <p className="text-gray-700">{primaryInfo.relationships}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vedic Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-700">🌙 Vedic Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Moon Sign (Rashi):</span>
                  <span className="text-orange-600">{mockResults.moonSign}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Nakshatra:</span>
                  <span className="text-orange-600">{mockResults.nakshatra}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lagna (Ascendant):</span>
                  <span className="text-orange-600">{mockResults.lagna}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Atmakaraka:</span>
                  <span className="text-orange-600">{mockResults.atmakaraka}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-700">🕉️ Sacred Message</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "{mockResults.vedicMessage}"
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Career & Remedies */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-700">💼 Career Paths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {primaryInfo.career.map((career, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-2">•</span>
                    {career}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-700">🌿 Remedies & Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {primaryInfo.remedies.map((remedy, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-2">•</span>
                    {remedy}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Archetype */}
        {secondaryInfo && (
          <Card className="mb-6 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-t-lg">
              <CardTitle className="text-xl text-center">
                Secondary Archetype: {mockResults.secondaryArchetype}
              </CardTitle>
              <p className="text-center text-orange-100">
                {secondaryInfo.title}
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 text-center">
                {secondaryInfo.description}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Disclaimer */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600 text-center">
              This report is based on Eastern Vedic astrology calculations using sidereal positions. 
              It's designed for self-reflection and personal growth. Birth details: {formData.dateOfBirth} at {formData.timeOfBirth} in {formData.placeOfBirth}.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EasternAstrologyReport;
