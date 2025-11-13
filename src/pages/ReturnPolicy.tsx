import SEO from "@/components/SEO";

const ReturnPolicy = () => {
  return (
    <>
      <SEO
        title="Return Policy | KarmaArchetype"
        description="Learn about KarmaArchetype's return policy for digital astrology services."
        canonicalUrl="https://karmaarchetype.com/return-policy"
      />
      
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Return Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Digital Services</h2>
              <p>
                KarmaArchetype provides digital astrology services, including reports and consultations. As these are digital products, traditional returns are not applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Guarantee</h2>
              <p>
                Instead of returns, we offer a satisfaction guarantee:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>All reports delivered within promised timeframes</li>
                <li>High-quality, personalized astrology readings</li>
                <li>Professional and ethical service</li>
                <li>Full refund if we miss our Service Level Agreement (SLA)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellation Before Delivery</h2>
              <p>
                You may cancel your order before we start working on your report:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact us within 2 hours of placing your order</li>
                <li>Full refund will be issued if work hasn't begun</li>
                <li>Partial refund may be available if work is in progress</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Quality Issues</h2>
              <p>
                If you receive a report with quality issues:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact us within 7 days of receiving your report</li>
                <li>Describe the specific issues you've encountered</li>
                <li>We will either revise the report or issue a full refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Returnable Services</h2>
              <p>
                The following cannot be returned or refunded after delivery:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Completed live consultation sessions</li>
                <li>Delivered digital reports that meet quality standards</li>
                <li>Free lottery readings</li>
                <li>Promotional services after use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Support</h2>
              <p>
                For any questions about returns or service issues, please contact our support team through the website. We're committed to ensuring your satisfaction with our services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
