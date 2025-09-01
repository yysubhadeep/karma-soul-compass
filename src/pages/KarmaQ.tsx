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
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
            A KarmaMap™ Sub-Brand
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            One Question. <br />
            <span className="text-primary">One Clear Answer.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Astrology + Psychology for Decisions That Matter. <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Fear-free. Actionable. Affordable.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              onClick={handleAskQuestion}
            >
              Ask Your Question Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              onClick={handleFreeLottery}
            >
              Try Free Lottery
              <Star className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">2,847+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Questions Answered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">24h</div>
              <div className="text-sm sm:text-base text-muted-foreground">Average Response Time</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">96%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Ask</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">Submit your precise question with birth details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Answer</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">Get your personalized astro-psychological analysis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Act</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">Follow clear action steps with perfect timing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 px-2">Choose Your Path to Clarity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <Button className="w-full text-sm sm:text-base py-2 sm:py-3" onClick={handleAskQuestion}>Ask Now</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary shadow-lg sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <Badge className="w-fit mb-2 text-xs sm:text-sm">Most Popular</Badge>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  Fast-Track
                </CardTitle>
                <CardDescription className="text-sm">For urgent decisions</CardDescription>
                <div className="text-2xl sm:text-3xl font-bold">₹499</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    12h delivery
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Priority queue
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Detailed timing analysis
                  </li>
                </ul>
                <Button className="w-full text-sm sm:text-base py-2 sm:py-3" onClick={handleAskQuestion}>Ask Now</Button>
              </CardContent>
            </Card>
            
            <Card className="sm:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  Clarity Club
                </CardTitle>
                <CardDescription className="text-sm">For ongoing guidance</CardDescription>
                <div className="text-2xl sm:text-3xl font-bold">₹999<span className="text-sm sm:text-base font-normal">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    4 questions/month
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Live Q&A priority
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Full library access
                  </li>
                </ul>
                <Button variant="outline" className="w-full text-sm sm:text-base py-2 sm:py-3" onClick={handleAskQuestion}>Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Answers Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 px-2">Sample Clarity Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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
                  <CardTitle className="text-base sm:text-lg leading-tight">{answer.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">{answer.preview}</p>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm" onClick={handleAskQuestion}>
                    Ask Your Question
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 px-2">Join Our Live Clarity Sessions</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            10 Questions in 10 Minutes - Every Wednesday 8 PM IST
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Join Next Session
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              View Past Sessions
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">Get Clarity Stories & Free Lottery Links</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            Straight to your inbox/WhatsApp. No spam, just wisdom.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Join Newsletter
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              WhatsApp Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">Ready for Clarity?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            One question is all it takes to change everything.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            onClick={handleAskQuestion}
          >
            Ask Your Question Now
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default KarmaQ;