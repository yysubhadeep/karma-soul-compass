
export interface DetailedQuestion {
  question: string;
  answer: string;
}

export interface ArchetypeDetailedQuestions {
  soulMirror: DetailedQuestion[];
  dharmaCompass: DetailedQuestion[];
}

export const detailedQuestionsData: Record<string, ArchetypeDetailedQuestions> = {
  "The Alchemist": {
    soulMirror: [
      {
        question: "What patterns do I keep repeating in my relationships, and how do they mirror my inner relationship with myself?",
        answer: "As an Alchemist, you likely attract relationships that challenge you to transform. You may find yourself drawn to people who need healing or who mirror your own unresolved aspects. The pattern often involves taking on the role of the transformer while neglecting your own need for support and understanding."
      },
      {
        question: "When do I feel most authentic and alive, and what does this reveal about my true nature?",
        answer: "You feel most alive when you're in the process of transformation - whether that's helping others evolve, creating something beautiful from chaos, or diving deep into spiritual or psychological work. This reveals your true nature as a bridge between worlds, someone who can see potential where others see problems."
      },
      {
        question: "What am I avoiding looking at in myself, and how is this avoidance limiting my growth?",
        answer: "You may be avoiding your own need for stability and groundedness. Your constant focus on transformation can become a way to avoid sitting with discomfort or building consistent foundations. This avoidance limits your ability to create lasting change."
      },
      {
        question: "How do I handle power and influence, and what does this reveal about my relationship with authority?",
        answer: "You likely have a complex relationship with traditional authority, preferring to lead through inspiration and transformation rather than hierarchy. You may struggle with owning your power or may swing between being overly humble and overly controlling."
      },
      {
        question: "What childhood experiences shaped my current beliefs about love, safety, and belonging?",
        answer: "You may have learned early that love comes through being useful or transformative for others. Perhaps you experienced instability that taught you to find safety in change rather than consistency, or you learned that belonging meant being the one who fixes or heals others."
      },
      {
        question: "How do I sabotage myself when I'm on the verge of success or breakthrough?",
        answer: "You might sabotage through perfectionism, constantly tweaking and improving instead of completing. Or you may unconsciously create chaos when things become too stable, as transformation is your comfort zone."
      },
      {
        question: "What aspects of my shadow am I projecting onto others?",
        answer: "You may project your own need for healing onto others, seeing them as broken when you're avoiding your own wounds. You might also project your fear of stagnation, seeing others as stuck when you're actually afraid of your own stability."
      },
      {
        question: "How do I truly want to be seen and understood by others?",
        answer: "You want to be seen as wise and transformative, but also as someone who has their own depths and mysteries. You long to be understood for your complexity and to be valued for more than just your ability to help others change."
      },
      {
        question: "What does my relationship with money reveal about my deeper values and fears?",
        answer: "Your relationship with money often reflects your complex relationship with material stability. You may undervalue your transformative gifts or struggle with charging for spiritual/healing work, revealing fears about combining the sacred with the material."
      },
      {
        question: "What am I most afraid of losing, and how does this fear shape my choices?",
        answer: "You're likely most afraid of losing your ability to grow and transform, which can lead to choices that prioritize change over stability. This fear might cause you to leave situations or relationships before they become 'too comfortable.'"
      }
    ],
    dharmaCompass: [
      {
        question: "What unique gifts am I meant to share with the world, and how can I embody them more fully?",
        answer: "Your gift is the ability to see potential for transformation in any situation and to guide others through their metamorphosis. Embody this more fully by developing patience with the process and trusting in perfect timing."
      },
      {
        question: "How can I align my daily actions with my highest purpose and values?",
        answer: "Create daily practices that honor both transformation and integration. This might mean meditation, journaling, or creative work that allows you to process and integrate your insights before sharing them with others."
      },
      {
        question: "What legacy do I want to leave, and what steps can I take today to create it?",
        answer: "You want to leave a legacy of profound transformation - individuals and communities that are more whole because of your influence. Start by documenting your insights and creating systems that can help others even when you're not physically present."
      },
      {
        question: "How can I create more balance between serving others and nurturing myself?",
        answer: "Recognize that your own transformation is part of your service. Schedule regular 'alchemical time' for your own growth and treat it as sacred. Your depth of self-knowledge directly impacts your ability to guide others."
      },
      {
        question: "What new skills or knowledge do I need to develop to fulfill my potential?",
        answer: "Focus on developing practical skills that can ground your transformative gifts - business acumen, communication skills, or specific healing modalities. Also cultivate patience and the ability to work with natural timing rather than forcing change."
      },
      {
        question: "How can I build sustainable systems and structures to support my vision?",
        answer: "Create frameworks and processes for your transformative work. This might include developing signature programs, building a team that can support your vision, or creating passive income streams that allow you to do deeper work with fewer clients."
      },
      {
        question: "What relationships and partnerships would accelerate my growth and impact?",
        answer: "Seek partnerships with grounded, practical people who can help manifest your visions. Connect with other healers and transformers for mutual support, and cultivate relationships with mentors who have successfully navigated the path you're on."
      },
      {
        question: "How can I expand my influence while staying true to my authentic self?",
        answer: "Share your journey transparently, including your struggles and growth edges. People connect with authenticity over perfection. Consider writing, speaking, or creating content that reveals the real process of transformation."
      },
      {
        question: "What fears are holding me back from claiming my full power and potential?",
        answer: "You may fear being seen as arrogant or fear the responsibility that comes with your power. There might also be fear of success itself - that achievement will make you lose your edge or ability to relate to others' struggles."
      },
      {
        question: "How can I contribute to healing and transforming the collective consciousness?",
        answer: "Focus on creating ripple effects through the individuals you work with. Train others in your methods, create content that reaches broader audiences, and consider how your personal transformation contributes to collective healing."
      }
    ]
  },
  // Placeholder for other archetypes - to be filled in later
  "The Warrior": {
    soulMirror: [
      {
        question: "Placeholder question for Warrior soul mirror 1",
        answer: "Placeholder answer for Warrior soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Warrior dharma compass 1", 
        answer: "Placeholder answer for Warrior dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Sage": {
    soulMirror: [
      {
        question: "Placeholder question for Sage soul mirror 1",
        answer: "Placeholder answer for Sage soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Sage dharma compass 1",
        answer: "Placeholder answer for Sage dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Creator": {
    soulMirror: [
      {
        question: "Placeholder question for Creator soul mirror 1",
        answer: "Placeholder answer for Creator soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Creator dharma compass 1",
        answer: "Placeholder answer for Creator dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Lover": {
    soulMirror: [
      {
        question: "Placeholder question for Lover soul mirror 1",
        answer: "Placeholder answer for Lover soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Lover dharma compass 1",
        answer: "Placeholder answer for Lover dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Mystic": {
    soulMirror: [
      {
        question: "Placeholder question for Mystic soul mirror 1",
        answer: "Placeholder answer for Mystic soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Mystic dharma compass 1",
        answer: "Placeholder answer for Mystic dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Healer": {
    soulMirror: [
      {
        question: "Placeholder question for Healer soul mirror 1",
        answer: "Placeholder answer for Healer soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Healer dharma compass 1",
        answer: "Placeholder answer for Healer dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Rebel": {
    soulMirror: [
      {
        question: "Placeholder question for Rebel soul mirror 1",
        answer: "Placeholder answer for Rebel soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Rebel dharma compass 1",
        answer: "Placeholder answer for Rebel dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Ruler": {
    soulMirror: [
      {
        question: "Placeholder question for Ruler soul mirror 1",
        answer: "Placeholder answer for Ruler soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Ruler dharma compass 1",
        answer: "Placeholder answer for Ruler dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Explorer": {
    soulMirror: [
      {
        question: "Placeholder question for Explorer soul mirror 1",
        answer: "Placeholder answer for Explorer soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Explorer dharma compass 1",
        answer: "Placeholder answer for Explorer dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Caregiver": {
    soulMirror: [
      {
        question: "Placeholder question for Caregiver soul mirror 1",
        answer: "Placeholder answer for Caregiver soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Caregiver dharma compass 1",
        answer: "Placeholder answer for Caregiver dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  },
  "The Jester": {
    soulMirror: [
      {
        question: "Placeholder question for Jester soul mirror 1",
        answer: "Placeholder answer for Jester soul mirror 1"
      }
      // ... 9 more questions to be added
    ],
    dharmaCompass: [
      {
        question: "Placeholder question for Jester dharma compass 1",
        answer: "Placeholder answer for Jester dharma compass 1"
      }
      // ... 9 more questions to be added
    ]
  }
};

export const getDetailedQuestions = (archetype: string): ArchetypeDetailedQuestions | null => {
  return detailedQuestionsData[archetype] || null;
};
