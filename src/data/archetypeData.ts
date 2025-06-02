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
    selfDiscoveryQuestions: [
      "What dreams have guided you since childhood?",
      "When do you feel most creatively alive?",
      "How do your emotions inform your intuition?",
      "What art or beauty moves you most deeply?",
      "How do you process overwhelming feelings?",
      "What visions do you have for a better world?",
      "When do you feel most connected to your inner wisdom?",
      "How has your sensitivity been both a gift and challenge?",
      "What creative projects are calling to your soul?",
      "How do you distinguish between inspiration and escapism?",
      "What would you create if fear wasn't a factor?",
      "How do you honor your need for solitude?",
      "What patterns do you notice in your dreams?",
      "How do you stay grounded while following your visions?",
      "What childhood experiences shaped your imagination?",
      "How do you express your deepest truths?",
      "What would make your heart sing every day?",
      "How do you navigate between idealism and reality?",
      "What healing do you most need right now?",
      "How do you know when something is truly meant for you?"
    ],
    futurePathQuestions: [
      "What creative legacy do you want to leave?",
      "How can you turn your dreams into sustainable reality?",
      "What skills would enhance your creative expression?",
      "How will you protect your energy while pursuing your vision?",
      "What collaborations would amplify your impact?",
      "How can you monetize your creativity authentically?",
      "What would you regret not creating in your lifetime?",
      "How can you help other sensitive souls find their voice?",
      "What new mediums or technologies excite your creativity?",
      "How will you balance solitude with meaningful connection?",
      "What resources do you need to bring your visions to life?",
      "How can you create more beauty in the world?",
      "What would financial freedom allow you to focus on creating?",
      "How can you use your gifts to heal collective wounds?",
      "What relationships would nurture your creative growth?",
      "How will you stay inspired as you mature?",
      "What would make your creative work feel most meaningful?",
      "How can you bridge the gap between dreams and action?",
      "What sacred projects are calling to your heart?",
      "How will you know you're living your creative purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What kind of leader do you naturally want to be?",
      "When do you feel most confident in your abilities?",
      "How do you handle power and responsibility?",
      "What vision drives you to take action?",
      "How has your relationship with authority evolved?",
      "What legacy of leadership do you want to create?",
      "When do you feel most authentic in your leadership?",
      "How do you balance confidence with humility?",
      "What challenges have shaped your leadership style?",
      "How do you inspire others without overwhelming them?",
      "What would you lead if you had unlimited resources?",
      "How do you stay connected to your purpose?",
      "What feedback have you received about your leadership?",
      "How do you handle criticism and setbacks?",
      "What childhood experiences taught you about leadership?",
      "How do you maintain integrity under pressure?",
      "What causes are you willing to fight for?",
      "How do you nurture others while pursuing your goals?",
      "What aspects of leadership energize you most?",
      "How do you define successful leadership?"
    ],
    futurePathQuestions: [
      "What movement or cause do you want to lead?",
      "How can you expand your influence positively?",
      "What leadership skills do you need to develop?",
      "How will you measure your impact as a leader?",
      "What team would amplify your leadership vision?",
      "How can you lead more sustainably without burnout?",
      "What would you regret not leading or changing?",
      "How can you mentor the next generation of leaders?",
      "What industries or spaces need your leadership?",
      "How will you adapt your leadership style as you grow?",
      "What platform or stage would maximize your impact?",
      "How can you balance personal ambition with service?",
      "What would financial freedom allow you to lead?",
      "How can you address systemic issues through leadership?",
      "What relationships would strengthen your leadership?",
      "How will you stay grounded as your influence grows?",
      "What would make your leadership most meaningful?",
      "How can you create opportunities while leading others?",
      "What legacy of change calls to your heart?",
      "How will you know you're fulfilling your leadership destiny?"
    ],
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
    selfDiscoveryQuestions: [
      "What drives your desire to help and heal others?",
      "When do you feel most aligned with your healing gifts?",
      "How do you protect your energy while serving others?",
      "What healing do you most need in your own life?",
      "How has your sensitivity to others' pain shaped you?",
      "What healing modalities call to your heart?",
      "When do you feel most grounded and centered?",
      "How do you balance giving with receiving?",
      "What patterns do you notice in your caregiving?",
      "How do you know when you're overextending yourself?",
      "What would you heal if you had unlimited power?",
      "How do you process the pain you absorb from others?",
      "What wisdom has your own healing journey taught you?",
      "How do you maintain hope in the face of suffering?",
      "What childhood experiences awakened your healer nature?",
      "How do you distinguish between helping and enabling?",
      "What aspects of healing work energize you most?",
      "How do you honor your own needs while serving others?",
      "What would make your healing work most impactful?",
      "How do you define true healing and wholeness?"
    ],
    futurePathQuestions: [
      "What healing legacy do you want to create?",
      "How can you scale your healing impact sustainably?",
      "What healing skills or knowledge do you want to develop?",
      "How will you measure success in your healing work?",
      "What partnerships would amplify your healing mission?",
      "How can you heal while maintaining your own wellness?",
      "What would you regret not healing or addressing?",
      "How can you train others in healing arts?",
      "What populations or issues most need your healing gifts?",
      "How will you evolve your healing approach over time?",
      "What resources would enhance your healing practice?",
      "How can you balance traditional and innovative healing?",
      "What would financial stability allow you to focus on healing?",
      "How can you address root causes of collective suffering?",
      "What relationships would support your healing mission?",
      "How will you stay inspired in your healing journey?",
      "What would make your healing work feel most meaningful?",
      "How can you create healing opportunities for underserved communities?",
      "What sacred healing work calls to your soul?",
      "How will you know you're fulfilling your healing purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What questions drive your quest for understanding?",
      "When do you feel most alive in your learning?",
      "How has your search for truth shaped your identity?",
      "What wisdom traditions resonate most deeply with you?",
      "How do you balance seeking with being present?",
      "What mysteries of life fascinate you most?",
      "When do you feel most connected to universal truth?",
      "How do you integrate different perspectives and beliefs?",
      "What would you explore if time and money were unlimited?",
      "How do you know when you've found meaningful truth?",
      "What childhood experiences sparked your curiosity?",
      "How do you share your discoveries with others?",
      "What patterns do you see in your seeking journey?",
      "How do you handle uncertainty and not knowing?",
      "What would you teach based on your seeking?",
      "How do you stay grounded while exploring vast concepts?",
      "What aspects of seeking energize you most?",
      "How do you balance intellectual and experiential learning?",
      "What would make your seeking feel most meaningful?",
      "How do you define wisdom versus knowledge?"
    ],
    futurePathQuestions: [
      "What wisdom do you want to leave for future generations?",
      "How can you share your discoveries more widely?",
      "What areas of knowledge do you want to explore next?",
      "How will you measure the impact of your seeking?",
      "What collaborations would enhance your learning journey?",
      "How can you seek truth while building stability?",
      "What would you regret not exploring or understanding?",
      "How can you guide others on their seeking journeys?",
      "What technologies or methods could enhance your research?",
      "How will your seeking evolve as you age?",
      "What resources would accelerate your learning?",
      "How can you bridge ancient wisdom with modern insights?",
      "What would financial freedom allow you to explore?",
      "How can you address humanity's biggest questions?",
      "What relationships would enrich your seeking?",
      "How will you stay curious as you accumulate knowledge?",
      "What would make your seeking work most impactful?",
      "How can you create learning opportunities for others?",
      "What sacred knowledge calls to your soul?",
      "How will you know you're fulfilling your seeking purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What systems or injustices most need your rebellion?",
      "When do you feel most authentic in your resistance?",
      "How do you channel anger into constructive change?",
      "What alternative vision drives your rebellion?",
      "How has being an outsider shaped your perspective?",
      "What would you fight for if resources were unlimited?",
      "When do you feel most powerful in your defiance?",
      "How do you balance destruction with creation?",
      "What patterns do you see in your rebellious nature?",
      "How do you know when to rebel versus when to collaborate?",
      "What childhood experiences awakened your rebel spirit?",
      "How do you maintain hope while fighting systems?",
      "What aspects of rebellion energize you most?",
      "How do you stay true to your values under pressure?",
      "What would you create if you could start from scratch?",
      "How do you find allies who share your revolutionary vision?",
      "What makes your rebellion different from others'?",
      "How do you balance idealism with practical action?",
      "What would make your rebellion most meaningful?",
      "How do you define successful revolution or change?"
    ],
    futurePathQuestions: [
      "What revolution do you want to lead or be part of?",
      "How can you scale your disruptive impact sustainably?",
      "What skills would make your rebellion more effective?",
      "How will you measure success in your change-making?",
      "What movements or allies would amplify your mission?",
      "How can you rebel while maintaining your wellbeing?",
      "What would you regret not challenging or changing?",
      "How can you inspire the next generation of rebels?",
      "What technologies could accelerate your revolutionary work?",
      "How will your rebellious approach evolve over time?",
      "What resources would fuel your revolutionary vision?",
      "How can you balance radical action with strategic thinking?",
      "What would financial independence allow you to fight for?",
      "How can you address root causes of systemic problems?",
      "What relationships would strengthen your revolutionary work?",
      "How will you stay motivated through long fights for change?",
      "What would make your rebellion most impactful?",
      "How can you create spaces for other rebels to thrive?",
      "What sacred changes call to your revolutionary heart?",
      "How will you know you're fulfilling your rebel purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What spiritual experiences have shaped your understanding?",
      "When do you feel most connected to the divine or universal truth?",
      "How do you balance mystical experiences with practical life?",
      "What inner voices or guidance do you trust most?",
      "How has your spiritual sensitivity affected your relationships?",
      "What mysteries of existence fascinate you most?",
      "When do you feel most at peace with yourself?",
      "How do you integrate mystical insights into daily life?",
      "What spiritual practices most deeply nourish you?",
      "How do you know when you're receiving authentic guidance?",
      "What childhood experiences awakened your mystical nature?",
      "How do you share your spiritual insights with others?",
      "What patterns do you see in your spiritual journey?",
      "How do you handle being misunderstood by others?",
      "What would you explore if all spiritual doors were open?",
      "How do you stay grounded while exploring higher realms?",
      "What aspects of mysticism energize you most?",
      "How do you balance solitude with meaningful connection?",
      "What would make your spiritual journey most meaningful?",
      "How do you define authentic spiritual growth?"
    ],
    futurePathQuestions: [
      "What spiritual wisdom do you want to share with the world?",
      "How can you bridge mystical insights with practical healing?",
      "What spiritual skills or knowledge do you want to develop?",
      "How will you measure the impact of your spiritual work?",
      "What spiritual communities would support your mission?",
      "How can you serve spiritually while maintaining your essence?",
      "What would you regret not exploring spiritually?",
      "How can you guide others on their spiritual journeys?",
      "What ancient traditions could inform your future work?",
      "How will your spiritual understanding evolve over time?",
      "What resources would deepen your spiritual practice?",
      "How can you honor both tradition and innovation in spirituality?",
      "What would financial freedom allow you to focus on spiritually?",
      "How can you address collective spiritual hunger or disconnection?",
      "What relationships would nurture your spiritual growth?",
      "How will you stay connected to source as your work expands?",
      "What would make your spiritual work most impactful?",
      "How can you create sacred spaces for others' spiritual growth?",
      "What divine work calls to your soul?",
      "How will you know you're fulfilling your spiritual purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What visions of the future most inspire you?",
      "When do you feel most aligned with your visionary gifts?",
      "How do you balance future thinking with present action?",
      "What problems do you see that others seem to miss?",
      "How has your ability to see possibilities shaped your life?",
      "What would you create if all resources were available?",
      "When do you feel most confident in your vision?",
      "How do you communicate complex ideas to others?",
      "What patterns do you notice in your visionary thinking?",
      "How do you know when a vision is worth pursuing?",
      "What childhood dreams still influence your vision today?",
      "How do you stay grounded while thinking big?",
      "What aspects of visioning energize you most?",
      "How do you handle resistance to your ideas?",
      "What would you envision if fear wasn't a factor?",
      "How do you balance innovation with practical constraints?",
      "What makes your vision different from others'?",
      "How do you turn abstract ideas into concrete plans?",
      "What would make your visionary work most meaningful?",
      "How do you define a successful vision or future?"
    ],
    futurePathQuestions: [
      "What future do you most want to help create?",
      "How can you scale your visionary impact globally?",
      "What skills would make your visions more achievable?",
      "How will you measure progress toward your envisioned future?",
      "What partners or allies would help realize your vision?",
      "How can you maintain your vision while adapting to change?",
      "What would you regret not envisioning or creating?",
      "How can you inspire others to join your visionary mission?",
      "What technologies could accelerate your vision's realization?",
      "How will your visionary approach evolve as you mature?",
      "What resources would bring your vision to life?",
      "How can you balance idealism with practical implementation?",
      "What would financial backing allow you to envision and create?",
      "How can you address humanity's greatest future challenges?",
      "What relationships would strengthen your visionary work?",
      "How will you stay inspired as your visions become reality?",
      "What would make your visionary legacy most impactful?",
      "How can you create platforms for other visionaries?",
      "What sacred future calls to your visionary heart?",
      "How will you know you're fulfilling your visionary purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What drives your desire to bring people together?",
      "When do you feel most fulfilled in your connections?",
      "How do you balance your needs with others' needs?",
      "What relationships have shaped you most profoundly?",
      "How has your empathy been both a gift and a challenge?",
      "What would you connect if all barriers were removed?",
      "When do you feel most authentic in your relationships?",
      "How do you know when you're overextending yourself socially?",
      "What patterns do you notice in your relationship dynamics?",
      "How do you handle conflict while maintaining connection?",
      "What childhood experiences shaped your connector nature?",
      "How do you create safe spaces for others?",
      "What aspects of connecting energize you most?",
      "How do you maintain your identity while adapting to others?",
      "What would you bridge if you had unlimited influence?",
      "How do you heal from relationship wounds?",
      "What makes your connection style unique?",
      "How do you balance giving and receiving in relationships?",
      "What would make your connection work most meaningful?",
      "How do you define healthy, authentic connection?"
    ],
    futurePathQuestions: [
      "What communities or groups do you want to help connect?",
      "How can you scale your connecting impact more widely?",
      "What relationship skills do you want to develop further?",
      "How will you measure success in your connecting work?",
      "What partnerships would amplify your mission to connect others?",
      "How can you connect others while maintaining your own wellness?",
      "What would you regret not bridging or healing relationally?",
      "How can you teach others your connecting and relationship skills?",
      "What technologies could enhance your ability to connect people?",
      "How will your approach to connection evolve as you grow?",
      "What resources would strengthen your connecting work?",
      "How can you balance virtual and in-person connection?",
      "What would financial stability allow you to focus on connecting?",
      "How can you address loneliness and disconnection in society?",
      "What relationships would support your connecting mission?",
      "How will you stay energized while constantly giving to connections?",
      "What would make your connecting legacy most impactful?",
      "How can you create lasting communities and connections?",
      "What sacred connections call to your heart?",
      "How will you know you're fulfilling your connecting purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What complex problems most capture your strategic mind?",
      "When do you feel most brilliant in your analytical thinking?",
      "How do you balance logic with intuition in decision-making?",
      "What systems or processes do you most enjoy optimizing?",
      "How has your strategic thinking shaped your life choices?",
      "What would you solve if you had unlimited data and resources?",
      "When do you feel most confident in your strategic abilities?",
      "How do you communicate complex strategies to others?",
      "What patterns do you notice in your problem-solving approach?",
      "How do you know when you've found the optimal solution?",
      "What childhood experiences developed your strategic thinking?",
      "How do you stay flexible while maintaining strategic focus?",
      "What aspects of strategy and analysis energize you most?",
      "How do you handle ambiguity and incomplete information?",
      "What would you design if constraints didn't exist?",
      "How do you balance perfectionism with progress?",
      "What makes your strategic approach unique?",
      "How do you ensure your strategies serve human needs?",
      "What would make your strategic work most meaningful?",
      "How do you define successful and ethical strategy?"
    ],
    futurePathQuestions: [
      "What large-scale problems do you want to help solve strategically?",
      "How can you scale your strategic impact across industries?",
      "What strategic skills or knowledge do you want to develop?",
      "How will you measure the success of your strategic contributions?",
      "What teams or organizations would benefit from your strategic mind?",
      "How can you strategize sustainably without burning out?",
      "What would you regret not solving or optimizing?",
      "How can you teach others strategic thinking and problem-solving?",
      "What emerging technologies could enhance your strategic work?",
      "How will your strategic approach evolve as complexity increases?",
      "What resources would amplify your strategic capabilities?",
      "How can you balance efficiency with human-centered design?",
      "What would financial independence allow you to strategize for?",
      "How can you address systemic inefficiencies and problems?",
      "What relationships would strengthen your strategic work?",
      "How will you stay innovative as your experience grows?",
      "What would make your strategic legacy most impactful?",
      "How can you create frameworks that help others think strategically?",
      "What sacred solutions call to your strategic heart?",
      "How will you know you're fulfilling your strategic purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What drives your desire to perform and express yourself?",
      "When do you feel most alive and authentic on stage or in front of others?",
      "How do you balance performance with genuine self-expression?",
      "What emotions or messages do you most want to convey through performance?",
      "How has performing shaped your sense of identity?",
      "What would you perform if audience approval didn't matter?",
      "When do you feel most confident in your expressive abilities?",
      "How do you handle criticism and rejection in your performance?",
      "What patterns do you notice in your relationship with audiences?",
      "How do you know when you're performing authentically versus for validation?",
      "What childhood experiences awakened your performer nature?",
      "How do you recharge after giving so much energy in performance?",
      "What aspects of performing energize you most?",
      "How do you maintain your sense of self outside of performance?",
      "What would you express if all stages were open to you?",
      "How do you balance vulnerability with strength in performance?",
      "What makes your performance style unique?",
      "How do you use performance to create positive change?",
      "What would make your performance work most meaningful?",
      "How do you define successful and impactful performance?"
    ],
    futurePathQuestions: [
      "What messages or emotions do you want to share through performance?",
      "How can you scale your performance impact to reach more people?",
      "What performance skills or techniques do you want to master?",
      "How will you measure the success of your performance career?",
      "What collaborations would elevate your performance work?",
      "How can you perform sustainably while maintaining your wellbeing?",
      "What would you regret not performing or expressing?",
      "How can you mentor emerging performers and artists?",
      "What new platforms or mediums could showcase your performance?",
      "How will your performance style evolve as you mature?",
      "What resources would enhance your performance capabilities?",
      "How can you balance commercial success with artistic integrity?",
      "What would financial security allow you to focus on performing?",
      "How can you use performance to address social issues or healing?",
      "What relationships would support your performance journey?",
      "How will you stay inspired and avoid creative burnout?",
      "What would make your performance legacy most impactful?",
      "How can you create opportunities for other performers?",
      "What sacred expression calls to your performer heart?",
      "How will you know you're fulfilling your performance purpose?"
    ],
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
    selfDiscoveryQuestions: [
      "What transformation or alchemy most calls to your soul?",
      "When do you feel most powerful in your ability to transform situations?",
      "How do you integrate seemingly opposite forces or ideas?",
      "What patterns do you see in how you facilitate change?",
      "How has your own transformation journey shaped your identity?",
      "What would you transform if you had unlimited alchemical power?",
      "When do you feel most aligned with your transformative gifts?",
      "How do you balance intensity with gentleness in transformation?",
      "What shadow aspects of yourself have you successfully alchemized?",
      "How do you know when transformation is authentic versus forced?",
      "What childhood experiences awakened your alchemist nature?",
      "How do you handle the responsibility of facilitating others' transformation?",
      "What aspects of alchemy and transformation energize you most?",
      "How do you maintain your center while navigating intense change?",
      "What would you alchemize if fear and resistance didn't exist?",
      "How do you ensure transformation serves the highest good?",
      "What makes your approach to transformation unique?",
      "How do you balance destruction and creation in your alchemy?",
      "What would make your alchemical work most meaningful?",
      "How do you define successful and ethical transformation?"
    ],
    futurePathQuestions: [
      "What transformations do you want to lead or facilitate in the world?",
      "How can you scale your alchemical impact across different domains?",
      "What transformation skills or knowledge do you want to develop?",
      "How will you measure the success of your transformative work?",
      "What partnerships would amplify your alchemical mission?",
      "How can you facilitate transformation while maintaining your own balance?",
      "What would you regret not transforming or helping others transform?",
      "How can you train others in the art of conscious transformation?",
      "What emerging sciences or technologies could enhance your alchemical work?",
      "How will your approach to transformation evolve as you gain experience?",
      "What resources would deepen your transformative capabilities?",
      "How can you balance personal alchemy with service to collective transformation?",
      "What would financial freedom allow you to focus on transforming?",
      "How can you address humanity's greatest transformation challenges?",
      "What relationships would support your alchemical journey?",
      "How will you stay grounded while working with intense transformation?",
      "What would make your alchemical legacy most impactful?",
      "How can you create safe containers for others' transformation?",
      "What sacred alchemy calls to your transformative heart?",
      "How will you know you're fulfilling your alchemical purpose?"
    ],
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
