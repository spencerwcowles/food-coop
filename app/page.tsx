import Link from "next/link";
import { ArrowRight, Calendar, Heart, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#4A6741] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                UCSD Food Co-op
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
                A student-run collective dedicated to addressing food insecurity
                and building community through sustainable food practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <img
                src="/mainimage.jpg"
                alt="Students working together at the UCSD Food Co-op"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that access to nutritious food is a right, not a
              privilege. Our co-op works to create a more equitable food system
              at UCSD and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#4A6741] rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Food Justice
              </h3>
              <p className="text-gray-600">
                We work to address food insecurity on campus through mutual aid,
                education, and advocacy.
              </p>
            </div>

            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#4A6741] rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Building
              </h3>
              <p className="text-gray-600">
                We create spaces for students to connect, share skills, and
                support each other.
              </p>
            </div>

            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#4A6741] rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Skill Sharing
              </h3>
              <p className="text-gray-600">
                We host workshops on cooking, gardening, and food preservation
                to build collective knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Preview */}
      <section className="py-16 bg-[#F9B872]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                The Food Co-op welcomes students of all backgrounds and
                experience levels. Whether you're passionate about food justice,
                looking to learn new skills, or simply want to connect with
                others, there's a place for you here.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-[#4A6741] rounded-full p-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800">
                    Attend our weekly meetings
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-[#4A6741] rounded-full p-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800">
                    Volunteer at our food distribution events
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-[#4A6741] rounded-full p-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800">
                    Participate in workshops and skill shares
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-[#4A6741] hover:bg-[#4A6741]/90 text-white dark:bg-[#6B8E62] dark:hover:bg-[#6B8E62]/90"
              >
                <Link href="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <img
                src="/funimage.jpg"
                alt="Students participating in a Food Co-op workshop"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Weekly Food Distribution",
                date: "Every Wednesday, 12-2pm",
                location: "Price Center Plaza",
                description:
                  "Free groceries for UCSD students. Bring your student ID and reusable bags.",
              },
              {
                title: "Cooking Workshop: Plant-Based Meals on a Budget",
                date: "May 15, 5-7pm",
                location: "The Zone",
                description:
                  "Learn to cook affordable, nutritious plant-based meals with seasonal ingredients.",
              },
              {
                title: "General Meeting & New Member Orientation",
                date: "May 20, 6-7:30pm",
                location: "Student Services Center, Room 250",
                description:
                  "Join us to learn about the co-op, meet current members, and find ways to get involved.",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-[#4A6741] font-medium mb-1">{event.date}</p>
                <p className="text-gray-500 mb-3">{event.location}</p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white dark:border-[#6B8E62] dark:text-[#6B8E62] dark:hover:bg-[#6B8E62] dark:hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white dark:border-[#6B8E62] dark:text-[#6B8E62] dark:hover:bg-[#6B8E62] dark:hover:text-white"
            >
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Community Voices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "The Food Co-op has been a lifeline during my time at UCSD. Not only have I found access to healthy food, but I've also found a supportive community.",
                name: "Jamie Chen",
                role: "Third-year Biology major",
              },
              {
                quote:
                  "Volunteering with the co-op has taught me so much about food systems and community organizing. It's been one of the most rewarding parts of my college experience.",
                name: "Miguel Rodriguez",
                role: "Fourth-year Urban Studies major",
              },
              {
                quote:
                  "As someone who was struggling with food insecurity, finding the co-op changed everything. Now I'm helping others access resources too.",
                name: "Aisha Johnson",
                role: "Second-year Engineering major",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A6741] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Whether you're looking for food resources, want to volunteer, or are
            interested in learning more about food justice, we'd love to welcome
            you to the UCSD Food Co-op.
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
