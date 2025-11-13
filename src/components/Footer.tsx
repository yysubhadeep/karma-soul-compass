import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">KarmaArchetype™</h3>
            <p className="text-sm text-muted-foreground">
              Discover your soul's blueprint through AI-powered astrology readings.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/KarmaQ" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  KarmaQ™
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/refund-policy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/return-policy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contact@karmaarchetype.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@karmaarchetype.com</span>
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} KarmaArchetype™. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              Built for Bharat 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
