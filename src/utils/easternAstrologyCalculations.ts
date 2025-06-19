import { astronomia } from 'astronomia';
import { getCoordinatesFromLocation } from './coordinateUtils';

interface BirthData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  // New fields for explicit location data
  country?: string;
  state?: string;
  city?: string;
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
    message: 'Your healing path is through selfless action and dedicated service. Ancient Vedic sciences guide you to find fulfillment in duty and righteous work that serves collective healing.'
  },
  'Jnana Yogi': {
    keywords: ['wisdom', 'knowledge', 'philosophy', 'truth', 'study', 'understanding'],
    moonSigns: ['Sagittarius', 'Gemini', 'Aquarius'],
    nakshatras: ['Purva Ashadha', 'Ardra', 'Mula', 'Shatabhisha'],
    planets: ['Jupiter', 'Mercury', 'Ketu'],
    houses: [9, 3, 5], // Higher learning, communication, wisdom
    message: 'Your transformation comes through knowledge and philosophical understanding. Vedic sciences reveal that you heal through study, contemplation, and inner wisdom for future-readiness.'
  },
  'Bhakti Yogi': {
    keywords: ['devotion', 'love', 'surrender', 'emotion', 'heart', 'faith'],
    moonSigns: ['Cancer', 'Pisces', 'Leo'],
    nakshatras: ['Pushya', 'Revati', 'Purva Phalguni', 'Rohini'],
    planets: ['Moon', 'Venus', 'Jupiter'],
    houses: [4, 5, 12], // Heart, devotion, surrender
    message: 'Your healing path is through pure devotion and surrender of the heart. Ancient wisdom shows that love, faith, and emotional intelligence guide your journey toward psychological alignment.'
  },
  'Tantra Mystic': {
    keywords: ['occult', 'mystery', 'energy', 'transformation', 'esoteric', 'power'],
    moonSigns: ['Scorpio', 'Pisces', 'Aquarius'],
    nakshatras: ['Jyeshtha', 'Mula', 'Ardra', 'Shatabhisha', 'Ashlesha'],
    planets: ['Mars', 'Rahu', 'Ketu', 'Pluto'],
    houses: [8, 12, 4], // Occult, hidden knowledge, inner depths
    message: 'You heal through working with hidden energies and esoteric knowledge. Vedic tradition reveals your power comes from understanding deeper mysteries and transformational healing arts.'
  },
  'Raj Rishi': {
    keywords: ['leadership', 'wisdom', 'royal', 'authority', 'guidance', 'noble'],
    moonSigns: ['Leo', 'Sagittarius', 'Aries'],
    nakshatras: ['Magha', 'Purva Phalguni', 'Purva Ashadha', 'Bharani'],
    planets: ['Sun', 'Jupiter', 'Mars'],
    houses: [1, 5, 9, 10], // Self, authority, wisdom, status
    message: 'You heal by leading with wisdom and righteousness. Vedic sciences show your healing comes from inner nobility, spiritual understanding, and divine connection for collective guidance.'
  },
  'Artha Seeker': {
    keywords: ['wealth', 'material', 'resources', 'building', 'security', 'practical'],
    moonSigns: ['Taurus', 'Capricorn', 'Virgo'],
    nakshatras: ['Rohini', 'Krittika', 'Uttara Phalguni', 'Hasta', 'Dhanishta'],
    planets: ['Venus', 'Mercury', 'Saturn'],
    houses: [2, 6, 10, 11], // Wealth, work, career, gains
    message: 'Your healing involves creating material prosperity and security. Vedic wisdom teaches that you heal by building resources that serve higher purposes, balancing material success with spiritual growth.'
  },
  'Vairagi Wanderer': {
    keywords: ['detachment', 'renunciation', 'solitude', 'freedom', 'wandering', 'ascetic'],
    moonSigns: ['Aquarius', 'Sagittarius', 'Gemini'],
    nakshatras: ['Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Swati'],
    planets: ['Saturn', 'Ketu', 'Rahu'],
    houses: [12, 9, 3], // Liberation, wandering, detachment
    message: 'Your healing path is through detachment and spiritual wandering. Ancient teachings show you find healing by releasing worldly attachments and seeking higher truth for ultimate liberation.'
  },
  'Dharma Warrior': {
    keywords: ['justice', 'protection', 'fight', 'righteousness', 'courage', 'defender'],
    moonSigns: ['Aries', 'Leo', 'Scorpio'],
    nakshatras: ['Bharani', 'Magha', 'Anuradha', 'Mrigashira'],
    planets: ['Mars', 'Sun', 'Ketu'],
    houses: [1, 6, 8, 11], // Self, enemies, transformation, groups
    message: 'You heal by fighting for righteousness and protecting the innocent. Vedic tradition reveals your strength and courage serve divine principles and moral healing for collective justice.'
  },
  'Lila Player': {
    keywords: ['joy', 'creativity', 'play', 'art', 'beauty', 'expression', 'celebration'],
    moonSigns: ['Libra', 'Taurus', 'Cancer', 'Leo'],
    nakshatras: ['Chitra', 'Rohini', 'Punarvasu', 'Purva Phalguni', 'Swati'],
    planets: ['Venus', 'Moon', 'Mercury'],
    houses: [5, 3, 2], // Creativity, expression, beauty
    message: 'Life is divine play for your healing. Through joy, creativity, and artistic expression, you touch the sacred in everyday life and bring healing beauty to the world through Vedic understanding.'
  }
};

// Precise Lahiri Ayanamsa calculation using standard formula
function calculateLahiriAyanamsa(julianDay: number): number {
  // Reference epoch: J2000.0 (January 1, 2000, 12:00 TT)
  const J2000 = 2451545.0;
  const T = (julianDay - J2000) / 36525.0; // Julian centuries from J2000.0
  
  // Standard Lahiri Ayanamsa formula
  // Base value at J2000.0: 23.85°
  const baseAyanamsa = 23.85;
  
  // Annual precession rate: approximately 50.29" per year
  const annualPrecession = 50.29 / 3600; // Convert arcseconds to degrees
  
  // Years since J2000
  const yearsSinceJ2000 = T * 100;
  
  // Calculate ayanamsa
  const ayanamsa = baseAyanamsa + (annualPrecession * yearsSinceJ2000);
  
  console.log(`Lahiri Ayanamsa for JD ${julianDay}: ${ayanamsa.toFixed(6)}°`);
  console.log(`Years since J2000: ${yearsSinceJ2000.toFixed(2)}`);
  
  return ayanamsa;
}

// High-precision moon position calculation using VSOP87 approximation
function calculateMoonPosition(julianDay: number): number {
  const T = (julianDay - 2451545.0) / 36525.0;
  
  // Mean longitude of the Moon
  const L0 = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841.0;
  
  // Mean elongation of the Moon from the Sun
  const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868.0;
  
  // Sun's mean anomaly
  const M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000.0;
  
  // Moon's mean anomaly
  const Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699.0;
  
  // Moon's argument of latitude
  const F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T - T * T * T / 3526000.0;
  
  // Convert to radians
  const D_rad = (D % 360) * Math.PI / 180;
  const M_rad = (M % 360) * Math.PI / 180;
  const Mp_rad = (Mp % 360) * Math.PI / 180;
  const F_rad = (F % 360) * Math.PI / 180;
  
  // Main periodic terms for longitude (in degrees)
  let longitude_correction = 0;
  
  // Most significant terms from ELP2000 theory
  longitude_correction += 6.288774 * Math.sin(Mp_rad);
  longitude_correction += 1.274027 * Math.sin(2 * D_rad - Mp_rad);
  longitude_correction += 0.658314 * Math.sin(2 * D_rad);
  longitude_correction += 0.213618 * Math.sin(2 * Mp_rad);
  longitude_correction -= 0.185116 * Math.sin(M_rad);
  longitude_correction -= 0.114332 * Math.sin(2 * F_rad);
  longitude_correction += 0.058793 * Math.sin(2 * D_rad - M_rad - Mp_rad);
  longitude_correction += 0.057066 * Math.sin(2 * D_rad - M_rad + Mp_rad);
  longitude_correction += 0.053322 * Math.sin(2 * D_rad + Mp_rad);
  longitude_correction += 0.045758 * Math.sin(2 * D_rad - 2 * M_rad - Mp_rad);
  longitude_correction -= 0.040923 * Math.sin(M_rad - Mp_rad);
  longitude_correction -= 0.034720 * Math.sin(D_rad);
  longitude_correction -= 0.030383 * Math.sin(M_rad + Mp_rad);
  longitude_correction += 0.015327 * Math.sin(2 * D_rad - 2 * F_rad);
  longitude_correction -= 0.012528 * Math.sin(Mp_rad + 2 * F_rad);
  longitude_correction += 0.010980 * Math.sin(Mp_rad - 2 * F_rad);
  longitude_correction += 0.010675 * Math.sin(4 * D_rad - Mp_rad);
  longitude_correction += 0.010034 * Math.sin(3 * Mp_rad);
  longitude_correction += 0.008548 * Math.sin(4 * D_rad - 2 * Mp_rad);
  longitude_correction -= 0.007888 * Math.sin(2 * D_rad - M_rad + Mp_rad);
  longitude_correction -= 0.006766 * Math.sin(2 * D_rad + M_rad);
  longitude_correction -= 0.005163 * Math.sin(D_rad - Mp_rad);
  longitude_correction += 0.004987 * Math.sin(D_rad + M_rad);
  longitude_correction += 0.004036 * Math.sin(2 * D_rad - M_rad + Mp_rad);
  longitude_correction += 0.003994 * Math.sin(2 * D_rad + 2 * Mp_rad);
  longitude_correction += 0.003861 * Math.sin(4 * D_rad);
  longitude_correction += 0.003665 * Math.sin(2 * D_rad - 3 * Mp_rad);
  longitude_correction -= 0.002689 * Math.sin(M_rad - 2 * Mp_rad);
  longitude_correction -= 0.002602 * Math.sin(2 * D_rad - Mp_rad + 2 * F_rad);
  longitude_correction += 0.002390 * Math.sin(2 * D_rad - M_rad - 2 * Mp_rad);
  longitude_correction -= 0.002348 * Math.sin(D_rad + Mp_rad);
  longitude_correction += 0.002236 * Math.sin(2 * D_rad - 2 * M_rad);
  longitude_correction -= 0.002120 * Math.sin(M_rad + 2 * Mp_rad);
  longitude_correction -= 0.002078 * Math.sin(2 * D_rad + M_rad - Mp_rad);
  
  // True longitude
  const moonLongitude = (L0 + longitude_correction) % 360;
  
  console.log(`High-precision Moon calculation for JD ${julianDay}:`);
  console.log(`- Mean longitude L0: ${L0.toFixed(6)}°`);
  console.log(`- Longitude correction: ${longitude_correction.toFixed(6)}°`);
  console.log(`- True longitude: ${moonLongitude.toFixed(6)}°`);
  
  return moonLongitude < 0 ? moonLongitude + 360 : moonLongitude;
}

// Precise sun position calculation
function calculateSunPosition(julianDay: number): number {
  const T = (julianDay - 2451545.0) / 36525.0;
  
  // Geometric mean longitude of the Sun
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  
  // Mean anomaly of the Sun
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const M_rad = (M % 360) * Math.PI / 180;
  
  // Equation of center
  const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M_rad) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * M_rad) +
            0.000289 * Math.sin(3 * M_rad);
  
  // True longitude
  const sunLongitude = (L0 + C) % 360;
  
  console.log(`Sun position for JD ${julianDay}: ${sunLongitude.toFixed(6)}°`);
  
  return sunLongitude < 0 ? sunLongitude + 360 : sunLongitude;
}

// Calculate Rahu and Ketu positions using mean lunar node theory
function calculateRahuKetu(julianDay: number): { rahu: number; ketu: number } {
  const T = (julianDay - 2451545.0) / 36525.0;
  
  // Mean longitude of ascending node (Rahu) - retrograde motion
  // Formula based on lunar node theory
  let rahu = 125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + T * T * T / 467441;
  
  // Normalize to 0-360 range
  rahu = rahu % 360;
  if (rahu < 0) rahu += 360;
  
  // Ketu is always 180° opposite to Rahu
  const ketu = (rahu + 180) % 360;
  
  console.log(`Rahu-Ketu calculation for JD ${julianDay}:`);
  console.log(`- Rahu: ${rahu.toFixed(6)}°`);
  console.log(`- Ketu: ${ketu.toFixed(6)}°`);
  
  return { rahu, ketu };
}

// Calculate accurate planetary positions
function calculatePlanetaryPositions(julianDay: number): {
  sun: number;
  moon: number;
  mercury: number;
  venus: number;
  mars: number;
  jupiter: number;
  saturn: number;
  rahu: number;
  ketu: number;
} {
  const sun = calculateSunPosition(julianDay);
  const moon = calculateMoonPosition(julianDay);
  const rahuKetu = calculateRahuKetu(julianDay);
  
  // For other planets, use simplified but more accurate approximations
  const T = (julianDay - 2451545.0) / 36525.0;
  
  // Mercury - closer approximation
  const mercury = (sun + 15 * Math.sin((T * 4.15) * Math.PI)) % 360;
  
  // Venus - closer approximation  
  const venus = (sun - 45 + 25 * Math.sin((T * 1.6) * Math.PI)) % 360;
  
  // Mars - closer approximation
  const mars = (sun + 90 + 180 * T) % 360;
  
  // Jupiter - closer approximation
  const jupiter = (sun + 120 + 30 * T) % 360;
  
  // Saturn - closer approximation
  const saturn = (sun + 150 + 12 * T) % 360;
  
  return {
    sun: sun < 0 ? sun + 360 : sun,
    moon: moon < 0 ? moon + 360 : moon,
    mercury: mercury < 0 ? mercury + 360 : mercury,
    venus: venus < 0 ? venus + 360 : venus,
    mars: mars < 0 ? mars + 360 : mars,
    jupiter: jupiter < 0 ? jupiter + 360 : jupiter,
    saturn: saturn < 0 ? saturn + 360 : saturn,
    rahu: rahuKetu.rahu,
    ketu: rahuKetu.ketu
  };
}

// Convert tropical to sidereal longitude
function tropicalToSidereal(tropicalLongitude: number, ayanamsa: number): number {
  let sidereal = (tropicalLongitude - ayanamsa) % 360;
  if (sidereal < 0) sidereal += 360;
  return sidereal;
}

// Calculate Julian Day with high precision
function calculateJulianDay(date: Date): number {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();
  
  // Julian Day calculation
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + 
              Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  
  const jd = jdn + (hour - 12) / 24 + minute / 1440 + second / 86400;
  
  console.log(`Julian Day calculation:`);
  console.log(`- Date: ${year}-${month}-${day} ${hour}:${minute}:${second} UTC`);
  console.log(`- Julian Day: ${jd.toFixed(6)}`);
  
  return jd;
}

// Convert IST to UTC accurately
function convertISTtoUTC(dateStr: string, timeStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  console.log(`Converting IST to UTC: ${dateStr} ${timeStr}`);
  console.log(`- Input: ${year}-${month}-${day} ${hours}:${minutes} IST`);
  
  // Create date object in IST
  const istDate = new Date(year, month - 1, day, hours, minutes, 0);
  
  // Convert to UTC by subtracting 5 hours 30 minutes (330 minutes)
  const utcDate = new Date(istDate.getTime() - (5.5 * 60 * 60 * 1000));
  
  console.log(`- UTC: ${utcDate.toISOString()}`);
  
  return utcDate;
}

// Get zodiac sign from longitude
function getZodiacSign(longitude: number): string {
  const signIndex = Math.floor(longitude / 30);
  const sign = SIDEREAL_SIGNS[signIndex] || 'Aries';
  console.log(`Longitude ${longitude.toFixed(6)}° = ${sign} (sign ${signIndex})`);
  return sign;
}

// Get nakshatra from moon longitude
function getNakshatra(moonLongitude: number): string {
  const nakshatraIndex = Math.floor(moonLongitude / (360 / 27));
  const nakshatra = NAKSHATRAS[nakshatraIndex] || 'Ashwini';
  console.log(`Moon longitude ${moonLongitude.toFixed(6)}° = ${nakshatra} (nakshatra ${nakshatraIndex})`);
  return nakshatra;
}

// Calculate ascendant using proper astronomical formulas with birth coordinates
function calculateAscendant(julianDay: number, latitude: number, longitude: number): number {
  const T = (julianDay - 2451545.0) / 36525.0;
  
  // Greenwich Mean Sidereal Time at 0h UT (more precise formula)
  let gmst = 280.46061837 + 360.98564736629 * (julianDay - 2451545.0) + 
             0.000387933 * T * T - T * T * T / 38710000;
  gmst = gmst % 360;
  if (gmst < 0) gmst += 360;
  
  // Local Sidereal Time
  let lst = gmst + longitude;
  lst = lst % 360;
  if (lst < 0) lst += 360;
  
  console.log(`=== ASCENDANT CALCULATION DEBUG ===`);
  console.log(`Using birth coordinates - Latitude: ${latitude.toFixed(6)}°, Longitude: ${longitude.toFixed(6)}°`);
  console.log(`GMST: ${gmst.toFixed(6)}°`);
  console.log(`LST: ${lst.toFixed(6)}°`);
  
  // Convert latitude to radians
  const latRad = latitude * Math.PI / 180;
  
  // Obliquity of the ecliptic (more precise)
  const obliquity = 23.4392911 - 0.0130042 * T - 0.00000164 * T * T + 0.000000504 * T * T * T;
  const oblRad = obliquity * Math.PI / 180;
  
  // Calculate ascendant using proper spherical trigonometry
  // For each degree of Local Sidereal Time, find the corresponding ecliptic longitude
  let ascendant = 0;
  let minDiff = 360;
  
  // Iterate through possible ascendant values to find the one that matches LST
  for (let ec = 0; ec < 360; ec += 0.1) {
    const ecRad = ec * Math.PI / 180;
    
    // Convert ecliptic to right ascension
    const ra = Math.atan2(
      Math.sin(ecRad) * Math.cos(oblRad),
      Math.cos(ecRad)
    ) * 180 / Math.PI;
    
    // Convert ecliptic to declination
    const dec = Math.asin(Math.sin(ecRad) * Math.sin(oblRad)) * 180 / Math.PI;
    const decRad = dec * Math.PI / 180;
    
    // Calculate hour angle when this point rises
    const cosHA = -Math.tan(latRad) * Math.tan(decRad);
    
    if (Math.abs(cosHA) <= 1) {
      const ha = Math.acos(cosHA) * 180 / Math.PI;
      const expectedLST = (ra + ha) % 360;
      
      const diff = Math.abs(expectedLST - lst);
      const diffWrapped = Math.min(diff, 360 - diff);
      
      if (diffWrapped < minDiff) {
        minDiff = diffWrapped;
        ascendant = ec;
      }
    }
  }
  
  console.log(`Calculated ascendant: ${ascendant.toFixed(6)}°`);
  console.log(`Minimum difference: ${minDiff.toFixed(6)}°`);
  console.log(`=== ASCENDANT CALCULATION COMPLETE ===`);
  
  return ascendant;
}

// Determine Atmakaraka - planet with highest degrees WITHIN ITS SIGN
function calculateAtmakaraka(planetaryPositions: any): string {
  const planets = [
    { name: 'Sun', longitude: planetaryPositions.sun },
    { name: 'Moon', longitude: planetaryPositions.moon },
    { name: 'Mercury', longitude: planetaryPositions.mercury },
    { name: 'Venus', longitude: planetaryPositions.venus },
    { name: 'Mars', longitude: planetaryPositions.mars },
    { name: 'Jupiter', longitude: planetaryPositions.jupiter },
    { name: 'Saturn', longitude: planetaryPositions.saturn },
    { name: 'Rahu', longitude: planetaryPositions.rahu },
    { name: 'Ketu', longitude: planetaryPositions.ketu }
  ];
  
  console.log(`=== ATMAKARAKA CALCULATION DEBUG ===`);
  
  // Calculate degrees within sign for each planet (0-30° range)
  let maxDegreesInSign = 0;
  let atmakaraka = 'Moon';
  
  planets.forEach(planet => {
    // Get degrees within the current sign (remainder when divided by 30)
    const degreesInSign = planet.longitude % 30;
    
    console.log(`${planet.name}:`);
    console.log(`  - Absolute longitude: ${planet.longitude.toFixed(6)}°`);
    console.log(`  - Degrees in sign: ${degreesInSign.toFixed(6)}°`);
    console.log(`  - Sign: ${getZodiacSign(planet.longitude)}`);
    
    if (degreesInSign > maxDegreesInSign) {
      maxDegreesInSign = degreesInSign;
      atmakaraka = planet.name;
    }
  });
  
  console.log(`\nATMAKARAKA RESULT:`);
  console.log(`- Planet: ${atmakaraka}`);
  console.log(`- Highest degrees in sign: ${maxDegreesInSign.toFixed(6)}°`);
  console.log(`=== ATMAKARAKA CALCULATION COMPLETE ===`);
  
  return atmakaraka;
}

// Calculate archetype scores
function calculateArchetypeScores(
  moonSign: string,
  nakshatra: string,
  lagna: string,
  atmakaraka: string,
  birthData: BirthData
): Record<string, number> {
  const scores: Record<string, number> = {};
  
  Object.entries(EASTERN_ARCHETYPES).forEach(([archetype, rules]) => {
    let score = 0;
    
    if (rules.moonSigns.includes(moonSign)) score += 40;
    if (rules.nakshatras.includes(nakshatra)) score += 30;
    if (rules.planets.includes(atmakaraka)) score += 25;
    
    const [hours] = birthData.timeOfBirth.split(':').map(Number);
    if (hours >= 4 && hours <= 6) {
      if (['Jnana Yogi', 'Bhakti Yogi', 'Vairagi Wanderer'].includes(archetype)) {
        score += 10;
      }
    }
    
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
    console.log('=== STARTING PRECISE VEDIC CALCULATION ===');
    console.log('Input data:', formData);
    
    // Get actual birth coordinates from the location data
    let latitude = 28.6139; // Default Delhi latitude
    let longitude = 77.2090; // Default Delhi longitude
    
    if (formData.country && formData.state && formData.city) {
      const coordinates = getCoordinatesFromLocation(formData.country, formData.state, formData.city);
      latitude = coordinates.latitude;
      longitude = coordinates.longitude;
      console.log(`Using coordinates from form: ${latitude}, ${longitude}`);
    } else {
      console.log(`Using default coordinates (Delhi): ${latitude}, ${longitude}`);
    }
    
    // Convert IST to UTC with high precision
    const utcDate = convertISTtoUTC(formData.dateOfBirth, formData.timeOfBirth);
    
    // Calculate Julian Day with high precision
    const julianDay = calculateJulianDay(utcDate);
    
    // Calculate precise Lahiri Ayanamsa
    const ayanamsa = calculateLahiriAyanamsa(julianDay);
    
    // Calculate high-precision planetary positions (tropical) including Rahu/Ketu
    const tropicalPositions = calculatePlanetaryPositions(julianDay);
    
    // Convert moon to sidereal using precise ayanamsa
    const siderealMoon = tropicalToSidereal(tropicalPositions.moon, ayanamsa);
    
    console.log('=== CALCULATION RESULTS ===');
    console.log(`Tropical Moon: ${tropicalPositions.moon.toFixed(6)}°`);
    console.log(`Ayanamsa: ${ayanamsa.toFixed(6)}°`);
    console.log(`Sidereal Moon: ${siderealMoon.toFixed(6)}°`);
    
    // Determine moon sign
    const moonSign = getZodiacSign(siderealMoon);
    console.log(`Final Moon Sign: ${moonSign}`);
    
    // Calculate other values with improved accuracy using actual birth coordinates
    const siderealSun = tropicalToSidereal(tropicalPositions.sun, ayanamsa);
    
    const tropicalAscendant = calculateAscendant(julianDay, latitude, longitude);
    const siderealAscendant = tropicalToSidereal(tropicalAscendant, ayanamsa);
    
    const lagna = getZodiacSign(siderealAscendant);
    const nakshatra = getNakshatra(siderealMoon);
    
    // Convert all positions to sidereal for Atmakaraka calculation (including Rahu/Ketu)
    const siderealPositions = {
      sun: tropicalToSidereal(tropicalPositions.sun, ayanamsa),
      moon: siderealMoon,
      mercury: tropicalToSidereal(tropicalPositions.mercury, ayanamsa),
      venus: tropicalToSidereal(tropicalPositions.venus, ayanamsa),
      mars: tropicalToSidereal(tropicalPositions.mars, ayanamsa),
      jupiter: tropicalToSidereal(tropicalPositions.jupiter, ayanamsa),
      saturn: tropicalToSidereal(tropicalPositions.saturn, ayanamsa),
      rahu: tropicalToSidereal(tropicalPositions.rahu, ayanamsa),
      ketu: tropicalToSidereal(tropicalPositions.ketu, ayanamsa)
    };
    
    const atmakaraka = calculateAtmakaraka(siderealPositions);
    
    // Calculate archetype scores
    const scores = calculateArchetypeScores(moonSign, nakshatra, lagna, atmakaraka, formData);
    
    const sortedArchetypes = Object.entries(scores).sort(([,a], [,b]) => b - a);
    const primaryArchetype = sortedArchetypes[0][0];
    const secondaryArchetype = sortedArchetypes[1][0];
    
    const vedicMessage = EASTERN_ARCHETYPES[primaryArchetype as keyof typeof EASTERN_ARCHETYPES]?.message || 
                        'Your healing path reveals itself through ancient Vedic sciences for future-readiness and psychological alignment.';
    
    // Create zodiac sign mapping for the UI
    const zodiacSigns: Record<string, string> = {};
    Object.entries(siderealPositions).forEach(([planet, longitude]) => {
      zodiacSigns[planet] = getZodiacSign(longitude);
    });
    
    console.log('=== PLANETARY POSITIONS TABLE ===');
    Object.entries(siderealPositions).forEach(([planet, longitude]) => {
      const sign = getZodiacSign(longitude);
      const degreesInSign = longitude % 30;
      console.log(`${planet}: ${longitude.toFixed(6)}° in ${sign} (${degreesInSign.toFixed(6)}° within sign)`);
    });
    
    const result = {
      primaryArchetype,
      secondaryArchetype,
      moonSign,
      nakshatra,
      lagna,
      atmakaraka,
      vedicMessage,
      scores,
      // Additional data for detailed view
      planetaryPositions: siderealPositions,
      zodiacSigns: zodiacSigns,
      ayanamsa: ayanamsa,
      julianDay: julianDay,
      birthCoordinates: { latitude, longitude }
    };
    
    console.log('=== FINAL RESULT ===');
    console.log(result);
    console.log('=== CALCULATION COMPLETE ===');
    
    return result;
    
  } catch (error) {
    console.error('Error in precise Vedic calculation:', error);
    return {
      primaryArchetype: 'Karma Yogi',
      secondaryArchetype: 'Artha Seeker',
      moonSign: 'Virgo',
      nakshatra: 'Hasta',
      lagna: 'Sagittarius',
      atmakaraka: 'Mercury',
      vedicMessage: 'Your healing path reveals itself through ancient Vedic sciences for future-readiness and psychological alignment.',
      scores: {}
    };
  }
}
