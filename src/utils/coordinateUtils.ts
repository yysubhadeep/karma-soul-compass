
// Coordinate lookup utility for birth places
interface Coordinates {
  latitude: number;
  longitude: number;
}

// Major Indian cities coordinates
const INDIAN_CITY_COORDINATES: Record<string, Coordinates> = {
  // Metro cities
  'mumbai': { latitude: 19.0760, longitude: 72.8777 },
  'delhi': { latitude: 28.6139, longitude: 77.2090 },
  'bangalore': { latitude: 12.9716, longitude: 77.5946 },
  'bengaluru': { latitude: 12.9716, longitude: 77.5946 },
  'hyderabad': { latitude: 17.3850, longitude: 78.4867 },
  'ahmedabad': { latitude: 23.0225, longitude: 72.5714 },
  'chennai': { latitude: 13.0827, longitude: 80.2707 },
  'kolkata': { latitude: 22.5726, longitude: 88.3639 },
  'pune': { latitude: 18.5204, longitude: 73.8567 },
  'jaipur': { latitude: 26.9124, longitude: 75.7873 },
  'surat': { latitude: 21.1702, longitude: 72.8311 },
  'lucknow': { latitude: 26.8467, longitude: 80.9462 },
  'kanpur': { latitude: 26.4499, longitude: 80.3319 },
  'nagpur': { latitude: 21.1458, longitude: 79.0882 },
  'indore': { latitude: 22.7196, longitude: 75.8577 },
  'thane': { latitude: 19.2183, longitude: 72.9781 },
  'bhopal': { latitude: 23.2599, longitude: 77.4126 },
  'visakhapatnam': { latitude: 17.6868, longitude: 83.2185 },
  'pimpri': { latitude: 18.6298, longitude: 73.8080 },
  'patna': { latitude: 25.5941, longitude: 85.1376 },
  
  // Additional major cities
  'agra': { latitude: 27.1767, longitude: 78.0081 },
  'varanasi': { latitude: 25.3176, longitude: 82.9739 },
  'meerut': { latitude: 28.9845, longitude: 77.7064 },
  'rajkot': { latitude: 22.3039, longitude: 70.8022 },
  'kalyan': { latitude: 19.2437, longitude: 73.1355 },
  'vasai': { latitude: 19.4912, longitude: 72.8054 },
  'vadodara': { latitude: 22.3072, longitude: 73.1812 },
  'ghaziabad': { latitude: 28.6692, longitude: 77.4538 },
  'ludhiana': { latitude: 30.9010, longitude: 75.8573 },
  'nashik': { latitude: 19.9975, longitude: 73.7898 },
  'faridabad': { latitude: 28.4089, longitude: 77.3178 },
  'mira-bhayandar': { latitude: 19.2952, longitude: 72.8544 },
  'coimbatore': { latitude: 11.0168, longitude: 76.9558 },
  'jabalpur': { latitude: 23.1815, longitude: 79.9864 },
  'gwalior': { latitude: 26.2183, longitude: 78.1828 },
  'vijayawada': { latitude: 16.5062, longitude: 80.6480 },
  'jodhpur': { latitude: 26.2389, longitude: 73.0243 },
  'madurai': { latitude: 9.9252, longitude: 78.1198 },
  'raipur': { latitude: 21.2514, longitude: 81.6296 },
  'kota': { latitude: 25.2138, longitude: 75.8648 },
  'chandigarh': { latitude: 30.7333, longitude: 76.7794 },
  'guwahati': { latitude: 26.1445, longitude: 91.7362 },
  'solapur': { latitude: 17.6599, longitude: 75.9064 },
  'hubli': { latitude: 15.3647, longitude: 75.1240 },
  'bareilly': { latitude: 28.3670, longitude: 79.4304 },
  'moradabad': { latitude: 28.8386, longitude: 78.7733 },
  'mysore': { latitude: 12.2958, longitude: 76.6394 },
  'mysuru': { latitude: 12.2958, longitude: 76.6394 },
  'gurgaon': { latitude: 28.4595, longitude: 77.0266 },
  'gurugram': { latitude: 28.4595, longitude: 77.0266 },
  'aligarh': { latitude: 27.8974, longitude: 78.0880 },
  'jalandhar': { latitude: 31.3260, longitude: 75.5762 },
  'tiruchirappalli': { latitude: 10.7905, longitude: 78.7047 },
  'bhubaneswar': { latitude: 20.2961, longitude: 85.8245 },
  'salem': { latitude: 11.6643, longitude: 78.1460 },
  'warangal': { latitude: 17.9689, longitude: 79.5941 },
  'mira road': { latitude: 19.2952, longitude: 72.8544 },
  'thiruvananthapuram': { latitude: 8.5241, longitude: 76.9366 },
  'bhiwandi': { latitude: 19.3002, longitude: 73.0635 },
  'saharanpur': { latitude: 29.9680, longitude: 77.5552 },
  'gorakhpur': { latitude: 26.7606, longitude: 83.3732 },
  'guntur': { latitude: 16.3067, longitude: 80.4365 },
  'bikaner': { latitude: 28.0229, longitude: 73.3119 },
  'amravati': { latitude: 20.9320, longitude: 77.7523 },
  'noida': { latitude: 28.5355, longitude: 77.3910 },
  'jamshedpur': { latitude: 22.8046, longitude: 86.2029 },
  'bhilai': { latitude: 21.1938, longitude: 81.3509 },
  'cuttack': { latitude: 20.4625, longitude: 85.8828 },
  'firozabad': { latitude: 27.1592, longitude: 78.3957 },
  'kochi': { latitude: 9.9312, longitude: 76.2673 },
  'cochin': { latitude: 9.9312, longitude: 76.2673 },
  'bhavnagar': { latitude: 21.7645, longitude: 72.1519 },
  'dehradun': { latitude: 30.3165, longitude: 78.0322 },
  'durgapur': { latitude: 23.5204, longitude: 87.3119 },
  'asansol': { latitude: 23.6739, longitude: 86.9524 },
  'nanded': { latitude: 19.1383, longitude: 77.3210 },
  'kolhapur': { latitude: 16.7050, longitude: 74.2433 },
  'ajmer': { latitude: 26.4499, longitude: 74.6399 },
  'akola': { latitude: 20.7002, longitude: 77.0082 },
  'gulbarga': { latitude: 17.3297, longitude: 76.8343 },
  'jamnagar': { latitude: 22.4707, longitude: 70.0577 },
  'ujjain': { latitude: 23.1765, longitude: 75.7885 },
  'loni': { latitude: 28.7333, longitude: 77.2833 },
  'siliguri': { latitude: 26.7271, longitude: 88.3953 },
  'jhansi': { latitude: 25.4484, longitude: 78.5685 },
  'ulhasnagar': { latitude: 19.2215, longitude: 73.1645 },
  'nellore': { latitude: 14.4426, longitude: 79.9865 },
  'jammu': { latitude: 32.7266, longitude: 74.8570 },
  'sangli': { latitude: 16.8524, longitude: 74.5815 },
  'belgaum': { latitude: 15.8497, longitude: 74.4977 },
  'mangalore': { latitude: 12.9141, longitude: 74.8560 },
  'ambattur': { latitude: 13.1143, longitude: 80.1548 },
  'tirunelveli': { latitude: 8.7139, longitude: 77.7567 },
  'malegaon': { latitude: 20.5579, longitude: 74.5287 },
  'gaya': { latitude: 24.7914, longitude: 85.0002 }
};

// State center coordinates for fallback
const INDIAN_STATE_COORDINATES: Record<string, Coordinates> = {
  'andhra pradesh': { latitude: 15.9129, longitude: 79.7400 },
  'arunachal pradesh': { latitude: 28.2180, longitude: 94.7278 },
  'assam': { latitude: 26.2006, longitude: 92.9376 },
  'bihar': { latitude: 25.0961, longitude: 85.3131 },
  'chhattisgarh': { latitude: 21.2787, longitude: 81.8661 },
  'delhi': { latitude: 28.6139, longitude: 77.2090 },
  'goa': { latitude: 15.2993, longitude: 74.1240 },
  'gujarat': { latitude: 22.2587, longitude: 71.1924 },
  'haryana': { latitude: 29.0588, longitude: 76.0856 },
  'himachal pradesh': { latitude: 31.1048, longitude: 77.1734 },
  'jharkhand': { latitude: 23.6102, longitude: 85.2799 },
  'karnataka': { latitude: 15.3173, longitude: 75.7139 },
  'kerala': { latitude: 10.8505, longitude: 76.2711 },
  'madhya pradesh': { latitude: 22.9734, longitude: 78.6569 },
  'maharashtra': { latitude: 19.7515, longitude: 75.7139 },
  'manipur': { latitude: 24.6637, longitude: 93.9063 },
  'meghalaya': { latitude: 25.4670, longitude: 91.3662 },
  'mizoram': { latitude: 23.1645, longitude: 92.9376 },
  'nagaland': { latitude: 26.1584, longitude: 94.5624 },
  'odisha': { latitude: 20.9517, longitude: 85.0985 },
  'punjab': { latitude: 31.1471, longitude: 75.3412 },
  'rajasthan': { latitude: 27.0238, longitude: 74.2179 },
  'sikkim': { latitude: 27.5330, longitude: 88.5122 },
  'tamil nadu': { latitude: 11.1271, longitude: 78.6569 },
  'telangana': { latitude: 18.1124, longitude: 79.0193 },
  'tripura': { latitude: 23.9408, longitude: 91.9882 },
  'uttar pradesh': { latitude: 26.8467, longitude: 80.9462 },
  'uttarakhand': { latitude: 30.0668, longitude: 79.0193 },
  'west bengal': { latitude: 22.9868, longitude: 87.8550 },
  'jammu and kashmir': { latitude: 34.0837, longitude: 74.7973 },
  'ladakh': { latitude: 34.1526, longitude: 77.5771 }
};

export function getCoordinatesFromLocation(country: string, state: string, city: string): Coordinates {
  console.log(`=== COORDINATE LOOKUP ===`);
  console.log(`Looking up coordinates for: ${city}, ${state}, ${country}`);
  
  // Default fallback coordinates (Delhi)
  const defaultCoords = { latitude: 28.6139, longitude: 77.2090 };
  
  if (country.toLowerCase() !== 'india') {
    console.log(`Non-Indian location, using default coordinates: ${defaultCoords.latitude}, ${defaultCoords.longitude}`);
    return defaultCoords;
  }
  
  // Normalize city name for lookup
  const normalizedCity = city.toLowerCase().trim();
  
  // Try to find city coordinates
  if (INDIAN_CITY_COORDINATES[normalizedCity]) {
    const coords = INDIAN_CITY_COORDINATES[normalizedCity];
    console.log(`Found city coordinates: ${coords.latitude}, ${coords.longitude}`);
    return coords;
  }
  
  // Fallback to state coordinates
  const normalizedState = state.toLowerCase().trim();
  if (INDIAN_STATE_COORDINATES[normalizedState]) {
    const coords = INDIAN_STATE_COORDINATES[normalizedState];
    console.log(`Using state coordinates as fallback: ${coords.latitude}, ${coords.longitude}`);
    return coords;
  }
  
  console.log(`No coordinates found, using default: ${defaultCoords.latitude}, ${defaultCoords.longitude}`);
  return defaultCoords;
}
