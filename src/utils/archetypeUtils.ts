
export const getArchetypeEmoji = (archetype: string) => {
  const emojiMap: Record<string, string> = {
    "The Builder": "🛠️",
    "The Dreamer": "🌙", 
    "The Leader": "🔥",
    "The Healer": "🌿",
    "The Seeker": "🧭",
    "The Rebel": "⚡",
    "The Mystic": "🔮",
    "The Visionary": "🌈",
    "The Connector": "🤝",
    "The Strategist": "🧠",
    "The Performer": "🎭",
    "The Alchemist": "🦂"
  };
  return emojiMap[archetype] || "🌟";
};
