import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Events & Calendar</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Join us for food distributions, workshops, community meals, and more.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Weekly Food Distribution",
                date: "Every Wednesday",
                time: "12:00 PM - 2:00 PM",
                location: "Price Center Plaza",
                description: "Free groceries for UCSD students. Bring your student ID and reusable bags if possible.",
                featured: true,
              },
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
                description: "Training for new volunteers who want to help with our weekly food distributions.",
              },
              {
                title: "Community Garden Workday",
                date: "May 25, 2025",
                time: "10:00 AM - 1:00 PM",
                location: "Roger's Community Garden",
                description: "Help maintain our community garden plots. Tools and refreshments provided!",
              },
              {
                title: "Cooking Workshop: Plant-Based Meals on a Budget",
                date: "May 27, 2025",
                time: "5:00 PM - 7:00 PM",
                location: "The Zone",
                description: "Learn to cook affordable, nutritious plant-based meals with seasonal ingredients.",
              },
              {
                title: "Food Justice Discussion Group",
                date: "May 29, 2025",
                time: "4:00 PM - 5:30 PM",
                location: "Price Center, Room 4.2",
                description: "Join us for a discussion about food justice issues on campus and beyond.",
              },
            ].map((event, index) => (
              <Card key={index} className={`overflow-hidden ${event.featured ? "border-[#F9B872] border-2" : ""}`}>
                {event.featured && (
                  <div className="bg-[#F9B872] text-black px-4 py-1 text-sm font-medium text-center">Weekly Event</div>
                )}
                <CardHeader className="bg-[#4A6741]/10 pb-3">
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90">Sign Up</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Monthly Calendar</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                <div key={index} className="text-center font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 3 // Assuming month starts on a Thursday
                return (
                  <div
                    key={i}
                    className={`
                      aspect-square p-2 rounded-md text-sm
                      ${day <= 0 || day > 31 ? "text-gray-300" : "text-gray-700"}
                      ${day === 15 ? "bg-[#F9B872]/20 font-medium" : ""}
                      ${day === 20 || day === 22 || day === 25 || day === 27 || day === 29 ? "bg-[#4A6741]/10 font-medium" : ""}
                      ${day === 1 || day === 8 || day === 15 || day === 22 || day === 29 ? "border-l border-t border-r border-b" : ""}
                    `}
                  >
                    {day > 0 && day <= 31 ? day : ""}
                    {day === 15 && <div className="mt-1 text-xs text-[#4A6741]">Food Dist.</div>}
                    {day === 20 && <div className="mt-1 text-xs text-[#4A6741]">Orientation</div>}
                    {day === 22 && <div className="mt-1 text-xs text-[#4A6741]">Training</div>}
                    {day === 25 && <div className="mt-1 text-xs text-[#4A6741]">Garden</div>}
                    {day === 27 && <div className="mt-1 text-xs text-[#4A6741]">Workshop</div>}
                    {day === 29 && <div className="mt-1 text-xs text-[#4A6741]">Discussion</div>}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white"
            >
              <a href="#" download>
                Download Calendar (iCal)
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Regular Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Weekly Food Distribution",
                day: "Every Wednesday",
                time: "12:00 PM - 2:00 PM",
                location: "Price Center Plaza",
                description:
                  "Our weekly food distribution provides free groceries to UCSD students. We distribute fresh produce, pantry staples, and prepared meals. Bring your student ID and reusable bags if possible.",
              },
              {
                title: "General Meetings",
                day: "Every Monday",
                time: "6:00 PM - 7:30 PM",
                location: "Student Services Center, Room 250",
                description:
                  "Our weekly general meetings are open to all. We discuss upcoming events, make collective decisions, and welcome new members. No commitment required to attend!",
              },
              {
                title: "Community Meals",
                day: "First Friday of each month",
                time: "5:00 PM - 7:00 PM",
                location: "The Zone",
                description:
                  "Join us for a free community meal prepared by co-op members. We share food, conversation, and build community. Everyone is welcome!",
              },
              {
                title: "Garden Workdays",
                day: "Every other Sunday",
                time: "10:00 AM - 1:00 PM",
                location: "Roger's Community Garden",
                description:
                  "Help maintain our community garden plots, learn gardening skills, and take home fresh produce. Tools, gloves, and refreshments provided.",
              },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader className="bg-[#4A6741]/10">
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-[#4A6741] shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90">Add to Calendar</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Want to Host an Event?</h2>
            <p className="text-gray-600 mb-8">
              The Food Co-op welcomes event proposals from members and the broader UCSD community. If you have an idea
              for a workshop, discussion, or other food-related event, we'd love to hear from you!
            </p>
            <Button asChild className="bg-[#4A6741] hover:bg-[#4A6741]/90">
              <Link href="/contact">
                Submit an Event Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A6741] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join Us at Our Next Event</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our events are open to all UCSD students, faculty, and staff. Come learn, share, and build community with
            us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#F9B872] text-black hover:bg-[#F9B872]/90">
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
