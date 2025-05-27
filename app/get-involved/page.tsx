import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Join our student-run, nonprofit collective dedicated to providing
            affordable, vegan meals and bulk goods while building community at
            UCSD.
          </p>
        </div>
      </section>

      {/* Membership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            How to Join
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Start Volunteering",
                description:
                  "Begin by volunteering during meal preparation or cleanup shifts. No prior experience needed - we welcome all skill levels!",
                cta: "Connect With Us",
                link: "#connect",
              },
              {
                title: "2. Attend Meetings",
                description:
                  "Participate in our weekly meetings to learn more about our operations and community. Meeting times are set each quarter based on members' availability.",
                cta: "Learn More",
                link: "#meetings",
              },
              {
                title: "3. Become a Member",
                description:
                  "After volunteering for a quarter and attending weekly meetings, you can apply for free membership to become more involved in our collective.",
                cta: "Membership Info",
                link: "#membership",
              },
            ].map((step, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90 text-white"
                  >
                    <Link href={step.link}>
                      {step.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Meal Preparation",
                description:
                  "Help prepare affordable, nutritious vegan meals for the UCSD community. Learn cooking skills and contribute to food security on campus.",
              },
              {
                title: "Bulk Goods Distribution",
                description:
                  "Assist in providing accessible, affordable bulk food items to students and community members.",
              },
              {
                title: "Community Building",
                description:
                  "Participate in creating a supportive space for students to connect, share skills, and work towards food justice.",
              },
              {
                title: "Sustainable Practices",
                description:
                  "Engage in environmentally conscious food practices and learn about sustainable food systems.",
              },
            ].map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
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
              <Link href="#connect">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
