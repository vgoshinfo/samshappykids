import type { Metadata } from "next";
import Section from "@/components/Section";
import { contactEmails } from "@/lib/links";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Sam's Happy Kids Sing-Along.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-grape/15 to-cream py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-ink/60">Effective Date: August 29, 2026</p>
        </div>
      </section>

      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-ink/80">
          <p>
            Welcome to Sam&apos;s Happy Kids Sing-Along. By accessing or
            using this website, you agree to the following terms. If you do
            not agree with these terms, please do not use this site.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Use of This Site
            </h2>
            <p className="mt-3">
              This website is provided for informational and entertainment
              purposes, to share our music, characters, and content with
              families. You agree to use this site only for lawful purposes
              and in a way that does not infringe the rights of others.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this site, including the Sam&apos;s Happy Kids
              Sing-Along name, logo, characters, artwork, songs, and videos,
              is owned by Sam&apos;s Happy Kids Sing-Along or its licensors
              and is protected by copyright and trademark law. You may not
              copy, reproduce, distribute, or create derivative works from
              this content without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Third-Party Content and Links
            </h2>
            <p className="mt-3">
              This site links to and embeds content from third-party
              platforms such as YouTube, Spotify, Apple Music, Instagram,
              and Facebook. We do not control and are not responsible for
              the content, availability, or practices of these third-party
              services. Your use of those services is subject to their own
              terms and policies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Children and Parental Guidance
            </h2>
            <p className="mt-3">
              Our content is created for children, and we encourage parents
              and guardians to supervise their child&apos;s use of this
              website and any linked platforms, including video and
              streaming services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Disclaimer of Warranties
            </h2>
            <p className="mt-3">
              This site is provided &quot;as is&quot; without warranties of
              any kind, express or implied. We do not guarantee that the
              site will be uninterrupted, error-free, or free of viruses or
              other harmful components.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Sam&apos;s Happy Kids
              Sing-Along shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of this site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms of Use from time to time. Continued
              use of the site after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about these Terms of Use, please contact
              us at{" "}
              <a href={`mailto:${contactEmails.general}`} className="underline">
                {contactEmails.general}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
