
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
