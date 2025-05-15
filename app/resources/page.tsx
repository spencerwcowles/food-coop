import Link from "next/link"
import { ArrowRight, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Food Resources</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Access information about food assistance, cooking guides, and other resources to support your food security.
          </p>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#F9B872]/20 border border-[#F9B872] rounded-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Need Food Now?</h2>
            <p className="text-lg mb-6">
              If you're experiencing food insecurity and need immediate assistance, these resources can help:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Triton Food Pantry</CardTitle>
                  <CardDescription>Free groceries for all UCSD students</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Location:</strong> Original Student Center, Floor 1
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Hours:</strong> Mon-Fri 9am-6pm
                  </p>
                  <p className="text-sm text-gray-500">Bring your student ID. No appointment needed.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="https://basicneeds.ucsd.edu/food-security/pantry/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Basic Needs Hub</CardTitle>
                  <CardDescription>Comprehensive support services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Location:</strong> Student Center B, Room 118
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Hours:</strong> Mon-Fri 10am-4pm
                  </p>
                  <p className="text-sm text-gray-500">Offers emergency meal swipes, CalFresh assistance, and more.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://basicneeds.ucsd.edu/" target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Food Co-op Distribution</CardTitle>
                  <CardDescription>Weekly free food distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Location:</strong> Price Center Plaza
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Hours:</strong> Wednesdays 12-2pm
                  </p>
                  <p className="text-sm text-gray-500">Open to all. No ID required. Bring reusable bags if possible.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90">
                    <Link href="/events">
                      View Schedule
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Resources */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Campus Food Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Triton Food Pantry",
                description: "Free groceries for all UCSD students with a valid student ID.",
                link: "https://basicneeds.ucsd.edu/food-security/pantry/index.html",
              },
              {
                title: "CalFresh Assistance",
                description: "Get help applying for CalFresh (food stamps) benefits worth up to $250/month.",
                link: "https://basicneeds.ucsd.edu/food-security/calfresh/index.html",
              },
              {
                title: "Emergency Meal Swipes",
                description: "Access to free dining hall meals for students experiencing food insecurity.",
                link: "https://basicneeds.ucsd.edu/food-security/dining-dollars/index.html",
              },
              {
                title: "Community Gardens",
                description: "Join campus gardens to grow your own food and learn gardening skills.",
                link: "/resources/community-gardens",
              },
              {
                title: "Farmers Market",
                description: "Weekly campus farmers market with fresh, local produce (accepts EBT).",
                link: "https://ucsdcommunityhealth.org/work/farmers-market/",
              },
              {
                title: "Food Recovery Network",
                description: "Volunteer to help recover and redistribute surplus food from campus dining halls.",
                link: "/resources/food-recovery",
              },
            ].map((resource, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90">
                    <Link href={resource.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Community Food Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "San Diego Food Bank",
                description:
                  "The San Diego Food Bank provides food assistance to individuals and families throughout San Diego County.",
                website: "https://sandiegofoodbank.org",
                phone: "(858) 527-1419",
              },
              {
                title: "Feeding San Diego",
                description:
                  "Feeding San Diego distributes food through a network of partner agencies and mobile pantries.",
                website: "https://feedingsandiego.org",
                phone: "(858) 452-3663",
              },
              {
                title: "2-1-1 San Diego",
                description: "Connect to a variety of community services, including food assistance, by dialing 2-1-1.",
                website: "https://211sandiego.org",
                phone: "211",
              },
              {
                title: "WIC Program",
                description:
                  "The Women, Infants, and Children (WIC) program provides nutrition assistance to pregnant women and families with young children.",
                website: "https://www.sandiegocounty.gov/content/sdc/hhsa/programs/phs/wic_program.html",
                phone: "(800) 500-6411",
              },
            ].map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Website:</span>{" "}
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A6741] hover:underline"
                      >
                        {resource.website.replace("https://", "")}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> {resource.phone}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={resource.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Educational Resources</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore these resources to learn more about food systems, cooking on a budget, nutrition, and food justice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Budget-Friendly Recipes",
                description: "Simple, affordable recipes designed for college students with limited time and budget.",
                type: "PDF Guide",
                icon: Download,
              },
              {
                title: "Nutrition Basics",
                description: "Learn about balanced nutrition and how to make healthy choices on a student budget.",
                type: "Online Guide",
                icon: ExternalLink,
              },
              {
                title: "Food Justice 101",
                description: "An introduction to food justice concepts and how they relate to our campus community.",
                type: "Article Collection",
                icon: ExternalLink,
              },
              {
                title: "Meal Prep Guide",
                description: "Save time and money by learning how to effectively meal prep for the week.",
                type: "PDF Guide",
                icon: Download,
              },
              {
                title: "Plant-Based on a Budget",
                description: "Resources for eating plant-based meals while keeping costs low.",
                type: "Recipe Collection",
                icon: ExternalLink,
              },
              {
                title: "Food Preservation Methods",
                description: "Learn how to make your food last longer and reduce waste.",
                type: "Video Series",
                icon: ExternalLink,
              },
            ].map((resource, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center">{resource.title}</CardTitle>
                  <CardDescription>{resource.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90">
                    <Link href="#">
                      Access Resource
                      <resource.icon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Assistance Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Food Assistance Programs</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>CalFresh (SNAP)</CardTitle>
                <CardDescription>Supplemental Nutrition Assistance Program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  CalFresh provides monthly benefits that can be used to buy groceries at supermarkets, farmers markets,
                  and some online retailers. As a student, you may be eligible if you meet certain criteria.
                </p>
                <div className="bg-[#F5F5F0] p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Student Eligibility (one of the following):</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Work at least 20 hours per week</li>
                    <li>Approved for work-study</li>
                    <li>Have dependents under 12</li>
                    <li>Enrolled in CalFresh Employment & Training program</li>
                    <li>Receiving CalWORKs</li>
                    <li>Enrolled in certain EOPS programs</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  Benefits can be up to $250 per month for a single student. The Basic Needs Hub can help you apply!
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#4A6741] hover:bg-[#4A6741]/90">
                  <Link href="https://basicneeds.ucsd.edu/food-security/calfresh/index.html">
                    Get Application Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Meal Swipes</CardTitle>
                <CardDescription>Temporary dining hall access</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  UCSD offers emergency meal swipes for students experiencing food insecurity. These provide temporary
                  access to campus dining halls while you connect with longer-term resources.
                </p>
                <p className="text-gray-600">
                  You can request up to 10 meal swipes per quarter through the Basic Needs Hub. The process is
                  confidential and designed to provide immediate assistance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#4A6741] hover:bg-[#4A6741]/90">
                  <Link href="https://basicneeds.ucsd.edu/food-security/dining-dollars/index.html">
                    Request Meal Swipes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Food Co-op Mutual Aid</CardTitle>
                <CardDescription>Community-based support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our Food Co-op operates a mutual aid fund that can provide grocery gift cards to students in need.
                  This program is based on the principle of "from each according to ability, to each according to need."
                </p>
                <p className="text-gray-600">
                  Requests are confidential and can be made through our online form or in person at our weekly meetings.
                  No documentation required - we trust our community members to request what they need.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#4A6741] hover:bg-[#4A6741]/90">
                  <Link href="/contact">
                    Request Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A6741] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need Help Navigating Resources?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our Food Co-op members can help you find the right resources for your situation. Reach out to us for
            personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#F9B872] text-black hover:bg-[#F9B872]/90">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/get-involved">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
