
import { calculateEasternArchetype } from './easternAstrologyCalculations';

// Test function to calculate moon sign for specific birth details
export function testMoonSignCalculation() {
  const testFormData = {
    name: "Test User",
    email: "test@example.com",
    dateOfBirth: "1986-03-08", // 8th March 1986
    timeOfBirth: "16:55", // 4:55 PM
    placeOfBirth: "Kolkata, India"
  };

  console.log('Testing moon sign calculation for:', testFormData);
  console.log('Birth Details: 8th March 1986, 4:55 PM, Kolkata');
  
  const result = calculateEasternArchetype(testFormData);
  
  console.log('=== MOON SIGN CALCULATION RESULT ===');
  console.log('Moon Sign:', result.moonSign);
  console.log('Nakshatra:', result.nakshatra);
  console.log('Lagna (Ascendant):', result.lagna);
  console.log('Atmakaraka:', result.atmakaraka);
  console.log('Primary Archetype:', result.primaryArchetype);
  console.log('Secondary Archetype:', result.secondaryArchetype);
  console.log('===================================');
  
  return result;
}

// Run the test immediately when this file is imported
testMoonSignCalculation();
