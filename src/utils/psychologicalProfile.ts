
import { calculatePersonalityArchetype } from './archetypeCalculation';

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
