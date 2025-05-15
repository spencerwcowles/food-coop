import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            Learn about our history, values, and the community we're building at
            UCSD.
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
                  The UCSD Food Co-op was founded in 2015 by a group of students
                  concerned about rising food insecurity on campus. What began
                  as informal food sharing and community meals has grown into a
                  recognized student organization with a dedicated space and
                  regular programming.
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
                  Today, the Food Co-op serves hundreds of UCSD students each
                  quarter through our food distributions, community meals,
                  workshops, and advocacy efforts. We're proud to be part of a
                  growing movement of campus food security initiatives across
                  the country.
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
                  "We believe access to nutritious food is a right, not a privilege. We work to address systemic inequities in our food system.",
              },
              {
                title: "Mutual Aid",
                description:
                  "We practice solidarity, not charity. Our work is based on reciprocity and the understanding that we all have something to contribute.",
              },
              {
                title: "Sustainability",
                description:
                  "We promote environmentally sustainable food practices that respect our planet and support local food systems.",
              },
              {
                title: "Accessibility",
                description:
                  "We strive to make our space, events, and resources accessible to all members of our community, regardless of ability, language, or background.",
              },
              {
                title: "Education",
                description:
                  "We value skill-sharing and collective learning about food systems, cooking, nutrition, and food justice.",
              },
              {
                title: "Community",
                description:
                  "We build meaningful connections through food, creating spaces where people can share meals and stories.",
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

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Our Team
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            The UCSD Food Co-op is run entirely by students. Our collective
            leadership model means that everyone has a voice in decision-making
            and can take on responsibilities based on their interests and
            capacity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Outreach Coordinator",
                bio: "Fourth-year Sociology major passionate about food justice and community organizing.",
                image: "/funimage.jpg",
              },
              {
                name: "Priya Patel",
                role: "Food Distribution Lead",
                bio: "Third-year Public Health student with experience in mutual aid networks.",
                image: "/mainimage.jpg",
              },
              {
                name: "Jordan Kim",
                role: "Workshop Facilitator",
                bio: "Second-year Environmental Studies major who loves teaching cooking skills.",
                image: "/thehub.jpg",
              },
              {
                name: "Malik Johnson",
                role: "Resource Coordinator",
                bio: "Graduate student in Urban Planning focused on food security in urban areas.",
                image: "/funimage.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-[#4A6741] font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to join our team? We welcome new members throughout the
              academic year!
            </p>
            <Button asChild className="bg-[#4A6741] hover:bg-[#4A6741]/90">
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            We collaborate with campus departments, local organizations, and
            community groups to further our mission of food justice and
            community building.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "UCSD Basic Needs Hub",
              "Triton Food Pantry",
              "San Diego Food Bank",
              "UCSD Community Gardens",
              "Student Sustainability Collective",
              "Associated Students",
              "UCSD Housing & Dining",
              "San Diego Food System Alliance",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white h-32 rounded-lg flex items-center justify-center p-6 shadow-sm"
              >
                <span className="text-center font-medium text-gray-800">
                  {partner}
                </span>
              </div>
            ))}
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
            We welcome students of all backgrounds, experiences, and skill
            levels. There are many ways to get involved with the UCSD Food
            Co-op.
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
