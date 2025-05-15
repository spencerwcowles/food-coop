export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Our commitment to making the UCSD Food Co-op accessible to all.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-green">
            <h2>Our Commitment to Accessibility</h2>
            <p>
              The UCSD Food Co-op is committed to ensuring digital accessibility for people with disabilities. We are
              continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>

            <h2>Measures to Support Accessibility</h2>
            <p>The UCSD Food Co-op takes the following measures to ensure accessibility of our website:</p>
            <ul>
              <li>Include accessibility as part of our mission statement.</li>
              <li>Include accessibility throughout our internal policies.</li>
              <li>Assign clear accessibility targets and responsibilities.</li>
              <li>Employ formal accessibility quality assurance methods.</li>
            </ul>

            <h2>Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level
              AA, and Level AAA. The UCSD Food Co-op website is partially conformant with WCAG 2.1 level AA. Partially
              conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of the UCSD Food Co-op website. Please let us know if you
              encounter accessibility barriers:
            </p>
            <ul>
              <li>Phone: (858) 555-1234</li>
              <li>E-mail: foodcoop@ucsd.edu</li>
              <li>Postal address: Student Center, UCSD, 9500 Gilman Dr., La Jolla, CA 92093</li>
            </ul>
            <p>We try to respond to feedback within 3 business days.</p>

            <h2>Physical Accessibility</h2>
            <p>
              In addition to our digital accessibility efforts, we strive to make our physical spaces and events
              accessible to all:
            </p>
            <ul>
              <li>Our office and meeting spaces are wheelchair accessible.</li>
              <li>We provide accommodations for events upon request.</li>
              <li>We offer delivery options for those who cannot access our food distribution locations.</li>
              <li>We welcome service animals at all our events and spaces.</li>
            </ul>

            <h2>Assessment Approach</h2>
            <p>The UCSD Food Co-op assessed the accessibility of our website by the following approaches:</p>
            <ul>
              <li>Self-evaluation</li>
              <li>External evaluation</li>
            </ul>

            <h2>Date</h2>
            <p>This statement was created on May 8, 2025.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
