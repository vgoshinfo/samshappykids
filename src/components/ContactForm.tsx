"use client";

import { useState, type FormEvent } from "react";

// Submission is simulated client-side. Wire this up to a real form
// endpoint (e.g. Formspree, Resend) before launch.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-grass/15 p-8 text-center">
        <p className="font-display text-xl font-bold text-ink">
          Thank you for reaching out! 💌
        </p>
        <p className="mt-2 text-ink/70">
          We&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="font-display text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none focus:border-coral"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-display text-sm font-semibold text-ink">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none focus:border-coral"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-display text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none focus:border-coral"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 font-display text-base font-semibold text-white shadow-md shadow-coral/30 transition-colors hover:bg-coral-dark"
      >
        Send Message
      </button>
    </form>
  );
}
