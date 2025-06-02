
// Astrological calculation utilities for accurate archetype determination

export interface NatalChart {
  sunSign: string;
  moonSign: string;
  risingSign: string;
  dominantElement: string;
  dominantModality: string;
  dominantPlanet: string;
  houseEmphasis: number[];
  aspectPatterns: string[];
  outerPlanetHighlights: string[];
  planetaryPlacements: Record<string, { sign: string; house: number; aspects: string[] }>;
}

export interface ArchetypeScore {
  archetype: string;
  score: number;
  conditions: string[];
}

// Generate natal chart from birth data
export const generateNatalChart = (
  dateOfBirth: string,
  timeOfBirth: string,
  placeOfBirth: string
): NatalChart => {
  const birthDate = new Date(dateOfBirth);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const year = birthDate.getFullYear();
  
  // Parse time
  const [hours, minutes] = timeOfBirth.split(':').map(Number);
  const timeDecimal = hours + (minutes / 60);
  
  // Simplified chart calculation based on birth data
  // In a real implementation, this would use ephemeris data
  
  const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
                 "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  
  const elements = ["Fire", "Earth", "Air", "Water"];
  const modalities = ["Cardinal", "Fixed", "Mutable"];
  const planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
  
  // Calculate sun sign (simplified - based on month/day)
  const sunSign = getSunSign(month, day);
  
  // Calculate moon sign (varies more rapidly - use day + time)
  const moonIndex = (day + Math.floor(timeDecimal)) % 12;
  const moonSign = signs[moonIndex];
  
  // Calculate rising sign (changes every ~2 hours - use time primarily)
  const risingIndex = Math.floor(timeDecimal / 2) % 12;
  const risingSign = signs[risingIndex];
  
  // Calculate dominant element based on Sun, Moon, Rising + modifiers
  const signElements = {
    "Aries": "Fire", "Leo": "Fire", "Sagittarius": "Fire",
    "Taurus": "Earth", "Virgo": "Earth", "Capricorn": "Earth",
    "Gemini": "Air", "Libra": "Air", "Aquarius": "Air",
    "Cancer": "Water", "Scorpio": "Water", "Pisces": "Water"
  };
  
  const elementCount = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
  elementCount[signElements[sunSign] as keyof typeof elementCount] += 3;
  elementCount[signElements[moonSign] as keyof typeof elementCount] += 3;
  elementCount[signElements[risingSign] as keyof typeof elementCount] += 2;
  
  const dominantElement = Object.entries(elementCount)
    .sort(([,a], [,b]) => b - a)[0][0];
  
  // Calculate dominant modality
  const signModalities = {
    "Aries": "Cardinal", "Cancer": "Cardinal", "Libra": "Cardinal", "Capricorn": "Cardinal",
    "Taurus": "Fixed", "Leo": "Fixed", "Scorpio": "Fixed", "Aquarius": "Fixed",
    "Gemini": "Mutable", "Virgo": "Mutable", "Sagittarius": "Mutable", "Pisces": "Mutable"
  };
  
  const modalityCount = { Cardinal: 0, Fixed: 0, Mutable: 0 };
  modalityCount[signModalities[sunSign] as keyof typeof modalityCount] += 3;
  modalityCount[signModalities[moonSign] as keyof typeof modalityCount] += 3;
  modalityCount[signModalities[risingSign] as keyof typeof modalityCount] += 2;
  
  const dominantModality = Object.entries(modalityCount)
    .sort(([,a], [,b]) => b - a)[0][0];
  
  // Calculate dominant planet (simplified - based on chart ruler and aspects)
  const chartRulers = {
    "Aries": "Mars", "Taurus": "Venus", "Gemini": "Mercury", "Cancer": "Moon",
    "Leo": "Sun", "Virgo": "Mercury", "Libra": "Venus", "Scorpio": "Pluto",
    "Sagittarius": "Jupiter", "Capricorn": "Saturn", "Aquarius": "Uranus", "Pisces": "Neptune"
  };
  
  const dominantPlanet = chartRulers[risingSign] || "Sun";
  
  // Calculate house emphasis (simplified distribution)
  const houseEmphasis = Array.from({ length: 12 }, (_, i) => {
    const baseWeight = Math.floor(Math.random() * 3) + 1;
    // Give more weight to angular houses (1, 4, 7, 10)
    if ([0, 3, 6, 9].includes(i)) return baseWeight + 2;
    return baseWeight;
  });
  
  // Generate planetary placements
  const planetaryPlacements: Record<string, { sign: string; house: number; aspects: string[] }> = {};
  planets.forEach((planet, index) => {
    const signIndex = (month + day + index * 2) % 12;
    const house = ((timeDecimal * 2 + index) % 12) + 1;
    planetaryPlacements[planet] = {
      sign: signs[signIndex],
      house: Math.floor(house),
      aspects: []
    };
  });
  
  return {
    sunSign,
    moonSign,
    risingSign,
    dominantElement,
    dominantModality,
    dominantPlanet,
    houseEmphasis,
    aspectPatterns: [],
    outerPlanetHighlights: [],
    planetaryPlacements
  };
};

// Calculate sun sign based on month and day
const getSunSign = (month: number, day: number): string => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
};

// Calculate archetype scores based on astrological rules
export const calculateAstrologicalArchetype = (chart: NatalChart): { primary: string; secondary: string; scoreBreakdown: Record<string, number> } => {
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

  const { sunSign, moonSign, risingSign, dominantElement, dominantModality, dominantPlanet, houseEmphasis, planetaryPlacements } = chart;

  console.log("=== ASTROLOGICAL ARCHETYPE CALCULATION ===");
  console.log("Chart data:", { sunSign, moonSign, risingSign, dominantElement, dominantModality, dominantPlanet });

  // 1. The Builder
  if (["Taurus", "Virgo", "Capricorn"].includes(sunSign)) scores["The Builder"] += 3;
  if (["Taurus", "Virgo", "Capricorn"].includes(moonSign)) scores["The Builder"] += 3;
  if (["Taurus", "Virgo", "Capricorn"].includes(risingSign)) scores["The Builder"] += 3;
  
  // Strong 2nd, 6th, or 10th house concentration
  if (houseEmphasis[1] >= 4 || houseEmphasis[5] >= 4 || houseEmphasis[9] >= 4) scores["The Builder"] += 2;
  
  // Saturn or Mercury dominant
  if (["Saturn", "Mercury"].includes(dominantPlanet)) scores["The Builder"] += 2;

  // 2. The Dreamer
  if (sunSign === "Pisces") scores["The Dreamer"] += 3;
  if (moonSign === "Pisces") scores["The Dreamer"] += 3;
  if (risingSign === "Pisces") scores["The Dreamer"] += 3;
  
  // Neptune dominant or 12th house emphasis
  if (dominantPlanet === "Neptune") scores["The Dreamer"] += 3;
  if (houseEmphasis[11] >= 4) scores["The Dreamer"] += 2;
  
  // Water dominant + Mutable
  if (dominantElement === "Water" && dominantModality === "Mutable") scores["The Dreamer"] += 2;

  // 3. The Leader
  if (["Leo", "Aries"].includes(sunSign)) scores["The Leader"] += 3;
  if (["Leo", "Aries"].includes(moonSign)) scores["The Leader"] += 3;
  if (["Leo", "Aries"].includes(risingSign)) scores["The Leader"] += 3;
  
  // Sun or Mars in 1st or 10th house
  if (planetaryPlacements["Sun"]?.house === 1 || planetaryPlacements["Sun"]?.house === 10) scores["The Leader"] += 3;
  if (planetaryPlacements["Mars"]?.house === 1 || planetaryPlacements["Mars"]?.house === 10) scores["The Leader"] += 2;
  
  // Sun dominant
  if (dominantPlanet === "Sun") scores["The Leader"] += 2;

  // 4. The Healer
  if (["Cancer", "Scorpio", "Pisces"].includes(moonSign)) scores["The Healer"] += 3;
  
  // Neptune in 6th, 8th, or 12th house
  if (planetaryPlacements["Neptune"]?.house === 6 || planetaryPlacements["Neptune"]?.house === 8 || planetaryPlacements["Neptune"]?.house === 12) {
    scores["The Healer"] += 3;
  }

  // 5. The Seeker
  if (sunSign === "Sagittarius") scores["The Seeker"] += 3;
  if (moonSign === "Sagittarius") scores["The Seeker"] += 3;
  if (risingSign === "Sagittarius") scores["The Seeker"] += 3;
  
  // Jupiter dominant
  if (dominantPlanet === "Jupiter") scores["The Seeker"] += 3;
  
  // 9th house strong
  if (houseEmphasis[8] >= 4) scores["The Seeker"] += 2;

  // 6. The Rebel
  if (["Aquarius", "Aries"].includes(risingSign)) scores["The Rebel"] += 3;
  
  // Uranus in 1st or 10th house
  if (planetaryPlacements["Uranus"]?.house === 1 || planetaryPlacements["Uranus"]?.house === 10) scores["The Rebel"] += 3;
  
  // Pluto rising or Scorpio stellium
  if (planetaryPlacements["Pluto"]?.house === 1) scores["The Rebel"] += 2;
  if (risingSign === "Scorpio") scores["The Rebel"] += 1;

  // 7. The Mystic
  if (planetaryPlacements["Moon"]?.house === 12 || planetaryPlacements["Venus"]?.house === 12) scores["The Mystic"] += 3;
  
  // Neptune dominant
  if (dominantPlanet === "Neptune") scores["The Mystic"] += 3;
  
  // Pisces or Scorpio Rising
  if (["Pisces", "Scorpio"].includes(risingSign)) scores["The Mystic"] += 2;

  // 8. The Visionary
  if (["Uranus", "Jupiter"].includes(dominantPlanet)) scores["The Visionary"] += 3;
  
  // Sun or Moon in Sagittarius, Aquarius, or 11th house
  if (["Sagittarius", "Aquarius"].includes(sunSign)) scores["The Visionary"] += 2;
  if (["Sagittarius", "Aquarius"].includes(moonSign)) scores["The Visionary"] += 2;
  if (planetaryPlacements["Sun"]?.house === 11 || planetaryPlacements["Moon"]?.house === 11) scores["The Visionary"] += 2;
  
  // Fire + Air dominance
  if (dominantElement === "Fire" || dominantElement === "Air") scores["The Visionary"] += 1;

  // 9. The Connector
  if (["Libra", "Gemini", "Cancer"].includes(sunSign)) scores["The Connector"] += 3;
  if (["Libra", "Gemini", "Cancer"].includes(moonSign)) scores["The Connector"] += 3;
  if (["Libra", "Gemini", "Cancer"].includes(risingSign)) scores["The Connector"] += 3;
  
  // Venus or Moon in 3rd, 7th, or 11th house
  if ([3, 7, 11].includes(planetaryPlacements["Venus"]?.house || 0)) scores["The Connector"] += 2;
  if ([3, 7, 11].includes(planetaryPlacements["Moon"]?.house || 0)) scores["The Connector"] += 2;

  // 10. The Strategist
  if (["Virgo", "Capricorn", "Scorpio"].includes(sunSign)) scores["The Strategist"] += 3;
  if (["Virgo", "Capricorn", "Scorpio"].includes(moonSign)) scores["The Strategist"] += 3;
  if (["Virgo", "Capricorn", "Scorpio"].includes(risingSign)) scores["The Strategist"] += 3;
  
  // Mercury, Saturn, or Pluto dominant
  if (["Mercury", "Saturn", "Pluto"].includes(dominantPlanet)) scores["The Strategist"] += 2;
  
  // 6th, 8th, or 10th house concentration
  if (houseEmphasis[5] >= 4 || houseEmphasis[7] >= 4 || houseEmphasis[9] >= 4) scores["The Strategist"] += 2;

  // 11. The Performer
  if (["Leo", "Libra"].includes(sunSign)) scores["The Performer"] += 3;
  if (["Leo", "Libra"].includes(moonSign)) scores["The Performer"] += 3;
  if (["Leo", "Libra"].includes(risingSign)) scores["The Performer"] += 3;
  
  // Sun or Venus in 5th house
  if (planetaryPlacements["Sun"]?.house === 5) scores["The Performer"] += 3;
  if (planetaryPlacements["Venus"]?.house === 5) scores["The Performer"] += 2;
  
  // 5th house emphasis
  if (houseEmphasis[4] >= 4) scores["The Performer"] += 2;

  // 12. The Alchemist
  if (sunSign === "Scorpio") scores["The Alchemist"] += 3;
  if (moonSign === "Scorpio") scores["The Alchemist"] += 3;
  if (risingSign === "Scorpio") scores["The Alchemist"] += 3;
  
  // Pluto in 1st, 8th, or 12th house
  if ([1, 8, 12].includes(planetaryPlacements["Pluto"]?.house || 0)) scores["The Alchemist"] += 3;
  
  // 8th house emphasis
  if (houseEmphasis[7] >= 4) scores["The Alchemist"] += 2;
  
  // Pluto dominant
  if (dominantPlanet === "Pluto") scores["The Alchemist"] += 2;

  console.log("Archetype scores:", scores);

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
