import Link from "next/link";
import { ArrowRight, Instagram, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfferingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4A6741] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Affordable vegan meals, community space, and opportunities to get
            involved in food justice at UCSD.
          </p>
        </div>
      </section>

      {/* Hot Food Bar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Hot Food Bar
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-2 text-[#4A6741]">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">
                    Monday - Friday, 11:00 AM - 3:00 PM
                  </span>
                </div>
                <p>
                  Enjoy fresh, affordable vegan meals prepared daily by our
                  dedicated volunteers. Our menu rotates regularly and features
                  globally-inspired dishes such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pinto Bean Curry</li>
                  <li>Chili Cubano</li>
                  <li>Tofu Scramble</li>
                  <li>Samosas</li>
                  <li>Tamales</li>
                  <li>Sambussas</li>
                </ul>
                <div className="bg-[#F5F5F0] p-4 rounded-lg mt-6">
                  <h3 className="font-semibold text-[#4A6741] mb-2">
                    Pay-It-Forward Fund
                  </h3>
                  <p>
                    Our pay-it-forward program ensures that any student in need
                    can receive a free meal. Community members can contribute to
                    this fund, helping us make nutritious food accessible to
                    everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/examplemenu.jpg"
                alt="Selection of vegan meals at UCSD Food Co-op"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Space Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/thehub.jpg"
                alt="UCSD Food Co-op community space at The Hub"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Community Space
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Co-op is more than just a place to eat—it's a welcoming
                  space for students to relax, study, and connect with peers who
                  share their values.
                </p>
                <p>
                  Our space regularly hosts informal gatherings and discussions
                  centered around food justice, sustainability, and community
                  building. It's a hub for students to exchange ideas and work
                  together towards a more equitable food system.
                </p>
                <div className="flex items-center gap-2 text-[#4A6741]">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">
                    Located in the Old Student Center
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Get Involved
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600">
              <p className="text-center text-lg">
                The Co-op is run entirely by student volunteers who are
                passionate about food justice and community building.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#F5F5F0] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#4A6741] mb-3">
                    Volunteer Opportunities
                  </h3>
                  <ul className="space-y-2">
                    <li>• Food preparation and service</li>
                    <li>• Kitchen cleanup and organization</li>
                    <li>• Community outreach</li>
                    <li>• Sustainability initiatives</li>
                  </ul>
                </div>
                <div className="bg-[#F5F5F0] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#4A6741] mb-3">
                    Collective Decision-Making
                  </h3>
                  <p>
                    As a volunteer, you'll have a voice in our operations. We
                    make decisions collectively through regular meetings and
                    value everyone's input in shaping our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
