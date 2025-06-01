
export interface ArchetypeData {
  name: string;
  strengths: string;
  growthAreas: string;
  lifePurpose: string;
  careerPaths: string[];
}

export const archetypeInsights: Record<string, ArchetypeData> = {
  "The Seeker": {
    name: "The Seeker",
    strengths: "Natural curiosity, spiritual awareness, and the ability to see beyond surface-level reality. You have a gift for finding meaning in experiences and helping others discover their own truth.",
    growthAreas: "Learning to balance exploration with grounding, and finding stability while maintaining your adventurous spirit. Sometimes you may get lost in the search and forget to appreciate what you've already found.",
    lifePurpose: "You are here to explore the depths of existence and guide others on their spiritual journey. Your role is to be a bridge between the seen and unseen worlds.",
    careerPaths: ["Spiritual Teacher", "Researcher", "Travel Guide", "Philosopher", "Therapist", "Writer"]
  },
  "The Builder": {
    name: "The Builder",
    strengths: "Practical wisdom, strong foundation-building skills, and the ability to manifest ideas into reality. You excel at creating lasting structures and systems that benefit others.",
    growthAreas: "Learning to embrace flexibility and innovation while maintaining your solid foundation. Sometimes your focus on stability can limit your willingness to take beneficial risks.",
    lifePurpose: "You are here to create lasting value and build foundations that will support future generations. Your role is to transform vision into tangible reality.",
    careerPaths: ["Architect", "Engineer", "Business Owner", "Project Manager", "Real Estate Developer", "Financial Planner"]
  },
  "The Healer": {
    name: "The Healer",
    strengths: "Deep empathy, intuitive understanding of others' pain, and natural healing abilities. You have the gift of helping others transform their wounds into wisdom.",
    growthAreas: "Learning to maintain healthy boundaries and not absorb others' pain as your own. Sometimes your desire to help can lead to burnout or codependency.",
    lifePurpose: "You are here to facilitate healing and transformation in others. Your role is to be a catalyst for emotional, physical, or spiritual recovery.",
    careerPaths: ["Doctor", "Therapist", "Counselor", "Nurse", "Alternative Healer", "Social Worker"]
  },
  "The Leader": {
    name: "The Leader",
    strengths: "Natural charisma, vision for the future, and the ability to inspire and motivate others. You excel at seeing the bigger picture and rallying people toward common goals.",
    growthAreas: "Learning to balance authority with humility, and ensuring your leadership serves others rather than just your ego. Sometimes your strong will can overshadow others' contributions.",
    lifePurpose: "You are here to guide and inspire others toward positive change. Your role is to be a beacon of direction and motivation in times of uncertainty.",
    careerPaths: ["CEO", "Political Leader", "Team Manager", "Coach", "Motivational Speaker", "Entrepreneur"]
  },
  "The Creator": {
    name: "The Creator",
    strengths: "Boundless imagination, artistic vision, and the ability to bring beauty and innovation into the world. You have the gift of seeing possibilities that others miss.",
    growthAreas: "Learning to balance creative freedom with practical considerations, and finishing projects rather than constantly starting new ones. Sometimes your perfectionism can prevent you from sharing your gifts.",
    lifePurpose: "You are here to bring beauty, innovation, and inspiration into the world. Your role is to be a channel for divine creativity and artistic expression.",
    careerPaths: ["Artist", "Designer", "Writer", "Musician", "Inventor", "Creative Director"]
  },
  "The Protector": {
    name: "The Protector",
    strengths: "Strong sense of justice, loyalty to those you care about, and the courage to stand up for what's right. You excel at creating safety and security for others.",
    growthAreas: "Learning to trust that others can handle their own challenges, and not taking on more responsibility than is truly yours. Sometimes your protective nature can become controlling.",
    lifePurpose: "You are here to safeguard and defend what is precious and vulnerable. Your role is to be a guardian of justice, safety, and moral integrity.",
    careerPaths: ["Law Enforcement", "Military Officer", "Lawyer", "Security Specialist", "Child Advocate", "Environmental Activist"]
  },
  "The Visionary": {
    name: "The Visionary",
    strengths: "Ability to see future possibilities, innovative thinking, and the gift of inspiring others with your vision. You excel at recognizing patterns and trends before others.",
    growthAreas: "Learning to ground your visions in practical steps and communicate them in ways others can understand. Sometimes your focus on the future can disconnect you from present realities.",
    lifePurpose: "You are here to envision and guide humanity toward a better future. Your role is to be a prophet of positive change and innovation.",
    careerPaths: ["Futurist", "Technology Innovator", "Strategic Planner", "Consultant", "Research Scientist", "Social Entrepreneur"]
  },
  "The Transformer": {
    name: "The Transformer",
    strengths: "Ability to navigate change and crisis, deep understanding of life's cycles, and the power to help others through major transitions. You excel at finding opportunity in difficulty.",
    growthAreas: "Learning to find stability within constant change, and not creating upheaval when peace would be more beneficial. Sometimes your comfort with transformation can make others feel unsettled.",
    lifePurpose: "You are here to facilitate major life transitions and help others embrace necessary changes. Your role is to be a guide through life's most challenging passages.",
    careerPaths: ["Life Coach", "Crisis Counselor", "Change Management Consultant", "Therapist", "Spiritual Guide", "Emergency Responder"]
  }
};

export const getArchetypeData = (archetype: string): ArchetypeData => {
  return archetypeInsights[archetype] || {
    name: archetype,
    strengths: "Natural leadership qualities, strong intuition, and the ability to inspire others toward positive change.",
    growthAreas: "Learning to balance ambition with patience, and trusting the divine timing of your journey.",
    lifePurpose: "You are here to guide others through transformation and help them discover their own inner wisdom.",
    careerPaths: ["Life Coach", "Teacher", "Counselor", "Entrepreneur", "Healer", "Writer"]
  };
};
