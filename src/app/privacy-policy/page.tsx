import type { Metadata } from "next";
import Section from "@/components/Section";
import { contactEmails } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sam's Happy Kids Sing-Along.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky/15 to-cream py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink/60">Effective Date: August 29, 2026</p>
        </div>
      </section>

      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-ink/80">
          <p>
            Sam&apos;s Happy Kids Sing-Along (&quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;) respects your privacy and is committed to
            protecting it. This Privacy Policy explains how we collect, use,
            and safeguard information when you visit our website.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Information We Collect
            </h2>
            <p className="mt-3">
              We collect very little information from visitors. If you use
              our contact form, we collect the name, email address, and
              message you provide, solely to respond to your inquiry. We do
              not require an account to browse this site, and we do not
              knowingly collect any information beyond what you voluntarily
              submit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our music and characters are created for children, but this
              website itself is intended for use by parents, guardians, and
              other adults. We do not knowingly collect personal information
              directly from children under 13. If you believe a child has
              provided us with personal information, please contact us at{" "}
              <a href={`mailto:${contactEmails.general}`} className="underline">
                {contactEmails.general}
              </a>{" "}
              and we will promptly delete it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Third-Party Content and Links
            </h2>
            <p className="mt-3">
              This site embeds or links to third-party services such as
              YouTube, Spotify, and Apple Music, and links to social
              platforms including Instagram and Facebook. These services may
              collect information about your interactions in accordance with
              their own privacy policies. We encourage you to review the
              privacy policies of any third-party service you visit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              How We Use Information
            </h2>
            <p className="mt-3">
              Any information submitted through our contact form is used
              only to respond to your message and is not sold, rented, or
              shared with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Data Security
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect any information you
              share with us. However, no method of electronic storage or
              transmission is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with a revised effective
              date.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please
              contact us at{" "}
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
