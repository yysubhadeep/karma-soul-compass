import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SelfFutureContentProps {
  archetype: string;
}

const SelfFutureContent = ({ archetype }: SelfFutureContentProps) => {
  const getArchetypeContent = (archetypeName: string) => {
    switch (archetypeName) {
      case "The Builder":
        return {
          emoji: "🧱",
          subtitle: "Stable • Loyal • Practical • Silent Architect of Foundations",
          soulMirror: [
            { q: "Who am I at my core?", a: "A steady force. You're someone who builds stability — in homes, systems, and people." },
            { q: "What drives me even when things are tough?", a: "The need to create something real that lasts. You value results, not noise." },
            { q: "What is my biggest internal strength?", a: "Patience. While others rush, you endure and grow steadily." },
            { q: "What tends to hold me back the most?", a: "Fear of change. You resist shifts that feel unpredictable." },
            { q: "How do I usually respond to change?", a: "Slowly. You analyze, plan, and adapt cautiously. But once you commit, you build better." },
            { q: "What kind of decisions feel most natural to me?", a: "Ones rooted in logic, security, and long-term value." },
            { q: "What emotions do I need to accept and not run from?", a: "Frustration and resentment — when others don't value your steadiness." },
            { q: "What are my natural talents or gifts?", a: "Organizing, simplifying, structuring systems, and following through." },
            { q: "What patterns keep repeating in my life?", a: "Being the reliable one — often taken for granted but quietly holding it all together." },
            { q: "What kind of people do I attract?", a: "Dreamers, rebels, or chaotic types who subconsciously crave your grounding." },
            { q: "Where do I feel most at peace?", a: "In quiet, structured environments — homes, nature, routines, clean workspaces." },
            { q: "How do I handle conflict?", a: "You avoid explosive drama. You prefer clarity, practical solutions, or silence." },
            { q: "What scares me, even if I don't say it aloud?", a: "That all your effort might go unnoticed or unappreciated." },
            { q: "What gives me real joy?", a: "Completing something tangible. Helping others feel safe." },
            { q: "How do I recharge when I'm drained?", a: "Solitude, order, routine. Doing something hands-on like cooking or fixing things." },
            { q: "How do I block my own success?", a: "By staying too long in comfort zones or undervaluing your worth." },
            { q: "What kind of work feels most fulfilling?", a: "Building — whether it's a project, a team, or a family legacy." },
            { q: "What must I stop seeking outside of me?", a: "Approval. Your work speaks louder than praise ever can." },
            { q: "What's one powerful truth I often forget?", a: "Slow isn't weak — it's sustainable." },
            { q: "Why was I really born?", a: "To lay the foundation for others to thrive — through structure, strength, and silent wisdom." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Roles in operations, finance, planning, systems building, real estate, infrastructure, or sustainability." },
            { q: "What kind of people should I surround myself with now?", a: "People who respect consistency and don't mistake calm for weakness." },
            { q: "What's the biggest trap I must avoid?", a: "Settling for 'safe' instead of meaningful." },
            { q: "What single mindset shift will change everything for me?", a: "'I deserve to lead, not just support.'" },
            { q: "Where will my success most likely come from?", a: "From systems you design, businesses you build, or long-term investments you nurture." },
            { q: "What one project should I commit to this year?", a: "Something that solves a practical problem for others — like a tool, process, or sustainable solution." },
            { q: "What do I need to stop apologizing for?", a: "Not being flashy. Your magic is quiet — and real." },
            { q: "What should my financial plan look like?", a: "Diversify into real assets. Use your discipline to build slow wealth." },
            { q: "What relationships will shape my future?", a: "Grounded partners who help you step into leadership without losing your center." },
            { q: "Where should I live or base myself in future?", a: "In stable, growing environments — semi-urban towns, family-first cities, eco-forward communities." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a trusted builder of frameworks — a CEO, urban planner, architect, family leader, or impact-driven founder." },
            { q: "What's the most important thing I should learn next?", a: "How to delegate. You don't have to carry everything." },
            { q: "What will delay my growth?", a: "Fear of leaving stability. Being undervalued but staying anyway." },
            { q: "What's one behavior I must master?", a: "Taking initiative — not waiting to be asked." },
            { q: "What kind of partner or collaborator brings out my best?", a: "Visionaries or dreamers who need grounding — and give you inspiration in return." },
            { q: "How will I know I'm on the right path?", a: "You'll feel both productive and peaceful. Like your work has rhythm." },
            { q: "What role should technology play in my path?", a: "Use tech to automate, structure, and simplify — but don't let it remove your hands-on essence." },
            { q: "Should I work alone or with a team?", a: "Small, focused teams. You're great at keeping the engine running." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That you're a quiet leader — and people want to follow you." },
            { q: "What is my role in this lifetime?", a: "To build enduring foundations — in work, community, and spirit." }
          ]
        };

      case "The Dreamer":
        return {
          emoji: "🌙",
          subtitle: "Imaginative • Sensitive • Vision-Led • Feeds on Possibility",
          soulMirror: [
            { q: "Who am I at my core?", a: "A visionary soul. You see what others miss — not just what is, but what could be." },
            { q: "What drives me even when things are tough?", a: "The belief that something beautiful is possible. Your hope is your anchor." },
            { q: "What is my biggest internal strength?", a: "Imagination. You connect dots others don't even see." },
            { q: "What tends to hold me back the most?", a: "Escapism. You may drift into fantasy instead of acting on your visions." },
            { q: "How do I usually respond to change?", a: "With emotional waves. You feel it first, process slowly, then adjust gently." },
            { q: "What kind of decisions feel most natural to me?", a: "Ones based on intuition, emotion, and ideals — not always logic." },
            { q: "What emotions do I need to accept and not run from?", a: "Sadness, disappointment, longing. They hold your deepest creative truth." },
            { q: "What are my natural talents or gifts?", a: "Storytelling, empathy, music, visual arts, dream interpretation, emotional healing." },
            { q: "What patterns keep repeating in my life?", a: "Getting excited by a dream, losing momentum midway, feeling misunderstood." },
            { q: "What kind of people do I attract?", a: "Lost souls, artists, seekers — they see your magic and feel safe in your softness." },
            { q: "Where do I feel most at peace?", a: "Near water, in music, in solitude, or when creating without limits." },
            { q: "How do I handle conflict?", a: "You avoid it. You'd rather withdraw than confront — even when your needs matter." },
            { q: "What scares me, even if I don't say it aloud?", a: "That your dreams will remain only dreams." },
            { q: "What gives me real joy?", a: "Expressing emotion through art, poetry, or pure presence." },
            { q: "How do I recharge when I'm drained?", a: "Escaping into nature, music, silence, or spiritual spaces." },
            { q: "How do I block my own success?", a: "By doubting your practical ability to manifest what's in your mind." },
            { q: "What kind of work feels most fulfilling?", a: "Creating. Healing. Inspiring. Anything that lets you share meaning and feeling." },
            { q: "What must I stop seeking outside of me?", a: "Someone to believe in you first. That's your job." },
            { q: "What's one powerful truth I often forget?", a: "Your sensitivity is not weakness — it's your soul's compass." },
            { q: "Why was I really born?", a: "To dream, to feel, and to awaken hearts through your vision." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Creative arts, therapy, spirituality, writing, film, music, children's media, or conscious design." },
            { q: "What kind of people should I surround myself with now?", a: "Safe, nurturing, soulful beings who respect your rhythm and believe in your talent." },
            { q: "What's the biggest trap I must avoid?", a: "Waiting for perfect inspiration instead of building small, daily momentum." },
            { q: "What single mindset shift will change everything for me?", a: "'My dreams are real, and I can make them practical.'" },
            { q: "Where will my success most likely come from?", a: "From emotional authenticity — when you stop performing and just share what you feel." },
            { q: "What one project should I commit to this year?", a: "A heartfelt expression — a book, album, course, visual story, or healing service." },
            { q: "What do I need to stop apologizing for?", a: "Being emotional, gentle, or 'too soft.' That's your superpower." },
            { q: "What should my financial plan look like?", a: "Build multiple small, soulful income streams. Trust aligned flow over force." },
            { q: "What relationships will shape my future?", a: "Ones that don't exploit your care. You need partners who ground you without caging you." },
            { q: "Where should I live or base myself in future?", a: "By the sea, near art, in poetic cities. Think: Goa, Pondicherry, Rishikesh, or spiritual suburbs." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a soul artist — someone who heals and awakens others through emotion and vision." },
            { q: "What's the most important thing I should learn next?", a: "Discipline. Even 20 minutes of daily structure will unlock your vast world." },
            { q: "What will delay my growth?", a: "Staying stuck in your head. Isolation. Waiting for 'perfect mood.'" },
            { q: "What's one behavior I must master?", a: "Completing what you start — even if it doesn't feel magical the whole time." },
            { q: "What kind of partner or collaborator brings out my best?", a: "A grounded, calm, emotionally steady person who holds space without fixing you." },
            { q: "How will I know I'm on the right path?", a: "You'll feel emotionally full, your work will move people, and your nights will feel lighter." },
            { q: "What role should technology play in my path?", a: "A channel for your imagination — podcasts, digital art, calming content, soulful storytelling." },
            { q: "Should I work alone or with a team?", a: "Alone to create, but with a small team to finish and share." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That your softness is marketable — your inner world can be your career." },
            { q: "What is my role in this lifetime?", a: "To bring tenderness to a tough world — through beauty, dreams, and feeling." }
          ]
        };

      case "The Leader":
        return {
          emoji: "🔥",
          subtitle: "Bold • Purpose-Driven • Commanding Presence • Builds with Vision",
          soulMirror: [
            { q: "Who am I at my core?", a: "A force of direction. You were born to lead, not follow — even when it's uncomfortable." },
            { q: "What drives me even when things are tough?", a: "The need to move forward. You can't sit still when something better is possible." },
            { q: "What is my biggest internal strength?", a: "Courage. You act when others hesitate." },
            { q: "What tends to hold me back the most?", a: "The need to control everything. True leadership often means letting go." },
            { q: "How do I usually respond to change?", a: "Head-on. You embrace challenge, but can struggle if you're not the one initiating it." },
            { q: "What kind of decisions feel most natural to me?", a: "Fast, clear, and bold decisions that move things forward." },
            { q: "What emotions do I need to accept and not run from?", a: "Vulnerability and self-doubt. They don't make you weak — they make you human." },
            { q: "What are my natural talents or gifts?", a: "Inspiring others, taking initiative, building things from scratch, commanding attention." },
            { q: "What patterns keep repeating in my life?", a: "Rising quickly, then burning out. You push hard — sometimes too hard." },
            { q: "What kind of people do I attract?", a: "Followers, loyal supporters, and sometimes challengers who test your ego." },
            { q: "Where do I feel most at peace?", a: "In places where your vision is respected, and your actions create real impact." },
            { q: "How do I handle conflict?", a: "Directly. You address it fast — but must learn to pause and listen too." },
            { q: "What scares me, even if I don't say it aloud?", a: "That you'll lose your edge or fail publicly. But your strength lies beyond success metrics." },
            { q: "What gives me real joy?", a: "Seeing your vision take shape — and watching others rise because of it." },
            { q: "How do I recharge when I'm drained?", a: "Strategic solitude, power workouts, or moments of silence where you reconnect with purpose." },
            { q: "How do I block my own success?", a: "By trying to do it all alone or ignoring emotional support." },
            { q: "What kind of work feels most fulfilling?", a: "Leadership, entrepreneurship, movement-building, or causes that align with your fire." },
            { q: "What must I stop seeking outside of me?", a: "Validation. Leadership doesn't always come with applause." },
            { q: "What's one powerful truth I often forget?", a: "Your presence is powerful even when you're not performing." },
            { q: "Why was I really born?", a: "To light paths for others, take bold risks, and build something that outlives you." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Entrepreneurship, leadership in organizations, movement building, or high-ownership roles in innovation." },
            { q: "What kind of people should I surround myself with now?", a: "Grounded, values-driven allies who both challenge and support your mission." },
            { q: "What's the biggest trap I must avoid?", a: "Ego-driven choices. Doing it to be seen, not because it's true to your path." },
            { q: "What single mindset shift will change everything for me?", a: "'Power flows when I empower others.'" },
            { q: "Where will my success most likely come from?", a: "From building platforms or teams that multiply your energy and clarity." },
            { q: "What one project should I commit to this year?", a: "A leadership venture — a podcast, community, or product that aligns your voice with service." },
            { q: "What do I need to stop apologizing for?", a: "Taking up space. You were born to be visible — do it with integrity." },
            { q: "What should my financial plan look like?", a: "High-growth investments, ownership stakes, and ethical scaling. Avoid debt from over-expansion." },
            { q: "What relationships will shape my future?", a: "Collaborators who see your blind spots and aren't afraid to be honest with you." },
            { q: "Where should I live or base myself in future?", a: "In power hubs where leadership energy is strong — think Delhi, Mumbai, Bangalore, Dubai, or global cities." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You lead a movement, brand, or venture that shifts lives — and inspires leadership in others." },
            { q: "What's the most important thing I should learn next?", a: "Emotional literacy. Knowing how to lead the heart, not just the task." },
            { q: "What will delay my growth?", a: "Over-control, burnout, refusal to delegate, and lack of inner stillness." },
            { q: "What's one behavior I must master?", a: "Listening — deeply, without trying to fix or dominate." },
            { q: "What kind of partner or collaborator brings out my best?", a: "Someone emotionally intelligent, stable, and unafraid of your light." },
            { q: "How will I know I'm on the right path?", a: "You'll feel challenged, respected, and lit up — not just busy." },
            { q: "What role should technology play in my path?", a: "A megaphone for your vision — from social platforms to leadership systems." },
            { q: "Should I work alone or with a team?", a: "Lead a team, but make space for reflection and wise counsel." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That slowing down will actually make you stronger and more magnetic." },
            { q: "What is my role in this lifetime?", a: "To lead with purpose, build with fire, and leave behind something worth following." }
          ]
        };

      case "The Healer":
        return {
          emoji: "🌿",
          subtitle: "Compassionate • Intuitive • Emotionally Deep • Holds Space for Others",
          soulMirror: [
            { q: "Who am I at my core?", a: "A soul-soother. You're here to heal — not just others, but yourself too." },
            { q: "What drives me even when things are tough?", a: "The desire to ease pain, to make others feel safe, seen, and whole." },
            { q: "What is my biggest internal strength?", a: "Empathy. You can feel what others feel, often before they speak." },
            { q: "What tends to hold me back the most?", a: "Absorbing others' pain without boundaries — you forget you have your own needs." },
            { q: "How do I usually respond to change?", a: "Gently, emotionally. You feel it all first, then adapt at your own pace." },
            { q: "What kind of decisions feel most natural to me?", a: "Ones made with the heart, tuned into emotional truth and collective well-being." },
            { q: "What emotions do I need to accept and not run from?", a: "Grief, guilt, and anger — you have a right to feel and heal too." },
            { q: "What are my natural talents or gifts?", a: "Holding space, deep listening, sensing unspoken pain, guiding with kindness." },
            { q: "What patterns keep repeating in my life?", a: "Being the helper — but sometimes at the cost of your own energy or worth." },
            { q: "What kind of people do I attract?", a: "Those in need — the broken, the burdened, the seekers of light. You're a refuge." },
            { q: "Where do I feel most at peace?", a: "In calm, emotionally safe environments — nature, sacred spaces, or quiet rooms with gentle music." },
            { q: "How do I handle conflict?", a: "You try to avoid it. But when engaged, you seek healing — not winning." },
            { q: "What scares me, even if I don't say it aloud?", a: "That your love won't be enough. Or worse — that you'll lose yourself in someone else's healing." },
            { q: "What gives me real joy?", a: "Watching someone bloom after you've helped them heal." },
            { q: "How do I recharge when I'm drained?", a: "Emotional solitude, nurturing rituals, nature, art, and warm silence." },
            { q: "How do I block my own success?", a: "By putting others first always — and leaving your own dreams for 'someday.'" },
            { q: "What kind of work feels most fulfilling?", a: "Therapy, coaching, caregiving, wellness, teaching, holding circles, or simply being a soul companion." },
            { q: "What must I stop seeking outside of me?", a: "Permission to rest. You deserve peace without proving anything." },
            { q: "What's one powerful truth I often forget?", a: "Healing is not saving. You are not responsible for everyone's journey." },
            { q: "Why was I really born?", a: "To be a sacred mirror — showing others how to feel, heal, and become whole." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Mental health, wellness, emotional education, intuitive arts, bodywork, or trauma-informed service." },
            { q: "What kind of people should I surround myself with now?", a: "Emotionally aware, gentle souls who pour back into you — not just receive." },
            { q: "What's the biggest trap I must avoid?", a: "Becoming the 'rescuer.' You can love without losing yourself." },
            { q: "What single mindset shift will change everything for me?", a: "'I am worthy even when I'm not helping.'" },
            { q: "Where will my success most likely come from?", a: "Through your emotional wisdom — when you make it into a method, offering, or business." },
            { q: "What one project should I commit to this year?", a: "A safe-space container: a course, retreat, support group, or healing toolkit." },
            { q: "What do I need to stop apologizing for?", a: "Feeling deeply. Being tender. You are not 'too much.'" },
            { q: "What should my financial plan look like?", a: "Build slow, sustainable income from your care-based gifts. Anchor healing in value." },
            { q: "What relationships will shape my future?", a: "Gentle equals. Partners who see your light but don't demand your energy to stay afloat." },
            { q: "Where should I live or base myself in future?", a: "Calm, nurturing places — nature hubs, spiritual towns, or soft-energy suburbs." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a wise healer who changes how people feel, love, and live." },
            { q: "What's the most important thing I should learn next?", a: "Boundaries. Without them, your gifts get drained." },
            { q: "What will delay my growth?", a: "Overgiving, martyr patterns, saying 'yes' when your body says 'no.'" },
            { q: "What's one behavior I must master?", a: "Saying 'I need' without guilt. Receiving is part of healing too." },
            { q: "What kind of partner or collaborator brings out my best?", a: "Someone grounded, emotionally honest, and unafraid of your sensitivity." },
            { q: "How will I know I'm on the right path?", a: "You'll feel soft, not heavy. Your work will heal you too." },
            { q: "What role should technology play in my path?", a: "Use tech to reach hearts — therapy platforms, soft branding, soulful podcasts, or conscious content." },
            { q: "Should I work alone or with a team?", a: "In small, emotionally safe collectives — healing doesn't thrive in chaos." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That your pain story — once shared with intention — can be your purpose." },
            { q: "What is my role in this lifetime?", a: "To restore softness, hold space for healing, and remind the world that feeling is power." }
          ]
        };

      case "The Seeker":
        return {
          emoji: "🔎",
          subtitle: "Curious • Reflective • Spiritually Drawn • Forever Evolving",
          soulMirror: [
            { q: "Who am I at my core?", a: "A lifelong learner. You're not here to settle — you're here to grow and understand." },
            { q: "What drives me even when things are tough?", a: "A deep need to make meaning. Even your pain must teach you something." },
            { q: "What is my biggest internal strength?", a: "Self-inquiry. You're not afraid to question what others accept blindly." },
            { q: "What tends to hold me back the most?", a: "Overthinking. You often wait for perfect clarity instead of trusting your inner knowing." },
            { q: "How do I usually respond to change?", a: "With introspection. You need time to make sense of what's shifting." },
            { q: "What kind of decisions feel most natural to me?", a: "Ones that feel aligned with your values, soul, and truth — not trends." },
            { q: "What emotions do I need to accept and not run from?", a: "Doubt, loneliness, and longing — these are signs of a deeper call." },
            { q: "What are my natural talents or gifts?", a: "Philosophical insight, writing, pattern recognition, spiritual reflection, life guidance." },
            { q: "What patterns keep repeating in my life?", a: "Seeking clarity, diving deep, and pausing just before breakthrough out of fear." },
            { q: "What kind of people do I attract?", a: "Fellow seekers, lost wanderers, or curious minds — all drawn to your depth." },
            { q: "Where do I feel most at peace?", a: "In quiet corners — libraries, forests, temples, or long solitary walks." },
            { q: "How do I handle conflict?", a: "You withdraw to think, not fight. Later, you return with understanding and questions." },
            { q: "What scares me, even if I don't say it aloud?", a: "That you'll spend life searching and never 'arrive.'" },
            { q: "What gives me real joy?", a: "A deep conversation. A realization that shifts your soul. Moments of divine clarity." },
            { q: "How do I recharge when I'm drained?", a: "Alone time. Journaling. Reading something that lights up your soul." },
            { q: "How do I block my own success?", a: "By stalling at the threshold of action. Reflection becomes a trap when not followed by choice." },
            { q: "What kind of work feels most fulfilling?", a: "Teaching, research, coaching, writing, counseling, or spiritual mentoring." },
            { q: "What must I stop seeking outside of me?", a: "Answers. You are the question — and the source of the answer too." },
            { q: "What's one powerful truth I often forget?", a: "You're not behind — your depth makes your path unique." },
            { q: "Why was I really born?", a: "To uncover truth — in self, others, and life — and to help light the way for others on their path." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Counseling, education, coaching, spiritual content, writing, research, life design or wisdom-sharing ventures." },
            { q: "What kind of people should I surround myself with now?", a: "Honest, deep, curious souls who respect your pace and don't force certainty." },
            { q: "What's the biggest trap I must avoid?", a: "Waiting forever to 'be ready.' Growth happens when you act too." },
            { q: "What single mindset shift will change everything for me?", a: "'I don't need to have it all figured out to move forward.'" },
            { q: "Where will my success most likely come from?", a: "From sharing your journey — your questions become tools for others." },
            { q: "What one project should I commit to this year?", a: "A personal blog, book, course, or podcast that maps what you've learned so far." },
            { q: "What do I need to stop apologizing for?", a: "Changing your mind. Your truth evolves — that's not indecision, it's growth." },
            { q: "What should my financial plan look like?", a: "Income from coaching, writing, courses, retreats, or scalable wisdom offerings." },
            { q: "What relationships will shape my future?", a: "Mentors who challenge you, partners who mirror your growth, and seekers who walk with you." },
            { q: "Where should I live or base myself in future?", a: "Places that feed your soul — heritage towns, spiritual hills, cultural hubs with space for solitude." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a respected guide — a thought leader, teacher, or philosopher who lights up minds." },
            { q: "What's the most important thing I should learn next?", a: "To trust your path even without a map. Let uncertainty be your teacher." },
            { q: "What will delay my growth?", a: "Analysis paralysis. Constant comparing. Fear of 'doing it wrong.'" },
            { q: "What's one behavior I must master?", a: "Following through — even when doubt whispers." },
            { q: "What kind of partner or collaborator brings out my best?", a: "Someone who believes in your potential, brings clarity, and supports your emotional and spiritual quests." },
            { q: "How will I know I'm on the right path?", a: "You'll feel aligned — even in uncertainty. Life will whisper back in synchronicities." },
            { q: "What role should technology play in my path?", a: "A bridge — for your ideas, teachings, and community. Think blog, YouTube, podcast, or wisdom-based app." },
            { q: "Should I work alone or with a team?", a: "Alone for reflection, but with a soulful team to bring your vision to life." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That your questions themselves are a gift — people need your reflections." },
            { q: "What is my role in this lifetime?", a: "To keep asking, keep growing, and to light the deeper path for others — not with certainty, but with soul." }
          ]
        };

      case "The Rebel":
        return {
          emoji: "⚡",
          subtitle: "Bold • Nonconformist • Disruptive Truth-Teller • Breaker of Norms",
          soulMirror: [
            { q: "Who am I at my core?", a: "A disruptor. You're here to challenge systems, question norms, and carve new paths." },
            { q: "What drives me even when things are tough?", a: "The fire of justice, truth, and freedom — you can't stand what's fake or forced." },
            { q: "What is my biggest internal strength?", a: "Fearlessness. You speak up even when your voice shakes." },
            { q: "What tends to hold me back the most?", a: "Self-sabotage. Sometimes, your defiance turns inward." },
            { q: "How do I usually respond to change?", a: "You initiate it. You'd rather shake things up than stay stagnant." },
            { q: "What kind of decisions feel most natural to me?", a: "Ones that feel bold, authentic, and cut through noise or tradition." },
            { q: "What emotions do I need to accept and not run from?", a: "Anger and restlessness — they're not wrong, but must be channeled." },
            { q: "What are my natural talents or gifts?", a: "Challenging authority, igniting movements, defending the unheard, radical creativity." },
            { q: "What patterns keep repeating in my life?", a: "Entering spaces, shaking them up, and either transforming or leaving." },
            { q: "What kind of people do I attract?", a: "Followers who admire your courage — or enemies who fear your truth." },
            { q: "Where do I feel most at peace?", a: "In open skies, free schedules, and places where expression isn't censored." },
            { q: "How do I handle conflict?", a: "You confront it head-on. You often are the one starting the conversation no one else will." },
            { q: "What scares me, even if I don't say it aloud?", a: "That you'll burn every bridge and end up alone." },
            { q: "What gives me real joy?", a: "Breaking a pattern. Saying the thing no one else dares. Liberating others." },
            { q: "How do I recharge when I'm drained?", a: "Through creative bursts, long drives, solo adventures, or ranting to someone who gets you." },
            { q: "How do I block my own success?", a: "By resisting structure and sabotaging stability out of boredom or fear of control." },
            { q: "What kind of work feels most fulfilling?", a: "Advocacy, journalism, activism, creative leadership, disruptive startups, or radical art." },
            { q: "What must I stop seeking outside of me?", a: "Permission to break the rules. You are the rewrite." },
            { q: "What's one powerful truth I often forget?", a: "Rebellion can also be soft — not every battle requires a roar." },
            { q: "Why was I really born?", a: "To awaken, provoke, and initiate necessary change — even when it's uncomfortable." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Changemaking roles — social entrepreneurship, ethical disruption, whistleblowing media, activism, or alternative education." },
            { q: "What kind of people should I surround myself with now?", a: "Brave souls with clear ethics — allies, not enablers." },
            { q: "What's the biggest trap I must avoid?", a: "Being rebellious just to rebel. Without purpose, it's self-destructive." },
            { q: "What single mindset shift will change everything for me?", a: "\"Disruption is a sacred responsibility.\"" },
            { q: "Where will my success most likely come from?", a: "From building or exposing truth-based systems that empower others." },
            { q: "What one project should I commit to this year?", a: "A documentary, podcast, social startup, or expose-style platform that gives voice to injustice or untold truths." },
            { q: "What do I need to stop apologizing for?", a: "Being intense. The world needs intensity — when it's heart-led." },
            { q: "What should my financial plan look like?", a: "Income from independent ventures, ethical disruption, or cause-based brands — not conformity." },
            { q: "What relationships will shape my future?", a: "Collaborations with clear boundaries, mutual respect, and shared purpose." },
            { q: "Where should I live or base myself in future?", a: "Urban jungles, creative hubs, or off-grid communities — wherever you feel mentally and ideologically free." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a social reformer, truth-speaker, or cultural innovator who sparks mass shifts." },
            { q: "What's the most important thing I should learn next?", a: "How to build after the breakdown. Destruction is just phase one." },
            { q: "What will delay my growth?", a: "Cynicism, anger loops, isolation, or burning bridges that needed mending." },
            { q: "What's one behavior I must master?", a: "Focus. Channeling your energy instead of scattering it in constant reaction." },
            { q: "What kind of partner or collaborator brings out my best?", a: "A grounded, non-judgmental anchor — someone who lets you lead, but gently checks your storm." },
            { q: "How will I know I'm on the right path?", a: "You'll feel free, seen, and purposeful — not just provocative." },
            { q: "What role should technology play in my path?", a: "Amplifier of truth — use platforms for social voice, independent media, ethical hacking, or protest tools." },
            { q: "Should I work alone or with a team?", a: "You thrive leading small, loyal teams with shared values." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That you can build better systems — not just tear old ones down." },
            { q: "What is my role in this lifetime?", a: "To question, challenge, and liberate — so that something more honest can rise." }
          ]
        };

      case "The Mystic":
        return {
          emoji: "🌙",
          subtitle: "Spiritual • Introspective • Energetically Aware • Seeker of the Sacred",
          soulMirror: [
            { q: "Who am I at my core?", a: "A vessel of presence. You're tuned to energies others can't name, here to walk between worlds." },
            { q: "What drives me even when things are tough?", a: "The longing to understand the unseen — the soul, the divine, the why beneath it all." },
            { q: "What is my biggest internal strength?", a: "Intuition. You know things without proof — and you're usually right." },
            { q: "What tends to hold me back the most?", a: "Disconnection. You float so high sometimes, you forget to root down." },
            { q: "How do I usually respond to change?", a: "Inwardly. You withdraw, reflect, sense the shift before acting." },
            { q: "What kind of decisions feel most natural to me?", a: "Ones based on energy, dreams, and inner guidance — not logic or trends." },
            { q: "What emotions do I need to accept and not run from?", a: "Isolation, melancholy, spiritual fatigue — they're part of your path." },
            { q: "What are my natural talents or gifts?", a: "Energy sensing, spiritual insight, healing touch, dream decoding, intuitive clarity." },
            { q: "What patterns keep repeating in my life?", a: "Being misunderstood, pulled toward the esoteric, or burning out from absorbing too much." },
            { q: "What kind of people do I attract?", a: "Seekers, broken healers, or lost wanderers — drawn to your silent wisdom." },
            { q: "Where do I feel most at peace?", a: "In stillness — temples, forests, under moonlight, or in sacred solitude." },
            { q: "How do I handle conflict?", a: "You often avoid it — unless your inner compass demands truth." },
            { q: "What scares me, even if I don't say it aloud?", a: "That you'll lose yourself completely — or that your gifts aren't of this world." },
            { q: "What gives me real joy?", a: "Moments of transcendence — sacred music, rituals, or pure energetic connection." },
            { q: "How do I recharge when I'm drained?", a: "Deep rest. Silence. Ceremony. Spiritual journaling. Nature immersion." },
            { q: "How do I block my own success?", a: "By hiding your gifts out of fear of being judged or \"too much.\"" },
            { q: "What kind of work feels most fulfilling?", a: "Healing, intuitive guidance, spiritual mentoring, energy work, soul artistry." },
            { q: "What must I stop seeking outside of me?", a: "Proof. You don't need permission to trust the unseen." },
            { q: "What's one powerful truth I often forget?", a: "You're not here to be understood by everyone — just to embody your frequency." },
            { q: "Why was I really born?", a: "To bridge the spiritual and human — to remind others what's sacred and eternal." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Spiritual coaching, energy healing, dreamwork, intuitive art, or mystic teaching — online or in quiet spaces." },
            { q: "What kind of people should I surround myself with now?", a: "Sensitive, soul-aware beings who nourish your energy instead of draining it." },
            { q: "What's the biggest trap I must avoid?", a: "Escapism. You're spiritual — but you still have a human life to live." },
            { q: "What single mindset shift will change everything for me?", a: "\"My energy is sacred, and I must protect it with boundaries.\"" },
            { q: "Where will my success most likely come from?", a: "From embodying your frequency — not pushing, but attracting through depth." },
            { q: "What one project should I commit to this year?", a: "A mystic offering: a journal, oracle deck, ritual kit, sacred space, or healing circle." },
            { q: "What do I need to stop apologizing for?", a: "Being \"too sensitive,\" \"too quiet,\" or \"too strange.\" Your frequency is your gift." },
            { q: "What should my financial plan look like?", a: "Heart-led income: soul sessions, digital retreats, slow scaling, and sacred pricing." },
            { q: "What relationships will shape my future?", a: "Spiritually mature partners, wise elders, and nonjudgmental mirrors of your light." },
            { q: "Where should I live or base myself in future?", a: "Coastal towns, spiritual hubs, mountains, or quiet sacred homes — think Rishikesh, Bali, Dharamshala, Ubud." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a soul guide — someone others turn to when life loses meaning." },
            { q: "What's the most important thing I should learn next?", a: "How to ground your gifts into structure — so your offerings don't dissolve." },
            { q: "What will delay my growth?", a: "Hiding. Over-isolating. Letting fear or cynicism shrink your light." },
            { q: "What's one behavior I must master?", a: "Consistency — showing up even when you're \"not in the flow.\"" },
            { q: "What kind of partner or collaborator brings out my best?", a: "A stable, patient, deeply spiritual soul who honors silence and energy." },
            { q: "How will I know I'm on the right path?", a: "Life will feel like prayer. Others will find peace in your presence." },
            { q: "What role should technology play in my path?", a: "A soft gateway: meditative platforms, spiritual YouTube, healing audio, or digital mystic spaces." },
            { q: "Should I work alone or with a team?", a: "Alone for vision. With soul-aligned collaborators for expansion." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That people are ready for your magic — you just need to shine it quietly." },
            { q: "What is my role in this lifetime?", a: "To anchor spirit in matter — and awaken sacred remembrance in others." }
          ]
        };

      case "The Visionary":
        return {
          emoji: "🌠",
          subtitle: "Futuristic • Big Thinker • Possibility-Oriented • Builder of New Realities",
          soulMirror: [
            { q: "Who am I at my core?", a: "A bridge to tomorrow. You see what's possible — often long before others do." },
            { q: "What drives me even when things are tough?", a: "The hope that something better can be built. You live to design a new way forward." },
            { q: "What is my biggest internal strength?", a: "Vision. You think beyond limits — connecting ideas, people, and dreams." },
            { q: "What tends to hold me back the most?", a: "Overextension. So many ideas, too little grounding." },
            { q: "How do I usually respond to change?", a: "Excitedly. Change is your playground — but only when you're the one steering." },
            { q: "What kind of decisions feel most natural to me?", a: "Bold, expansive choices that point toward growth and innovation." },
            { q: "What emotions do I need to accept and not run from?", a: "Frustration and restlessness — they're signs your vision needs movement." },
            { q: "What are my natural talents or gifts?", a: "Strategy, ideation, communication, system design, storytelling, future-building." },
            { q: "What patterns keep repeating in my life?", a: "Starting bold initiatives, getting bored midway, needing fresh excitement." },
            { q: "What kind of people do I attract?", a: "Those seeking inspiration, mentorship, or direction. Or those who want to \"ride your wave.\"" },
            { q: "Where do I feel most at peace?", a: "In idea-rich, stimulating environments — think innovation hubs, think tanks, or spirited debates." },
            { q: "How do I handle conflict?", a: "You rise above it — you'd rather reframe or reimagine than argue." },
            { q: "What scares me, even if I don't say it aloud?", a: "That your dreams won't materialize. That your mind is too \"out there.\"" },
            { q: "What gives me real joy?", a: "Seeing your ideas take root in real life. Watching others light up from your vision." },
            { q: "How do I recharge when I'm drained?", a: "By being around expansive thinkers — or immersing in inspiring, future-forward content." },
            { q: "How do I block my own success?", a: "By refusing to focus. You often abandon what's working for \"what's next.\"" },
            { q: "What kind of work feels most fulfilling?", a: "Innovation, leadership, storytelling, strategic consulting, social design, or anything that reshapes systems." },
            { q: "What must I stop seeking outside of me?", a: "Constant novelty. Innovation is good — but structure sustains it." },
            { q: "What's one powerful truth I often forget?", a: "You don't have to do it all at once. Your dream has seasons." },
            { q: "Why was I really born?", a: "To imagine what's possible — and inspire others to believe it's achievable too." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Social entrepreneurship, tech innovation, policy influence, conscious leadership, or purpose-led branding." },
            { q: "What kind of people should I surround myself with now?", a: "Doers who help ground your ideas, and thinkers who expand them without ego." },
            { q: "What's the biggest trap I must avoid?", a: "Idea hopping. Innovation without implementation leads to burnout." },
            { q: "What single mindset shift will change everything for me?", a: "\"A clear focus is not limitation — it's power.\"" },
            { q: "Where will my success most likely come from?", a: "From building systems, communities, or movements that solve real problems with visionary design." },
            { q: "What one project should I commit to this year?", a: "A bold initiative: platform, podcast, incubator, education model, or conscious product line." },
            { q: "What do I need to stop apologizing for?", a: "Being ahead of your time. That's a gift — not a flaw." },
            { q: "What should my financial plan look like?", a: "Scalable, diverse revenue — through content, tech tools, intellectual property, or ecosystem design." },
            { q: "What relationships will shape my future?", a: "Collaborators who see your vision and bring in accountability, grounding, and amplification." },
            { q: "Where should I live or base myself in future?", a: "Global innovation hubs or visionary eco-communities. Think: Auroville, Bangalore, Berlin, Dubai, Silicon Valley, or your own designed space." },
            { q: "What's my 10-year dharma if I walk my best path?", a: "You become a transformational leader — shifting culture, policy, or industry norms with soul." },
            { q: "What's the most important thing I should learn next?", a: "Patience with process. Visionaries also need long-game stamina." },
            { q: "What will delay my growth?", a: "Refusing help. Overdoing. Fearing boredom." },
            { q: "What's one behavior I must master?", a: "Finishing — closing loops to build trust with yourself and your tribe." },
            { q: "What kind of partner or collaborator brings out my best?", a: "Someone structured, supportive, and emotionally intelligent — who believes in you without fanfare." },
            { q: "How will I know I'm on the right path?", a: "You'll feel simultaneously stretched and clear. Momentum will feel aligned, not frantic." },
            { q: "What role should technology play in my path?", a: "Your amplifier. From platforms to tools to content — it's your bridge to global scale." },
            { q: "Should I work alone or with a team?", a: "You need a high-autonomy team that can work independently while scaling your vision." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "That people are waiting for your idea — if you can just simplify and share it now." },
            { q: "What is my role in this lifetime?", a: "To see further, dream bigger, and build new worlds from the light of your mind." }
          ]
        };

      default:
        return {
          emoji: "🌟",
          subtitle: "Unique • Powerful • Transformative • Your Own Path",
          soulMirror: [
            { q: "Who am I at my core?", a: "A unique soul with your own special gifts waiting to be discovered." },
            { q: "What drives me even when things are tough?", a: "Your inner knowing that you have something important to contribute." }
          ],
          dharmaCompass: [
            { q: "What kind of work should I be doing in the next 3–5 years?", a: "Work that aligns with your authentic self and natural talents." },
            { q: "What's the biggest opportunity I'm not seeing?", a: "The power of embracing your unique archetype fully." }
          ]
        };
    }
  };

  const content = getArchetypeContent(archetype);

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader className="text-center pb-3">
          <div className="text-4xl mb-2">{content.emoji}</div>
          <CardTitle className="text-xl font-bold text-indigo-900">{archetype}</CardTitle>
          <p className="text-sm text-indigo-700 font-medium">{content.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Soul Mirror Section */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <span className="text-xl">🌌</span>
            <span>Soul Mirror – Deep Self-Discovery</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {content.soulMirror.slice(0, 10).map((item, index) => (
            <div key={index} className="bg-white/60 rounded-lg p-3">
              <h4 className="font-medium text-blue-900 text-sm mb-1">{item.q}</h4>
              <p className="text-xs text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
          {content.soulMirror.length > 10 && (
            <div className="bg-blue-100 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-700">
                📖 Get your complete 20-question Soul Mirror in your personal reading
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dharma Compass Section */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <span className="text-xl">🌠</span>
            <span>Dharma Compass – Future Guidance</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {content.dharmaCompass.slice(0, 10).map((item, index) => (
            <div key={index} className="bg-white/60 rounded-lg p-3">
              <h4 className="font-medium text-purple-900 text-sm mb-1">{item.q}</h4>
              <p className="text-xs text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
          {content.dharmaCompass.length > 10 && (
            <div className="bg-purple-100 rounded-lg p-3 text-center">
              <p className="text-xs text-purple-700">
                🧭 Get your complete 20-question Dharma Compass in your personal reading
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SelfFutureContent;
