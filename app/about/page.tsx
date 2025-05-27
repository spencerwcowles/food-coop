import Link from "next/link";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Our Co-op
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            A student-run, student-owned collective providing affordable vegan
            food since 1978.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1978, the UCSD Food Co-op began as a student
                  initiative to provide affordable, healthy food options on
                  campus. Over four decades, we've evolved from a small
                  student-run store into a vibrant community hub for food
                  justice and sustainability.
                </p>
                <p>
                  Our co-op operates on principles of mutual aid, collective
                  decision-making, and accessibility. We believe that everyone
                  deserves access to nutritious food regardless of their
                  financial situation, and we work to create systems that
                  address immediate needs while advocating for long-term
                  solutions.
                </p>
                <p>
                  Today, we continue our mission by providing daily vegan meals,
                  bulk goods, and produce to the UCSD community. Our space
                  serves as a gathering place for students to connect, learn,
                  and work together towards a more equitable food system.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/thehub.jpg"
                alt="The UCSD Food Co-op Hub space"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Food Justice",
                description:
                  "We provide affordable vegan meals and bulk goods to address food insecurity on campus. Our pricing model ensures that healthy food remains accessible to all students.",
              },
              {
                title: "Mutual Aid",
                description:
                  "Our volunteer-based model allows students to contribute their time and skills while benefiting from affordable food options. We operate on solidarity, not charity.",
              },
              {
                title: "Sustainability",
                description:
                  "Through our vegan menu, bulk purchasing options, and community garden participation, we actively reduce food waste and promote environmentally conscious choices.",
              },
              {
                title: "Accessibility",
                description:
                  "We maintain low prices on all our offerings and ensure our space is welcoming to everyone. Our membership process is free and open to all interested students.",
              },
              {
                title: "Education",
                description:
                  "We share knowledge about vegan cooking, sustainable food practices, and food justice through hands-on experience in our kitchen and community events.",
              },
              {
                title: "Community",
                description:
                  "Our space serves as a hub for students to connect, share meals, and collaborate on initiatives that promote food security and sustainability on campus.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#4A6741]">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Offerings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Daily Vegan Meals",
                description:
                  "We serve affordable, nutritious vegan meals prepared fresh by our volunteers. Our menu changes regularly and features diverse, globally-inspired dishes.",
              },
              {
                title: "Bulk Goods & Produce",
                description:
                  "Access affordable bulk dry goods and fresh produce through our store. We prioritize sustainable sourcing and minimal packaging.",
              },
              {
                title: "Catering Services",
                description:
                  "We offer catering for campus events, providing delicious vegan options for gatherings of all sizes while supporting our mission.",
              },
              {
                title: "Community Garden",
                description:
                  "Participate in our community garden plots, where we grow fresh produce and herbs used in our kitchen while learning about sustainable agriculture.",
              },
            ].map((offering, index) => (
              <div key={index} className="bg-[#F5F5F0] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A6741]">
                  {offering.title}
                </h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Our Partners & Supporters
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We collaborate with various organizations to strengthen our impact
            and build a more sustainable food system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img
              src="/surfridersandiego.png"
              alt="Surfrider Foundation San Diego"
              className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/foodrecoverynetwork.png"
              alt="Food Recovery Network"
              className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/ucsdcenterforcommunityhealth.png"
              alt="UCSD Center for Community Health"
              className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/ucsdguardian.png"
              alt="UCSD Guardian"
              className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A6741] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            We welcome students of all backgrounds to join our collective. Start
            by volunteering in our kitchen or attending our weekly meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F9B872] text-black hover:bg-[#F9B872]/90"
            >
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
