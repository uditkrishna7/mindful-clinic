"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Brain, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const bookingUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\\D/g, "")}?${new URLSearchParams({
    text: `Hello, I visited your website and would like to enquire about a consultation with ${siteConfig.name}.`,
  }).toString()}`;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-4 top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:left-16 sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-4 h-64 w-64 rounded-full bg-secondary/30 blur-3xl sm:right-12 sm:h-80 sm:w-80" />
      </div>

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:mb-6 sm:text-sm sm:tracking-[0.28em]">
            {siteConfig.designation} <span aria-hidden="true">•</span> Mental Health Professional
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Helping You Find
            <span className="mt-1 block text-primary">
              Clarity, Healing &amp; Emotional Well-being
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">
            Compassionate, evidence-informed psychological support for adults
            and adolescents navigating anxiety, low mood, emotional distress,
            relationship challenges, self-esteem, and life transitions — in a
            respectful, non-judgmental space.
          </p>

          <div className="mt-7">
            <p className="text-lg font-semibold sm:text-xl">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{siteConfig.designation}</p>
          </div>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full rounded-xl px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto">
                Book a Consultation
              </Button>
            </a>
            <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full rounded-xl px-8 sm:w-auto">
                View CV
              </Button>
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-left sm:mt-16 sm:gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg sm:p-6">
              <ShieldCheck aria-hidden="true" className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
              <h2 className="mt-4 font-semibold">Privacy &amp; Respect</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Your privacy is treated with care, and confidentiality is maintained in line with applicable professional and legal responsibilities.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg sm:p-6">
              <Brain aria-hidden="true" className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
              <h2 className="mt-4 font-semibold">Evidence-Informed Care</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Support is guided by psychological science, clinical learning, and an individual understanding of your needs.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg sm:p-6">
              <HeartHandshake aria-hidden="true" className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
              <h2 className="mt-4 font-semibold">A Supportive Space</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A warm, non-judgmental setting where you can discuss concerns at a pace that feels comfortable.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
