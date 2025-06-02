import React from 'react';

interface SelfFutureContentProps {
  archetype: string;
}

const SelfFutureContent = ({ archetype }: SelfFutureContentProps) => {
  const getArchetypeContent = (archetype: string) => {
    const content: Record<string, any> = {
      "The Builder": {
        emoji: "🛠️",
        subtitle: "Grounded • Responsible • Dependable • Legacy-Builder",
        soulMirror: [
          "A foundation layer. You're here to build — not just structures, but lasting legacies.",
          "The need to create stability — to see your work stand the test of time.",
          "Discipline. You show up, do the work, and keep your promises.",
          "Resistance to change. You sometimes hold on too tightly to what’s familiar.",
          "With steady persistence. You plan carefully and move deliberately.",
          "Practical, reliable ones — you value tradition and proven methods.",
          "Fear of failure or loss of control.",
          "Building, organizing, managing, planning, and creating systems.",
          "Taking responsibility — often carrying more than your share.",
          "Others who value security and tradition.",
          "In stable environments where your efforts are appreciated.",
          "With patience and consistency.",
          "That you’re not flexible enough or too rigid.",
          "Seeing your work come to fruition and create impact.",
          "Rest, routine, and time with trusted people.",
          "By overworking and neglecting self-care.",
          "Construction, management, finance, law, education, or public service.",
          "Approval from authority figures.",
          "Your worth is in your integrity and reliability.",
          "To build a foundation others can stand on."
        ],
        dharmaCompass: [
          "Roles in leadership, management, or legacy-building.",
          "Mentors and steady collaborators.",
          "Over-controlling or micromanaging.",
          "\"Patience and persistence build lasting success.\"",
          "From creating systems and structures that serve many.",
          "A long-term project or institution to nurture.",
          "Being \"too rigid\" or \"too serious.\"",
          "Stable income streams and asset-building.",
          "Trusted partners and loyal teams.",
          "Communities valuing tradition and stability.",
          "You become a pillar of your community or field.",
          "Flexibility and openness to new ideas.",
          "Burnout from overwork and perfectionism.",
          "Delegating and trusting others.",
          "Supportive, grounded collaborators.",
          "Your work flows and your impact grows.",
          "Tools for organization and communication.",
          "Leading teams and mentoring others.",
          "That your steady work is a rare gift.",
          "To create lasting value through discipline and care."
        ]
      },
      "The Dreamer": {
        emoji: "🌙",
        subtitle: "Creative • Intuitive • Emotionally Deep • Soulful",
        soulMirror: [
          "A visionary. You're here to dream — not just imagine, but inspire through feeling.",
          "The need to express and connect deeply with others.",
          "Imagination. You see possibilities beyond the obvious.",
          "Escapism. You sometimes avoid reality through fantasy.",
          "With emotional openness. You trust your feelings to guide you.",
          "Sensitive, artistic ones — you value beauty and meaning.",
          "Fear of rejection or being misunderstood.",
          "Art, music, writing, healing, and spiritual connection.",
          "Living in your inner world — sometimes disconnected from the practical.",
          "Other creatives and sensitive souls.",
          "In quiet, inspiring places where you can reflect.",
          "Through emotional expression and creativity.",
          "That your dreams are unrealistic or too fragile.",
          "Moments of creative flow and deep connection.",
          "Solitude, nature, and artistic practice.",
          "By avoiding practical responsibilities.",
          "Creative arts, healing, counseling, or spiritual work.",
          "Validation from others’ appreciation.",
          "Your value is in your unique vision and heart.",
          "To bring beauty and healing through your gifts."
        ],
        dharmaCompass: [
          "Creative and healing professions.",
          "Supportive, emotionally present friends.",
          "Getting lost in fantasy or avoidance.",
          "\"My feelings are my compass and my strength.\"",
          "From sharing your art and healing presence.",
          "A creative project or healing practice.",
          "Being \"too sensitive\" or \"too dreamy.\"",
          "Income from creative or spiritual work.",
          "Collaborators who honor your vision.",
          "Places that nurture creativity and peace.",
          "You become a beacon of inspiration and healing.",
          "Balancing dreams with grounded action.",
          "Avoiding responsibility or practical matters.",
          "Taking steps to manifest your vision.",
          "Partners who support your emotional depth.",
          "You feel aligned and inspired daily.",
          "Tools for creative expression and connection.",
          "Working with others who complement your gifts.",
          "That your dreams have power and purpose.",
          "To heal and inspire through your soulful presence."
        ]
      },
      "The Leader": {
        emoji: "🔥",
        subtitle: "Confident • Inspiring • Natural Born Commander • Magnetic Presence",
        soulMirror: [
          "A natural leader. You're here to inspire action — not just speak, but move people toward possibility.",
          "The need to create impact — to see results and know your vision changed something real.",
          "Confidence. You enter a room and people feel the shift — your presence commands attention.",
          "Self-doubt disguised as perfectionism. You sometimes wait for the \"perfect moment\" instead of leading now.",
          "With determination. You rally people, make plans, and charge forward — sometimes faster than others can follow.",
          "Bold, instinct-driven ones — you trust your gut and move when others hesitate.",
          "Failure, rejection, and the fear of not being good enough to lead others.",
          "Vision, motivation, public speaking, team building, and turning ideas into movements.",
          "Taking charge — often before others ask. You naturally step into leadership, sometimes carrying more than your share.",
          "Ambitious climbers, loyal supporters, and people who need direction or inspiration.",
          "In the spotlight — speaking, leading, or creating something that feels bigger than yourself.",
          "Head-on. You address it directly, sometimes with more force than needed.",
          "That you'll fail publicly — or that your confidence is just a mask for insecurity.",
          "Leading a team to victory. Seeing your vision come to life. Knowing people believed in you and succeeded because of it.",
          "Active recovery — sports, celebration, or time with people who see your worth beyond what you achieve.",
          "By dimming your light to make others comfortable. You shrink when you should shine.",
          "Entrepreneurship, management, sales, politics, media, coaching, or anything where you can build and lead teams.",
          "Approval from the crowd. You don't need permission to lead.",
          "Your worth isn't measured by how many follow — but by how authentically you lead.",
          "To light the way for others — to show them what's possible when someone believes in their vision and acts on it."
        ],
        dharmaCompass: [
          "Leadership roles — team management, entrepreneurship, public speaking, executive positions, or building mission-driven companies.",
          "Other natural leaders and loyal supporters — people who amplify your vision and challenge you to grow.",
          "Ego-driven leadership. Leading for power instead of purpose makes you empty and alone.",
          "\"True leadership is service, not dominance.\"",
          "From teams and communities you build, inspire, and guide toward shared success.",
          "A leadership initiative — start something, take charge of a project, or launch a mission that needs your unique vision.",
          "Being \"too much\" or \"too ambitious.\" Your fire is exactly what the world needs.",
          "Multiple income streams from leadership: speaking, coaching, equity, consulting, and mission-driven ventures.",
          "Visionary collaborators and grounded operators — those who dream big and execute well.",
          "Dynamic cities or communities where leadership is valued — think Mumbai, Delhi, Bangalore, or international business hubs.",
          "You become a recognized leader — someone whose vision shapes industries, communities, or movements that matter.",
          "Emotional intelligence. The best leaders connect hearts, not just minds.",
          "Imposter syndrome, burnout from over-giving, and leading without boundaries.",
          "Delegation. Great leaders multiply themselves through others.",
          "Someone confident but humble — who supports your vision while keeping you grounded in service.",
          "Your decisions feel clear, your team trusts you, and your impact grows naturally without force.",
          "Your megaphone. Use digital platforms to reach more people and spread your message globally.",
          "Leading a team where you can delegate and multiply your impact through others.",
          "That your story — your journey to leadership — is the teaching others need most.",
          "To show others their own power — and to build a legacy of leaders who lead with both strength and heart."
        ]
      },
      "The Healer": {
        emoji: "🌿",
        subtitle: "Nurturing • Intuitive • Service-Oriented • Natural Caretaker",
        soulMirror: [
          "A natural healer. You're here to restore balance — not just fix, but bring wholeness to what's broken.",
          "The need to serve — to see others healthy, peaceful, and free from unnecessary suffering.",
          "Compassion. You feel others' pain and instinctively know how to soothe it.",
          "Absorbing too much. You take on others' emotions and forget to protect your own energy.",
          "With care and consideration. You research, prepare, and move slowly to avoid harm.",
          "Heart-centered ones — you choose what feels right and serves the highest good.",
          "Others' suffering, your own exhaustion, and the fear that you're not doing enough.",
          "Listening, empathy, energy work, nutrition, herbalism, counseling, and creating safe spaces.",
          "Being the go-to person for emotional support — often giving more than you receive.",
          "Wounded souls, empaths, and people in crisis — drawn to your natural healing presence.",
          "In nature, quiet spaces, or anywhere you can help others feel safe and understood.",
          "With patience and understanding — you try to heal the root, not just the symptoms.",
          "That you'll burn out from giving too much, or that others will drain you completely.",
          "A breakthrough moment — when someone heals, finds peace, or feels whole again because of your care.",
          "Solitude in nature, gentle movement, nourishing food, and time away from others' needs.",
          "By saying yes when you mean no. You give until you're empty, then feel resentful.",
          "Healthcare, therapy, wellness coaching, social work, nutrition, teaching, or any service-based healing profession.",
          "External validation for your worth. Your value isn't measured by how much you give.",
          "You can't heal everyone — and that's not your job. Healing happens when people are ready.",
          "To be a safe harbor for others — and to show them that healing is possible when someone truly cares."
        ],
        dharmaCompass: [
          "Healing professions — therapy, wellness coaching, healthcare, social work, or alternative healing modalities.",
          "Other healers and emotionally healthy people — those who support you as much as you support them.",
          "Martyr complex. Burning out from over-giving serves no one.",
          "\"I heal best when I'm healthy first.\"",
          "From healing work, wellness services, courses, or products that genuinely help others feel better.",
          "A healing practice — start a wellness program, therapy practice, support group, or healing service.",
          "Being \"too sensitive\" or \"too caring.\" The world needs your healing heart.",
          "Service-based income: healing sessions, wellness programs, courses, products, or consulting.",
          "Balanced healers and supportive partners — people who give you energy instead of taking it.",
          "Peaceful, nature-rich environments — think hill stations, coastal towns, or quiet suburbs with access to healing communities.",
          "You become a master healer — someone whose presence and work creates lasting transformation in others' lives.",
          "Boundaries. You can care deeply while protecting your own energy.",
          "Codependency, burnout, and taking responsibility for others' healing journeys.",
          "Saying no with love. Boundaries are an act of service to yourself and others.",
          "Someone emotionally stable and supportive — who reminds you to receive care, not just give it.",
          "You feel energized by your work, others heal sustainably, and you're not carrying their pain.",
          "Your healing toolkit. Use apps, online platforms, and digital tools to reach more people effectively.",
          "In a small, supportive team where you can focus on healing rather than managing people.",
          "That your own healing journey is your greatest credential — and others need to see that transformation is possible.",
          "To show others that healing is possible — and to create spaces where people feel safe to become whole again."
        ]
      },
      "The Seeker": {
        emoji: "🧭",
        subtitle: "Curious • Philosophical • Truth-Hungry • Eternal Student",
        soulMirror: [
          "A truth seeker. You're here to explore the deeper questions — not just learn, but understand life's mysteries.",
          "The need to understand — to find meaning, truth, and wisdom beyond surface appearances.",
          "Curiosity. You see connections others miss and ask questions that matter.",
          "Restlessness. You sometimes search so much that you miss the wisdom right in front of you.",
          "With exploration and reflection. You need to understand before you accept.",
          "Wisdom-based ones — you choose paths that offer growth, learning, or deeper understanding.",
          "Meaninglessness, feeling lost, and the fear that there are no real answers.",
          "Research, teaching, writing, connecting ideas, seeing patterns, and making meaning from chaos.",
          "Always learning something new — sometimes at the expense of applying what you already know.",
          "Other seekers, teachers, and people on spiritual or intellectual journeys.",
          "In libraries, nature, spiritual spaces, or deep conversations about life's big questions.",
          "By seeking to understand all sides — sometimes overthinking instead of taking action.",
          "That life is random and meaningless — or that you'll never find what you're truly seeking.",
          "A moment of clarity — when pieces click together and you see a deeper truth about life.",
          "Solo reflection, reading, meditation, travel, or time in nature to process and integrate.",
          "By getting stuck in the search. You research forever but never commit to a path.",
          "Teaching, writing, research, counseling, spiritual guidance, philosophy, or any field that explores human meaning.",
          "The \"perfect\" answer. Wisdom comes through experience, not just information.",
          "The journey IS the destination. Seeking is not a problem to solve — it's a way of living.",
          "To bridge the practical and spiritual — and help others find meaning in their own life journey."
        ],
        dharmaCompass: [
          "Wisdom-sharing roles — teaching, writing, research, spiritual guidance, or philosophy-based work.",
          "Other seekers and wise mentors — people who love big questions and don't need quick answers.",
          "Analysis paralysis. Endlessly seeking without ever choosing a path to commit to.",
          "\"Understanding comes through living, not just thinking.\"",
          "From sharing your wisdom — teaching, writing, courses, spiritual guidance, or research-based work.",
          "A wisdom project — write a book, start a course, create content, or teach what you've learned.",
          "Being \"too philosophical\" or \"impractical.\" Your depth is exactly what shallow times need.",
          "Knowledge-based income: courses, books, teaching, consulting, or wisdom-sharing services.",
          "Fellow truth-seekers and practical dreamers — those who think deeply but also take action.",
          "Culturally rich, spiritually open places — think Rishikesh, Dharamshala, or cities with universities and spiritual communities.",
          "You become a wisdom teacher — someone whose seeking helps others find their own path to truth and meaning.",
          "Practical application. Wisdom without action is just philosophy.",
          "Overthinking, spiritual bypassing, and avoiding commitment because no path feels \"perfect.\"",
          "Choosing a path and walking it — even when you don't have all the answers.",
          "Someone grounded but open-minded — who supports your seeking while encouraging action.",
          "Your understanding deepens, you feel purposeful, and others seek your guidance naturally.",
          "Your research and teaching tool. Use online platforms to share wisdom and connect with other seekers.",
          "Independently or in small collaborations with other wisdom-focused people.",
          "That your questions are as valuable as your answers — and others need permission to seek too.",
          "To help others find meaning — and show them that seeking truth is not just okay, but essential to a life well-lived."
        ]
      },
      "The Rebel": {
        emoji: "⚡",
        subtitle: "Revolutionary • Independent • Status-Quo Challenger • Change Agent",
        soulMirror: [
          "A change catalyst. You're here to challenge what's broken — not just complain, but actively disrupt for better.",
          "The need for justice and freedom — to see systems work fairly and people live authentically.",
          "Courage. You speak up when others stay silent and act when others accept the unacceptable.",
          "Anger without direction. Your passion can become destructive if not channeled toward clear purpose.",
          "With rebellion and resistance — you question everything before you accept anything.",
          "Principle-driven ones — you choose what's right over what's easy or popular.",
          "Injustice, conformity, and the fear that you'll become part of the system you hate.",
          "Activism, innovation, critical thinking, inspiring change, and fearlessly challenging authority.",
          "Being the voice of dissent — questioning rules, systems, and anything that feels wrong or unfair.",
          "Other rebels, free spirits, and people who feel trapped by conventional expectations.",
          "In movements, protests, alternative communities, or anywhere you can fight for what matters.",
          "Intensely and directly — you name the problem and demand change, sometimes burning bridges.",
          "That you'll give up your values for comfort — or that your rebellion will lead to isolation.",
          "A successful revolution — when your challenge creates real positive change in the world.",
          "Creative expression, physical movement, time in counterculture spaces, or planning your next move.",
          "By fighting everything instead of choosing your battles. Not every hill is worth dying on.",
          "Social change, activism, innovative startups, alternative media, or anything that disrupts broken systems.",
          "Others' approval. True rebels create change, not popularity contests.",
          "Revolution starts with evolution — changing yourself is often the most radical act.",
          "To wake people up — and show them that another way is possible if someone is brave enough to build it."
        ],
        dharmaCompass: [
          "Change-making roles — activism, social innovation, disruptive startups, alternative media, or system-changing work.",
          "Other conscious rebels and supportive allies — people who share your values and support your mission.",
          "Rage without purpose. Anger is fuel, not a destination.",
          "\"I channel my rebellion into conscious revolution.\"",
          "From creating alternative solutions — innovative businesses, movements, or systems that work better than what exists.",
          "A change initiative — start a movement, launch a disruptive business, or create an alternative to something broken.",
          "Being \"too radical\" or \"too intense.\" The world needs your fire and vision.",
          "Mission-driven income: social enterprises, consulting, speaking, or businesses that align with your values.",
          "Fellow change-makers and grounded visionaries — people who rebel with purpose, not just anger.",
          "Progressive cities or alternative communities — places where change is welcomed and innovation thrives.",
          "You become a successful revolutionary — someone whose rebellion created lasting positive change in the world.",
          "Strategic thinking. Effective rebellion requires both passion and planning.",
          "Burnout from fighting too many battles, isolation from being too radical, and cynicism from slow progress.",
          "Picking your battles wisely and building coalitions instead of going it alone.",
          "Someone who shares your values but balances your intensity with patience and strategy.",
          "Your changes stick, people join your cause, and the world becomes a little more just because of you.",
          "Your weapon for change. Use social media, apps, and digital tools to organize and spread your message.",
          "Leading a small, focused team of committed change-makers who share your vision.",
          "That your rebellion is needed — but it works best when combined with love, strategy, and sustainable action.",
          "To show others that change is possible — and give them permission to rebel against whatever isn't working in their own lives."
        ]
      },
      "The Mystic": {
        emoji: "🔮",
        subtitle: "Intuitive • Spiritual • Depth-Seeking • Soul Whisperer",
        soulMirror: [
          "A bridge between worlds. You're here to access deeper truths — not just believe, but know through direct experience.",
          "The need to connect with something greater — to touch the sacred and help others remember their spiritual nature.",
          "Intuition. You sense what others can't see and know things without knowing how you know.",
          "Escapism and overwhelm. You sometimes retreat into spiritual realms to avoid earthly responsibilities.",
          "With deep reflection and inner guidance. You trust your intuition over external advice.",
          "Soul-guided ones — you choose what feels spiritually aligned, even if it seems impractical.",
          "Emptiness, spiritual crisis, and the fear that you're too different to belong in this world.",
          "Psychic abilities, energy healing, meditation, dream work, and helping others connect with their inner wisdom.",
          "Being the spiritual advisor — people come to you for guidance, healing, and deeper understanding.",
          "Old souls, spiritual seekers, and people going through awakening or crisis.",
          "In sacred spaces — temples, nature, meditation rooms, or anywhere the veil between worlds feels thin.",
          "With compassion and deeper understanding — you see the soul issue behind the surface problem.",
          "That you're losing your mind, or that your spiritual gifts make you too weird for normal life.",
          "A spiritual breakthrough — yours or someone else's — when the invisible becomes visible and healing happens.",
          "Meditation, prayer, nature immersion, energy work, or time alone to process spiritual downloads.",
          "By hiding your gifts or staying too disconnected from practical reality.",
          "Spiritual guidance, energy healing, meditation teaching, psychic services, or any work that helps others awaken.",
          "Proof of your abilities. Your gifts work through faith and practice, not validation.",
          "You're not here to escape the world — you're here to bring heaven to earth.",
          "To help others remember who they really are — and show them that the spiritual world is not separate from everyday life."
        ],
        dharmaCompass: [
          "Spiritual work — energy healing, meditation teaching, psychic services, spiritual counseling, or consciousness-based practices.",
          "Other spiritually aware people and grounded mystics — those who honor your gifts while keeping you connected to reality.",
          "Spiritual bypassing. Using spirituality to avoid real-world responsibilities or emotional work.",
          "\"I bring my gifts into the world with grounded presence.\"",
          "From spiritual services — healing sessions, readings, courses, retreats, or products that serve people's spiritual growth.",
          "A spiritual offering — start a practice, create a course, write about your experiences, or begin serving others with your gifts.",
          "Being \"too woo\" or \"unrealistic.\" Your spiritual perspective is exactly what a materialistic world needs.",
          "Service-based spiritual income: sessions, courses, retreats, products, or consulting.",
          "Conscious spiritual community and practical supporters — people who honor your gifts while helping you stay grounded.",
          "Spiritually resonant places — near ashrams, retreat centers, sacred sites, or communities that value consciousness.",
          "You become a spiritual teacher — someone whose gifts and wisdom help others awaken to their own spiritual nature.",
          "Practical grounding. Your spiritual gifts need real-world application to serve others effectively.",
          "Isolation, spiritual ego, and getting lost in other realms instead of serving this one.",
          "Daily grounding practices and serving others with your gifts in practical, helpful ways.",
          "Someone spiritually open but practically grounded — who supports your gifts while helping you stay present.",
          "Your guidance helps others, your spiritual practice stays strong, and you feel purposeful rather than spacey.",
          "Your spiritual toolkit. Use apps, online platforms, and digital tools to reach people who need your guidance.",
          "Mostly independently or in small spiritual partnerships with like-minded practitioners.",
          "That your spiritual sensitivity is a superpower — the world needs people who can access deeper wisdom.",
          "To be a spiritual bridge — helping others access their own inner wisdom and remember that life is sacred."
        ]
      },
      "The Visionary": {
        emoji: "🌈",
        subtitle: "Future-Focused • Innovative • Big-Picture Thinker • Possibility Creator",
        soulMirror: [
          "A future creator. You're here to see what's possible — not just dream, but design tomorrow.",
          "The need to innovate and improve — to see a better world and help create it.",
          "Vision. You see possibilities others miss and can imagine solutions that don't yet exist.",
          "Impatience with present reality. You sometimes get so focused on the future that you miss the now.",
          "With excitement and strategic thinking. You see the potential and want to move toward it quickly.",
          "Future-focused ones — you choose what could be over what is, even if it requires patience.",
          "Stagnation, small thinking, and the fear that your vision will never become reality.",
          "Innovation, strategic planning, trend spotting, inspiring others with possibility, and systems thinking.",
          "Being the \"what if\" person — always seeing potential improvements and future possibilities.",
          "Other innovators, early adopters, and people who believe in building a better future.",
          "In forward-thinking environments — tech hubs, innovation labs, creative spaces, or anywhere new ideas are born.",
          "By reframing it as opportunity — you see conflict as a chance to create better solutions.",
          "That your vision is too big, or that you'll be too ahead of your time to succeed.",
          "Seeing your vision come to life — when something you imagined becomes real and helps others.",
          "Creative planning, future visualization, inspiration gathering, or time in innovative environments.",
          "By getting lost in possibility without taking practical steps toward your vision.",
          "Innovation, technology, design, consulting, or any field where you can create solutions for tomorrow's problems.",
          "Others to catch up to your vision. You don't need permission to start building the future.",
          "The future is created by those who act on their vision today — even if others don't understand yet.",
          "To show others what's possible — and give them hope that tomorrow can be better than today."
        ],
        dharmaCompass: [
          "Innovation-focused roles — product development, technology, design thinking, consulting, or future-planning positions.",
          "Fellow visionaries and practical builders — people who share your excitement for the future and can help make it real.",
          "Living too much in the future. Your vision needs present-moment action to become reality.",
          "\"I build the future one practical step at a time.\"",
          "From innovation and forward-thinking solutions — products, services, or ideas that solve tomorrow's problems today.",
          "A future-focused project — develop an innovative solution, start a forward-thinking business, or create something ahead of its time.",
          "Being \"unrealistic\" or \"too ambitious.\" The world needs people who can see beyond current limitations.",
          "Innovation-based income: new products, consulting, technology ventures, or licensing your forward-thinking ideas.",
          "Other innovators and execution-focused partners — people who share your vision and have skills to make it happen.",
          "Innovation hubs and forward-thinking cities — places where new ideas are valued and future-building is supported.",
          "You become a recognized innovator — someone whose visions consistently become reality and shape the future.",
          "Present-moment execution. Visions need daily action to become real.",
          "Perfectionism, waiting for the \"right time,\" and getting overwhelmed by the gap between vision and reality.",
          "Breaking big visions into small, actionable steps and celebrating progress along the way.",
          "Someone who believes in your vision but keeps you grounded in practical next steps.",
          "Your ideas gain traction, others get excited about your vision, and you see measurable progress toward your goals.",
          "Your innovation platform. Use technology to prototype, test, and share your forward-thinking ideas.",
          "Leading a small innovation team where you can focus on vision while others handle detailed execution.",
          "That the world needs your vision — and that starting imperfectly is better than waiting for perfect conditions.",
          "To help others believe in a better future — and show them that innovation starts with someone willing to see what others can't."
        ]
      },
      "The Connector": {
        emoji: "🤝",
        subtitle: "Empathic • Expressive • Relationship-Oriented • Voice of Belonging",
        soulMirror: [
          "A bridge between people. You're here to create connection — not just talk, but true understanding.",
          "The need to feel close — to be seen, heard, and help others feel the same.",
          "Emotional intelligence. You sense the room — and speak to the heart.",
          "The fear of being misunderstood or disliked. You sometimes bend too much to fit in.",
          "You talk it through. Expression helps you process and accept.",
          "Ones that honor relationships and emotional resonance — you follow warmth and vibe.",
          "Rejection, loneliness, and the fear of not belonging.",
          "Conversation, mediation, networking, writing, facilitating, active listening.",
          "Playing the emotional glue — sometimes at the cost of your own boundaries.",
          "Emotional dependents, social butterflies, and quiet people who need your light.",
          "In meaningful conversations, warm spaces, or communities where realness matters.",
          "You try to keep peace — but may avoid tough truths unless invited safely.",
          "That you'll lose your voice or place in the tribe.",
          "Seeing others connect, heal, and feel free to be themselves — often through your presence.",
          "Gentle interactions, heartful sharing, or time with someone who really listens to you.",
          "By constantly adapting. You dilute your power trying to keep everyone happy.",
          "Teaching, coaching, content creation, HR, storytelling, podcasting, or community building.",
          "External validation. You belong — even when no one claps.",
          "Your voice matters most when it's honest — not just pleasing.",
          "To reconnect people — to each other, to themselves, and to the truth that we're never truly alone."
        ],
        dharmaCompass: [
          "Communication-led roles — podcasting, public speaking, brand storytelling, HR, facilitation, or relationship-based businesses.",
          "Safe, emotionally present allies who encourage your truth — not just your performance.",
          "Shape-shifting. The more you fit in, the more you disappear.",
          "\"The more real I am, the more I attract real connection.\"",
          "From communities you nurture, messages you share, and spaces where you make people feel seen.",
          "A connection-based initiative — podcast, storytelling series, community meetups, or support circles.",
          "Being \"too sensitive\" or \"too talkative.\" That's your core superpower.",
          "Monetize community — courses, events, partnerships, mentoring, communication-based services.",
          "Collaborators who amplify your message, and partners who let you speak without judgment.",
          "Cities or towns with open-minded, inclusive, dialogue-driven energy — think Bangalore, Pune, Goa, or conscious digital hubs.",
          "You become a well-known connector — voice of a community, builder of bridges, or conscious communicator with impact.",
          "Boundary-setting. Connection doesn't mean over-access.",
          "Overcommitment, approval addiction, and fear of being alone with your truth.",
          "Speaking your truth even when it risks tension. Authenticity over harmony.",
          "Someone emotionally grounded, calm, and affirming — who listens as deeply as you do.",
          "You'll feel open, expressive, and connected — not performative or drained.",
          "Your microphone. Social media, community apps, video podcasts — your voice travels far.",
          "In a collaborative network where you can lead conversation and hold space.",
          "That your story — your own — is enough. You don't always need a crowd to matter.",
          "To restore the human connection — through voice, presence, and a deep understanding of heart and soul."
        ]
      },
      "The Strategist": {
        emoji: "🧠",
        subtitle: "Analytical • Precise • Systems-Oriented • Master of Long-Term Vision",
        soulMirror: [
          "A systems thinker. You're here to bring order to chaos — not just plan, but elevate through logic.",
          "The need to solve, improve, and move toward efficiency or mastery.",
          "Clarity. You see structures and patterns where others only see noise.",
          "Over-analysis. You sometimes live more in the mind than in the moment.",
          "Cautiously. You want to understand the variables before you commit.",
          "Well-researched, calculated ones — rooted in facts, data, and foresight.",
          "Uncertainty, messiness, and vulnerability — you can't spreadsheet your soul.",
          "Planning, analysis, logic, long-term thinking, and solving complex problems.",
          "Being the \"planner,\" \"fixer,\" or silent architect behind others' success.",
          "Dreamers, emotional types, or leaders who need your clarity and quiet strength.",
          "In spaces where you can think deeply — libraries, spreadsheets, strategy rooms, or silent mornings.",
          "Calmly, logically — sometimes too coldly for emotional types.",
          "Losing control. Having to improvise without a plan.",
          "Solving a tough problem. Designing a flawless system. Knowing things are working because of you.",
          "Structured solitude. Planning in peace. Or time in efficient, quiet spaces.",
          "Waiting too long to act. Getting stuck in \"what if\" and avoiding bold leaps.",
          "Strategy, operations, research, architecture, consulting, data science, policy, or product design.",
          "Certainty. Some of your best moves will come with risk.",
          "Precision without connection can feel cold. Lead with both brain and heart.",
          "To design better systems — in business, society, or life — and bring stability to the future."
        ],
        dharmaCompass: [
          "Strategic roles — product strategy, consulting, finance, tech systems, research, operations, analytics.",
          "Visionaries and empathic doers — who help you act on your brilliance, not just plan it.",
          "Analysis paralysis. You don't need more data — you need momentum.",
          "\"Execution is clarity in motion.\"",
          "From building frameworks that solve real-world problems at scale.",
          "A blueprint: a strategy deck, system design, optimized tool, or scalable plan others can use.",
          "Being \"too logical\" or \"too detail-oriented.\" Precision is your language.",
          "Long-term wealth building: compounding investments, systems-driven income, strategic diversification.",
          "Grounded mentors and passionate builders — those who act while you optimize.",
          "Well-planned cities or structured spaces with access to thinkers, resources, and order — think Singapore, Tokyo, Bangalore, Berlin.",
          "You become a master strategist — a quiet empire builder who influences through systems, not show.",
          "Emotional fluency. Knowing how others feel about your solutions is as important as how well they work.",
          "Perfectionism, rigidity, and intellectual overprotection.",
          "Taking imperfect action. Done is often better than delayed brilliance.",
          "Someone emotionally intelligent, expressive, and organized — who keeps your logic human.",
          "Your system works. Your time flows. And people trust your plans with their futures.",
          "Your lab. Use tech for automation, modeling, optimization, and intellectual expansion.",
          "In a structured team where you can lead the roadmap and steer decisions.",
          "That your brain can be monetized — as a system, product, or strategic service.",
          "To design the blueprint others build from — and bring structure to a world that often feels unstructured."
        ]
      },
      "The Performer": {
        emoji: "🎭",
        subtitle: "Charismatic • Expressive • Entertaining • Natural Spotlight",
        soulMirror: [
          "An entertainer and inspirer. You're here to bring joy and emotion — not just perform, but move hearts.",
          "The need to express and connect — to share your inner world and see it reflected in others' reactions.",
          "Presence. You naturally draw attention and can shift the energy of a room with your expression.",
          "Insecurity masked by performance. You sometimes perform to be loved rather than expressing to connect.",
          "With dramatic flair. You process emotions big and need expression to understand yourself.",
          "Emotionally resonant ones — you choose what feels authentic and allows for creative expression.",
          "Rejection, being ignored, and the fear that without performance, you're not enough.",
          "Acting, storytelling, public speaking, entertainment, inspiring others, and emotional expression.",
          "Being the center of attention — often performing before you even realize you're doing it.",
          "Appreciative audiences, fellow creatives, and people who enjoy emotional expression and entertainment.",
          "On stage, in creative spaces, at parties, or anywhere you can express yourself fully and be appreciated.",
          "Dramatically and expressively — you feel everything deeply and aren't afraid to show it.",
          "That you're just an act, or that people only love your performance, not your real self.",
          "A standing ovation — when your authentic expression moves others and creates real connection.",
          "Creative expression, appreciation from others, applause, or time to process emotions through art.",
          "By performing to please rather than expressing to connect. You lose yourself trying to be what others want.",
          "Entertainment, media, teaching, motivational speaking, content creation, or any platform-based work.",
          "Others' applause to feel worthy. Your value exists whether or not anyone is watching.",
          "Your most powerful performances come from your most authentic moments — vulnerability is your strength.",
          "To help others feel alive — and show them that it's safe to be big, expressive, and emotionally honest."
        ],
        dharmaCompass: [
          "Performance-based roles — acting, content creation, public speaking, entertainment, motivational work, or media presence.",
          "Supportive creatives and genuine fans — people who appreciate your authentic expression, not just your performance.",
          "Performance addiction. Needing constant attention and approval to feel worthy.",
          "\"I express my truth, not what others want to see.\"",
          "From your authentic expression — content, performances, speaking, teaching, or entertainment that genuinely moves people.",
          "An authentic creative project — show, content series, performance, or platform where you can express your real self.",
          "Being \"too much\" or \"attention-seeking.\" Your expression is a gift to others.",
          "Expression-based income: performances, content, speaking, teaching, or entertainment services.",
          "Fellow creatives and supportive partners — people who encourage your authentic expression and growth.",
          "Creative cities or artistic communities — places where expression is valued and creativity thrives.",
          "You become a recognized performer — someone whose authentic expression inspires and moves others consistently.",
          "Authentic vulnerability. Your most powerful moments come from real emotion, not perfect performance.",
          "Burnout from over-performing, losing yourself in others' expectations, and addiction to external validation.",
          "Expressing your truth even when it's not what the audience expects or wants.",
          "Someone who loves you off-stage — who reminds you that you're enough without the performance.",
          "Your expression feels natural, audiences connect with your authenticity, and you feel fulfilled rather than empty after performing.",
          "Your stage. Use digital platforms, social media, and online tools to reach audiences who appreciate your expression.",
          "In creative collaborations where you can be the expressive leader while others handle logistics.",
          "That your authentic self is your best performance — people connect with truth, not perfection.",
          "To give others permission to be expressive — and show them that it's safe to be big, emotional, and authentically themselves."
        ]
      },
      "The Alchemist": {
        emoji: "🦂",
        subtitle: "Transformative • Deep • Shadow-Aware • Turns Pain Into Power",
        soulMirror: [
          "A transformer. You walk through fire not to escape it — but to turn it into gold.",
          "The inner pull to evolve — to make meaning of suffering and rise renewed.",
          "Resilience. You don't just survive — you rebuild, better.",
          "Emotional heaviness. You carry too much alone, afraid no one else will understand.",
          "Intense reflection. You resist it first, then undergo deep internal metamorphosis.",
          "Ones that promise depth and transformation — even if they're hard.",
          "Shame, grief, betrayal — they are the ashes from which your truth rises.",
          "Shadow work, healing through truth, deep emotional insight, trauma transmutation, and mentoring through darkness.",
          "Breakdown → reflection → rebirth. You live through cycles few can handle.",
          "Wounded souls, seekers, or crisis-walkers — drawn to your silent strength.",
          "In emotionally honest spaces — solitude, therapy rooms, rituals, or quiet midnights with music and tea.",
          "Intensely but inwardly first — you'll cut deep, but aim to purify.",
          "That the pain will never end — or that healing will cost your identity.",
          "A breakthrough. A rebirth. A moment where something buried comes to light and heals.",
          "Shadow release, silence, water, rituals, soulful conversations, or artistic self-expression.",
          "By holding on to your wounds as identity. Healing must include letting go.",
          "Deep healing, transformative coaching, crisis leadership, writing about shadow, or helping others through their darkest hour.",
          "Redemption. You don't need to earn your worth by pain.",
          "You are already whole — even when you're in pieces.",
          "To help others rise from their ruins — and to alchemize suffering into soul strength."
        ],
        dharmaCompass: [
          "Shadow healing, trauma coaching, energy work, soulful writing, psycho-spiritual mentoring, or transformation-led brands.",
          "Emotionally honest, deeply aware people — who don't fear your intensity and don't fake light.",
          "Staying wounded for identity. You are not your trauma.",
          "\"My pain is part of me — not all of me.\"",
          "From helping others walk their healing journeys — authentically, from a place of earned wisdom.",
          "A memoir, healing program, transformation podcast, or trauma-to-truth workshop.",
          "Being \"too intense.\" You're here to feel deeply, not to dilute.",
          "Soul-led offers: healing containers, writing, courses, therapeutic coaching — emotionally rich services priced with worth.",
          "Deep, karmic, purpose-aligned bonds — with people who hold space without fixing or fearing you.",
          "Sacred, raw, emotionally resonant spaces — think old cities, near rivers, in studios, or near sacred ruins.",
          "You become a soul alchemist — a wise healer whose life work helps others reclaim power and peace.",
          "How to live beyond healing. Integration is where your next life begins.",
          "Holding on to darkness when the light is knocking. You can be whole and deep.",
          "Allowing joy without guilt. You don't need a crisis to feel worthy.",
          "A grounded, soulful person who holds complexity and reminds you to feel safe.",
          "You'll feel clean. Heavy, but honest. Light, but deep. Like your soul exhaled.",
          "A sacred portal: healing platforms, writing tools, shadow-course delivery, or digital intimacy spaces.",
          "Mostly solo — with occasional sacred partnerships that feel karmically aligned.",
          "That your pain has prepared you to lead. Quietly, powerfully, and truly.",
          "To guide others from pain to power — not through perfection, but through truth."
        ]
      }
    };

    return content[archetype] || null;
  };

  const content = getArchetypeContent(archetype);

  if (!content) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Content for {archetype} is not yet available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="text-6xl">{content.emoji}</div>
        <h1 className="text-3xl font-bold text-gray-900">{archetype}</h1>
        <p className="text-lg text-gray-600 font-medium">{content.subtitle}</p>
      </div>

      {/* Soul Mirror Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border border-purple-200">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
          <span className="text-3xl mr-3">🌌</span>
          Soul Mirror – 20 Deep Self-Discovery Answers
        </h2>
        <div className="grid gap-4">
          {content.soulMirror.map((answer: string, index: number) => {
            const questions = [
              "Who am I at my core?",
              "What drives me even when things are tough?",
              "What is my biggest internal strength?",
              "What tends to hold me back the most?",
              "How do I usually respond to change?",
              "What kind of decisions feel most natural to me?",
              "What emotions do I need to accept and not run from?",
              "What are my natural talents or gifts?",
              "What patterns keep repeating in my life?",
              "What kind of people do I attract?",
              "Where do I feel most at peace?",
              "How do I handle conflict?",
              "What scares me, even if I don't say it aloud?",
              "What gives me real joy?",
              "How do I recharge when I'm drained?",
              "How do I block my own success?",
              "What kind of work feels most fulfilling?",
              "What must I stop seeking outside of me?",
              "What's one powerful truth I often forget?",
              "Why was I really born?"
            ];

            return (
              <div key={index} className="bg-white/70 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-800 mb-2 text-sm">
                  {questions[index]}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  💫 {answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dharma Compass Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
          <span className="text-3xl mr-3">🌠</span>
          Dharma Compass – 20 Future-Facing Karmic Answers
        </h2>
        <div className="grid gap-4">
          {content.dharmaCompass.map((answer: string, index: number) => {
            const questions = [
              "What kind of work should I be doing in the next 3–5 years?",
              "What kind of people should I surround myself with now?",
              "What's the biggest trap I must avoid?",
              "What single mindset shift will change everything for me?",
              "Where will my success most likely come from?",
              "What one project should I commit to this year?",
              "What do I need to stop apologizing for?",
              "What should my financial plan look like?",
              "What relationships will shape my future?",
              "Where should I live or base myself in future?",
              "What's my 10-year dharma if I walk my best path?",
              "What's the most important thing I should learn next?",
              "What will delay my growth?",
              "What's one behavior I must master?",
              "What kind of partner or collaborator brings out my best?",
              "How will I know I'm on the right path?",
              "What role should technology play in my path?",
              "Should I work alone or with a team?",
              "What's the biggest opportunity I'm not seeing?",
              "What is my role in this lifetime?"
            ];

            return (
              <div key={index} className="bg-white/70 rounded-lg p-4 border border-amber-100">
                <h3 className="font-semibold text-amber-800 mb-2 text-sm">
                  {questions[index]}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  🎯 {answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-6 border border-rose-200 text-center">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="text-xl font-bold text-rose-900 mb-3">
          Ready to Dive Deeper Into Your {archetype} Journey?
        </h3>
        <p className="text-gray-700 mb-4">
          This is just the beginning. Get personalized guidance for your unique path and specific life questions.
        </p>
        <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
          Get Your Personal Reading
        </button>
      </div>
    </div>
  );
};

export default SelfFutureContent;
