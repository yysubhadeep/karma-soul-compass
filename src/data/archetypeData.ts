
export interface ArchetypeData {
  name: string;
  strengths: string;
  growthAreas: string;
  lifePurpose: string;
  shadows: string;
  lifeStages: string;
  healingPractices: string;
  careerPaths: string[];
  selfDiscoveryQuestions: string[];
  futurePathQuestions: string[];
  vedicInsights: {
    view: string;
    startDoing: string[];
    stopDoing: string[];
  };
}

export const archetypeInsights: Record<string, ArchetypeData> = {
  "The Builder": {
    name: "The Builder",
    strengths: "Grounded, responsible, dependable, long-term focused",
    growthAreas: "Resistance to change, emotional distance",
    lifePurpose: "To build systems, institutions, or legacies that benefit society",
    shadows: "Overworking, rigidity, suppressing emotional needs",
    lifeStages: "Early responsibility, mid-life leadership, legacy wisdom",
    healingPractices: "Journaling, body relaxation, trust-building with others",
    careerPaths: ["Policy", "Public Service", "Manufacturing", "Finance", "Law", "Real Estate", "Education"],
    selfDiscoveryQuestions: [
      "What foundational values guide every decision you make?",
      "When have you felt most proud of something you built or created?",
      "What legacy do you want to leave for future generations?",
      "How do you balance perfectionism with progress?",
      "What traditions or structures feel most meaningful to you?",
      "When do you feel most grounded and secure?",
      "What responsibilities do you willingly carry for others?",
      "How has your relationship with authority shaped who you are?",
      "What would you build if resources were unlimited?",
      "How do you maintain stability while embracing necessary change?",
      "What childhood experiences taught you about hard work?",
      "When do you feel most connected to your purpose?",
      "How do you nurture yourself when feeling overwhelmed?",
      "What patterns of behavior serve you well in leadership?",
      "How has your sense of duty evolved over time?",
      "What gives your life structure and meaning?",
      "How do you balance personal needs with collective responsibility?",
      "What would make you feel truly accomplished?",
      "How do you handle situations that require flexibility?",
      "What does authentic success look like to you?"
    ],
    futurePathQuestions: [
      "What impact do you want to make in the next 5 years?",
      "How can you build systems that serve beyond your lifetime?",
      "What skills do you need to develop to reach your goals?",
      "How will you measure progress toward your vision?",
      "What partnerships could amplify your impact?",
      "How can you create more sustainable work habits?",
      "What would you regret not attempting in your career?",
      "How can you mentor others while pursuing your own growth?",
      "What changes in your industry excite or concern you?",
      "How will you adapt your leadership style as you grow?",
      "What resources do you need to acquire or develop?",
      "How can you balance ambition with well-being?",
      "What would financial freedom allow you to focus on?",
      "How can you contribute to solving larger societal problems?",
      "What relationships need nurturing for your future success?",
      "How will you stay relevant as the world changes?",
      "What would make your work feel more meaningful?",
      "How can you create opportunities for others while advancing yourself?",
      "What legacy projects call to your heart?",
      "How will you know when you've achieved your life's work?"
    ],
    vedicInsights: {
      view: "Embodiment of Karma Yoga. This soul is born to create lasting legacies through discipline and structure, aligned with Saturn's dharmic purpose.",
      startDoing: [
        "Wake early and follow a structured daily sadhana",
        "Set long-term goals with clear timelines",
        "Respect elders and mentors (Shani principle)",
        "Take accountability in teams",
        "Practice patience in public life",
        "Ground yourself in routines",
        "Build assets, not just income",
        "Lead younger souls in responsibility",
        "Contribute anonymously (Seva)",
        "Accept delays as divine timing"
      ],
      stopDoing: [
        "Rushing results",
        "Judging others for laziness",
        "Overworking without joy",
        "Micromanaging",
        "Fearing failure",
        "Hoarding power",
        "Staying too rigid in mindset",
        "Distrusting flow",
        "Compromising on ethics",
        "Avoiding rest"
      ]
    }
  },
  "The Dreamer": {
    name: "The Dreamer",
    strengths: "Creative, intuitive, emotionally intelligent, soulful",
    growthAreas: "Escapism, boundary issues, lack of focus",
    lifePurpose: "To give voice to the heart of humanity through creativity and compassion",
    shadows: "Idealism over action, emotional overwhelm, avoidance",
    lifeStages: "Sensitive childhood, visionary youth, guiding elder",
    healingPractices: "Art, music, solitude, water connection",
    careerPaths: ["Design", "Arts", "UX", "Psychology", "Social Innovation", "Kids Content"],
    vedicInsights: {
      view: "Rooted in Bhakti Yoga. Often deeply intuitive and connected to divine realms. A soul meant to dissolve ego and walk a path of devotion and imagination.",
      startDoing: [
        "Journal vivid dreams and feelings",
        "Create through poetry/music/art",
        "Spend time in water bodies",
        "Chant or meditate daily",
        "Sleep enough and nurture the mind",
        "Trust intuitive nudges",
        "Do Seva with compassion",
        "Read spiritual texts",
        "Keep a digital detox day",
        "Embrace silence"
      ],
      stopDoing: [
        "Escaping into fantasy",
        "Doubting your sensitivity",
        "Avoiding confrontation",
        "Being easily influenced",
        "Over-romanticizing pain",
        "Procrastinating due to emotions",
        "Neglecting boundaries",
        "Using substances to cope",
        "Taking everything personally",
        "Staying in toxic situations out of 'love'"
      ]
    }
  },
  "The Leader": {
    name: "The Leader",
    strengths: "Charismatic, inspiring, decisive, natural motivator",
    growthAreas: "Ego, dominance, being overly results-driven",
    lifePurpose: "To lead others with courage and vision",
    shadows: "Arrogance, over-control, ignoring feedback",
    lifeStages: "Spotlight in youth, power in midlife, purpose-driven elder",
    healingPractices: "Humility practices, mentoring others, collaborative work",
    careerPaths: ["Entrepreneurship", "Media", "Politics", "Sports", "Corporate Leadership"],
    vedicInsights: {
      view: "Channel of Raja Yoga. A soul placed under Surya's fire to lead others with dharma, vision, and light. Their path is to serve society with clarity and courage.",
      startDoing: [
        "Stand tall—own your presence",
        "Give back to others visibly",
        "Train your voice and speak clearly",
        "Set weekly leadership challenges",
        "Guide the confused",
        "Create win-win plans",
        "Follow solar health rhythms",
        "Dress with dignity",
        "Take responsibility before reward",
        "Celebrate others openly"
      ],
      stopDoing: [
        "Seeking constant attention",
        "Dismissing emotional needs",
        "Dominating without consent",
        "Hiding your true power",
        "Belittling others",
        "Being overly competitive",
        "Chasing titles over impact",
        "Fearing vulnerability",
        "Neglecting family",
        "Over-associating with status"
      ]
    }
  },
  "The Healer": {
    name: "The Healer",
    strengths: "Nurturing, insightful, grounded in service",
    growthAreas: "Absorbing others' pain, fatigue, people-pleasing",
    lifePurpose: "To bring balance, healing, and hope to systems and people",
    shadows: "Self-neglect, guilt patterns, martyrdom",
    lifeStages: "Service from early age, mastery of healing arts, holistic teacher",
    healingPractices: "Nature therapy, breathwork, Ayurveda",
    careerPaths: ["Medicine", "Mental Health", "Social Work", "Nutrition", "Wellness Coaching"],
    vedicInsights: {
      view: "Aligned with Ayurveda + Seva Dharma. This archetype naturally channels nurturing, purity, and energetic harmony for personal and collective health.",
      startDoing: [
        "Cook sattvic meals",
        "Learn a healing art (Reiki, Ayurveda, etc.)",
        "Keep your space clean and sacred",
        "Volunteer in hospitals or animal shelters",
        "Journal your health rhythms",
        "Tend to emotional hygiene",
        "Spend time in forests or gardens",
        "Develop listening skills",
        "Simplify your daily life",
        "Study Doshas and body types"
      ],
      stopDoing: [
        "Overgiving to the point of burnout",
        "Holding emotional pain for others",
        "Avoiding confrontation",
        "Neglecting own health",
        "Fixing people who don't ask",
        "Shaming illness",
        "Depending on outside validation",
        "Staying stuck in over-care mode",
        "Consuming toxic content",
        "Undercharging for care-based work"
      ]
    }
  },
  "The Seeker": {
    name: "The Seeker",
    strengths: "Curious, philosophical, loves truth and learning",
    growthAreas: "Restlessness, detachment, overthinking",
    lifePurpose: "To explore the meaning of life and share wisdom",
    shadows: "Escaping discomfort, not committing",
    lifeStages: "Early wanderer, mid-life scholar, elder wisdom keeper",
    healingPractices: "Travel, journaling, spiritual study",
    careerPaths: ["Writing", "Teaching", "Research", "Consulting", "Cross-cultural Projects"],
    vedicInsights: {
      view: "Guided by Jnana Yoga + Dwandwa Bodh (dualities). Born to walk between wisdom and wonder, seeking truth across dimensions and philosophies.",
      startDoing: [
        "Read ancient and modern texts",
        "Meditate without expectation",
        "Travel solo, even short distances",
        "Engage with diverse faiths",
        "Question status quo with humility",
        "Share learnings with youth",
        "Track personal truth evolution",
        "Honor both logic and magic",
        "Keep a daily inquiry prompt",
        "Serve a Guru or mentor"
      ],
      stopDoing: [
        "Overthinking every path",
        "Dismissing ordinary life",
        "Escaping through travel or books",
        "Being 'too spiritual to act'",
        "Judging others' ignorance",
        "Ignoring your body",
        "Flipping beliefs too fast",
        "Chasing 'next big answer'",
        "Speaking in riddles only",
        "Rejecting routine altogether"
      ]
    }
  },
  "The Rebel": {
    name: "The Rebel",
    strengths: "Original, bold, system-challenger, inventive",
    growthAreas: "Anger, non-conformism without cause, instability",
    lifePurpose: "To disrupt and innovate for better futures",
    shadows: "Rebellion for rebellion's sake, isolation, burn-out",
    lifeStages: "Breakout youth, peak disruption in midlife, mentoring change-makers",
    healingPractices: "Expression through activism, creating safe communities",
    careerPaths: ["Tech Innovation", "Startup Founder", "Activism", "Ed-tech", "Public Discourse"],
    vedicInsights: {
      view: "Manifestation of Kali energy. Here to burn down injustice, create alternative systems, and embody fierce truth with dharma.",
      startDoing: [
        "Build your own framework",
        "Speak truth to power",
        "Support grassroots movements",
        "Use art for protest",
        "Create brave communities",
        "Journal anger consciously",
        "Study law and ethics",
        "Find elders who fought before you",
        "Learn to pause before explosion",
        "Practice yoga to channel intensity"
      ],
      stopDoing: [
        "Fighting everyone, always",
        "Burning out in isolation",
        "Refusing all authority blindly",
        "Disregarding systems altogether",
        "Ignoring rest",
        "Belittling 'followers'",
        "Thinking suffering = strength",
        "Creating chaos without direction",
        "Holding grudges",
        "Avoiding inner healing"
      ]
    }
  },
  "The Mystic": {
    name: "The Mystic",
    strengths: "Deeply intuitive, spiritual, compassionate",
    growthAreas: "Escaping material world, indecision, loneliness",
    lifePurpose: "To help others reconnect with inner truth and deeper purpose",
    shadows: "Isolation, disconnection from reality, emotional withdrawal",
    lifeStages: "Deep inner world as child, awakening as adult, spiritual teacher",
    healingPractices: "Meditation, prayer, water rituals, mantra",
    careerPaths: ["Research", "Psychology", "Spiritual Teaching", "Cultural Preservation"],
    vedicInsights: {
      view: "Born from Tantra + Tapasya. A deep soul meant to experience the unseen, embody soul science, and dissolve form into source.",
      startDoing: [
        "Create sacred morning rituals",
        "Study Jyotish, Tantra or Vedanta",
        "Channel intuition into design/music",
        "Fast or retreat periodically",
        "Read past-life regression science",
        "Keep water and flame on altar",
        "Offer silence in conflict",
        "Spend time in temples, caves, or hills",
        "Observe death and grief without fear",
        "Be a mirror to others' truths"
      ],
      stopDoing: [
        "Escaping into illusion",
        "Hiding your mystical nature",
        "Feeling cursed for being sensitive",
        "Avoiding money and real-world duties",
        "Disregarding the body",
        "Thinking you're too 'deep' to be helped",
        "Holding mystical superiority",
        "Fear of being misunderstood",
        "Living too much alone",
        "Forgetting joy is spiritual"
      ]
    }
  },
  "The Visionary": {
    name: "The Visionary",
    strengths: "Futuristic thinker, creative strategist, big-picture clarity",
    growthAreas: "Over-planning, disconnection from present moment",
    lifePurpose: "To envision bold futures and create pathways to get there",
    shadows: "Delusion, aloofness, disconnection from people",
    lifeStages: "Early idealism, strategy in midlife, legacy projects later",
    healingPractices: "Nature time, strategic action, creative vision boarding",
    careerPaths: ["Product Design", "Sustainability", "Think-tanks", "Urban Planning", "Green-tech"],
    vedicInsights: {
      view: "Aligned to Vishwa Karma and Rishi Dharma. Brings futuristic insight into today's society — to seed tomorrow's breakthroughs.",
      startDoing: [
        "Write ideas in a long-term log",
        "Partner with grounded executors",
        "Learn tech, design or science",
        "Mentor underprivileged youth",
        "Make future predictions mindfully",
        "Create models for better systems",
        "Share open-source knowledge",
        "Study sacred geometry or metaphysics",
        "Keep ego in check through service",
        "Get feedback early and often"
      ],
      stopDoing: [
        "Talking only, not doing",
        "Dismissing others as 'behind'",
        "Avoiding real-world struggles",
        "Losing yourself in idealism",
        "Creating without consulting affected people",
        "Believing you're always the smartest",
        "Bouncing from idea to idea",
        "Neglecting old wisdom",
        "Ignoring cultural context",
        "Thinking visibility = value"
      ]
    }
  },
  "The Connector": {
    name: "The Connector",
    strengths: "Empathic, socially aware, bridge-builder",
    growthAreas: "Over-dependence, lack of boundaries, validation-seeking",
    lifePurpose: "To create belonging, trust, and understanding among people",
    shadows: "People-pleasing, gossip, emotional manipulation",
    lifeStages: "Supportive childhood, social star in youth, peacemaker in elderhood",
    healingPractices: "Group therapy, journaling, forgiveness rituals",
    careerPaths: ["Community Work", "HR", "Education", "Storytelling", "Diplomacy"],
    vedicInsights: {
      view: "A Vishnu archetype. Brings people together through love, listening, and harmony. Heals wounds in society by being the middle bridge.",
      startDoing: [
        "Host safe spaces for conversations",
        "Study counseling, mediation or HR",
        "Learn nonviolent communication",
        "Build interfaith or intercaste dialogue",
        "Use art/music for bonding",
        "Celebrate community rituals",
        "Support friendships consistently",
        "Set healthy relational boundaries",
        "Acknowledge conflict, don't avoid it",
        "Volunteer in family courts or schools"
      ],
      stopDoing: [
        "People-pleasing at your own cost",
        "Avoiding tough truths",
        "Gossiping under the mask of bonding",
        "Expecting validation constantly",
        "Carrying others' emotions as yours",
        "Saying yes when you mean no",
        "Ignoring alone-time needs",
        "Staying neutral in injustice",
        "Over-correcting for peace",
        "Seeking love where there's no respect"
      ]
    }
  },
  "The Strategist": {
    name: "The Strategist",
    strengths: "Logical, analytical, visionary problem-solver",
    growthAreas: "Cynicism, emotional disconnect, over-perfectionism",
    lifePurpose: "To design elegant, scalable solutions to real problems",
    shadows: "Analysis paralysis, judgmental thinking",
    lifeStages: "Data-gathering early life, innovation midlife, systems leader later",
    healingPractices: "Journaling, clarity meditation, systems thinking",
    careerPaths: ["Tech Architecture", "Data Science", "Consulting", "Systems Governance"],
    vedicInsights: {
      view: "Like Chanakya, this archetype combines intellect, systems, and dharmic design thinking. Their mind is meant to serve large-scale problem-solving.",
      startDoing: [
        "Design tools, maps or workflows",
        "Study ancient logic and Nyaya",
        "Journal systems in daily life",
        "Help others solve complexity",
        "Build long-term financial strategy",
        "Join think tanks or innovation labs",
        "Create clarity where there's fog",
        "Teach others structure",
        "Balance logic with heart",
        "Mentor someone less organized"
      ],
      stopDoing: [
        "Overthinking small things",
        "Getting cold or overly calculative",
        "Always needing control",
        "Refusing emotion-based reasoning",
        "Judging 'messy' people",
        "Assuming your way is best",
        "Becoming arrogant with intellect",
        "Shaming vulnerability",
        "Getting lost in spreadsheets",
        "Neglecting spiritual practice"
      ]
    }
  },
  "The Performer": {
    name: "The Performer",
    strengths: "Charisma, confidence, entertainment, self-expression",
    growthAreas: "Insecurity masked by performance, validation-seeking",
    lifePurpose: "To inspire joy, emotion, and change through performance",
    shadows: "Burnout, emotional rollercoasters, self-worth tied to audience",
    lifeStages: "Expressive child, acclaimed adult, influential elder",
    healingPractices: "Performance with purpose, identity work",
    careerPaths: ["Acting", "Dance", "Public Speaking", "Content Creation", "Motivational Work"],
    vedicInsights: {
      view: "Channel of Natyashastra + Rasa Dharma. This soul brings light, emotion, and presence into a space — a divine actor and joy-carrier.",
      startDoing: [
        "Develop your stage craft",
        "Express emotions daily",
        "Learn classical or folk performance art",
        "Create online videos",
        "Share positive messages in public",
        "Study storytelling traditions",
        "Build discipline to support creativity",
        "Work with kids or elders",
        "Use laughter as healing",
        "Connect to Lakshmi and joy"
      ],
      stopDoing: [
        "Performing to be liked",
        "Needing applause to feel worthy",
        "Hiding true pain",
        "Overdramatizing minor events",
        "Competing for attention",
        "Thinking loud = powerful",
        "Avoiding silence",
        "Tiring yourself by 'being on'",
        "Neglecting money planning",
        "Skipping daily rituals for 'vibe'"
      ]
    }
  },
  "The Alchemist": {
    name: "The Alchemist",
    strengths: "Transformative, adaptable, spiritual meets science",
    growthAreas: "Impatience, control tendencies, hidden agendas",
    lifePurpose: "To integrate opposites and lead transformation",
    shadows: "Manipulation, intensity overload, isolation",
    lifeStages: "Curious youth, change-maker midlife, soul alchemist elder",
    healingPractices: "Deep therapy, energy rituals, fire ceremonies",
    careerPaths: ["Entrepreneurship", "Transformation Coaching", "Product Innovation", "Ecology"],
    vedicInsights: {
      view: "Rooted in Shiva + Kundalini Energy. Here to face darkness, transform poison, and turn pain into power — both within and around them.",
      startDoing: [
        "Study Tantra or shadow work",
        "Transform wounds into stories/art",
        "Learn trauma psychology",
        "Support others in rebirth journeys",
        "Practice breathwork and movement",
        "Sit with fears, not run from them",
        "Mentor youth going through crisis",
        "Explore occult sciences ethically",
        "Hold sacred space for grief",
        "Celebrate transformations"
      ],
      stopDoing: [
        "Staying in toxic cycles",
        "Wearing trauma as identity",
        "Controlling others through intensity",
        "Overusing spiritual jargon",
        "Running from softness",
        "Seeking chaos as normal",
        "Shaming your younger self",
        "Using manipulation",
        "Holding resentment",
        "Over-identifying with pain as power"
      ]
    }
  }
};

export const getArchetypeData = (archetype: string): ArchetypeData => {
  return archetypeInsights[archetype] || {
    name: archetype,
    strengths: "Natural leadership qualities, strong intuition, and the ability to inspire others toward positive change.",
    growthAreas: "Learning to balance ambition with patience, and trusting the divine timing of your journey.",
    lifePurpose: "You are here to guide others through transformation and help them discover their own inner wisdom.",
    shadows: "Tendency to take on too much responsibility and difficulty accepting help from others.",
    lifeStages: "Early development of independence, mid-life mastery, elder wisdom sharing.",
    healingPractices: "Meditation, nature connection, community service",
    careerPaths: ["Life Coach", "Teacher", "Counselor", "Entrepreneur", "Healer", "Writer"],
    selfDiscoveryQuestions: [
      "What patterns in your life keep repeating?",
      "When do you feel most authentic and true to yourself?",
      "What fears hold you back from your fullest expression?",
      "How do you define success for yourself?",
      "What brings you the deepest sense of joy and fulfillment?",
      "What would you do if you knew you couldn't fail?",
      "How has your understanding of yourself changed over time?",
      "What relationships have shaped you the most?",
      "What gifts do you have that the world needs?",
      "How do you handle conflict and challenges?",
      "What does love mean to you?",
      "When do you feel most connected to something greater?",
      "What would you tell your younger self?",
      "How do you recharge and restore your energy?",
      "What beliefs about yourself are you ready to release?",
      "What aspects of yourself are you still discovering?",
      "How do you express your creativity?",
      "What makes you feel most alive?",
      "What is your relationship with money and abundance?",
      "How do you want to be remembered?"
    ],
    futurePathQuestions: [
      "What vision for your future excites you most?",
      "How do you want to grow and evolve in the next chapter?",
      "What impact do you want to have on others?",
      "What new experiences are calling to you?",
      "How can you align your work with your deepest values?",
      "What skills or knowledge do you want to develop?",
      "What relationships do you want to cultivate?",
      "How do you want to contribute to your community?",
      "What adventures or journeys are on your horizon?",
      "How can you create more meaning in your daily life?",
      "What legacy do you want to leave?",
      "How will you know you're living your purpose?",
      "What changes do you need to make to honor your truth?",
      "How can you better serve others with your gifts?",
      "What dreams have you put on hold?",
      "How do you want to age and grow wiser?",
      "What would financial freedom allow you to do?",
      "How can you be more courageous in pursuing your goals?",
      "What would make your life feel complete?",
      "How will you continue learning and growing?"
    ],
    vedicInsights: {
      view: "A balanced soul walking the path of dharma, meant to guide and inspire others through authentic living and conscious growth.",
      startDoing: [
        "Practice daily meditation or mindfulness",
        "Set clear intentions aligned with your values",
        "Serve others in meaningful ways",
        "Study wisdom traditions",
        "Take care of your physical and mental health",
        "Build authentic relationships",
        "Follow your intuition",
        "Express gratitude daily",
        "Learn from challenges",
        "Stay connected to nature"
      ],
      stopDoing: [
        "Overthinking every decision",
        "Comparing yourself to others",
        "Neglecting self-care",
        "Avoiding difficult conversations",
        "Seeking external validation constantly",
        "Procrastinating on important goals",
        "Holding grudges",
        "Ignoring your inner voice",
        "Taking on too much responsibility",
        "Avoiding personal growth"
      ]
    }
  };
};

// Advanced archetype calculation system
export interface ArchetypeScore {
  archetype: string;
  score: number;
}

export interface ArchetypeResult {
  primary: string;
  secondary: string;
  scoreBreakdown: Record<string, number>;
}

export const calculateArchetypeFromChart = (
  sunSign: string,
  moonSign: string,
  risingSign: string,
  dominantPlanet: string,
  dominantElement: string,
  dominantModality: string
): ArchetypeResult => {
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

  // Sun Sign scoring (Weight: +5)
  const sunScoring: Record<string, string[]> = {
    "The Builder": ["Capricorn", "Taurus"],
    "The Dreamer": ["Pisces", "Cancer"],
    "The Leader": ["Leo", "Aries"],
    "The Healer": ["Virgo", "Cancer"],
    "The Seeker": ["Sagittarius", "Gemini"],
    "The Rebel": ["Aquarius", "Aries"],
    "The Mystic": ["Scorpio", "Pisces"],
    "The Visionary": ["Aquarius", "Sagittarius"],
    "The Connector": ["Libra", "Gemini"],
    "The Strategist": ["Virgo", "Gemini"],
    "The Performer": ["Leo", "Sagittarius"],
    "The Alchemist": ["Scorpio", "Capricorn"]
  };

  Object.entries(sunScoring).forEach(([archetype, signs]) => {
    if (signs.includes(sunSign)) {
      scores[archetype] += 5;
    }
  });

  // Moon Sign scoring (Weight: +4)
  const moonScoring: Record<string, string[]> = {
    "The Builder": ["Capricorn", "Taurus", "Virgo"],
    "The Dreamer": ["Pisces", "Cancer", "Scorpio"],
    "The Leader": ["Leo", "Aries", "Sagittarius"],
    "The Healer": ["Cancer", "Virgo", "Pisces"],
    "The Seeker": ["Sagittarius", "Gemini", "Aquarius"],
    "The Rebel": ["Aquarius", "Aries", "Sagittarius"],
    "The Mystic": ["Scorpio", "Pisces", "Cancer"],
    "The Visionary": ["Aquarius", "Gemini", "Sagittarius"],
    "The Connector": ["Libra", "Gemini", "Leo"],
    "The Strategist": ["Virgo", "Gemini", "Capricorn"],
    "The Performer": ["Leo", "Aries", "Sagittarius"],
    "The Alchemist": ["Scorpio", "Capricorn", "Aries"]
  };

  Object.entries(moonScoring).forEach(([archetype, signs]) => {
    if (signs.includes(moonSign)) {
      scores[archetype] += 4;
    }
  });

  // Rising Sign scoring (Weight: +4)
  Object.entries(sunScoring).forEach(([archetype, signs]) => {
    if (signs.includes(risingSign)) {
      scores[archetype] += 4;
    }
  });

  // Dominant Planet scoring (Weight: +3)
  const planetScoring: Record<string, string[]> = {
    "The Builder": ["Saturn"],
    "The Dreamer": ["Neptune", "Moon"],
    "The Leader": ["Sun", "Mars"],
    "The Healer": ["Moon", "Venus"],
    "The Seeker": ["Jupiter", "Mercury"],
    "The Rebel": ["Uranus", "Mars"],
    "The Mystic": ["Neptune", "Pluto"],
    "The Visionary": ["Uranus", "Jupiter"],
    "The Connector": ["Venus", "Mercury"],
    "The Strategist": ["Mercury", "Saturn"],
    "The Performer": ["Sun", "Venus"],
    "The Alchemist": ["Pluto", "Mars"]
  };

  Object.entries(planetScoring).forEach(([archetype, planets]) => {
    if (planets.includes(dominantPlanet)) {
      scores[archetype] += 3;
    }
  });

  // Element scoring (Weight: +2)
  const elementScoring: Record<string, string[]> = {
    "The Builder": ["Earth"],
    "The Dreamer": ["Water"],
    "The Leader": ["Fire"],
    "The Healer": ["Water", "Earth"],
    "The Seeker": ["Fire", "Air"],
    "The Rebel": ["Air", "Fire"],
    "The Mystic": ["Water"],
    "The Visionary": ["Air"],
    "The Connector": ["Air"],
    "The Strategist": ["Earth", "Air"],
    "The Performer": ["Fire"],
    "The Alchemist": ["Water", "Earth"]
  };

  Object.entries(elementScoring).forEach(([archetype, elements]) => {
    if (elements.includes(dominantElement)) {
      scores[archetype] += 2;
    }
  });

  // Find primary and secondary archetypes
  const sortedScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a);

  return {
    primary: sortedScores[0][0],
    secondary: sortedScores[1][0],
    scoreBreakdown: scores
  };
};
