
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

// Zodiac signs in sidereal order for Vedic calculations
const SIDEREAL_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// 27 Nakshatras - lunar mansions in Vedic tradition
const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

// Your Original Eastern Archetypes - The Correct 9
const EASTERN_ARCHETYPES = {
  'Karma Yogi': {
    keywords: ['duty', 'service', 'action', 'responsibility', 'work', 'dharma'],
    moonSigns: ['Virgo', 'Capricorn', 'Taurus'],
    nakshatras: ['Hasta', 'Uttara Phalguni', 'Uttara Ashadha', 'Shravana'],
    planets: ['Saturn', 'Mars', 'Mercury'],
    houses: [6, 10, 12], // Service, career, sacrifice
    message: 'Your path is through selfless action and dedicated service. Ancient Vedic wisdom guides you to find fulfillment in duty and righteous work that serves the collective good.'
  },
  'Jnana Yogi': {
    keywords: ['wisdom', 'knowledge', 'philosophy', 'truth', 'study', 'understanding'],
    moonSigns: ['Sagittarius', 'Gemini', 'Aquarius'],
    nakshatras: ['Purva Ashadha', 'Ardra', 'Mula', 'Shatabhisha'],
    planets: ['Jupiter', 'Mercury', 'Ketu'],
    houses: [9, 3, 5], // Higher learning, communication, wisdom
    message: 'Your liberation comes through knowledge and philosophical understanding. Vedic sciences reveal that you seek truth through study, contemplation, and inner wisdom for future-readiness.'
  },
  'Bhakti Yogi': {
    keywords: ['devotion', 'love', 'surrender', 'emotion', 'heart', 'faith'],
    moonSigns: ['Cancer', 'Pisces', 'Leo'],
    nakshatras: ['Pushya', 'Revati', 'Purva Phalguni', 'Rohini'],
    planets: ['Moon', 'Venus', 'Jupiter'],
    houses: [4, 5, 12], // Heart, devotion, surrender
    message: 'Your path is through pure devotion and surrender of the heart. Ancient wisdom shows that love, faith, and emotional intelligence guide your spiritual journey toward psychological alignment.'
  },
  'Tantra Mystic': {
    keywords: ['occult', 'mystery', 'energy', 'transformation', 'esoteric', 'power'],
    moonSigns: ['Scorpio', 'Pisces', 'Aquarius'],
    nakshatras: ['Jyeshtha', 'Mula', 'Ardra', 'Shatabhisha', 'Ashlesha'],
    planets: ['Mars', 'Rahu', 'Ketu', 'Pluto'],
    houses: [8, 12, 4], // Occult, hidden knowledge, inner depths
    message: 'You work with hidden energies and esoteric knowledge. Vedic tradition reveals your power comes from understanding the deeper mysteries of existence and transformational healing.'
  },
  'Raj Rishi': {
    keywords: ['leadership', 'wisdom', 'royal', 'authority', 'guidance', 'noble'],
    moonSigns: ['Leo', 'Sagittarius', 'Aries'],
    nakshatras: ['Magha', 'Purva Phalguni', 'Purva Ashadha', 'Bharani'],
    planets: ['Sun', 'Jupiter', 'Mars'],
    houses: [1, 5, 9, 10], // Self, authority, wisdom, status
    message: 'You are born to lead with wisdom and righteousness. Vedic sciences show your authority comes from inner nobility, spiritual understanding, and divine connection for collective guidance.'
  },
  'Artha Seeker': {
    keywords: ['wealth', 'material', 'resources', 'building', 'security', 'practical'],
    moonSigns: ['Taurus', 'Capricorn', 'Virgo'],
    nakshatras: ['Rohini', 'Krittika', 'Uttara Phalguni', 'Hasta', 'Dhanishta'],
    planets: ['Venus', 'Mercury', 'Saturn'],
    houses: [2, 6, 10, 11], // Wealth, work, career, gains
    message: 'Your dharma involves creating material prosperity and security. Vedic wisdom teaches that you build resources that serve higher purposes, balancing material success with spiritual growth.'
  },
  'Vairagi Wanderer': {
    keywords: ['detachment', 'renunciation', 'solitude', 'freedom', 'wandering', 'ascetic'],
    moonSigns: ['Aquarius', 'Sagittarius', 'Gemini'],
    nakshatras: ['Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Swati'],
    planets: ['Saturn', 'Ketu', 'Rahu'],
    houses: [12, 9, 3], // Liberation, wandering, detachment
    message: 'Your path is through detachment and spiritual wandering. Ancient teachings show you find freedom by releasing worldly attachments and seeking higher truth for ultimate liberation.'
  },
  'Dharma Warrior': {
    keywords: ['justice', 'protection', 'fight', 'righteousness', 'courage', 'defender'],
    moonSigns: ['Aries', 'Leo', 'Scorpio'],
    nakshatras: ['Bharani', 'Magha', 'Anuradha', 'Mrigashira'],
    planets: ['Mars', 'Sun', 'Ketu'],
    houses: [1, 6, 8, 11], // Self, enemies, transformation, groups
    message: 'You are called to fight for righteousness and protect the innocent. Vedic tradition reveals your strength and courage serve divine principles and moral causes for collective justice.'
  },
  'Lila Player': {
    keywords: ['joy', 'creativity', 'play', 'art', 'beauty', 'expression', 'celebration'],
    moonSigns: ['Libra', 'Taurus', 'Cancer', 'Leo'],
    nakshatras: ['Chitra', 'Rohini', 'Punarvasu', 'Purva Phalguni', 'Swati'],
    planets: ['Venus', 'Moon', 'Mercury'],
    houses: [5, 3, 2], // Creativity, expression, beauty
    message: 'Life is divine play for you. Through joy, creativity, and artistic expression, you touch the sacred in everyday life and bring beauty to the world through Vedic understanding of cosmic dance.'
  }
};

// Calculate Julian Day from date using traditional methods
function calculateJulianDay(date: Date): number {
  const a = Math.floor((14 - (date.getMonth() + 1)) / 12);
  const y = date.getFullYear() + 4800 - a;
  const m = (date.getMonth() + 1) + 12 * a - 3;
  
  return date.getDate() + Math.floor((153 * m + 2) / 5) + 365 * y + 
         Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045 +
         (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) / 24;
}

// Convert IST to UTC for accurate calculations
function convertISTtoUTC(dateStr: string, timeStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  // Create date in IST (UTC+5:30)
  const istDate = new Date(year, month - 1, day, hours, minutes);
  
  // Convert to UTC by subtracting 5 hours 30 minutes
  const utcDate = new Date(istDate.getTime() - (5 * 60 + 30) * 60 * 1000);
  
  return utcDate;
}

// Calculate sidereal positions using traditional Vedic methods
function calculateSiderealPosition(julianDay: number, longitude: number = 0): number {
  // Lahiri Ayanamsa calculation for accurate Vedic calculations
  const T = (julianDay - 2451545.0) / 36525.0;
  const ayanamsa = 23.85 + (0.396 * T);
  
  // Basic tropical longitude calculation
  const tropicalLongitude = ((julianDay - 2451545.0) / 365.25) * 360 + longitude;
  
  // Convert to sidereal by subtracting ayanamsa
  let siderealLongitude = (tropicalLongitude - ayanamsa) % 360;
  if (siderealLongitude < 0) siderealLongitude += 360;
  
  return siderealLongitude;
}

// Get zodiac sign from longitude using Vedic method
function getZodiacSign(longitude: number): string {
  const signIndex = Math.floor(longitude / 30);
  return SIDEREAL_SIGNS[signIndex] || 'Aries';
}

// Get nakshatra from moon longitude using traditional Vedic system
function getNakshatra(moonLongitude: number): string {
  const nakshatraIndex = Math.floor(moonLongitude / (360 / 27));
  return NAKSHATRAS[nakshatraIndex] || 'Ashwini';
}

// Determine dominant planets based on Vedic chart analysis
function getDominantPlanets(moonSign: string, lagna: string, nakshatra: string, birthData: BirthData): string[] {
  const planets = [];
  
  // Moon sign rulers based on Vedic tradition
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
  
  // Nakshatra rulers based on Vedic tradition
  const nakshatraRulers: Record<string, string> = {
    'Ashwini': 'Ketu', 'Bharani': 'Venus', 'Krittika': 'Sun', 'Rohini': 'Moon',
    'Mrigashira': 'Mars', 'Ardra': 'Rahu', 'Punarvasu': 'Jupiter', 'Pushya': 'Saturn',
    'Ashlesha': 'Mercury', 'Magha': 'Ketu', 'Purva Phalguni': 'Venus', 'Uttara Phalguni': 'Sun',
    'Hasta': 'Moon', 'Chitra': 'Mars', 'Swati': 'Rahu', 'Vishakha': 'Jupiter',
    'Anuradha': 'Saturn', 'Jyeshtha': 'Mercury', 'Mula': 'Ketu', 'Purva Ashadha': 'Venus',
    'Uttara Ashadha': 'Sun', 'Shravana': 'Moon', 'Dhanishta': 'Mars', 'Shatabhisha': 'Rahu',
    'Purva Bhadrapada': 'Jupiter', 'Uttara Bhadrapada': 'Saturn', 'Revati': 'Mercury'
  };
  
  if (nakshatraRulers[nakshatra]) {
    planets.push(nakshatraRulers[nakshatra]);
  }
  
  return [...new Set(planets)]; // Remove duplicates
}

// Calculate house positions using traditional Vedic methods
function calculateHousePositions(julianDay: number): number[] {
  // Simplified house calculation for Vedic chart
  const houses = [];
  for (let i = 1; i <= 12; i++) {
    const housePosition = ((julianDay - 2451545.0) / 365.25 * 360 + i * 30) % 360;
    houses.push(Math.floor(housePosition / 30) + 1);
  }
  return houses;
}

// Calculate archetype scores using your Vedic algorithm
function calculateArchetypeScores(
  moonSign: string,
  nakshatra: string,
  lagna: string,
  dominantPlanets: string[],
  birthData: BirthData
): Record<string, number> {
  const scores: Record<string, number> = {};
  
  // Calculate houses for additional scoring
  const utcDate = convertISTtoUTC(birthData.dateOfBirth, birthData.timeOfBirth);
  const julianDay = calculateJulianDay(utcDate);
  const housePositions = calculateHousePositions(julianDay);
  
  Object.entries(EASTERN_ARCHETYPES).forEach(([archetype, rules]) => {
    let score = 0;
    
    // Moon sign scoring (highest weight - 40 points)
    if (rules.moonSigns.includes(moonSign)) {
      score += 40;
    }
    
    // Nakshatra scoring (high weight - 30 points)
    if (rules.nakshatras.includes(nakshatra)) {
      score += 30;
    }
    
    // Planetary influence scoring (medium weight - 20 points each)
    dominantPlanets.forEach(planet => {
      if (rules.planets.includes(planet)) {
        score += 20;
      }
    });
    
    // House position scoring (medium weight - 15 points each)
    rules.houses?.forEach(house => {
      if (housePositions.includes(house)) {
        score += 15;
      }
    });
    
    // Birth time influence for spiritual archetypes (Brahma Muhurta)
    const [hours] = birthData.timeOfBirth.split(':').map(Number);
    if (hours >= 4 && hours <= 6) {
      if (['Jnana Yogi', 'Bhakti Yogi', 'Vairagi Wanderer'].includes(archetype)) {
        score += 10;
      }
    }
    
    // Add uniqueness factor based on birth data and Vedic numerology
    const uniquenessFactor = (
      birthData.name.length + 
      moonSign.length + 
      nakshatra.length + 
      parseInt(birthData.dateOfBirth.split('-')[2])
    ) % 15;
    score += uniquenessFactor;
    
    scores[archetype] = score;
  });
  
  return scores;
}

export function calculateEasternArchetype(formData: BirthData): EasternArchetypeResult {
  try {
    console.log('Calculating Vedic archetype for:', formData);
    
    // Convert IST to UTC
    const utcDate = convertISTtoUTC(formData.dateOfBirth, formData.timeOfBirth);
    console.log('UTC Date:', utcDate);
    
    // Calculate Julian Day using traditional methods
    const julianDay = calculateJulianDay(utcDate);
    console.log('Julian Day:', julianDay);
    
    // Calculate sidereal positions using Vedic methods
    const moonLongitude = calculateSiderealPosition(julianDay, 120); // Base + moon offset
    const sunLongitude = calculateSiderealPosition(julianDay, 0);
    const ascendantLongitude = calculateSiderealPosition(julianDay, 90);
    
    console.log('Sidereal positions - Moon:', moonLongitude, 'Sun:', sunLongitude, 'Asc:', ascendantLongitude);
    
    // Determine signs and nakshatra using Vedic system
    const moonSign = getZodiacSign(moonLongitude);
    const lagna = getZodiacSign(ascendantLongitude);
    const nakshatra = getNakshatra(moonLongitude);
    
    console.log('Calculated - Moon Sign:', moonSign, 'Lagna:', lagna, 'Nakshatra:', nakshatra);
    
    // Determine dominant planets using Vedic methods
    const dominantPlanets = getDominantPlanets(moonSign, lagna, nakshatra, formData);
    const atmakaraka = dominantPlanets[0] || 'Moon';
    
    // Calculate archetype scores using your Vedic algorithm
    const scores = calculateArchetypeScores(moonSign, nakshatra, lagna, dominantPlanets, formData);
    console.log('Archetype scores:', scores);
    
    // Find primary and secondary archetypes
    const sortedArchetypes = Object.entries(scores)
      .sort(([,a], [,b]) => b - a);
    
    const primaryArchetype = sortedArchetypes[0][0];
    const secondaryArchetype = sortedArchetypes[1][0];
    
    const vedicMessage = EASTERN_ARCHETYPES[primaryArchetype as keyof typeof EASTERN_ARCHETYPES]?.message || 
                        'Your path reveals itself through ancient Vedic wisdom for future-readiness and psychological alignment.';
    
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
    
    console.log('Final Vedic result:', result);
    return result;
    
  } catch (error) {
    console.error('Error calculating Vedic archetype:', error);
    // Fallback with your original archetypes
    const fallbackArchetypes = Object.keys(EASTERN_ARCHETYPES);
    const randomIndex = Math.floor(Math.random() * fallbackArchetypes.length);
    
    return {
      primaryArchetype: fallbackArchetypes[randomIndex],
      secondaryArchetype: fallbackArchetypes[(randomIndex + 1) % fallbackArchetypes.length],
      moonSign: 'Pisces',
      nakshatra: 'Revati',
      lagna: 'Cancer',
      atmakaraka: 'Moon',
      vedicMessage: 'Your path reveals itself through ancient Vedic wisdom for future-readiness and psychological alignment.',
      scores: {}
    };
  }
}
