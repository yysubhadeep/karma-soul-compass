import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions | KarmaArchetype"
        description="Read the terms and conditions for using KarmaArchetype's astrology services."
        canonicalUrl="https://karmaarchetype.com/terms"
      />
      
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using KarmaArchetype services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Service</h2>
              <p>
                Our astrology services are provided for entertainment and guidance purposes only. We do not guarantee specific outcomes or results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p>
                Users must provide accurate birth information for astrology readings. You are responsible for maintaining the confidentiality of your account information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                All content, reports, and materials provided by KarmaArchetype are protected by copyright and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                KarmaArchetype shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact</h2>
              <p>
                For questions about these terms, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
