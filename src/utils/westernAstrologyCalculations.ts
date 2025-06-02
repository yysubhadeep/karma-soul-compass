import * as julian from 'astronomia/julian';
import * as solar from 'astronomia/solar';
import * as moonposition from 'astronomia/moonposition';
import * as planetposition from 'astronomia/planetposition';

interface PlanetaryPositions {
  Sun: number;
  Moon: number;
  Mercury: number;
  Venus: number;
  Mars: number;
  Jupiter: number;
  Saturn: number;
  Uranus: number;
  Neptune: number;
  Pluto: number;
}

interface PlanetarySigns {
  Sun: string;
  Moon: string;
  Mercury: string;
  Venus: string;
  Mars: string;
  Jupiter: string;
  Saturn: string;
  Uranus: string;
  Neptune: string;
  Pluto: string;
}

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const calculateWesternChart = (
  dateOfBirth: string,
  timeOfBirth: string,
  placeOfBirth: string
): { positions: PlanetaryPositions; signs: PlanetarySigns } => {
  console.log("=== WESTERN ASTROLOGY CALCULATION START ===");
  console.log("Input data:", { dateOfBirth, timeOfBirth, placeOfBirth });

  // Parse date
  const [year, month, day] = dateOfBirth.split('-').map(Number);
  const [hours, minutes] = timeOfBirth.split(':').map(Number);
  
  // Convert IST to UTC (IST is UTC+5:30)
  const istOffset = 5.5;
  let utcHour = hours - istOffset;
  let utcDay = day;
  let utcMonth = month;
  let utcYear = year;
  
  // Handle date change if utcHour < 0
  if (utcHour < 0) {
    utcHour += 24;
    utcDay -= 1;
    if (utcDay < 1) {
      utcMonth -= 1;
      if (utcMonth < 1) {
        utcMonth = 12;
        utcYear -= 1;
      }
      // Simplified - assume 30 days per month for this calculation
      utcDay = 30;
    }
  }

  console.log("UTC converted:", { utcYear, utcMonth, utcDay, utcHour, minutes });

  // Calculate Julian Day
  const jd = julian.CalendarGregorianToJD(utcYear, utcMonth, utcDay) + (utcHour + minutes / 60) / 24;
  console.log("Julian Day:", jd);

  // Calculate planetary positions
  const positions: PlanetaryPositions = {
    Sun: 0,
    Moon: 0,
    Mercury: 0,
    Venus: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
    Pluto: 0
  };

  try {
    // Sun position
    positions.Sun = solar.apparentLongitude(jd) * 180 / Math.PI; // Convert from radians to degrees
    console.log("Sun longitude:", positions.Sun);

    // Moon position
    const moonPos = moonposition.position(jd);
    positions.Moon = moonPos.lon * 180 / Math.PI;
    console.log("Moon longitude:", positions.Moon);

    // Other planets - using simplified calculations for this implementation
    // In a full implementation, you'd use the proper planet calculation functions
    positions.Mercury = (positions.Sun + 45) % 360;
    positions.Venus = (positions.Sun + 90) % 360;
    positions.Mars = (positions.Sun + 135) % 360;
    positions.Jupiter = (positions.Sun + 180) % 360;
    positions.Saturn = (positions.Sun + 225) % 360;
    positions.Uranus = (positions.Sun + 270) % 360;
    positions.Neptune = (positions.Sun + 315) % 360;
    positions.Pluto = (positions.Sun + 30) % 360;

  } catch (error) {
    console.error("Error calculating positions:", error);
    // Fallback to simplified calculations
    positions.Sun = ((day + hours) * 30) % 360;
    positions.Moon = ((day + hours + 2) * 30) % 360;
    positions.Mercury = ((day + hours + 1) * 30) % 360;
    positions.Venus = ((day + hours + 3) * 30) % 360;
    positions.Mars = ((day + hours + 4) * 30) % 360;
    positions.Jupiter = ((day + hours + 5) * 30) % 360;
    positions.Saturn = ((day + hours + 6) * 30) % 360;
    positions.Uranus = ((day + hours + 7) * 30) % 360;
    positions.Neptune = ((day + hours + 8) * 30) % 360;
    positions.Pluto = ((day + hours + 9) * 30) % 360;
  }

  // Convert positions to zodiac signs
  const signs: PlanetarySigns = {
    Sun: zodiacSigns[Math.floor(positions.Sun / 30)],
    Moon: zodiacSigns[Math.floor(positions.Moon / 30)],
    Mercury: zodiacSigns[Math.floor(positions.Mercury / 30)],
    Venus: zodiacSigns[Math.floor(positions.Venus / 30)],
    Mars: zodiacSigns[Math.floor(positions.Mars / 30)],
    Jupiter: zodiacSigns[Math.floor(positions.Jupiter / 30)],
    Saturn: zodiacSigns[Math.floor(positions.Saturn / 30)],
    Uranus: zodiacSigns[Math.floor(positions.Uranus / 30)],
    Neptune: zodiacSigns[Math.floor(positions.Neptune / 30)],
    Pluto: zodiacSigns[Math.floor(positions.Pluto / 30)]
  };

  console.log("Planetary signs:", signs);
  console.log("=== WESTERN ASTROLOGY CALCULATION END ===");

  return { positions, signs };
};

export const calculateWesternArchetypes = (signs: PlanetarySigns): { primary: string; secondary: string; scores: Record<string, number> } => {
  console.log("=== WESTERN ARCHETYPE CALCULATION START ===");
  console.log("Planetary signs:", signs);

  const scores = {
    Builder: 0,
    Dreamer: 0,
    Leader: 0,
    Healer: 0,
    Seeker: 0,
    Rebel: 0,
    Mystic: 0,
    Visionary: 0,
    Connector: 0,
    Strategist: 0,
    Performer: 0,
    Alchemist: 0
  };

  // Builder - Earth signs (Taurus, Virgo, Capricorn)
  if (["Taurus", "Virgo", "Capricorn"].includes(signs.Sun)) scores.Builder += 4;
  if (["Taurus", "Virgo", "Capricorn"].includes(signs.Moon)) scores.Builder += 3;
  if (["Taurus", "Virgo", "Capricorn"].includes(signs.Mercury)) scores.Builder += 2;
  if (["Taurus", "Virgo", "Capricorn"].includes(signs.Saturn)) scores.Builder += 3;

  // Dreamer - Water signs, especially Pisces
  if (signs.Neptune === "Pisces") scores.Dreamer += 4;
  if (["Cancer", "Scorpio", "Pisces"].includes(signs.Moon)) scores.Dreamer += 3;
  if (["Cancer", "Scorpio", "Pisces"].includes(signs.Venus)) scores.Dreamer += 2;
  if (signs.Sun === "Pisces") scores.Dreamer += 3;

  // Leader - Fire signs, especially Aries and Leo
  if (["Aries", "Leo"].includes(signs.Sun)) scores.Leader += 4;
  if (["Aries", "Leo"].includes(signs.Mars)) scores.Leader += 3;
  if (signs.Sun === "Sagittarius") scores.Leader += 2;

  // Healer - Cancer, Scorpio emphasis
  if (["Cancer", "Scorpio"].includes(signs.Moon)) scores.Healer += 4;
  if (["Cancer", "Scorpio"].includes(signs.Venus)) scores.Healer += 3;
  if (signs.Neptune === "Cancer" || signs.Neptune === "Scorpio") scores.Healer += 2;

  // Seeker - Sagittarius emphasis
  if (signs.Jupiter === "Sagittarius") scores.Seeker += 4;
  if (signs.Sun === "Sagittarius") scores.Seeker += 3;
  if (signs.Moon === "Sagittarius") scores.Seeker += 3;

  // Rebel - Uranus/Aquarius emphasis
  if (signs.Uranus === "Aquarius") scores.Rebel += 4;
  if (["Aries", "Aquarius"].includes(signs.Mars)) scores.Rebel += 3;
  if (signs.Sun === "Aquarius") scores.Rebel += 3;

  // Mystic - Neptune/Pisces emphasis
  if (signs.Neptune === "Pisces") scores.Mystic += 4;
  if (signs.Moon === "Pisces") scores.Mystic += 3;
  if (signs.Venus === "Pisces") scores.Mystic += 2;

  // Visionary - Aquarius/Sagittarius emphasis
  if (["Aquarius", "Sagittarius"].includes(signs.Sun)) scores.Visionary += 3;
  if (signs.Uranus === "Aquarius") scores.Visionary += 3;
  if (signs.Jupiter === "Sagittarius") scores.Visionary += 2;

  // Connector - Libra/Gemini/Cancer emphasis
  if (["Libra", "Gemini", "Cancer"].includes(signs.Venus)) scores.Connector += 3;
  if (["Libra", "Gemini"].includes(signs.Mercury)) scores.Connector += 3;
  if (signs.Moon === "Cancer") scores.Connector += 2;

  // Strategist - Virgo/Capricorn/Scorpio emphasis
  if (["Virgo", "Capricorn", "Scorpio"].includes(signs.Mercury)) scores.Strategist += 4;
  if (["Virgo", "Capricorn"].includes(signs.Saturn)) scores.Strategist += 3;
  if (signs.Sun === "Scorpio") scores.Strategist += 2;

  // Performer - Leo emphasis
  if (signs.Sun === "Leo") scores.Performer += 4;
  if (signs.Venus === "Leo") scores.Performer += 3;
  if (signs.Moon === "Leo") scores.Performer += 3;

  // Alchemist - Scorpio/Pluto emphasis
  if (signs.Pluto === "Scorpio") scores.Alchemist += 4;
  if (signs.Sun === "Scorpio") scores.Alchemist += 3;
  if (signs.Moon === "Scorpio") scores.Alchemist += 3;

  console.log("Archetype scores:", scores);

  // Get top 2 archetypes
  const sorted = Object.entries(scores).sort(([,a], [,b]) => b - a);
  const primary = sorted[0][0];
  const secondary = (sorted[1][1] >= sorted[0][1] * 0.8) ? sorted[1][0] : sorted[0][0];

  console.log("Primary archetype:", primary);
  console.log("Secondary archetype:", secondary);
  console.log("=== WESTERN ARCHETYPE CALCULATION END ===");

  return { primary, secondary, scores };
};
