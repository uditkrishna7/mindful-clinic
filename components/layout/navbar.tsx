import Link from "next/link";
import Container from "./container";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            Manvi Mehrotra
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#about"
              className="text-sm transition-colors hover:text-primary"
            >
              About
            </Link>

            <Link
              href="#expertise"
              className="text-sm transition-colors hover:text-primary"
            >
              Expertise
            </Link>

            <Link
              href="#research"
              className="text-sm transition-colors hover:text-primary"
            >
              Research
            </Link>

            <Link
              href="#contact"
              className="text-sm transition-colors hover:text-primary"
            >
              Contact
            </Link>

            <Button>Resume</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}