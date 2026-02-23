import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Have questions or want to get in touch? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Please fill out the corresponding form in our Linktree which can be accessed below. You can also contact us through our email.
              </p>
              
              <div className="mb-10">
                  <a
                    href="https://linktr.ee/YOUR_LINKTREE_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#4A6741] text-white font-medium rounded-lg hover:bg-[#4A6741]/90 transition"
                  >
                    Visit Our Linktree
                  </a>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start justify-center text-left">
                  <MapPin className="h-6 w-6 mr-3 text-[#4A6741] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600 mt-1">
                      Student Center, UCSD
                      <br />
                      9500 Gilman Dr.
                      <br />
                      La Jolla, CA 92093
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-center text-left">
                  <Mail className="h-6 w-6 mr-3 text-[#4A6741] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="mailto:core@foodcoopatucsd.org"
                        className="hover:text-[#4A6741]"
                      >
                        core@foodcoopatucsd.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Office Hours
                </h3>
                <div className="bg-[#F5F5F0] p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-gray-600">11:00 AM - 3:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Find Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="aspect-[4/3] w-full rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.42460081759634!2d-117.24008569446522!3d32.87717966195371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc071dc68b7cf7%3A0x318d01fa2fc44cc7!2sThe%20Hub%2C%20UC%20San%20Diego%20Basic%20Needs%20Center!5e0!3m2!1sen!2sus!4v1748373628538!5m2!1sen!2sus"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
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
                question: "What are your office hours?",
                answer:
                  "Our office is open Monday through Friday from 11:00 AM to 3:00 PM. We are closed on weekends.",
              },
              {
                question: "How quickly do you respond to emails?",
                answer:
                  "We aim to respond to all emails within 1-2 business days. During busy periods (like finals week), response times may be slightly longer.",
              },
              {
                question:
                  "I'm interested in volunteering. How do I get started?",
                answer:
                  "Great! You can fill out our volunteer form on our linktree, which we have attached on the contact page and on our instagram! You could also come to one of our weekly meetings to meet current members and learn more about volunteer opportunities.",
              },
              {
                question: "Do I need to be a UCSD student to contact you?",
                answer:
                  "No, we're happy to hear from anyone! While our primary focus is serving the UCSD community, we welcome inquiries from faculty, staff, community members, and other schools interested in starting similar initiatives.",
              },
              {
                question: "I need immediate food assistance. Can you help?",
                answer:
                  "If you need immediate food assistance, please visit our Resources page for emergency food options on campus, including the Triton Food Pantry. You can also call or email us, and we'll do our best to connect you with resources quickly.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
