import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Join our community and be part of the movement for food justice at
            UCSD.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Ways to Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Attend Events",
                description:
                  "Join our weekly meetings, workshops, and community meals to learn more about the co-op and meet current members.",
                cta: "View Calendar",
                link: "/events",
              },
              {
                title: "Volunteer",
                description:
                  "Help with food distributions, cooking workshops, gardening days, and other activities based on your interests and availability.",
                cta: "Sign Up",
                link: "#volunteer-form",
              },
              {
                title: "Join a Working Group",
                description:
                  "Become part of a team focused on specific aspects of our work, such as outreach, food distribution, or education.",
                cta: "Explore Groups",
                link: "#working-groups",
              },
            ].map((way, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{way.title}</CardTitle>
                  <CardDescription>{way.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90 text-white dark:bg-[#6B8E62] dark:hover:bg-[#6B8E62]/90"
                  >
                    <Link href={way.link}>
                      {way.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Upcoming Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "New Member Orientation",
                date: "May 20, 2025",
                time: "6:00 PM - 7:30 PM",
                location: "Student Services Center, Room 250",
                description:
                  "Learn about the co-op, our values, and how you can get involved. No prior experience necessary!",
              },
              {
                title: "Food Distribution Volunteer Training",
                date: "May 22, 2025",
                time: "4:00 PM - 5:30 PM",
                location: "Price Center, Room 3.1",
                description:
                  "Training for new volunteers who want to help with our weekly food distributions.",
              },
              {
                title: "Community Garden Workday",
                date: "May 25, 2025",
                time: "10:00 AM - 1:00 PM",
                location: "Roger's Community Garden",
                description:
                  "Help maintain our community garden plots. Tools and refreshments provided!",
              },
              {
                title: "Cooking Workshop Planning Meeting",
                date: "May 27, 2025",
                time: "5:00 PM - 6:30 PM",
                location: "The Zone",
                description:
                  "Help plan our summer cooking workshop series. Share your ideas and skills!",
              },
            ].map((opportunity, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-[#4A6741]/10 pb-3">
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{opportunity.date}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{opportunity.time}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{opportunity.location}</span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      {opportunity.description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90 text-white dark:bg-[#6B8E62] dark:hover:bg-[#6B8E62]/90">
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
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

      {/* Working Groups */}
      <section id="working-groups" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Working Groups
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our co-op is organized into working groups that focus on different
            aspects of our mission. Join a group that matches your interests and
            skills!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Food Distribution",
                description:
                  "Coordinates weekly food distributions, manages inventory, and ensures food safety protocols are followed.",
                commitment: "3-5 hours/week",
                skills: "Organization, reliability, food handling",
              },
              {
                title: "Education & Workshops",
                description:
                  "Plans and facilitates workshops on cooking, nutrition, food justice, and other related topics.",
                commitment: "2-4 hours/week",
                skills: "Teaching, curriculum development, public speaking",
              },
              {
                title: "Outreach & Communications",
                description:
                  "Manages social media, creates promotional materials, and coordinates tabling events to raise awareness.",
                commitment: "2-4 hours/week",
                skills: "Writing, design, social media management",
              },
              {
                title: "Garden Collective",
                description:
                  "Maintains our community garden plots, organizes workdays, and coordinates with campus garden initiatives.",
                commitment: "2-5 hours/week",
                skills: "Gardening, sustainability knowledge, physical labor",
              },
            ].map((group, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Time Commitment:</span>{" "}
                      {group.commitment}
                    </div>
                    <div>
                      <span className="font-medium">Helpful Skills:</span>{" "}
                      {group.skills}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90 text-white dark:bg-[#6B8E62] dark:hover:bg-[#6B8E62]/90">
                    Join This Group
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 text-center">
              Volunteer Sign-Up
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out this form to express your interest in volunteering with
              the UCSD Food Co-op. We'll reach out with more information about
              upcoming opportunities.
            </p>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Year at UCSD</Label>
                    <select
                      id="year"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select your year</option>
                      <option value="first">First Year</option>
                      <option value="second">Second Year</option>
                      <option value="third">Third Year</option>
                      <option value="fourth">Fourth Year</option>
                      <option value="fifth">Fifth Year+</option>
                      <option value="graduate">Graduate Student</option>
                      <option value="staff">Faculty/Staff</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Food Distribution",
                        "Cooking Workshops",
                        "Gardening",
                        "Outreach & Communications",
                        "Event Planning",
                        "Food Justice Advocacy",
                        "Administrative Support",
                        "Other",
                      ].map((interest, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={`interest-${index}`}
                            className="rounded border-gray-300 text-[#4A6741] focus:ring-[#4A6741]"
                          />
                          <Label
                            htmlFor={`interest-${index}`}
                            className="font-normal"
                          >
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Weekday Mornings",
                        "Weekday Afternoons",
                        "Weekday Evenings",
                        "Weekend Mornings",
                        "Weekend Afternoons",
                        "Weekend Evenings",
                      ].map((time, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={`time-${index}`}
                            className="rounded border-gray-300 text-[#4A6741] focus:ring-[#4A6741]"
                          />
                          <Label
                            htmlFor={`time-${index}`}
                            className="font-normal"
                          >
                            {time}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Why are you interested in volunteering with the Food
                      Co-op?
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us a bit about yourself and why you're interested in joining the Food Co-op..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90 text-white dark:bg-[#6B8E62] dark:hover:bg-[#6B8E62]/90"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question:
                  "Do I need to have experience with food justice or cooking to join?",
                answer:
                  "Not at all! We welcome members of all experience levels. We value enthusiasm and a willingness to learn more than prior experience.",
              },
              {
                question: "How much time do I need to commit?",
                answer:
                  "It varies based on your role and availability. Some members volunteer for a few hours a month, while others are more deeply involved. We work with your schedule and respect that academics come first.",
              },
              {
                question: "I'm not a UCSD student. Can I still get involved?",
                answer:
                  "While our primary focus is serving the UCSD student community, we welcome faculty, staff, and community members to volunteer and participate in many of our events.",
              },
              {
                question: "Do I need to pay dues to join?",
                answer:
                  "No, there are no membership dues. The Food Co-op is free to join and participate in.",
              },
              {
                question: "How are decisions made in the co-op?",
                answer:
                  "We use a consensus-based decision-making process where all members have a voice. Major decisions are discussed at our general meetings, which are open to all members.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {faq.question}
                </h3>
                <p className="text-black">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A6741] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join us in building a more just and sustainable food system at UCSD.
            Everyone is welcome, and together we can make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F9B872] text-black hover:bg-[#F9B872]/90"
            >
              <a href="#volunteer-form">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
