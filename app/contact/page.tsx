import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our events, want to volunteer, or need assistance with food resources,
                we're here to help. Fill out the form and we'll get back to you as soon as possible.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is your message about?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Type your message here..." rows={5} />
                    </div>

                    <Button type="submit" className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can also reach us through the following channels or visit us during our office hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
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

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 text-[#4A6741] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:foodcoop@ucsd.edu" className="hover:text-[#4A6741]">
                        foodcoop@ucsd.edu
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 text-[#4A6741] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+18585551234" className="hover:text-[#4A6741]">
                        (858) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
                <div className="bg-[#F5F5F0] p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Monday - Thursday</p>
                      <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Friday</p>
                      <p className="text-gray-600">10:00 AM - 2:00 PM</p>
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

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4A6741] text-white p-3 rounded-full hover:bg-[#4A6741]/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4A6741] text-white p-3 rounded-full hover:bg-[#4A6741]/90 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4A6741] text-white p-3 rounded-full hover:bg-[#4A6741]/90 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <div className="aspect-video w-full rounded overflow-hidden">
              {/* This would be replaced with an actual map component in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Interactive map would be displayed here</p>
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
                  "Our office is open Monday through Thursday from 10:00 AM to 4:00 PM, and Friday from 10:00 AM to 2:00 PM. We are closed on weekends.",
              },
              {
                question: "How quickly do you respond to emails?",
                answer:
                  "We aim to respond to all emails within 1-2 business days. During busy periods (like finals week), response times may be slightly longer.",
              },
              {
                question: "I'm interested in volunteering. How do I get started?",
                answer:
                  "Great! You can fill out our volunteer form on the Get Involved page, or come to one of our weekly meetings to meet current members and learn more about volunteer opportunities.",
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
  )
}
