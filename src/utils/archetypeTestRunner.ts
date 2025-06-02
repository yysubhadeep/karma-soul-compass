
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

  console.log("=== DETAILED ARCHETYPE ANALYSIS FOR 5 PEOPLE ===");
  
  const results = testPeople.map(person => {
    console.log(`\n==================================================`);
    console.log(`ANALYZING: ${person.name}`);
    console.log(`Birth: ${person.dateOfBirth} at ${person.timeOfBirth} in ${person.placeOfBirth}`);
    console.log(`==================================================`);
    
    // Generate natal chart
    const natalChart = generateNatalChart(person.dateOfBirth, person.timeOfBirth, person.placeOfBirth);
    console.log(`\n📊 NATAL CHART ANALYSIS:`);
    console.log(`   Sun Sign: ${natalChart.sunSign}`);
    console.log(`   Moon Sign: ${natalChart.moonSign}`);
    console.log(`   Rising Sign: ${natalChart.risingSign}`);
    console.log(`   Dominant Element: ${natalChart.dominantElement}`);
    console.log(`   Dominant Modality: ${natalChart.dominantModality}`);
    console.log(`   Dominant Planet: ${natalChart.dominantPlanet}`);
    
    // Calculate archetype with detailed scoring
    const archetypeResult = calculateAstrologicalArchetype(natalChart);
    
    console.log(`\n🎯 ARCHETYPE RESULTS:`);
    console.log(`   PRIMARY: ${archetypeResult.primary} (Score: ${archetypeResult.scoreBreakdown[archetypeResult.primary]})`);
    console.log(`   SECONDARY: ${archetypeResult.secondary} (Score: ${archetypeResult.scoreBreakdown[archetypeResult.secondary]})`);
    
    // Show top 5 scores for detailed analysis
    const sortedScores = Object.entries(archetypeResult.scoreBreakdown)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
    
    console.log(`\n📈 TOP 5 ARCHETYPE SCORES:`);
    sortedScores.forEach(([archetype, score], index) => {
      console.log(`   ${index + 1}. ${archetype}: ${score}`);
    });
    
    return {
      name: person.name,
      natalChart,
      primary: archetypeResult.primary,
      secondary: archetypeResult.secondary,
      scores: archetypeResult.scoreBreakdown,
      topScores: sortedScores
    };
  });

  // Final summary
  console.log("\n" + "=".repeat(60));
  console.log("FINAL ARCHETYPE SUMMARY");
  console.log("=".repeat(60));
  
  results.forEach(result => {
    console.log(`\n${result.name}:`);
    console.log(`  Primary: ${result.primary}`);
    console.log(`  Secondary: ${result.secondary}`);
    console.log(`  Chart: Sun=${result.natalChart.sunSign}, Moon=${result.natalChart.moonSign}, Rising=${result.natalChart.risingSign}`);
    console.log(`  Dominants: ${result.natalChart.dominantElement}/${result.natalChart.dominantModality}/${result.natalChart.dominantPlanet}`);
  });

  // Check archetype diversity
  const allPrimaryArchetypes = results.map(r => r.primary);
  const allSecondaryArchetypes = results.map(r => r.secondary);
  const uniqueArchetypes = [...new Set([...allPrimaryArchetypes, ...allSecondaryArchetypes])];

  console.log(`\n📊 ARCHETYPE DIVERSITY ANALYSIS:`);
  console.log(`Primary archetypes: ${allPrimaryArchetypes.join(', ')}`);
  console.log(`Secondary archetypes: ${allSecondaryArchetypes.join(', ')}`);
  console.log(`Unique archetypes generated: ${uniqueArchetypes.length}/12`);
  console.log(`List: ${uniqueArchetypes.join(', ')}`);

  const allArchetypes = [
    "The Builder", "The Dreamer", "The Leader", "The Healer", 
    "The Seeker", "The Rebel", "The Mystic", "The Visionary",
    "The Connector", "The Strategist", "The Performer", "The Alchemist"
  ];

  const missingArchetypes = allArchetypes.filter(archetype => !uniqueArchetypes.includes(archetype));
  if (missingArchetypes.length > 0) {
    console.log(`❌ Missing archetypes: ${missingArchetypes.join(', ')}`);
  } else {
    console.log("✅ All 12 archetypes can be generated!");
  }

  return results;
};
