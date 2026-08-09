"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Who can I support through consultations?",
    answer:
      "I primarily work with adults, students, and parents or caregivers. You can reach out if you are experiencing emotional difficulties, relationship concerns, anxiety, low self-esteem, body image concerns, or other psychological challenges.",
  },
  {
    question: "What concerns can I seek support for?",
    answer:
      "My areas of practice include self-esteem and emotional difficulties, relationship concerns, adolescent concerns, psychological assessments, personality-related difficulties, body image concerns, severe anxiety, depression, overthinking, and psychotic disorders.",
  },
  {
    question: "Do you offer online and in-person consultations?",
    answer:
      "Yes. I offer both online and in-person consultations. In-person sessions are conducted at Sanatan Healthcare and Research Center in Tagore Town, Prayagraj.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "The first session is an introductory conversation where we can discuss what you have been experiencing, understand your concerns and goals, and explore what kind of psychological support may be appropriate for you.",
  },
  {
    question: "How long is a consultation?",
    answer:
      "An introductory consultation is generally around 45–60 minutes. The duration may vary depending on the nature of the consultation and your individual needs.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "You can begin by sending me a WhatsApp message or an email. You do not need to prepare a detailed explanation beforehand — simply reaching out is enough to start the conversation.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "I believe psychological support should be approachable and accessible. Consultation fees are therefore discussed with individual circumstances and affordability in mind. You can enquire about the fee before scheduling a session.",
  },
  {
    question: "Will my conversations remain confidential?",
    answer:
      "Confidentiality and privacy are important parts of the therapeutic process. Your personal information and conversations are handled with appropriate professional, ethical, and confidential care.",
  },
  {
    question: "Can a parent or caregiver enquire about an adolescent?",
    answer:
      "Yes. Parents and caregivers are welcome to reach out regarding concerns involving an adolescent. We can discuss the situation and determine the most appropriate way to proceed.",
  },
  {
    question: "What if I am unsure whether therapy is right for me?",
    answer:
      "You do not need to have everything figured out before reaching out. An initial conversation can help you understand your concerns, ask questions, and explore whether psychological support may be helpful for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Questions you may have before reaching out."
          description="A few things you may want to know before taking the first step."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border bg-card transition-all duration-500 ease-out ${
                  isOpen
                    ? "border-primary/30 shadow-lg shadow-primary/5"
                    : "border-border/60 hover:border-primary/20 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-base font-semibold tracking-tight transition-colors duration-300 sm:text-lg ${
                      isOpen
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 border-primary/30 bg-primary text-primary-foreground"
                        : "border-border bg-background text-primary group-hover:border-primary/30 group-hover:bg-primary/5"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                      <div className="mb-5 h-px w-full bg-border/60" />

                      <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Still have a question?
          </p>

          <a
            href="#contact"
            className="mt-2 inline-flex font-medium text-primary transition-all duration-300 hover:gap-2 hover:underline"
          >
            Get in touch with me →
          </a>
        </div>
      </Container>
    </section>
  );
}