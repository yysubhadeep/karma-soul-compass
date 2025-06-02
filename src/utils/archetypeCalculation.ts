
// Fixed personality-based archetype calculation with more balanced mappings
export const calculatePersonalityArchetype = (
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
