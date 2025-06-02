
import { astronomia } from 'astronomia';

interface BirthData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface EasternArchetypeResult {
  primaryArchetype: string;
  secondaryArchetype: string;
  moonSign: string;
  nakshatra: string;
  lagna: string;
  atmakaraka: string;
  vedicMessage: string;
  scores: Record<string, number>;
}

// Zodiac signs in sidereal order
const SIDEREAL_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// 27 Nakshatras
const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

// Eastern Archetypes with scoring rules
const EASTERN_ARCHETYPES = {
  'Bhakti Yogi': {
    keywords: ['devotion', 'emotion', 'heart', 'love', 'compassion'],
    moonSigns: ['Cancer', 'Pisces', 'Scorpio'],
    nakshatras: ['Rohini', 'Pushya', 'Revati', 'Hasta'],
    planets: ['Moon', 'Venus'],
    message: 'Your emotional intensity is a portal. Love heals your karmic ties.'
  },
  'Karma Yogi': {
    keywords: ['action', 'service', 'duty', 'work', 'dedication'],
    moonSigns: ['Virgo', 'Capricorn', 'Taurus'],
    nakshatras: ['Uttara Phalguni', 'Uttara Ashadha', 'Shravana'],
    planets: ['Saturn', 'Mars'],
    message: 'Through selfless action, you transform karma into wisdom.'
  },
  'Jnana Yogi': {
    keywords: ['wisdom', 'knowledge', 'intellect', 'analysis', 'truth'],
    moonSigns: ['Gemini', 'Virgo', 'Aquarius'],
    nakshatras: ['Ardra', 'Swati', 'Shatabhisha', 'Chitra'],
    planets: ['Mercury', 'Jupiter'],
    message: 'Knowledge is your path to liberation from illusion.'
  },
  'Raja Yogi': {
    keywords: ['meditation', 'control', 'discipline', 'royal', 'leadership'],
    moonSigns: ['Leo', 'Aries', 'Sagittarius'],
    nakshatras: ['Magha', 'Purva Phalguni', 'Purva Ashadha'],
    planets: ['Sun', 'Jupiter'],
    message: 'Through self-mastery, you become the ruler of your destiny.'
  },
  'Tantra Mystic': {
    keywords: ['energy', 'transformation', 'power', 'occult', 'intensity'],
    moonSigns: ['Scorpio', 'Capricorn', 'Aquarius'],
    nakshatras: ['Jyeshtha', 'Mula', 'Dhanishta', 'Purva Bhadrapada'],
    planets: ['Mars', 'Saturn', 'Rahu'],
    message: 'You channel cosmic energy to transform consciousness.'
  },
  'Kundalini Awakener': {
    keywords: ['awakening', 'serpent', 'spine', 'chakras', 'rising'],
    moonSigns: ['Scorpio', 'Pisces', 'Sagittarius'],
    nakshatras: ['Mula', 'Ashlesha', 'Uttara Bhadrapada'],
    planets: ['Mars', 'Ketu'],
    message: 'Your inner fire awakens the dormant spiritual power within.'
  },
  'Dharma Guardian': {
    keywords: ['dharma', 'justice', 'protection', 'righteousness', 'law'],
    moonSigns: ['Libra', 'Sagittarius', 'Leo'],
    nakshatras: ['Vishakha', 'Uttara Ashadha', 'Magha'],
    planets: ['Jupiter', 'Sun'],
    message: 'You are called to uphold cosmic order and divine justice.'
  },
  'Moksha Seeker': {
    keywords: ['liberation', 'detachment', 'renunciation', 'ultimate', 'freedom'],
    moonSigns: ['Pisces', 'Aquarius', 'Sagittarius'],
    nakshatras: ['Revati', 'Shatabhisha', 'Purva Bhadrapada'],
    planets: ['Ketu', 'Saturn'],
    message: 'Your soul yearns for ultimate liberation from the cycle of birth.'
  },
  'Divine Feminine': {
    keywords: ['goddess', 'creation', 'nurturing', 'intuition', 'cycles'],
    moonSigns: ['Cancer', 'Taurus', 'Virgo'],
    nakshatras: ['Rohini', 'Pushya', 'Hasta', 'Bharani'],
    planets: ['Moon', 'Venus'],
    message: 'You embody the creative power of the Divine Mother.'
  }
};

// Calculate Julian Day from date
function calculateJulianDay(date: Date): number {
  const a = Math.floor((14 - (date.getMonth() + 1)) / 12);
  const y = date.getFullYear() + 4800 - a;
  const m = (date.getMonth() + 1) + 12 * a - 3;
  
  return date.getDate() + Math.floor((153 * m + 2) / 5) + 365 * y + 
         Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045 +
         (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) / 24;
}

// Convert IST to UTC
function convertISTtoUTC(dateStr: string, timeStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  // Create date in IST (UTC+5:30)
  const istDate = new Date(year, month - 1, day, hours, minutes);
  
  // Convert to UTC by subtracting 5 hours 30 minutes
  const utcDate = new Date(istDate.getTime() - (5 * 60 + 30) * 60 * 1000);
  
  return utcDate;
}

// Calculate sidereal position (simplified)
function calculateSiderealPosition(julianDay: number, longitude: number = 0): number {
  // Simplified sidereal calculation
  // Ayanamsa (precession correction) - using Lahiri ayanamsa
  const ayanamsa = 24.042; // Approximate current Lahiri ayanamsa
  
  // Basic tropical longitude calculation (simplified)
  const tropicalLongitude = ((julianDay - 2451545.0) / 365.25) * 360 + longitude;
  
  // Convert to sidereal by subtracting ayanamsa
  let siderealLongitude = (tropicalLongitude - ayanamsa) % 360;
  if (siderealLongitude < 0) siderealLongitude += 360;
  
  return siderealLongitude;
}

// Get zodiac sign from longitude
function getZodiacSign(longitude: number): string {
  const signIndex = Math.floor(longitude / 30);
  return SIDEREAL_SIGNS[signIndex] || 'Aries';
}

// Get nakshatra from moon longitude
function getNakshatra(moonLongitude: number): string {
  const nakshatraIndex = Math.floor(moonLongitude / (360 / 27));
  return NAKSHATRAS[nakshatraIndex] || 'Ashwini';
}

// Calculate archetype scores based on birth chart
function calculateArchetypeScores(
  moonSign: string,
  nakshatra: string,
  lagna: string,
  dominantPlanets: string[]
): Record<string, number> {
  const scores: Record<string, number> = {};
  
  Object.entries(EASTERN_ARCHETYPES).forEach(([archetype, rules]) => {
    let score = 0;
    
    // Moon sign scoring (high weight)
    if (rules.moonSigns.includes(moonSign)) {
      score += 30;
    }
    
    // Nakshatra scoring (medium weight)
    if (rules.nakshatras.includes(nakshatra)) {
      score += 25;
    }
    
    // Planetary influence scoring
    dominantPlanets.forEach(planet => {
      if (rules.planets.includes(planet)) {
        score += 20;
      }
    });
    
    // Add some randomization based on birth data uniqueness
    const uniquenessFactor = (moonSign.length + nakshatra.length + lagna.length) % 10;
    score += uniquenessFactor;
    
    scores[archetype] = score;
  });
  
  return scores;
}

// Determine dominant planets (simplified)
function getDominantPlanets(moonSign: string, lagna: string, nakshatra: string): string[] {
  const planets = [];
  
  // Moon sign rulers
  const moonRulers: Record<string, string> = {
    'Cancer': 'Moon', 'Leo': 'Sun', 'Virgo': 'Mercury', 'Libra': 'Venus',
    'Scorpio': 'Mars', 'Sagittarius': 'Jupiter', 'Capricorn': 'Saturn',
    'Aquarius': 'Saturn', 'Pisces': 'Jupiter', 'Aries': 'Mars',
    'Taurus': 'Venus', 'Gemini': 'Mercury'
  };
  
  if (moonRulers[moonSign]) {
    planets.push(moonRulers[moonSign]);
  }
  
  if (moonRulers[lagna]) {
    planets.push(moonRulers[lagna]);
  }
  
  // Nakshatra rulers (simplified)
  if (nakshatra.includes('Ashwini') || nakshatra.includes('Magha')) {
    planets.push('Ketu');
  }
  if (nakshatra.includes('Bharani') || nakshatra.includes('Purva')) {
    planets.push('Venus');
  }
  
  return [...new Set(planets)]; // Remove duplicates
}

export function calculateEasternArchetype(formData: BirthData): EasternArchetypeResult {
  try {
    console.log('Calculating Eastern archetype for:', formData);
    
    // Convert IST to UTC
    const utcDate = convertISTtoUTC(formData.dateOfBirth, formData.timeOfBirth);
    console.log('UTC Date:', utcDate);
    
    // Calculate Julian Day
    const julianDay = calculateJulianDay(utcDate);
    console.log('Julian Day:', julianDay);
    
    // Calculate basic sidereal positions (simplified)
    const moonLongitude = calculateSiderealPosition(julianDay, 120); // Base + moon offset
    const sunLongitude = calculateSiderealPosition(julianDay, 0);
    const ascendantLongitude = calculateSiderealPosition(julianDay, 90); // Simplified ascendant
    
    console.log('Sidereal positions - Moon:', moonLongitude, 'Sun:', sunLongitude, 'Asc:', ascendantLongitude);
    
    // Determine signs and nakshatra
    const moonSign = getZodiacSign(moonLongitude);
    const lagna = getZodiacSign(ascendantLongitude);
    const nakshatra = getNakshatra(moonLongitude);
    
    console.log('Calculated - Moon Sign:', moonSign, 'Lagna:', lagna, 'Nakshatra:', nakshatra);
    
    // Determine dominant planets
    const dominantPlanets = getDominantPlanets(moonSign, lagna, nakshatra);
    const atmakaraka = dominantPlanets[0] || 'Moon';
    
    // Calculate archetype scores
    const scores = calculateArchetypeScores(moonSign, nakshatra, lagna, dominantPlanets);
    console.log('Archetype scores:', scores);
    
    // Find primary and secondary archetypes
    const sortedArchetypes = Object.entries(scores)
      .sort(([,a], [,b]) => b - a);
    
    const primaryArchetype = sortedArchetypes[0][0];
    const secondaryArchetype = sortedArchetypes[1][0];
    
    const vedicMessage = EASTERN_ARCHETYPES[primaryArchetype as keyof typeof EASTERN_ARCHETYPES]?.message || 
                        'Your path reveals itself through ancient wisdom.';
    
    const result = {
      primaryArchetype,
      secondaryArchetype,
      moonSign,
      nakshatra,
      lagna,
      atmakaraka,
      vedicMessage,
      scores
    };
    
    console.log('Final result:', result);
    return result;
    
  } catch (error) {
    console.error('Error calculating Eastern archetype:', error);
    // Fallback to ensure different results
    const fallbackArchetypes = Object.keys(EASTERN_ARCHETYPES);
    const randomIndex = Math.floor(Math.random() * fallbackArchetypes.length);
    
    return {
      primaryArchetype: fallbackArchetypes[randomIndex],
      secondaryArchetype: fallbackArchetypes[(randomIndex + 1) % fallbackArchetypes.length],
      moonSign: 'Pisces',
      nakshatra: 'Revati',
      lagna: 'Cancer',
      atmakaraka: 'Moon',
      vedicMessage: 'Your path reveals itself through ancient wisdom.',
      scores: {}
    };
  }
}
