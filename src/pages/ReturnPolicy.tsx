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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Return & Exchange Policy</h2>
              <p>
                We offer refund / exchange within first 7 days from the date of your purchase. If 7 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Eligibility Criteria</h2>
              <p>
                In order to become eligible for a return or an exchange:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>The purchased item should be unused and in the same condition as you received it</li>
                <li>The item must have original packaging</li>
                <li>If the item that you purchased on a sale, then the item may not be eligible for a return / exchange</li>
              </ul>
              <p className="mt-4">
                Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Exempt Categories</h2>
              <p>
                You agree that there may be a certain category of products / items that are exempted from returns or refunds. Such categories of the products would be identified to you at the item of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Return Process</h2>
              <p>
                For exchange / return accepted request(s) (as applicable), once your returned product / item is received and inspected by us, we will send you an email to notify you about receipt of the returned / exchanged product.
              </p>
              <p>
                Further, if the same has been approved after the quality check at our end, your request (i.e. return / exchange) will be processed in accordance with our policies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
