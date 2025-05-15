"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UCSD Food Co-op Logo"
              className="h-8 w-auto mr-2"
            />
            <span className="text-xl font-bold text-[#4A6741]">
              UCSD Food Co-op
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#4A6741] font-medium"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-[#4A6741] font-medium"
            >
              Resources
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-[#4A6741] font-medium"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#4A6741] font-medium"
            >
              Contact
            </Link>
            <Button asChild className="bg-[#4A6741] hover:bg-[#4A6741]/90">
              <Link href="/get-involved">Get Involved!</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-[#4A6741] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-[#4A6741] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-gray-700 hover:text-[#4A6741] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/events"
              className="block py-2 text-gray-700 hover:text-[#4A6741] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/get-involved"
              className="block py-2 text-gray-700 hover:text-[#4A6741] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-[#4A6741] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-[#4A6741] hover:bg-[#4A6741]/90"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/get-involved">Join Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
