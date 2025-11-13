import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | KarmaArchetype"
        description="Learn how KarmaArchetype protects your privacy and handles your personal information."
        canonicalUrl="https://karmaarchetype.com/privacy-policy"
      />
      
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Birth date, time, and place for astrology calculations</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Questions and communications with our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate astrology readings and reports</li>
                <li>Communicate with you about your orders and services</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share anonymized versions of questions and answers for educational purposes, as agreed upon in our consent forms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
              <p>
                We use cookies and similar technologies to improve your experience on our website. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
