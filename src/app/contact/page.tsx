import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sam's Happy Kids Sing-Along for general questions, music inquiries, YouTube collaborations, licensing, and brand partnerships.",
};

const contactReasons = [
  "General questions",
  "Music inquiries",
  "YouTube collaborations",
  "Licensing requests",
  "Brand partnerships",
  "Feedback from parents and families",
  "Preschool or educational use",
  "Media inquiries",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-grass/15 to-cream py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Contact Sam&apos;s Happy Kids Sing-Along
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            We would love to hear from you. Whether you are a parent,
            educator, music platform, brand partner, or listener, feel free
            to reach out to Sam&apos;s Happy Kids Sing-Along.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              You can contact us for:
            </h2>
            <ul className="mt-6 space-y-3">
              {contactReasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3 text-ink/80">
                  <span className="text-xl">✉️</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-display text-lg font-semibold text-ink">
              Thank you for being part of our happy little music world.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
