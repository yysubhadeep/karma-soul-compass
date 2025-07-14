import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Mail, Phone, MapPin, Heart, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact KarmaMap™ - Get in Touch with the Team"
        description="Have questions about KarmaMap™? Contact our team for support, partnerships, or feedback. We're here to help you on your journey of self-discovery."
        keywords="contact karmamap, support, help, questions, feedback, team"
        ogTitle="Contact KarmaMap™ - We're Here to Help"
        ogDescription="Reach out to the KarmaMap™ team for any questions about your life purpose reading or our initiative."
        canonicalUrl="https://karmamap.lovable.app/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        {/* Header */}
        <header className="px-4 py-4 sm:py-6 flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">KarmaMap™</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </header>

        {/* Contact Hero */}
        <section className="px-4 py-8 sm:py-12 max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🤝 Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-orange-600">KarmaMap™</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Have questions about your reading? Want to know more about our initiative? 
              We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Email Us</CardTitle>
                <CardDescription>Send us your questions or feedback</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a 
                  href="mailto:yysubhadeep@gmail.com" 
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  yysubhadeep@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Call Us</CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a 
                  href="tel:+919930416233" 
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  +91 99304 16233
                </a>
              </CardContent>
            </Card>
          </div>

          {/* About the Initiative */}
          <Card className="border-orange-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4 flex items-center justify-center space-x-2">
                <Heart className="h-6 w-6 text-orange-600" />
                <span>About Our Initiative</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <div className="text-center mb-6">
                <p className="text-lg font-medium text-gray-900 mb-4">
                  Empowering Bharat's Youth Through Ancient Wisdom
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  KarmaMap™ was born from a simple observation: countless young people in India 
                  are struggling with life direction, career confusion, and relationship challenges 
                  despite having access to more information than ever before.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Mission</h3>
                  <p>
                    To democratize ancient Indian wisdom through modern AI, making personalized 
                    life guidance accessible to everyone - regardless of their background, 
                    location, or economic status.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/70 p-4 rounded-lg border border-orange-100">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <span>🎯</span>
                      <span>Our Vision</span>
                    </h4>
                    <p className="text-sm">
                      A generation of Indians who live with purpose, clarity, and confidence 
                      in their authentic path.
                    </p>
                  </div>
                  
                  <div className="bg-white/70 p-4 rounded-lg border border-orange-100">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <span>💝</span>
                      <span>Our Promise</span>
                    </h4>
                    <p className="text-sm">
                      To keep our core insights free forever, making wisdom accessible 
                      to all of Bharat.
                    </p>
                  </div>
                </div>

                <p>
                  We believe that every person carries within them a unique karmic blueprint - 
                  a set of strengths, challenges, and life patterns that, when understood, 
                  can unlock extraordinary potential and fulfillment.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Why Ancient Wisdom + Modern AI?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Traditional astrology requires years of study and expensive consultations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>AI can process complex karmic patterns instantly and accurately</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>We preserve the depth of wisdom while making it accessible to millions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-700">Trusted by 10,000+ people across Bharat</span>
            </div>
            <p className="text-gray-600 italic mb-4">
              "Finally, ancient wisdom that speaks my language" - Rahul, Delhi
            </p>
            <Link to="/">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Start Your Free Reading
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 sm:py-12 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-xl sm:text-2xl font-bold">KarmaMap™</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Discover your true path with AI-powered ancient wisdom
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-500">
              <p>📧 yysubhadeep@gmail.com • 📱 +91 99304 16233</p>
              <p>© 2025 KarmaMap™. Built for Bharat with 🧡</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;