import { Container } from "@/components/site/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for BVS Building Ventilation Solutions Ltd — how we collect, use, and protect your personal data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Privacy Policy</h1>
          <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          <p className="mt-4 text-sm text-slate-500">Effective date: 2 July 2023. Last reviewed: June 2025.</p>

          <div className="prose prose-slate mt-10 max-w-none text-sm leading-7">

            <h2>1. Introduction</h2>
            <p>
              We are committed to protecting and respecting your privacy. This Privacy Policy explains how Building
              Ventilation Solutions Ltd (<strong>&quot;BVS&quot;</strong>, <strong>&quot;we&quot;</strong>,{" "}
              <strong>&quot;us&quot;</strong>, or <strong>&quot;our&quot;</strong>) collects, uses, discloses, and
              safeguards your information when you visit our website at{" "}
              <a href="https://www.bvs-ltd.co.uk">https://www.bvs-ltd.co.uk</a>, submit an enquiry, or otherwise
              communicate with us.
            </p>

            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Data</h3>
            <p>We may collect and process the following personal data about you:</p>
            <ul>
              <li>
                <strong>Identity Data:</strong> Name, job title, or company name.
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, telephone numbers, and business address.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, time zone, browser plug-in types
                and versions, operating system and platform, and other technology on devices you use to access this
                website.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website and services.
              </li>
              <li>
                <strong>Marketing and Communications Data:</strong> Your preferences in receiving communications from us.
              </li>
              <li>
                <strong>Career Application Data:</strong> CV, covering letter, and other information you provide when
                applying for a role with us.
              </li>
            </ul>

            <h3>2.2 Sensitive Personal Data</h3>
            <p>
              We do not collect sensitive personal data (such as health data, racial or ethnic origin, political
              opinions, or religious beliefs) unless there is a specific and lawful reason to do so.
            </p>

            <h2>3. How We Collect Your Data</h2>
            <p>We collect data through:</p>
            <ul>
              <li>
                <strong>Direct interactions:</strong> When you fill in an enquiry form, submit a job application, sign
                up for newsletter updates, or contact us by phone or email.
              </li>
              <li>
                <strong>Automated technologies:</strong> As you interact with our website, we may collect technical data
                about your equipment, browsing actions, and patterns via cookies and similar technologies (see Section
                10).
              </li>
            </ul>

            <h2>4. How We Use Your Data</h2>
            <p>We will only use your personal data where the law allows. We use it to:</p>
            <ul>
              <li>Respond to your enquiry or quote request.</li>
              <li>Process and consider job applications.</li>
              <li>Send you relevant industry updates or service information where you have consented.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
            <p>
              Our lawful bases for processing are: <strong>performance of a contract</strong> (or steps taken prior to
              entering one), <strong>legitimate interests</strong> (responding to business enquiries and improving our
              services), <strong>legal obligation</strong>, and <strong>consent</strong> (for marketing
              communications).
            </p>

            <h2>5. Disclosure of Your Data</h2>
            <p>We may share your personal data with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> who assist us in delivering our services, including email delivery
                and website hosting providers.
              </li>
              <li>
                <strong>Professional advisers</strong> including lawyers, accountants, and insurers.
              </li>
              <li>
                <strong>Regulators and authorities</strong> where we are legally required to do so.
              </li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>

            <h2>6. International Transfers</h2>
            <p>
              Where we transfer personal data outside the UK, we ensure an equivalent level of protection through
              appropriate safeguards, including the use of UK-approved standard contractual clauses or transfers to
              countries or organisations covered by an adequacy decision. Where we use US-based service providers, we
              rely on the UK Extension to the EU-US Data Privacy Framework (UK DPF) or equivalent safeguards.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We have implemented appropriate technical and organisational measures to protect your personal data from
              accidental loss, unauthorised access, use, alteration, or disclosure. Access to your data is limited to
              those with a business need to know, and they are subject to a duty of confidentiality.
            </p>

            <h2>8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was
              collected, including satisfying any legal, accounting, or reporting requirements. The appropriate
              retention period is determined by the nature and sensitivity of the data, the risk of harm from
              unauthorised use, and applicable legal requirements.
            </p>

            <h2>9. Your Legal Rights</h2>
            <p>
              Under UK data protection law, you have the right to:
            </p>
            <ul>
              <li>Request access to your personal data (a Subject Access Request).</li>
              <li>Request correction of inaccurate data we hold about you.</li>
              <li>Request erasure of your personal data in certain circumstances.</li>
              <li>Object to or request restriction of processing.</li>
              <li>Request transfer of your data to you or a third party.</li>
              <li>Withdraw consent at any time where we rely on consent to process your data.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details in Section 11. You also have the
              right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
                ico.org.uk
              </a>{" "}
              or by calling 0303 123 1113.
            </p>

            <h2>10. Cookies</h2>
            <p>Our website uses the following cookies and tracking technologies:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our website.
                This sets cookies that collect information about your visit in an anonymised form, including the pages
                you view and how you arrived at the site. This is only activated with your consent. You can opt out at
                any time via the cookie settings on this site.
              </li>
              <li>
                <strong>Google reCAPTCHA:</strong> Our contact and enquiry forms use Google reCAPTCHA v3 to protect
                against automated spam submissions. reCAPTCHA collects hardware and software information and sends it
                to Google for analysis. Your use of reCAPTCHA is subject to Google&apos;s{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
                  Terms of Service
                </a>
                .
              </li>
            </ul>
            <p>
              You can control cookie preferences through the consent banner displayed when you first visit the site.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
              effective date. We encourage you to review this policy periodically.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:</p>
            <ul>
              <li><strong>By email:</strong> info@bvs-ltd.co.uk</li>
              <li><strong>By phone:</strong> 01256 518170</li>
              <li>
                <strong>By post:</strong> Building Ventilation Solutions Ltd, Unit 23, Sandleheath Industrial Estate,
                Old Brickyard Road, Sandleheath, Fordingbridge, SP6 1PA
              </li>
            </ul>

          </div>
        </div>
      </Container>
    </div>
  );
}
