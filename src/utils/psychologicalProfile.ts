
import { generateNatalChart, calculateAstrologicalArchetype } from './astrologicalCalculations';

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

export const generatePsychologicalProfile = (formData: FormData) => {
  const birthDate = new Date(formData.dateOfBirth);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  
  // Generate natal chart from astrological data
  const natalChart = generateNatalChart(formData.dateOfBirth, formData.timeOfBirth, formData.placeOfBirth);
  
  // Calculate archetype using astrological algorithm
  const archetypeResult = calculateAstrologicalArchetype(natalChart);

  // Generate supporting psychological patterns for display
  const getPersonalityPattern = (sunSign: string, moonSign: string) => {
    const personalityMap: Record<string, { name: string; trait: string; tendency: string }> = {
      "Aries": { name: "The Pioneer", trait: "Action-oriented", tendency: "Leadership drive" },
      "Taurus": { name: "The Builder", trait: "Practical", tendency: "Steady persistence" },
      "Gemini": { name: "The Communicator", trait: "Adaptable", tendency: "Quick learning" },
      "Cancer": { name: "The Nurturer", trait: "Caring", tendency: "Protective instincts" },
      "Leo": { name: "The Creator", trait: "Confident", tendency: "Self-expression drive" },
      "Virgo": { name: "The Analyzer", trait: "Detail-oriented", tendency: "Systematic approach" },
      "Libra": { name: "The Harmonizer", trait: "Balanced", tendency: "Relationship focus" },
      "Scorpio": { name: "The Transformer", trait: "Intense", tendency: "Deep thinking" },
      "Sagittarius": { name: "The Explorer", trait: "Optimistic", tendency: "Growth mindset" },
      "Capricorn": { name: "The Achiever", trait: "Goal-oriented", tendency: "Structured thinking" },
      "Aquarius": { name: "The Innovator", trait: "Forward-thinking", tendency: "Independent mindset" },
      "Pisces": { name: "The Intuitive", trait: "Empathetic", tendency: "Emotional intelligence" }
    };
    
    return personalityMap[sunSign] || personalityMap["Leo"];
  };

  const corePersonality = getPersonalityPattern(natalChart.sunSign, natalChart.moonSign);

  // Generate secondary patterns based on chart
  const emotionalStyleMap: Record<string, string> = {
    "Fire": "Passionate",
    "Earth": "Grounded", 
    "Air": "Intellectual",
    "Water": "Intuitive"
  };

  const behaviorPatternMap: Record<string, string> = {
    "Cardinal": "Initiative-taking",
    "Fixed": "Determined",
    "Mutable": "Adaptable"
  };

  const driverMap: Record<string, string> = {
    "Fire": "Achievement",
    "Earth": "Security",
    "Air": "Innovation", 
    "Water": "Connection"
  };

  const cognitiveStyleMap: Record<string, string> = {
    "Fire": "Intuitive",
    "Earth": "Practical",
    "Air": "Analytical",
    "Water": "Intuitive"
  };

  const energyTypeMap: Record<string, string> = {
    "Fire": "High-energy",
    "Earth": "Steady-energy",
    "Air": "High-energy",
    "Water": "Reflective-energy"
  };

  const emotionalStyle = emotionalStyleMap[natalChart.dominantElement] || "Balanced";
  const behaviorPattern = behaviorPatternMap[natalChart.dominantModality] || "Flexible";
  const primaryDriver = driverMap[natalChart.dominantElement] || "Growth";
  const cognitiveStyle = cognitiveStyleMap[natalChart.dominantElement] || "Intuitive";
  const energyType = energyTypeMap[natalChart.dominantElement] || "Steady-energy";

  console.log("=== ASTROLOGICAL PROFILE GENERATION ===");
  console.log("Natal chart:", natalChart);
  console.log("Archetype result:", archetypeResult);
  console.log("Supporting patterns:", {
    corePersonality: corePersonality.name,
    emotionalStyle,
    behaviorPattern,
    primaryDriver,
    cognitiveStyle,
    energyType
  });

  return {
    corePersonality,
    emotionalStyle,
    behaviorPattern,
    primaryDriver,
    cognitiveStyle,
    energyType,
    archetype: archetypeResult.primary,
    secondaryArchetype: archetypeResult.secondary,
    scoreBreakdown: archetypeResult.scoreBreakdown,
    natalChart
  };
};
