
import React, { useMemo, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Share2, UserPlus, Heart, Users } from "lucide-react";
import { calculateEasternArchetype } from '@/utils/easternAstrologyCalculations';
import CallToActionCard from './CallToActionCard';
import FloatingCTA from './FloatingCTA';

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
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmails, setInviteEmails] = useState('');
  const [inviteMessage, setInviteMessage] = useState('');

  // Calculate real results using the Eastern archetype algorithm
  const calculatedResults = useMemo(() => {
    return calculateEasternArchetype(formData);
  }, [formData]);

  // Your Original Eastern Archetypes - The Correct 9
  const easternArchetypes = {
    "Karma Yogi": {
      title: "The Duty-bound Doer",
      description: "Your spiritual path unfolds through selfless action and dedicated service. You find deep fulfillment in duty, work, and righteous action that serves the greater good.",
      strengths: ["Strong work ethic", "Sense of duty", "Service orientation", "Practical wisdom", "Reliable nature"],
      challenges: ["Workaholism", "Self-neglect", "Rigidity", "Burnout from overgiving"],
      career: ["Social work", "Healthcare", "Public service", "Non-profit leadership", "Teaching"],
      relationships: "You express love through acts of service and seek partners who appreciate your dedication and share your values of service.",
      remedies: ["Daily karma yoga practice", "Selfless service", "Work-life balance", "Meditation on duty"],
      healing: "Focus on balancing service with self-care. Your healing comes through understanding that caring for yourself enables better service to others."
    },
    "Jnana Yogi": {
      title: "The Wisdom-seeking Philosopher",
      description: "Your liberation comes through knowledge, study, and philosophical understanding. You are driven to seek truth and understand the deeper meaning of existence.",
      strengths: ["Deep thinking", "Philosophical insight", "Love of learning", "Truth-seeking nature", "Analytical mind"],
      challenges: ["Overthinking", "Intellectual pride", "Detachment from emotions", "Analysis paralysis"],
      career: ["Research", "Philosophy", "Writing", "Academia", "Consulting"],
      relationships: "You connect through intellectual discourse and need partners who can engage with your philosophical nature and quest for truth.",
      remedies: ["Study of sacred texts", "Philosophical discussions", "Contemplative meditation", "Knowledge sharing"],
      healing: "Your healing path involves integrating wisdom with emotional intelligence. Balance intellectual pursuits with heart-centered practices."
    },
    "Bhakti Yogi": {
      title: "The Heart-led Empath/Devotee",
      description: "Your path is through pure devotion, emotional connection, and surrender of the heart. Love, faith, and emotional intelligence guide your spiritual journey.",
      strengths: ["Deep empathy", "Emotional intelligence", "Devotional nature", "Compassionate heart", "Faith and surrender"],
      challenges: ["Emotional overwhelm", "Boundary issues", "Idealization", "Attachment"],
      career: ["Counseling", "Healing arts", "Spiritual guidance", "Creative arts", "Community building"],
      relationships: "You love deeply and devotionally, seeking soulmate connections with those who can match your emotional depth and spiritual devotion.",
      remedies: ["Devotional practices", "Emotional healing", "Heart-centered meditation", "Sacred relationships"],
      healing: "Your healing comes through learning healthy emotional boundaries while maintaining your compassionate nature. Practice self-love alongside devotion to others."
    },
    "Tantra Mystic": {
      title: "The Occultist & Esoteric Energy Worker",
      description: "You work with hidden energies, esoteric knowledge, and transformational mysteries. Your power comes from understanding the deeper occult forces of existence.",
      strengths: ["Psychic abilities", "Energy work", "Transformational power", "Occult knowledge", "Mystical insight"],
      challenges: ["Intensity", "Misunderstood gifts", "Power struggles", "Emotional volatility"],
      career: ["Energy healing", "Occult studies", "Transformational coaching", "Mystical arts", "Psychology"],
      relationships: "You seek deep, transformational connections with those who can handle your intensity and appreciate your mystical nature.",
      remedies: ["Tantric practices", "Energy protection", "Mystical study", "Grounding techniques"],
      healing: "Your healing involves learning to channel your intense energy constructively while maintaining grounding and emotional stability."
    },
    "Raj Rishi": {
      title: "The Royal Leader with Inner Wisdom",
      description: "You are born to lead with wisdom, nobility, and righteousness. Your authority comes from inner spiritual understanding combined with natural leadership abilities.",
      strengths: ["Natural leadership", "Inner wisdom", "Noble character", "Authority", "Inspiring presence"],
      challenges: ["Pride", "Isolation of leadership", "Responsibility burden", "Ego inflation"],
      career: ["Leadership roles", "Politics", "Executive positions", "Spiritual teaching", "Mentoring"],
      relationships: "You seek partnerships that honor your leadership while providing emotional support and understanding of your noble responsibilities.",
      remedies: ["Leadership meditation", "Wisdom cultivation", "Humble service", "Royal yoga practices"],
      healing: "Your healing path involves balancing authority with humility and learning to lead from the heart while maintaining your noble nature."
    },
    "Artha Seeker": {
      title: "The Finance/Impact-oriented Builder",
      description: "Your dharma involves creating material prosperity, security, and resources that serve higher purposes. You understand the spiritual value of material abundance.",
      strengths: ["Business acumen", "Resource creation", "Practical skills", "Financial wisdom", "Building abilities"],
      challenges: ["Materialism", "Greed", "Work obsession", "Status anxiety"],
      career: ["Business", "Finance", "Real estate", "Entrepreneurship", "Resource management"],
      relationships: "You seek stable, prosperous partnerships and express love by providing security and building a strong foundation together.",
      remedies: ["Ethical wealth creation", "Generous giving", "Material detachment practices", "Abundance meditation"],
      healing: "Your healing comes through understanding that true abundance includes spiritual wealth. Balance material success with inner fulfillment."
    },
    "Vairagi Wanderer": {
      title: "The Detached Seeker, Monk-like",
      description: "Your path is through detachment, renunciation, and spiritual wandering. You find freedom by releasing worldly attachments and seeking higher truth.",
      strengths: ["Spiritual detachment", "Freedom", "Non-attachment", "Inner peace", "Wandering wisdom"],
      challenges: ["Isolation", "Difficulty with commitment", "Escapism", "Emotional distance"],
      career: ["Spiritual teaching", "Travel", "Minimalist lifestyle", "Retreat facilitation", "Nomadic work"],
      relationships: "You need space and freedom in relationships, seeking partners who understand your need for independence and spiritual seeking.",
      remedies: ["Detachment practices", "Wandering meditation", "Renunciation rituals", "Freedom cultivation"],
      healing: "Your healing involves finding balance between detachment and healthy connection, learning that true freedom includes the ability to love without attachment."
    },
    "Dharma Warrior": {
      title: "The Righteous Protector/Activist",
      description: "You are called to fight for righteousness, protect the innocent, and defend justice. Your strength and courage serve divine principles and moral causes.",
      strengths: ["Courage", "Justice orientation", "Protective nature", "Moral strength", "Fighting spirit"],
      challenges: ["Anger", "Conflict attraction", "Righteous pride", "Aggressive tendencies"],
      career: ["Activism", "Law enforcement", "Legal advocacy", "Social justice", "Protection services"],
      relationships: "You are fiercely loyal and protective, seeking partners who share your values and can appreciate your warrior nature.",
      remedies: ["Righteous action", "Warrior meditation", "Justice service", "Anger transformation"],
      healing: "Your healing path involves transforming anger into compassionate action and learning to fight for justice without losing your heart."
    },
    "Lila Player": {
      title: "The Joyful Artist, Creative Soul",
      description: "Life is divine play for you. Through joy, creativity, artistic expression, and celebration, you touch the sacred in everyday life and bring beauty to the world.",
      strengths: ["Creativity", "Joy", "Artistic expression", "Playfulness", "Beauty creation"],
      challenges: ["Lack of seriousness", "Inconsistency", "Escapism through art", "Responsibility avoidance"],
      career: ["Arts", "Entertainment", "Creative industries", "Design", "Performance"],
      relationships: "You bring joy and creativity to relationships, seeking partners who can play, create, and celebrate life's beauty together.",
      remedies: ["Creative practices", "Joyful meditation", "Artistic expression", "Play therapy"],
      healing: "Your healing comes through balancing creativity with responsibility and learning that joy can be a serious spiritual practice."
    }
  };

  const primaryInfo = easternArchetypes[calculatedResults.primaryArchetype as keyof typeof easternArchetypes];
  const secondaryInfo = easternArchetypes[calculatedResults.secondaryArchetype as keyof typeof easternArchetypes];

  const handleInvite = () => {
    // Here you would typically send the invite emails
    console.log('Sending invites to:', inviteEmails);
    console.log('Invite message:', inviteMessage);
    setShowInvite(false);
    setInviteEmails('');
    setInviteMessage('');
    // Show success message or toast
  };

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
            <Button 
              onClick={() => setShowInvite(true)}
              variant="outline" 
              size="sm"
              className="flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Invite Family & Friends</span>
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
            🕉️ Your Sacred Vedic KarmaArchetype
          </h1>
          <p className="text-lg text-gray-600">
            Ancient Vedic sciences for future-readiness and psychological alignment for {formData.name}
          </p>
        </div>

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
                <h3 className="font-semibold text-lg mb-3 text-orange-700">🎯 Areas of Improvement</h3>
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

        {/* Sacred Message */}
        <Card className="mb-6 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-700">🕉️ Sacred Message</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "{calculatedResults.vedicMessage}"
            </p>
          </CardContent>
        </Card>

        {/* Healing Path */}
        <Card className="mb-6 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-700 flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              Your Healing & Transformation Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {primaryInfo?.healing || 'Your healing journey unfolds through ancient Vedic wisdom, bringing psychological alignment and future-readiness to your life path.'}
            </p>
          </CardContent>
        </Card>

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
              <CardTitle className="text-orange-700">🌿 Vedic Practices & Remedies</CardTitle>
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
              <p className="text-gray-700 text-center mb-4">
                {secondaryInfo.description}
              </p>
              {secondaryInfo.healing && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-2">Additional Healing Insights:</h4>
                  <p className="text-gray-700 text-sm">{secondaryInfo.healing}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Add the CTA Card */}
        <CallToActionCard />

        {/* Disclaimer */}
        <Card className="border-orange-200 bg-orange-50 mt-6">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600 text-center">
              This report is based on ancient Vedic sciences using traditional sidereal calculations for psychological alignment and future-readiness. 
              It's designed for self-reflection, healing, and personal transformation. Birth details: {formData.dateOfBirth} at {formData.timeOfBirth} in {formData.placeOfBirth}.
            </p>
          </CardContent>
        </Card>

        {/* Invite Modal */}
        {showInvite && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Users className="h-5 w-5 mr-2" />
                  Invite Family & Friends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email addresses (separate with commas)
                  </label>
                  <textarea
                    value={inviteEmails}
                    onChange={(e) => setInviteEmails(e.target.value)}
                    placeholder="email1@example.com, email2@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personal message (optional)
                  </label>
                  <textarea
                    value={inviteMessage}
                    onChange={(e) => setInviteMessage(e.target.value)}
                    placeholder="Discover your Vedic KarmaArchetype and unlock your spiritual path..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                  />
                </div>
                <div className="flex space-x-3">
                  <Button 
                    onClick={handleInvite}
                    className="flex-1 bg-orange-500 hover:bg-orange-600"
                  >
                    Send Invites
                  </Button>
                  <Button 
                    onClick={() => setShowInvite(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add the floating CTA */}
        <FloatingCTA />
      </div>
    </div>
  );
};

export default EasternAstrologyReport;
