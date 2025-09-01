import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { Clock, CheckCircle, Users, Star, ArrowRight, Calendar, Mail, Zap, Target, Heart, Briefcase, GraduationCap } from "lucide-react";

const KarmaQ = () => {
  const handleAskQuestion = () => {
    // Redirect to external form (to be replaced with actual form URL)
    window.open('https://forms.gle/your-form-link', '_blank');
  };

  const handleFreeLottery = () => {
    // Redirect to external form for free lottery
    window.open('https://forms.gle/your-free-lottery-form', '_blank');
  };

  const sampleAnswers = [
    {
      question: "Should I quit my corporate job to start my own business?",
      category: "Career",
      preview: "Based on your chart, Jupiter's transit through your 10th house until March 2024 creates a powerful window for entrepreneurial ventures..."
    },
    {
      question: "Is my long-distance relationship worth fighting for?",
      category: "Love",
      preview: "Venus in your 7th house suggests deep karmic connection. However, Saturn's current position indicates tests of commitment..."
    },
    {
      question: "Which engineering stream should I choose for my future?",
      category: "Education", 
      preview: "Your Mercury-Mars conjunction in the 5th house strongly favors technical fields, particularly those involving innovation..."
    },
    {
      question: "When is the right time to buy a house?",
      category: "Life Decisions",
      preview: "The upcoming Mars transit in your 4th house from July 2024 creates an auspicious period for property investments..."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="KarmaQ™ - One Question. One Clear Answer. | Astrology + Psychology"
        description="Fast, fear-free astrology + psychology answers for career, relationships, education, and life decisions. One question → one page → clarity + timing + action steps."
        keywords="astrology questions, life decisions, career guidance, relationship advice, educational choices, psychological astrology, instant answers"
        ogTitle="KarmaQ™ - One Question. One Clear Answer."
        ogDescription="Get fast, fear-free astrology + psychology answers for your most important life decisions. Delivered ethically in 12-48 hours."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            A KarmaMap™ Sub-Brand
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            One Question. <br />
            <span className="text-primary">One Clear Answer.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Astrology + Psychology for Decisions That Matter. <br />
            Fear-free. Actionable. Affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={handleAskQuestion}
            >
              Ask Your Question Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={handleFreeLottery}
            >
              Try Free Lottery
              <Star className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">2,847+</div>
              <div className="text-muted-foreground">Questions Answered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">96%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ask</h3>
              <p className="text-muted-foreground">Submit your precise question with birth details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Answer</h3>
              <p className="text-muted-foreground">Get your personalized astro-psychological analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Act</h3>
              <p className="text-muted-foreground">Follow clear action steps with perfect timing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Path to Clarity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Standard
                </CardTitle>
                <CardDescription>Perfect for important decisions</CardDescription>
                <div className="text-3xl font-bold">₹299</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    48h delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    One detailed answer
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Action steps included
                  </li>
                </ul>
                <Button className="w-full" onClick={handleAskQuestion}>Ask Now</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Fast-Track
                </CardTitle>
                <CardDescription>For urgent decisions</CardDescription>
                <div className="text-3xl font-bold">₹499</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    12h delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Priority queue
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Detailed timing analysis
                  </li>
                </ul>
                <Button className="w-full" onClick={handleAskQuestion}>Ask Now</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Clarity Club
                </CardTitle>
                <CardDescription>For ongoing guidance</CardDescription>
                <div className="text-3xl font-bold">₹999<span className="text-base font-normal">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    4 questions/month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Live Q&A priority
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Full library access
                  </li>
                </ul>
                <Button variant="outline" className="w-full" onClick={handleAskQuestion}>Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Answers Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Sample Clarity Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleAnswers.map((answer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {answer.category === 'Career' && <Briefcase className="h-4 w-4" />}
                    {answer.category === 'Love' && <Heart className="h-4 w-4" />}
                    {answer.category === 'Education' && <GraduationCap className="h-4 w-4" />}
                    {answer.category === 'Life Decisions' && <Target className="h-4 w-4" />}
                    <Badge variant="secondary">{answer.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{answer.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{answer.preview}</p>
                  <Button variant="outline" size="sm" onClick={handleAskQuestion}>
                    Ask Your Question
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Live Clarity Sessions</h2>
          <p className="text-xl text-muted-foreground mb-8">
            10 Questions in 10 Minutes - Every Wednesday 8 PM IST
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Join Next Session
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Past Sessions
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Clarity Stories & Free Lottery Links</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Straight to your inbox/WhatsApp. No spam, just wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Join Newsletter
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              WhatsApp Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Clarity?</h2>
          <p className="text-xl mb-8 opacity-90">
            One question is all it takes to change everything.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6"
            onClick={handleAskQuestion}
          >
            Ask Your Question Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default KarmaQ;