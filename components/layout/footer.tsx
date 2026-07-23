import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Manvi Mehrotra</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Clinical Psychologist
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#about">About</Link>
            <Link href="#research">Research</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Manvi Mehrotra. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}