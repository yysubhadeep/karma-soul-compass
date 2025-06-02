
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
  
  // Debug logging for the specific test case
  const isTestSubject = month === 3 && day === 5 && year === 1987;
  if (isTestSubject) {
    console.log("=== DEBUGGING MARCH 5, 1987 CHART GENERATION ===");
    console.log("Birth data:", { month, day, year, timeDecimal, placeOfBirth });
  }
  
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
  
  if (isTestSubject) {
    console.log("Basic placements:", { sunSign, moonSign, risingSign });
    console.log("Calculation details:");
    console.log("- Moon index:", moonIndex, "from (day + timeFloor):", day, "+", Math.floor(timeDecimal));
    console.log("- Rising index:", risingIndex, "from timeDecimal/2:", timeDecimal/2);
  }
  
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
  
  if (isTestSubject) {
    console.log("Element counts:", elementCount);
    console.log("Element breakdown:");
    console.log(`- ${sunSign} (Sun): ${signElements[sunSign]} +3`);
    console.log(`- ${moonSign} (Moon): ${signElements[moonSign]} +3`);
    console.log(`- ${risingSign} (Rising): ${signElements[risingSign]} +2`);
    console.log("Dominant element:", dominantElement);
  }
  
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
  
  if (isTestSubject) {
    console.log("Modality counts:", modalityCount);
    console.log("Modality breakdown:");
    console.log(`- ${sunSign}: ${signModalities[sunSign]} +3`);
    console.log(`- ${moonSign}: ${signModalities[moonSign]} +3`);
    console.log(`- ${risingSign}: ${signModalities[risingSign]} +2`);
    console.log("Dominant modality:", dominantModality);
  }
  
  // Calculate dominant planet (simplified - based on chart ruler and aspects)
  const chartRulers = {
    "Aries": "Mars", "Taurus": "Venus", "Gemini": "Mercury", "Cancer": "Moon",
    "Leo": "Sun", "Virgo": "Mercury", "Libra": "Venus", "Scorpio": "Pluto",
    "Sagittarius": "Jupiter", "Capricorn": "Saturn", "Aquarius": "Uranus", "Pisces": "Neptune"
  };
  
  const dominantPlanet = chartRulers[risingSign] || "Sun";
  
  if (isTestSubject) {
    console.log("Chart ruler (dominant planet):", dominantPlanet);
  }
  
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

// REBALANCED Calculate archetype scores based on astrological rules
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

  // Debug logging for specific test case
  const isTestSubject = sunSign === "Pisces";
  if (isTestSubject) {
    console.log("=== DEBUGGING ARCHETYPE CALCULATION FOR PISCES ===");
    console.log("Chart data:", { sunSign, moonSign, risingSign, dominantElement, dominantModality, dominantPlanet });
    console.log("Starting archetype calculation...");
  }

  // 1. The Builder - Earth signs, practical focus, structure
  if (["Taurus", "Virgo", "Capricorn"].includes(sunSign)) scores["The Builder"] += 4;
  if (["Taurus", "Virgo", "Capricorn"].includes(moonSign)) scores["The Builder"] += 3;
  if (["Taurus", "Virgo", "Capricorn"].includes(risingSign)) scores["The Builder"] += 3;
  if (dominantElement === "Earth") scores["The Builder"] += 3;
  if (dominantModality === "Fixed") scores["The Builder"] += 2;
  if (["Saturn", "Mercury"].includes(dominantPlanet)) scores["The Builder"] += 2;
  if (houseEmphasis[1] >= 4 || houseEmphasis[5] >= 4 || houseEmphasis[9] >= 4) scores["The Builder"] += 2;

  // 2. The Dreamer - Water signs, especially Pisces/Cancer, imagination
  if (["Pisces", "Cancer", "Scorpio"].includes(sunSign)) {
    scores["The Dreamer"] += 4;
    if (isTestSubject) console.log("The Dreamer +4 for Pisces sun");
  }
  if (["Pisces", "Cancer"].includes(moonSign)) {
    scores["The Dreamer"] += 4;
    if (isTestSubject) console.log(`The Dreamer +4 for ${moonSign} moon`);
  }
  if (["Pisces", "Cancer"].includes(risingSign)) {
    scores["The Dreamer"] += 3;
    if (isTestSubject) console.log(`The Dreamer +3 for ${risingSign} rising`);
  }
  if (dominantElement === "Water") {
    scores["The Dreamer"] += 3;
    if (isTestSubject) console.log("The Dreamer +3 for Water element");
  }
  if (dominantModality === "Mutable") {
    scores["The Dreamer"] += 2;
    if (isTestSubject) console.log("The Dreamer +2 for Mutable modality");
  }
  if (["Neptune", "Moon"].includes(dominantPlanet)) {
    scores["The Dreamer"] += 3;
    if (isTestSubject) console.log(`The Dreamer +3 for ${dominantPlanet} planet`);
  }
  if (houseEmphasis[11] >= 4) scores["The Dreamer"] += 2;

  // 3. The Leader - Fire signs, especially Leo/Aries, authority
  if (["Leo", "Aries", "Sagittarius"].includes(sunSign)) scores["The Leader"] += 4;
  if (["Leo", "Aries"].includes(moonSign)) scores["The Leader"] += 3;
  if (["Leo", "Aries", "Capricorn"].includes(risingSign)) scores["The Leader"] += 3;
  if (dominantElement === "Fire") scores["The Leader"] += 3;
  if (dominantModality === "Cardinal") scores["The Leader"] += 2;
  if (["Sun", "Mars", "Jupiter"].includes(dominantPlanet)) scores["The Leader"] += 2;
  if (houseEmphasis[0] >= 4 || houseEmphasis[9] >= 4) scores["The Leader"] += 2;

  // 4. The Healer - Cancer/Virgo focus, service, care
  if (["Cancer", "Virgo", "Pisces", "Scorpio"].includes(sunSign)) {
    scores["The Healer"] += 4;
    if (isTestSubject) console.log("The Healer +4 for Pisces sun");
  }
  if (["Cancer", "Virgo", "Pisces"].includes(moonSign)) {
    scores["The Healer"] += 4;
    if (isTestSubject) console.log(`The Healer +4 for ${moonSign} moon`);
  }
  if (["Cancer", "Virgo", "Pisces"].includes(risingSign)) {
    scores["The Healer"] += 3;
    if (isTestSubject) console.log(`The Healer +3 for ${risingSign} rising`);
  }
  if (["Water", "Earth"].includes(dominantElement)) {
    scores["The Healer"] += 2;
    if (isTestSubject) console.log(`The Healer +2 for ${dominantElement} element`);
  }
  if (["Moon", "Neptune", "Mercury"].includes(dominantPlanet)) {
    scores["The Healer"] += 2;
    if (isTestSubject) console.log(`The Healer +2 for ${dominantPlanet} planet`);
  }
  if (houseEmphasis[5] >= 4 || houseEmphasis[7] >= 4 || houseEmphasis[11] >= 4) scores["The Healer"] += 2;

  // 5. The Seeker - Sagittarius/Gemini, quest for knowledge
  if (["Sagittarius", "Gemini", "Aquarius"].includes(sunSign)) scores["The Seeker"] += 4;
  if (["Sagittarius", "Gemini", "Aquarius"].includes(moonSign)) scores["The Seeker"] += 3;
  if (["Sagittarius", "Gemini"].includes(risingSign)) scores["The Seeker"] += 3;
  if (["Fire", "Air"].includes(dominantElement)) scores["The Seeker"] += 2;
  if (dominantModality === "Mutable") scores["The Seeker"] += 2;
  if (["Jupiter", "Mercury", "Uranus"].includes(dominantPlanet)) scores["The Seeker"] += 2;
  if (houseEmphasis[8] >= 4 || houseEmphasis[2] >= 4) scores["The Seeker"] += 2;

  // 6. The Rebel - Aquarius/Aries, revolution, independence
  if (["Aquarius", "Aries", "Scorpio"].includes(sunSign)) scores["The Rebel"] += 4;
  if (["Aquarius", "Aries", "Scorpio"].includes(moonSign)) scores["The Rebel"] += 3;
  if (["Aquarius", "Aries", "Scorpio"].includes(risingSign)) scores["The Rebel"] += 3;
  if (["Air", "Fire"].includes(dominantElement)) scores["The Rebel"] += 2;
  if (dominantModality === "Fixed") scores["The Rebel"] += 2;
  if (["Uranus", "Mars", "Pluto"].includes(dominantPlanet)) scores["The Rebel"] += 3;
  if (houseEmphasis[0] >= 4 || houseEmphasis[10] >= 4) scores["The Rebel"] += 2;

  // 7. The Mystic - Water signs, especially Scorpio/Pisces, depth
  if (["Scorpio", "Pisces", "Cancer"].includes(sunSign)) {
    scores["The Mystic"] += 4;
    if (isTestSubject) console.log("The Mystic +4 for Pisces sun");
  }
  if (["Scorpio", "Pisces", "Cancer"].includes(moonSign)) {
    scores["The Mystic"] += 4;
    if (isTestSubject) console.log(`The Mystic +4 for ${moonSign} moon`);
  }
  if (["Scorpio", "Pisces"].includes(risingSign)) {
    scores["The Mystic"] += 3;
    if (isTestSubject) console.log(`The Mystic +3 for ${risingSign} rising`);
  }
  if (dominantElement === "Water") {
    scores["The Mystic"] += 3;
    if (isTestSubject) console.log("The Mystic +3 for Water element");
  }
  if (["Neptune", "Pluto", "Moon"].includes(dominantPlanet)) {
    scores["The Mystic"] += 3;
    if (isTestSubject) console.log(`The Mystic +3 for ${dominantPlanet} planet`);
  }
  if (houseEmphasis[7] >= 4 || houseEmphasis[11] >= 4) scores["The Mystic"] += 2;

  // 8. The Visionary - Air signs, especially Aquarius, future focus
  if (["Aquarius", "Gemini", "Sagittarius"].includes(sunSign)) scores["The Visionary"] += 4;
  if (["Aquarius", "Gemini", "Sagittarius"].includes(moonSign)) scores["The Visionary"] += 3;
  if (["Aquarius", "Gemini"].includes(risingSign)) scores["The Visionary"] += 3;
  if (["Air", "Fire"].includes(dominantElement)) scores["The Visionary"] += 2;
  if (["Uranus", "Jupiter", "Mercury"].includes(dominantPlanet)) scores["The Visionary"] += 2;
  if (houseEmphasis[10] >= 4 || houseEmphasis[8] >= 4) scores["The Visionary"] += 2;

  // 9. The Connector - Air signs, especially Libra/Gemini, relationships
  if (["Libra", "Gemini", "Cancer", "Leo"].includes(sunSign)) scores["The Connector"] += 4;
  if (["Libra", "Gemini", "Cancer"].includes(moonSign)) scores["The Connector"] += 3;
  if (["Libra", "Gemini", "Leo"].includes(risingSign)) scores["The Connector"] += 3;
  if (["Air", "Water"].includes(dominantElement)) scores["The Connector"] += 2;
  if (dominantModality === "Cardinal") scores["The Connector"] += 2;
  if (["Venus", "Mercury", "Moon"].includes(dominantPlanet)) scores["The Connector"] += 2;
  if (houseEmphasis[6] >= 4 || houseEmphasis[2] >= 4 || houseEmphasis[10] >= 4) scores["The Connector"] += 2;

  // 10. The Strategist - Earth/Water signs, planning, analysis
  if (["Virgo", "Capricorn", "Scorpio", "Gemini"].includes(sunSign)) scores["The Strategist"] += 4;
  if (["Virgo", "Capricorn", "Scorpio"].includes(moonSign)) scores["The Strategist"] += 3;
  if (["Virgo", "Capricorn", "Scorpio"].includes(risingSign)) scores["The Strategist"] += 3;
  if (["Earth", "Water"].includes(dominantElement)) scores["The Strategist"] += 2;
  if (["Mercury", "Saturn", "Pluto"].includes(dominantPlanet)) scores["The Strategist"] += 2;
  if (houseEmphasis[5] >= 4 || houseEmphasis[7] >= 4 || houseEmphasis[9] >= 4) scores["The Strategist"] += 2;

  // 11. The Performer - Fire signs, especially Leo, creativity
  if (["Leo", "Aries", "Sagittarius", "Libra"].includes(sunSign)) {
    scores["The Performer"] += 4;
    if (isTestSubject) console.log(`The Performer +4 for ${sunSign} sun`);
  }
  if (["Leo", "Aries", "Libra"].includes(moonSign)) {
    scores["The Performer"] += 3;
    if (isTestSubject) console.log(`The Performer +3 for ${moonSign} moon`);
  }
  if (["Leo", "Libra", "Gemini"].includes(risingSign)) {
    scores["The Performer"] += 3;
    if (isTestSubject) console.log(`The Performer +3 for ${risingSign} rising`);
  }
  if (["Fire", "Air"].includes(dominantElement)) {
    scores["The Performer"] += 2;
    if (isTestSubject) console.log(`The Performer +2 for ${dominantElement} element`);
  }
  if (dominantModality === "Fixed") {
    scores["The Performer"] += 2;
    if (isTestSubject) console.log(`The Performer +2 for Fixed modality`);
  }
  if (["Sun", "Venus", "Jupiter"].includes(dominantPlanet)) {
    scores["The Performer"] += 2;
    if (isTestSubject) console.log(`The Performer +2 for ${dominantPlanet} planet`);
  }
  if (houseEmphasis[4] >= 4 || houseEmphasis[0] >= 4) scores["The Performer"] += 2;

  // 12. The Alchemist - Scorpio focus, transformation, depth
  if (["Scorpio", "Capricorn", "Aries", "Pisces"].includes(sunSign)) {
    scores["The Alchemist"] += 4;
    if (isTestSubject) console.log("The Alchemist +4 for Pisces sun");
  }
  if (["Scorpio", "Capricorn", "Aries"].includes(moonSign)) {
    scores["The Alchemist"] += 3;
    if (isTestSubject) console.log(`The Alchemist +3 for ${moonSign} moon`);
  }
  if (["Scorpio", "Capricorn", "Aries"].includes(risingSign)) {
    scores["The Alchemist"] += 3;
    if (isTestSubject) console.log(`The Alchemist +3 for ${risingSign} rising`);
  }
  if (["Water", "Earth"].includes(dominantElement)) {
    scores["The Alchemist"] += 2;
    if (isTestSubject) console.log(`The Alchemist +2 for ${dominantElement} element`);
  }
  if (dominantModality === "Fixed") {
    scores["The Alchemist"] += 2;
    if (isTestSubject) console.log(`The Alchemist +2 for Fixed modality`);
  }
  if (["Pluto", "Mars", "Saturn"].includes(dominantPlanet)) {
    scores["The Alchemist"] += 3;
    if (isTestSubject) console.log(`The Alchemist +3 for ${dominantPlanet} planet`);
  }
  if (houseEmphasis[7] >= 4 || houseEmphasis[9] >= 4) scores["The Alchemist"] += 2;

  if (isTestSubject) {
    console.log("=== FINAL SCORES FOR PISCES TEST CASE ===");
    Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .forEach(([archetype, score]) => {
        console.log(`${archetype}: ${score}`);
      });
  }

  // Find primary and secondary archetypes
  const sortedScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a);

  if (isTestSubject) {
    console.log("Selected primary:", sortedScores[0][0], "with score:", sortedScores[0][1]);
    console.log("Selected secondary:", sortedScores[1][0], "with score:", sortedScores[1][1]);
  }

  return {
    primary: sortedScores[0][0],
    secondary: sortedScores[1][0],
    scoreBreakdown: scores
  };
};
