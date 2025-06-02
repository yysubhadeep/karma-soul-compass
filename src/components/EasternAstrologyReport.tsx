
import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { calculateEasternArchetype } from '@/utils/easternAstrologyCalculations';

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
  // Calculate real results using the Eastern astrology algorithm
  const calculatedResults = useMemo(() => {
    return calculateEasternArchetype(formData);
  }, [formData]);

  // Your Original Eastern Archetypes with detailed information
  const easternArchetypes = {
    "The Cosmic Detective": {
      title: "The Truth Seeker",
      description: "You have an innate ability to uncover hidden truths and solve life's deepest mysteries. Your investigative nature leads you to profound discoveries.",
      strengths: ["Investigative insight", "Pattern recognition", "Truth-seeking nature", "Research abilities"],
      challenges: ["Overthinking", "Suspicion", "Isolation", "Obsessive tendencies"],
      career: ["Research", "Investigation", "Psychology", "Scientific analysis"],
      relationships: "You seek partners who appreciate your depth and can handle your need to understand everything deeply.",
      remedies: ["Meditation for clarity", "Journaling insights", "Study of mysteries", "Mindful investigation"]
    },
    "The Sacred Rebel": {
      title: "The Revolutionary Spirit",
      description: "You challenge conventional wisdom and create new paths. Your rebellion serves a higher purpose of liberation and freedom.",
      strengths: ["Revolutionary thinking", "Courage to challenge", "Independent spirit", "Change catalyst"],
      challenges: ["Confrontational nature", "Difficulty with authority", "Isolation", "Restlessness"],
      career: ["Social activism", "Innovation", "Entrepreneurship", "Reform movements"],
      relationships: "You need partners who support your independence and share your vision for positive change.",
      remedies: ["Channeled activism", "Creative expression", "Freedom practices", "Revolutionary service"]
    },
    "The Intuitive Mystic": {
      title: "The Divine Channel",
      description: "You access wisdom through intuition and mystical experience. Your psychic abilities connect you to higher realms of consciousness.",
      strengths: ["Psychic abilities", "Intuitive wisdom", "Spiritual connection", "Mystical understanding"],
      challenges: ["Overwhelm from sensitivity", "Difficulty grounding", "Misunderstood gifts", "Energy depletion"],
      career: ["Spiritual counseling", "Energy healing", "Mystical arts", "Intuitive guidance"],
      relationships: "You seek soul connections with those who understand and honor your mystical nature.",
      remedies: ["Psychic protection", "Grounding practices", "Mystical study", "Energy clearing"]
    },
    "The Passionate Creator": {
      title: "The Artistic Fire",
      description: "Your creative passion transforms raw energy into beautiful expressions. You inspire others through your artistic vision and emotional intensity.",
      strengths: ["Creative genius", "Passionate expression", "Artistic vision", "Inspirational presence"],
      challenges: ["Emotional volatility", "Creative blocks", "Perfectionism", "Burnout"],
      career: ["Arts and entertainment", "Creative direction", "Passionate pursuits", "Inspirational work"],
      relationships: "You bring intense passion to relationships and need partners who match your creative fire.",
      remedies: ["Creative rituals", "Passion channeling", "Artistic meditation", "Expressive practices"]
    },
    "The Wisdom Keeper": {
      title: "The Ancient Scholar",
      description: "You preserve and share sacred knowledge across generations. Your wisdom comes from deep study and understanding of ancient truths.",
      strengths: ["Deep knowledge", "Teaching ability", "Wisdom preservation", "Ancient understanding"],
      challenges: ["Information overload", "Academic isolation", "Rigid thinking", "Knowledge hoarding"],
      career: ["Teaching", "Research", "Library sciences", "Ancient studies"],
      relationships: "You connect through shared learning and seek intellectually stimulating partnerships.",
      remedies: ["Sacred study", "Knowledge sharing", "Wisdom meditation", "Ancient practices"]
    },
    "The Emotional Alchemist": {
      title: "The Feeling Transformer",
      description: "You have the rare gift of transforming emotional pain into healing wisdom. Your empathy and depth help others process their emotions.",
      strengths: ["Emotional intelligence", "Healing abilities", "Deep empathy", "Transformational gifts"],
      challenges: ["Emotional overwhelm", "Boundary issues", "Depression", "Energy absorption"],
      career: ["Therapy and counseling", "Emotional healing", "Depth psychology", "Transformational work"],
      relationships: "You offer deep emotional support and need partners who can reciprocate your emotional depth.",
      remedies: ["Emotional alchemy", "Boundary setting", "Healing practices", "Depth work"]
    },
    "The Spiritual Warrior": {
      title: "The Sacred Fighter",
      description: "You fight for truth and justice with unwavering courage. Your battles are always in service of higher principles and spiritual values.",
      strengths: ["Spiritual courage", "Justice orientation", "Protective nature", "Righteous strength"],
      challenges: ["Aggressive tendencies", "Righteous anger", "Conflict attraction", "Warrior exhaustion"],
      career: ["Justice work", "Protection services", "Advocacy", "Spiritual leadership"],
      relationships: "You are fiercely loyal and protective, seeking partners who share your values and strength.",
      remedies: ["Warrior meditation", "Justice service", "Strength training", "Sacred combat"]
    },
    "The Conscious Communicator": {
      title: "The Bridge Builder",
      description: "You bridge different worlds through conscious communication. Your gift is translating complex ideas and connecting diverse groups.",
      strengths: ["Communication skills", "Bridge building", "Translation abilities", "Connection facilitation"],
      challenges: ["Message overwhelm", "Misunderstanding", "Communication fatigue", "Bridge burden"],
      career: ["Communication arts", "Translation", "Mediation", "Bridge building"],
      relationships: "You excel at creating understanding and need partners who appreciate your communication gifts.",
      remedies: ["Conscious speaking", "Bridge meditation", "Communication practice", "Translation service"]
    },
    "The Divine Nurturer": {
      title: "The Sacred Caregiver",
      description: "You provide divine nurturing that helps souls grow and flourish. Your care extends beyond the physical to touch the spiritual essence.",
      strengths: ["Nurturing abilities", "Growth facilitation", "Caring nature", "Protective instincts"],
      challenges: ["Caregiver burnout", "Boundary issues", "Self-neglect", "Overgiving"],
      career: ["Healthcare", "Childcare", "Nurturing professions", "Growth facilitation"],
      relationships: "You provide abundant care and support, seeking partners who appreciate and reciprocate your nurturing.",
      remedies: ["Self-nurturing", "Boundary practices", "Care meditation", "Nurturing balance"]
    },
    "The Transformational Catalyst": {
      title: "The Change Agent",
      description: "You catalyze profound transformation wherever you go. Your presence alone can trigger breakthrough and evolution in others.",
      strengths: ["Transformation abilities", "Change catalyst", "Breakthrough facilitation", "Evolution support"],
      challenges: ["Intensity management", "Change resistance", "Catalyst burden", "Transformation fatigue"],
      career: ["Transformational coaching", "Change management", "Evolution facilitation", "Breakthrough work"],
      relationships: "You bring profound change to relationships and need partners ready for constant growth and evolution.",
      remedies: ["Transformation practices", "Change meditation", "Evolution support", "Catalyst balance"]
    },
    "The Cosmic Harmonizer": {
      title: "The Universal Balancer",
      description: "You bring cosmic harmony and balance to all aspects of life. Your presence creates peace and integration wherever you go.",
      strengths: ["Harmony creation", "Balance facilitation", "Peace bringing", "Integration abilities"],
      challenges: ["Conflict avoidance", "Balance burden", "Harmony pressure", "Integration overwhelm"],
      career: ["Mediation", "Balance work", "Harmony creation", "Peace facilitation"],
      relationships: "You create beautiful harmony in relationships and seek partners who value peace and balance.",
      remedies: ["Harmony practices", "Balance meditation", "Peace cultivation", "Integration work"]
    },
    "The Sacred Healer": {
      title: "The Divine Physician",
      description: "Through sacred healing arts, you restore wholeness to body and soul. Your healing touch goes beyond the physical to address spiritual wounds.",
      strengths: ["Healing abilities", "Restoration skills", "Wholeness facilitation", "Sacred touch"],
      challenges: ["Healer's burden", "Energy depletion", "Healing overwhelm", "Sacred responsibility"],
      career: ["Healing arts", "Medicine", "Restoration work", "Sacred healing"],
      relationships: "You bring healing energy to relationships and attract those in need of your sacred healing gifts.",
      remedies: ["Healing practices", "Energy restoration", "Sacred medicine", "Healer's self-care"]
    }
  };

  const primaryInfo = easternArchetypes[calculatedResults.primaryArchetype as keyof typeof easternArchetypes];
  const secondaryInfo = easternArchetypes[calculatedResults.secondaryArchetype as keyof typeof easternArchetypes];

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

        {/* Debug Information */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700">
              <strong>Calculation Details:</strong> Moon Sign: {calculatedResults.moonSign}, 
              Nakshatra: {calculatedResults.nakshatra}, Lagna: {calculatedResults.lagna}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Birth: {formData.dateOfBirth} at {formData.timeOfBirth} IST in {formData.placeOfBirth}
            </p>
          </CardContent>
        </Card>

        {/* Primary Archetype */}
        <Card className="mb-6 border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">
              Primary Archetype: {calculatedResults.primaryArchetype}
            </CardTitle>
            <p className="text-center text-orange-100 text-lg">
              {primaryInfo?.title || 'The Sacred Path'}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-700">🌟 Core Essence</h3>
                <p className="text-gray-700 mb-4">{primaryInfo?.description || 'Your unique spiritual path unfolds.'}</p>
                
                <h3 className="font-semibold text-lg mb-3 text-orange-700">💪 Strengths</h3>
                <ul className="space-y-1">
                  {(primaryInfo?.strengths || ['Spiritual awareness', 'Inner wisdom']).map((strength, index) => (
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
                  {(primaryInfo?.challenges || ['Integration', 'Balance']).map((challenge, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-semibold text-lg mb-3 text-orange-700">💝 Relationships</h3>
                <p className="text-gray-700">{primaryInfo?.relationships || 'You seek meaningful connections that support growth.'}</p>
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
                  <span className="text-orange-600">{calculatedResults.moonSign}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Nakshatra:</span>
                  <span className="text-orange-600">{calculatedResults.nakshatra}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lagna (Ascendant):</span>
                  <span className="text-orange-600">{calculatedResults.lagna}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Atmakaraka:</span>
                  <span className="text-orange-600">{calculatedResults.atmakaraka}</span>
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
                "{calculatedResults.vedicMessage}"
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
                {(primaryInfo?.career || ['Spiritual work', 'Healing arts']).map((career, index) => (
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
                {(primaryInfo?.remedies || ['Meditation', 'Sacred practices']).map((remedy, index) => (
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
                Secondary Archetype: {calculatedResults.secondaryArchetype}
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
