"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const bookingUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\\D/g, "")}?${new URLSearchParams({
    text: `Hello, I visited your website and would like to enquire about a consultation with ${siteConfig.name}.`,
  }).toString()}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <Container>
        <nav aria-label="Main navigation" className="flex min-h-16 items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="rounded-sm text-base font-bold tracking-tight sm:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Manvi Mehrotra
            <span className="ml-2 hidden text-xs font-medium text-muted-foreground sm:inline">
              · Clinical Psychologist
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              >
                {link.label}
              </Link>
            ))}
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-xl">Enquire</Button>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-border py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full rounded-xl">Enquire about a consultation</Button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
