
export interface ArchetypeData {
  name: string;
  strengths: string;
  growthAreas: string;
  lifePurpose: string;
  shadows: string;
  lifeStages: string;
  healingPractices: string;
  careerPaths: string[];
}

export const archetypeInsights: Record<string, ArchetypeData> = {
  "The Builder": {
    name: "The Builder",
    strengths: "Grounded, responsible, dependable, long-term focused",
    growthAreas: "Resistance to change, emotional distance",
    lifePurpose: "To build systems, institutions, or legacies that benefit society",
    shadows: "Overworking, rigidity, suppressing emotional needs",
    lifeStages: "Early responsibility, mid-life leadership, legacy wisdom",
    healingPractices: "Journaling, body relaxation, trust-building with others",
    careerPaths: ["Policy", "Public Service", "Manufacturing", "Finance", "Law", "Real Estate", "Education"]
  },
  "The Dreamer": {
    name: "The Dreamer",
    strengths: "Creative, intuitive, emotionally intelligent, soulful",
    growthAreas: "Escapism, boundary issues, lack of focus",
    lifePurpose: "To give voice to the heart of humanity through creativity and compassion",
    shadows: "Idealism over action, emotional overwhelm, avoidance",
    lifeStages: "Sensitive childhood, visionary youth, guiding elder",
    healingPractices: "Art, music, solitude, water connection",
    careerPaths: ["Design", "Arts", "UX", "Psychology", "Social Innovation", "Kids Content"]
  },
  "The Leader": {
    name: "The Leader",
    strengths: "Charismatic, inspiring, decisive, natural motivator",
    growthAreas: "Ego, dominance, being overly results-driven",
    lifePurpose: "To lead others with courage and vision",
    shadows: "Arrogance, over-control, ignoring feedback",
    lifeStages: "Spotlight in youth, power in midlife, purpose-driven elder",
    healingPractices: "Humility practices, mentoring others, collaborative work",
    careerPaths: ["Entrepreneurship", "Media", "Politics", "Sports", "Corporate Leadership"]
  },
  "The Healer": {
    name: "The Healer",
    strengths: "Nurturing, insightful, grounded in service",
    growthAreas: "Absorbing others' pain, fatigue, people-pleasing",
    lifePurpose: "To bring balance, healing, and hope to systems and people",
    shadows: "Self-neglect, guilt patterns, martyrdom",
    lifeStages: "Service from early age, mastery of healing arts, holistic teacher",
    healingPractices: "Nature therapy, breathwork, Ayurveda",
    careerPaths: ["Medicine", "Mental Health", "Social Work", "Nutrition", "Wellness Coaching"]
  },
  "The Seeker": {
    name: "The Seeker",
    strengths: "Curious, philosophical, loves truth and learning",
    growthAreas: "Restlessness, detachment, overthinking",
    lifePurpose: "To explore the meaning of life and share wisdom",
    shadows: "Escaping discomfort, not committing",
    lifeStages: "Early wanderer, mid-life scholar, elder wisdom keeper",
    healingPractices: "Travel, journaling, spiritual study",
    careerPaths: ["Writing", "Teaching", "Research", "Consulting", "Cross-cultural Projects"]
  },
  "The Rebel": {
    name: "The Rebel",
    strengths: "Original, bold, system-challenger, inventive",
    growthAreas: "Anger, non-conformism without cause, instability",
    lifePurpose: "To disrupt and innovate for better futures",
    shadows: "Rebellion for rebellion's sake, isolation, burn-out",
    lifeStages: "Breakout youth, peak disruption in midlife, mentoring change-makers",
    healingPractices: "Expression through activism, creating safe communities",
    careerPaths: ["Tech Innovation", "Startup Founder", "Activism", "Ed-tech", "Public Discourse"]
  },
  "The Mystic": {
    name: "The Mystic",
    strengths: "Deeply intuitive, spiritual, compassionate",
    growthAreas: "Escaping material world, indecision, loneliness",
    lifePurpose: "To help others reconnect with inner truth and deeper purpose",
    shadows: "Isolation, disconnection from reality, emotional withdrawal",
    lifeStages: "Deep inner world as child, awakening as adult, spiritual teacher",
    healingPractices: "Meditation, prayer, water rituals, mantra",
    careerPaths: ["Research", "Psychology", "Spiritual Teaching", "Cultural Preservation"]
  },
  "The Visionary": {
    name: "The Visionary",
    strengths: "Futuristic thinker, creative strategist, big-picture clarity",
    growthAreas: "Over-planning, disconnection from present moment",
    lifePurpose: "To envision bold futures and create pathways to get there",
    shadows: "Delusion, aloofness, disconnection from people",
    lifeStages: "Early idealism, strategy in midlife, legacy projects later",
    healingPractices: "Nature time, strategic action, creative vision boarding",
    careerPaths: ["Product Design", "Sustainability", "Think-tanks", "Urban Planning", "Green-tech"]
  },
  "The Connector": {
    name: "The Connector",
    strengths: "Empathic, socially aware, bridge-builder",
    growthAreas: "Over-dependence, lack of boundaries, validation-seeking",
    lifePurpose: "To create belonging, trust, and understanding among people",
    shadows: "People-pleasing, gossip, emotional manipulation",
    lifeStages: "Supportive childhood, social star in youth, peacemaker in elderhood",
    healingPractices: "Group therapy, journaling, forgiveness rituals",
    careerPaths: ["Community Work", "HR", "Education", "Storytelling", "Diplomacy"]
  },
  "The Strategist": {
    name: "The Strategist",
    strengths: "Logical, analytical, visionary problem-solver",
    growthAreas: "Cynicism, emotional disconnect, over-perfectionism",
    lifePurpose: "To design elegant, scalable solutions to real problems",
    shadows: "Analysis paralysis, judgmental thinking",
    lifeStages: "Data-gathering early life, innovation midlife, systems leader later",
    healingPractices: "Journaling, clarity meditation, systems thinking",
    careerPaths: ["Tech Architecture", "Data Science", "Consulting", "Systems Governance"]
  },
  "The Performer": {
    name: "The Performer",
    strengths: "Charisma, confidence, entertainment, self-expression",
    growthAreas: "Insecurity masked by performance, validation-seeking",
    lifePurpose: "To inspire joy, emotion, and change through performance",
    shadows: "Burnout, emotional rollercoasters, self-worth tied to audience",
    lifeStages: "Expressive child, acclaimed adult, influential elder",
    healingPractices: "Performance with purpose, identity work",
    careerPaths: ["Acting", "Dance", "Public Speaking", "Content Creation", "Motivational Work"]
  },
  "The Alchemist": {
    name: "The Alchemist",
    strengths: "Transformative, adaptable, spiritual meets science",
    growthAreas: "Impatience, control tendencies, hidden agendas",
    lifePurpose: "To integrate opposites and lead transformation",
    shadows: "Manipulation, intensity overload, isolation",
    lifeStages: "Curious youth, change-maker midlife, soul alchemist elder",
    healingPractices: "Deep therapy, energy rituals, fire ceremonies",
    careerPaths: ["Entrepreneurship", "Transformation Coaching", "Product Innovation", "Ecology"]
  }
};

export const getArchetypeData = (archetype: string): ArchetypeData => {
  return archetypeInsights[archetype] || {
    name: archetype,
    strengths: "Natural leadership qualities, strong intuition, and the ability to inspire others toward positive change.",
    growthAreas: "Learning to balance ambition with patience, and trusting the divine timing of your journey.",
    lifePurpose: "You are here to guide others through transformation and help them discover their own inner wisdom.",
    shadows: "Tendency to take on too much responsibility and difficulty accepting help from others.",
    lifeStages: "Early development of independence, mid-life mastery, elder wisdom sharing.",
    healingPractices: "Meditation, nature connection, community service",
    careerPaths: ["Life Coach", "Teacher", "Counselor", "Entrepreneur", "Healer", "Writer"]
  };
};

// Advanced archetype calculation system
export interface ArchetypeScore {
  archetype: string;
  score: number;
}

export interface ArchetypeResult {
  primary: string;
  secondary: string;
  scoreBreakdown: Record<string, number>;
}

export const calculateArchetypeFromChart = (
  sunSign: string,
  moonSign: string,
  risingSign: string,
  dominantPlanet: string,
  dominantElement: string,
  dominantModality: string
): ArchetypeResult => {
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

  // Sun Sign scoring (Weight: +5)
  const sunScoring: Record<string, string[]> = {
    "The Builder": ["Capricorn", "Taurus"],
    "The Dreamer": ["Pisces", "Cancer"],
    "The Leader": ["Leo", "Aries"],
    "The Healer": ["Virgo", "Cancer"],
    "The Seeker": ["Sagittarius", "Gemini"],
    "The Rebel": ["Aquarius", "Aries"],
    "The Mystic": ["Scorpio", "Pisces"],
    "The Visionary": ["Aquarius", "Sagittarius"],
    "The Connector": ["Libra", "Gemini"],
    "The Strategist": ["Virgo", "Gemini"],
    "The Performer": ["Leo", "Sagittarius"],
    "The Alchemist": ["Scorpio", "Capricorn"]
  };

  Object.entries(sunScoring).forEach(([archetype, signs]) => {
    if (signs.includes(sunSign)) {
      scores[archetype] += 5;
    }
  });

  // Moon Sign scoring (Weight: +4)
  const moonScoring: Record<string, string[]> = {
    "The Builder": ["Capricorn", "Taurus", "Virgo"],
    "The Dreamer": ["Pisces", "Cancer", "Scorpio"],
    "The Leader": ["Leo", "Aries", "Sagittarius"],
    "The Healer": ["Cancer", "Virgo", "Pisces"],
    "The Seeker": ["Sagittarius", "Gemini", "Aquarius"],
    "The Rebel": ["Aquarius", "Aries", "Sagittarius"],
    "The Mystic": ["Scorpio", "Pisces", "Cancer"],
    "The Visionary": ["Aquarius", "Gemini", "Sagittarius"],
    "The Connector": ["Libra", "Gemini", "Leo"],
    "The Strategist": ["Virgo", "Gemini", "Capricorn"],
    "The Performer": ["Leo", "Aries", "Sagittarius"],
    "The Alchemist": ["Scorpio", "Capricorn", "Aries"]
  };

  Object.entries(moonScoring).forEach(([archetype, signs]) => {
    if (signs.includes(moonSign)) {
      scores[archetype] += 4;
    }
  });

  // Rising Sign scoring (Weight: +4)
  Object.entries(sunScoring).forEach(([archetype, signs]) => {
    if (signs.includes(risingSign)) {
      scores[archetype] += 4;
    }
  });

  // Dominant Planet scoring (Weight: +3)
  const planetScoring: Record<string, string[]> = {
    "The Builder": ["Saturn"],
    "The Dreamer": ["Neptune", "Moon"],
    "The Leader": ["Sun", "Mars"],
    "The Healer": ["Moon", "Venus"],
    "The Seeker": ["Jupiter", "Mercury"],
    "The Rebel": ["Uranus", "Mars"],
    "The Mystic": ["Neptune", "Pluto"],
    "The Visionary": ["Uranus", "Jupiter"],
    "The Connector": ["Venus", "Mercury"],
    "The Strategist": ["Mercury", "Saturn"],
    "The Performer": ["Sun", "Venus"],
    "The Alchemist": ["Pluto", "Mars"]
  };

  Object.entries(planetScoring).forEach(([archetype, planets]) => {
    if (planets.includes(dominantPlanet)) {
      scores[archetype] += 3;
    }
  });

  // Element scoring (Weight: +2)
  const elementScoring: Record<string, string[]> = {
    "The Builder": ["Earth"],
    "The Dreamer": ["Water"],
    "The Leader": ["Fire"],
    "The Healer": ["Water", "Earth"],
    "The Seeker": ["Fire", "Air"],
    "The Rebel": ["Air", "Fire"],
    "The Mystic": ["Water"],
    "The Visionary": ["Air"],
    "The Connector": ["Air"],
    "The Strategist": ["Earth", "Air"],
    "The Performer": ["Fire"],
    "The Alchemist": ["Water", "Earth"]
  };

  Object.entries(elementScoring).forEach(([archetype, elements]) => {
    if (elements.includes(dominantElement)) {
      scores[archetype] += 2;
    }
  });

  // Find primary and secondary archetypes
  const sortedScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a);

  return {
    primary: sortedScores[0][0],
    secondary: sortedScores[1][0],
    scoreBreakdown: scores
  };
};
