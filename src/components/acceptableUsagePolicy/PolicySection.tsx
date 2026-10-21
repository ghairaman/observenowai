const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="mb-10 font-dm">
    <h2 className="font-dm text-2xl md:text-3xl font-bold text-foreground mb-4">
      {number}. {title}
    </h2>
    {children}
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-dm text-muted-foreground leading-relaxed mb-4">{children}</p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const PolicySection = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">
      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        Acceptable Use Policy — ObserveNow.AI
      </h1>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground font-semibold">Effective Date:</span>{" "}
        <span className="italic">1st March 2026</span>
      </p>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground">Operated by</span>{" "}
        <strong className="text-foreground">Adverbo Productions LLP</strong>
      </p>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground">Website:</span>{" "}
        <a href="/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          www.observenow.ai
        </a>
      </p>
      <p className="text-muted-foreground mb-8">
        <span className="text-foreground">Contact:</span>{" "}
        <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
          finance@observenow.com
        </a>
      </p>

      <Section number={1} title="Purpose and Scope">
        <P>
          This Acceptable Use Policy explains the rules that apply when you access or use ObserveNow.AI, including its business contact enrichment, export, and related features (the “Platform”). It applies to all users and anyone accessing the Platform through a user account.
        </P>
        <P>
          By using the Platform, you agree to follow this Policy, our Terms of Service, and all laws that apply to your use. If you do not agree, do not use the Platform.
        </P>
      </Section>

      <Section number={2} title="Permitted Use">
        <P>
          You may use the Platform and its enrichment results for lawful business purposes, provided that you:
        </P>
        <BulletList items={[
          "Use the Platform only for legitimate B2B business activities.",
          "Ensure your use of contact information and any outreach complies with applicable privacy, data protection, marketing, and anti-spam laws.",
          "Provide any notices and opt-out options required for your communications.",
          "Respect the rights and privacy preferences of individuals whose information you use.",
          "Verify information and ensure it is appropriate for your intended use.",
        ]} />
      </Section>

      <Section number={3} title="Prohibited Activities">
        <P>You must not use the Platform to:</P>
        <BulletList items={[
          "Send unsolicited spam or unlawful communications, or conduct harassment, phishing, fraud, or other illegal activity.",
          "Violate another person’s privacy, rights, or applicable laws and regulations.",
          "Scrape, crawl, or otherwise extract data from third-party websites or services through the Platform, or use the Platform to bypass their access controls or terms.",
          "Circumvent or attempt to circumvent account, export, rate, or automated-use limits or other security measures.",
          "Interfere with the security, availability, or proper operation of the Platform, or introduce malicious code.",
          "Use the Platform or its results to create, sell, or redistribute a standalone contact database or competing data product.",
          "Resell or distribute bulk exports except as permitted by our Terms of Service and applicable law.",
        ]} />
      </Section>

      <Section number={4} title="Account and Access Responsibilities">
        <P>You are responsible for:</P>
        <BulletList items={[
          "Providing accurate account information and keeping it up to date.",
          "Maintaining the confidentiality of your login credentials and preventing unauthorized account access.",
          "All activity performed through your account.",
          "Promptly notifying us if you suspect unauthorized access or misuse of your account.",
        ]} />
        <P>
          Do not share account access with anyone who is not authorized to use it or use another person’s account without permission.
        </P>
      </Section>

      <Section number={5} title="Enrichment Results and Exports">
        <P>
          Enrichment results and exports may contain publicly available professional business information. You are responsible for determining whether and how that information may lawfully be used, stored, or shared.
        </P>
        <P>
          You must not package, sell, or redistribute enriched contact results as a standalone dataset. Any permitted export or sharing must comply with applicable law, this Policy, and our Terms of Service.
        </P>
      </Section>

      <Section number={6} title="Monitoring and Enforcement">
        <P>
          We may investigate suspected violations of this Policy and take reasonable action to protect the Platform, our users, and others. Where permitted by law, actions may include limiting features or exports, suspending or terminating access, and reporting suspected unlawful activity to relevant authorities.
        </P>
        <P>
          We may also remove or restrict access to content or activity that we reasonably believe violates this Policy or creates risk for the Platform or its users.
        </P>
      </Section>

      <Section number={7} title="Reporting a Concern">
        <P>
          If you become aware of a violation or security concern related to the Platform, contact us at:
        </P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            finance@observenow.com
          </a>
        </P>
      </Section>

      <Section number={8} title="Updates to This Policy">
        <P>
          We may update this Policy from time to time. The latest version will be posted on this page with its effective date. Your continued use of the Platform after an update means you accept the revised Policy.
        </P>
      </Section>
    </div>
  );
};

export default PolicySection;
