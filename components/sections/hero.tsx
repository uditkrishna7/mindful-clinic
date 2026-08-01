"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Brain, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-16 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-12 bottom-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {siteConfig.designation} • Mental Health Professional
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Helping You Find
            <span className="block text-primary">
              Clarity, Healing & Emotional Well-being
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Compassionate, evidence-based psychological care for adolescents
            and adults navigating anxiety, depression, OCD, emotional distress,
            relationship challenges, low self-esteem, and life transitions —
            within a safe, confidential, and non-judgmental therapeutic space.
          </p>

          {/* Name */}
          <div className="mt-8">
            <p className="text-xl font-semibold">
              {siteConfig.name}
            </p>

            <p className="mt-1 text-muted-foreground">
              {siteConfig.designation}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `Hello Dr. ${siteConfig.name}, I visited your website and would like to book a consultation.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-xl px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Book a Consultation
              </Button>
            </a>

            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8"
              >
                View CV
              </Button>
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <ShieldCheck className="mx-auto h-8 w-8 text-primary" />

              <h3 className="mt-4 font-semibold">
                Confidential & Ethical
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Every conversation is treated with complete confidentiality,
                professionalism, and respect.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Brain className="mx-auto h-8 w-8 text-primary" />

              <h3 className="mt-4 font-semibold">
                Evidence-Based Care
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Therapeutic approaches guided by psychological science,
                clinical research, and ethical practice.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <HeartHandshake className="mx-auto h-8 w-8 text-primary" />

              <h3 className="mt-4 font-semibold">
                Safe Therapeutic Space
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                A warm, supportive, and non-judgmental environment where
                emotional healing and personal growth begin.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}