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
    "Karma Yogi": {
      title: "The Selfless Action Warrior",
      description: "You find your path through dedicated service and righteous action without attachment to results.",
      strengths: ["Strong work ethic", "Natural leader", "Practical wisdom", "Service-oriented"],
      challenges: ["Overwork tendencies", "Perfectionism", "Difficulty with rest", "Taking on too much"],
      career: ["Social work", "Community leadership", "Healthcare", "Education"],
      relationships: "You show love through actions and service. Learning to receive love is your growth edge.",
      remedies: ["Karma yoga practice", "Volunteer service", "Physical exercise", "Grounding practices"]
    },
    "Jnana Yogi": {
      title: "The Wisdom Seeker",
      description: "Your path to liberation is through knowledge, study, and deep philosophical understanding.",
      strengths: ["Analytical mind", "Love of learning", "Philosophical insight", "Teaching ability"],
      challenges: ["Over-intellectualizing", "Emotional detachment", "Perfectionism", "Analysis paralysis"],
      career: ["Research", "Teaching", "Writing", "Philosophy"],
      relationships: "You connect through intellectual discourse and shared learning experiences.",
      remedies: ["Study of sacred texts", "Meditation on wisdom", "Teaching others", "Silent contemplation"]
    },
    "Raja Yogi": {
      title: "The Royal Practitioner",
      description: "Through discipline, meditation, and self-control, you master both mind and circumstances.",
      strengths: ["Self-discipline", "Leadership qualities", "Mental clarity", "Systematic approach"],
      challenges: ["Rigidity", "Control issues", "Isolation", "Suppression of emotions"],
      career: ["Leadership roles", "Management", "Coaching", "Systematic work"],
      relationships: "You lead by example and appreciate structured, respectful relationships.",
      remedies: ["Regular meditation", "Breathing practices", "Yoga asanas", "Disciplined routine"]
    },
    "Tantra Mystic": {
      title: "The Esoteric Energy Worker",
      description: "You understand the hidden currents of energy and consciousness. Transformation is your gift.",
      strengths: ["Psychic abilities", "Energy work", "Transformation catalyst", "Occult knowledge"],
      challenges: ["Isolation", "Misunderstood by others", "Intensity", "Power struggles"],
      career: ["Energy healing", "Occult studies", "Research", "Transformational work"],
      relationships: "You seek partners who can handle your intensity and understand your mystical nature.",
      remedies: ["Tantric practices", "Energy clearing", "Shadow work", "Sacred sexuality"]
    },
    "Kundalini Awakener": {
      title: "The Inner Fire Igniter",
      description: "You are here to awaken the dormant spiritual energy within yourself and others.",
      strengths: ["Spiritual power", "Transformative presence", "Healing abilities", "Psychic sensitivity"],
      challenges: ["Energy overwhelm", "Spiritual bypassing", "Ungrounded states", "Intensity management"],
      career: ["Spiritual healing", "Energy work", "Yoga teaching", "Transformational coaching"],
      relationships: "You need partners who understand and support your spiritual intensity.",
      remedies: ["Kundalini yoga", "Chakra balancing", "Grounding practices", "Energy protection"]
    },
    "Dharma Guardian": {
      title: "The Righteous Protector",
      description: "You are called to uphold justice, protect the innocent, and maintain cosmic order.",
      strengths: ["Strong moral compass", "Protective nature", "Leadership in crisis", "Justice-oriented"],
      challenges: ["Judgmental tendencies", "Rigidity", "Anger at injustice", "Burden of responsibility"],
      career: ["Law enforcement", "Legal profession", "Social justice", "Protection services"],
      relationships: "You are fiercely loyal and protective of those you love.",
      remedies: ["Study of dharmic texts", "Justice work", "Protection rituals", "Righteous action"]
    },
    "Moksha Seeker": {
      title: "The Liberation-Bound Soul",
      description: "Your ultimate goal is spiritual liberation and freedom from the cycle of rebirth.",
      strengths: ["Spiritual detachment", "Deep wisdom", "Non-materialistic", "Liberation-focused"],
      challenges: ["World detachment", "Relationship difficulties", "Material neglect", "Isolation"],
      career: ["Spiritual teaching", "Monastic life", "Philosophy", "Renunciate path"],
      relationships: "You seek relationships that support spiritual growth rather than worldly attachment.",
      remedies: ["Meditation retreat", "Detachment practices", "Study of liberation", "Spiritual community"]
    },
    "Divine Feminine": {
      title: "The Sacred Goddess",
      description: "You embody the creative, nurturing, and intuitive power of the Divine Mother principle.",
      strengths: ["Intuitive wisdom", "Nurturing nature", "Creative power", "Cyclical understanding"],
      challenges: ["Emotional intensity", "Boundary issues", "Martyrdom tendencies", "Mood fluctuations"],
      career: ["Healing arts", "Creative expression", "Nurturing professions", "Goddess work"],
      relationships: "You offer deep nurturing and seek appreciation for your sacred feminine gifts.",
      remedies: ["Goddess worship", "Moon ceremonies", "Creative expression", "Sacred feminine practices"]
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
