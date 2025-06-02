
import { generateNatalChart, calculateAstrologicalArchetype } from './astrologicalCalculations';

interface TestPerson {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

export const testArchetypeGeneration = () => {
  const testPeople: TestPerson[] = [
    {
      name: "Subhadeep Bhattacharyya",
      dateOfBirth: "1986-03-08",
      timeOfBirth: "16:55",
      placeOfBirth: "Kolkata, India"
    },
    {
      name: "Sarva Bhattacharyya", 
      dateOfBirth: "2023-01-26",
      timeOfBirth: "15:34",
      placeOfBirth: "Mumbai, India"
    },
    {
      name: "Sreemoyee Bhattacharyya",
      dateOfBirth: "1985-10-29", 
      timeOfBirth: "02:30",
      placeOfBirth: "Kolkata, India"
    },
    {
      name: "Dr. Madhu Priya",
      dateOfBirth: "1987-03-05",
      timeOfBirth: "08:30", 
      placeOfBirth: "Gaya, Bihar"
    },
    {
      name: "Sandipan Ghosal (Sandy)",
      dateOfBirth: "1993-06-27",
      timeOfBirth: "19:59",
      placeOfBirth: "Kalyani, Nadia, West Bengal"
    }
  ];

  console.log("=== TESTING ARCHETYPE GENERATION FOR 5 PEOPLE ===");
  
  const results = testPeople.map(person => {
    console.log(`\n--- Testing ${person.name} ---`);
    console.log(`Birth: ${person.dateOfBirth} at ${person.timeOfBirth} in ${person.placeOfBirth}`);
    
    // Generate natal chart
    const natalChart = generateNatalChart(person.dateOfBirth, person.timeOfBirth, person.placeOfBirth);
    console.log(`Chart: Sun=${natalChart.sunSign}, Moon=${natalChart.moonSign}, Rising=${natalChart.risingSign}`);
    console.log(`Dominant: Element=${natalChart.dominantElement}, Modality=${natalChart.dominantModality}, Planet=${natalChart.dominantPlanet}`);
    
    // Calculate archetype
    const archetypeResult = calculateAstrologicalArchetype(natalChart);
    console.log(`Primary Archetype: ${archetypeResult.primary} (Score: ${archetypeResult.scoreBreakdown[archetypeResult.primary]})`);
    console.log(`Secondary Archetype: ${archetypeResult.secondary} (Score: ${archetypeResult.scoreBreakdown[archetypeResult.secondary]})`);
    
    return {
      name: person.name,
      natalChart,
      primary: archetypeResult.primary,
      secondary: archetypeResult.secondary,
      scores: archetypeResult.scoreBreakdown
    };
  });

  // Summary of all generated archetypes
  const allPrimaryArchetypes = results.map(r => r.primary);
  const allSecondaryArchetypes = results.map(r => r.secondary);
  const uniqueArchetypes = [...new Set([...allPrimaryArchetypes, ...allSecondaryArchetypes])];

  console.log("\n=== ARCHETYPE GENERATION SUMMARY ===");
  console.log("Primary archetypes generated:", allPrimaryArchetypes);
  console.log("Secondary archetypes generated:", allSecondaryArchetypes);
  console.log("Unique archetypes generated:", uniqueArchetypes);
  console.log(`Total unique archetypes: ${uniqueArchetypes.length}/12`);

  const allArchetypes = [
    "The Builder", "The Dreamer", "The Leader", "The Healer", 
    "The Seeker", "The Rebel", "The Mystic", "The Visionary",
    "The Connector", "The Strategist", "The Performer", "The Alchemist"
  ];

  const missingArchetypes = allArchetypes.filter(archetype => !uniqueArchetypes.includes(archetype));
  if (missingArchetypes.length > 0) {
    console.log("Missing archetypes:", missingArchetypes);
  } else {
    console.log("✅ All 12 archetypes can be generated!");
  }

  return results;
};
