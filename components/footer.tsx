"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">UCSD Food Co-op</h3>
            <p className="text-white/80 max-w-xs">
              A student-run collective dedicated to addressing food insecurity
              and building community through sustainable food practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/foodcoopatucsd"
                className="text-white hover:text-[#F9B872]"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="text-white hover:text-[#F9B872]"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-[#F9B872]"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-[#F9B872] border-[#F9B872] text-black hover:bg-[#F9B872]/90 hover:text-black"
              >
                <Link
                  href="https://linktr.ee/ucsdfoodcoop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linktree
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-white/80 hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/offerings"
                  className="text-white/80 hover:text-white"
                >
                  Offerings
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-white/80 hover:text-white"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/food-pantry"
                  className="text-white/80 hover:text-white"
                >
                  UCSD Triton Food Pantry
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/calfresh"
                  className="text-white/80 hover:text-white"
                >
                  CalFresh Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/community-gardens"
                  className="text-white/80 hover:text-white"
                >
                  Campus Community Gardens
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/cooking-guides"
                  className="text-white/80 hover:text-white"
                >
                  Cooking Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/food-justice"
                  className="text-white/80 hover:text-white"
                >
                  Food Justice Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#F9B872] shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Student Center, UCSD
                  <br />
                  9500 Gilman Dr.
                  <br />
                  La Jolla, CA 92093
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#F9B872] shrink-0" />
                <a
                  href="mailto:foodcoop@ucsd.edu"
                  className="text-white/80 hover:text-white"
                >
                  foodcoop@ucsd.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#F9B872] shrink-0" />
                <a
                  href="tel:+18585551234"
                  className="text-white/80 hover:text-white"
                >
                  (858) 555-1234
                </a>
              </li>
              <li className="text-white/80 mt-4">
                <strong className="text-white">Hours:</strong>
                <br />
                Mon-Thu: 10:00 AM - 4:00 PM
                <br />
                Fri: 10:00 AM - 2:00 PM
                <br />
                Sat-Sun: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} UCSD Food Co-op. All rights reserved.
          </p>
          <p className="mt-2">
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
            {" | "}
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
