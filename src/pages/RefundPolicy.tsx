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
              <p>
                This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellation Policy</h2>
              <p>
                Cancellations will only be considered if the request is made 7 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
              </p>
              <p>
                EMBEDDED DISTRIBUTION TECHNOLOGY PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that the quality of the product delivered is not good.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Damaged or Defective Items</h2>
              <p>
                In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within 7 days of receipt of products.
              </p>
              <p>
                In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Warranty Claims</h2>
              <p>
                In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Processing</h2>
              <p>
                In case of any refunds approved by EMBEDDED DISTRIBUTION TECHNOLOGY PRIVATE LIMITED, it will take 7 days for the refund to be processed to you.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
