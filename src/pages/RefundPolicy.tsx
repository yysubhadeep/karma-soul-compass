import SEO from "@/components/SEO";

const RefundPolicy = () => {
  return (
    <>
      <SEO
        title="Refund Policy | KarmaArchetype"
        description="Learn about KarmaArchetype's refund policy for astrology services."
        canonicalUrl="https://karmaarchetype.com/refund-policy"
      />
      
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Refund Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">100% Satisfaction Guarantee</h2>
              <p>
                At KarmaArchetype, we stand behind the quality of our astrology services. If you're not satisfied with your reading, we offer a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Eligibility</h2>
              <p>
                You may request a refund within 7 days of receiving your astrology report if:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>The report was not delivered within the promised timeframe</li>
                <li>Technical issues prevented you from accessing your report</li>
                <li>The report does not meet the quality standards we promised</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Process</h2>
              <p>
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 mt-2 space-y-2">
                <li>Contact our support team through the website</li>
                <li>Provide your order details and reason for refund</li>
                <li>We will process your request within 2-3 business days</li>
                <li>Refunds will be issued to the original payment method within 5-7 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Refundable Items</h2>
              <p>
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Free lottery readings</li>
                <li>Promotional or discounted services after partial use</li>
                <li>Requests made after 7 days from report delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
              <p>
                If you have any questions about our refund policy, please contact our support team.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
