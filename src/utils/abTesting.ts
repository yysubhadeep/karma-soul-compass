
// A/B Testing utility for homepage variants
export interface ABTestData {
  variant: 'main' | 'vedic';
  timestamp: number;
  sessionId: string;
  hasConverted: boolean;
  conversionType?: 'form_started' | 'form_completed' | 'email_verified';
}

export interface ABTestStats {
  main: {
    visits: number;
    conversions: number;
    conversionRate: number;
  };
  vedic: {
    visits: number;
    conversions: number;
    conversionRate: number;
  };
}

// Generate a unique session ID
export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create A/B test assignment
export const getABTestVariant = (): 'main' | 'vedic' => {
  const stored = localStorage.getItem('ab_test_variant');
  
  if (stored) {
    try {
      const data: ABTestData = JSON.parse(stored);
      // Use existing variant if less than 24 hours old
      if (Date.now() - data.timestamp < 24 * 60 * 60 * 1000) {
        return data.variant;
      }
    } catch (e) {
      console.log('Error parsing stored A/B test data:', e);
    }
  }

  // Assign new variant (50/50 split)
  const variant: 'main' | 'vedic' = Math.random() < 0.5 ? 'main' : 'vedic';
  
  const testData: ABTestData = {
    variant,
    timestamp: Date.now(),
    sessionId: generateSessionId(),
    hasConverted: false
  };

  localStorage.setItem('ab_test_variant', JSON.stringify(testData));
  trackABTestVisit(variant);
  
  return variant;
};

// Track a visit to a variant
export const trackABTestVisit = (variant: 'main' | 'vedic') => {
  const key = `ab_stats_${variant}`;
  const stored = localStorage.getItem(key);
  
  let stats = { visits: 0, conversions: 0 };
  if (stored) {
    try {
      stats = JSON.parse(stored);
    } catch (e) {
      console.log('Error parsing stats:', e);
    }
  }
  
  stats.visits += 1;
  localStorage.setItem(key, JSON.stringify(stats));
};

// Track a conversion
export const trackABTestConversion = (conversionType: 'form_started' | 'form_completed' | 'email_verified') => {
  const stored = localStorage.getItem('ab_test_variant');
  if (!stored) return;

  try {
    const testData: ABTestData = JSON.parse(stored);
    
    // Update test data
    testData.hasConverted = true;
    testData.conversionType = conversionType;
    localStorage.setItem('ab_test_variant', JSON.stringify(testData));

    // Update stats
    const statsKey = `ab_stats_${testData.variant}`;
    const statsStored = localStorage.getItem(statsKey);
    
    let stats = { visits: 0, conversions: 0 };
    if (statsStored) {
      stats = JSON.parse(statsStored);
    }
    
    stats.conversions += 1;
    localStorage.setItem(statsKey, JSON.stringify(stats));
    
    console.log(`🎯 A/B Test Conversion tracked: ${conversionType} for variant: ${testData.variant}`);
  } catch (e) {
    console.log('Error tracking conversion:', e);
  }
};

// Get current A/B test statistics
export const getABTestStats = (): ABTestStats => {
  const mainStats = JSON.parse(localStorage.getItem('ab_stats_main') || '{"visits": 0, "conversions": 0}');
  const vedicStats = JSON.parse(localStorage.getItem('ab_stats_vedic') || '{"visits": 0, "conversions": 0}');

  return {
    main: {
      ...mainStats,
      conversionRate: mainStats.visits > 0 ? (mainStats.conversions / mainStats.visits) * 100 : 0
    },
    vedic: {
      ...vedicStats,
      conversionRate: vedicStats.visits > 0 ? (vedicStats.conversions / vedicStats.visits) * 100 : 0
    }
  };
};

// Reset A/B test data (for testing purposes)
export const resetABTestData = () => {
  localStorage.removeItem('ab_test_variant');
  localStorage.removeItem('ab_stats_main');
  localStorage.removeItem('ab_stats_vedic');
  console.log('A/B test data reset');
};
