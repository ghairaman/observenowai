const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <section className="mb-10 font-dm">
    <h2 className="font-dm text-2xl md:text-3xl font-bold text-foreground mb-4">
      {number}. {title}
    </h2>
    {children}
  </section>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-dm text-muted-foreground leading-relaxed mb-4">{children}</p>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
    {children}
  </div>
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol className="list-decimal list-inside space-y-2 mb-4 pl-2 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ol>
);

const PolicyTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto mb-6 rounded-lg border border-border">
    <table className="w-full min-w-[560px] border-collapse text-left text-sm text-muted-foreground">
      <thead className="bg-muted/50 text-foreground">
        <tr>
          {headers.map((header) => (
            <th key={header} className="border-b border-border px-4 py-3 font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="align-top">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border-b border-border px-4 py-3 last:border-b-0">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PolicySection = () => (
  <div className="container mx-auto max-w-10xl px-6 py-16">
    <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
      Acceptable Use &amp; Fair Usage Policy — ObserveNow.ai
    </h1>
    <p className="text-muted-foreground mb-8">
      <span className="text-foreground font-semibold">Effective date:</span> 1 March 2026
      <span className="mx-2">·</span>
      <span className="text-foreground font-semibold">Last updated:</span> 21 Oct 2026
    </p>

    <P>
      This policy sets the rules for using ObserveNow.ai and the fair limits on how much of it each account may use. It forms part of the ObserveNow.ai{" "}
      <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and applies alongside our{" "}
      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and, where applicable, our Data Processing Agreement.
    </P>

    <Section number={1} title="Who this policy applies to">
      <P>
        ObserveNow.ai (<a href="https://observenow.ai" className="text-primary hover:underline">https://observenow.ai</a>) is operated by Adverbo Productions LLP, a limited liability partnership registered in India with its office at [registered address], Noida, Uttar Pradesh (“ObserveNow”, “we”, “us”).
      </P>
      <P>
        This policy applies to every person or organisation that accesses ObserveNow.ai (“Customer”, “you”), including your employees, contractors and any AI agent or automated tool acting for you. You are responsible for their compliance as if it were your own.
      </P>
      <P>
        By creating an account, installing the Chrome extension, connecting an integration or using any ObserveNow data, you agree to this policy. If you do not agree, do not use the service.
      </P>
    </Section>

    <Section number={2} title="Definitions">
      <PolicyTable
        headers={["Term", "Meaning"]}
        rows={[
          ["Service", "The ObserveNow.ai web app, Chrome extension, CRM integrations, MCP/AI-agent connector and any related tools."],
          ["Data", "Any person or company information you search, view, reveal, export or receive from the Service, including names, job titles, business emails, phone numbers, company firmographics and intent signals."],
          ["Data Subject", "The individual a contact record describes."],
          ["Reveal", "Unlocking a contact's email address or phone number, which consumes Credits."],
          ["Credit", "The unit of usage in your plan. One email reveal costs 1 Credit; one phone reveal costs 4 Credits."],
          ["Authorized User", "A named individual you have given a seat on your account."],
          ["Outreach", "Any email, call, SMS, WhatsApp, LinkedIn or other message sent to a Data Subject using Data."],
        ]}
      />
    </Section>

    <Section number={3} title="Permitted use">
      <P>
        You may use the Service and Data only for legitimate business-to-business purposes, for your own internal business, and in line with all applicable laws. Permitted uses include:
      </P>
      <BulletList items={[
        "Finding and contacting business professionals about products or services relevant to their job role.",
        "Recruiting and talent sourcing for genuine open roles.",
        "Account research, market sizing, territory planning and sales intelligence.",
        "Enriching, cleaning and refreshing records in your own CRM.",
        "Inviting relevant professionals to business events, webinars and industry programmes.",
      ]} />
      <P>Access is licensed per Authorized User. Each seat is for one named person and may not be shared.</P>
    </Section>

    <Section number={4} title="Prohibited uses">
      <P>You must not, and must not allow anyone else to:</P>
      <SubSection title="Data misuse">
        <NumberedList items={[
          "Resell, sublicense, rent, publish or give away Data, or build a competing database, list product or enrichment service from it.",
          "Use Data to contact individuals in a personal or consumer capacity, rather than about their professional role.",
          "Use Data for decisions on credit, insurance, employment eligibility, housing or tenancy, or any purpose covered by consumer-reporting laws (such as the US FCRA).",
          "Use Data to stalk, harass, threaten, discriminate against, dox or locate any person, or for any law-enforcement or surveillance purpose without a lawful basis.",
          "Combine Data with special-category information (health, religion, ethnicity, sexual orientation, political views, biometrics) or use it to infer such traits.",
          "Use Data to train, fine-tune or benchmark machine-learning models that are offered to third parties.",
        ]} />
      </SubSection>
      <SubSection title="Outreach abuse">
        <NumberedList items={[
          "Send spam, bulk unsolicited messages or messages with false sender details, misleading subject lines or no opt-out.",
          "Use Data for phishing, fraud, impersonation, scams or malware distribution.",
          "Make automated, pre-recorded or AI-voice calls or texts without the consent required by law.",
          "Contact anyone who has opted out, is on a do-not-call or suppression list, or has asked not to be contacted.",
        ]} />
      </SubSection>
      <SubSection title="Platform abuse">
        <NumberedList items={[
          "Scrape, crawl, or bulk-download the Service by bots, scripts or headless browsers, other than through features we provide for that purpose.",
          "Share log-ins, rotate seats, or create multiple or free accounts to avoid Credit or plan limits.",
          "Reverse-engineer, decompile, probe, or bypass security, rate limits or usage controls.",
          "Overload the Service or interfere with other customers' use.",
          "Upload unlawful content, malware, or Data you have no right to process.",
          "Remove or alter any notices, watermarks or seed records in Data.",
          "Use the Service if you are in, or acting for anyone in, a country or list subject to Indian, UN, US, UK or EU sanctions.",
        ]} />
      </SubSection>
    </Section>

    <Section number={5} title="Lawful outreach and data protection">
      <P>
        You are an independent controller (or data fiduciary) of Data once you reveal or export it. You alone decide how you use it, and you must have a lawful basis for every use. At minimum you must:
      </P>
      <BulletList items={[
        "Identify yourself and how you obtained the person's details in your first message where the law requires it (for example GDPR Article 14).",
        "Include a working opt-out in every marketing message and honour it promptly.",
        "Keep Data only as long as you need it, secure it, and delete it when asked or when your plan ends.",
        "Screen phone numbers against applicable do-not-call registries before calling.",
      ]} />
      <P>The rules below apply depending on where the Data Subject is located:</P>
      <PolicyTable
        headers={["Region", "Key laws", "What you must do"]}
        rows={[
          ["India", "Digital Personal Data Protection Act 2023; IT Act 2000; TRAI TCCCPR 2018", "Process only for a lawful purpose; respect erasure requests; do not make commercial calls or SMS to numbers on the DND/NCPR registry."],
          ["EU / EEA", "GDPR; national ePrivacy laws", "Document a legitimate-interest assessment or consent; give the Article 14 notice; check national rules, as some countries require prior consent for B2B email."],
          ["United Kingdom", "UK GDPR; Data Protection Act 2018; PECR", "Same as EU; email to corporate subscribers may rely on legitimate interest; screen calls against TPS/CTPS."],
          ["United States", "CAN-SPAM; TCPA; state privacy laws (e.g. CCPA/CPRA)", "Accurate headers, a physical address and opt-out in email; no autodialled or pre-recorded calls or texts to mobiles without prior express consent; honour the National DNC Registry."],
          ["Canada", "CASL; PIPEDA", "Send commercial electronic messages only with express or implied consent; identify the sender and include an unsubscribe."],
          ["Other countries", "Local privacy and marketing laws", "Check and follow the local rules before contacting anyone there."],
        ]}
      />
      <P>ObserveNow does not give legal advice. If you are unsure whether a use is lawful, take advice before you act.</P>
    </Section>

    <Section number={6} title="Rules by access channel">
      <SubSection title="Web app">
        <BulletList items={[
          "One seat per named person. Do not share passwords or session links.",
          "Turn on two-factor authentication where offered. Tell us within 24 hours of any suspected account compromise.",
        ]} />
      </SubSection>
      <SubSection title="Chrome extension">
        <BulletList items={[
          "Use it only on pages you are lawfully allowed to view, such as public profiles and company websites.",
          "Use it manually, one record at a time. Do not drive it with auto-clickers, macros or browser automation.",
          "Do not use it in breach of any third-party website's terms, including LinkedIn's. You are responsible for your conduct on those sites.",
          <>The extension reads only the page you choose to enrich. We describe what it collects in our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.</>,
        ]} />
      </SubSection>
      <SubSection title="CRM integrations and MCP / AI-agent connector">
        <BulletList items={[
          "Connect only systems you own or are authorised to administer.",
          "Credits are used the same way whether a reveal comes from you, a sync or an AI agent. You are responsible for every action an agent takes on your account.",
          "Set sensible limits on agents and scheduled syncs so they do not loop or re-reveal the same records.",
          "Data synced into your CRM stays subject to this policy, including opt-out and deletion requests we pass to you.",
          "Do not use the connector to copy Data into a third-party AI product that may retain or train on it.",
        ]} />
      </SubSection>
    </Section>

    <Section number={7} title="Credits and fair usage">
      <P>Usage is measured in Credits. An email reveal costs 1 Credit and a phone reveal costs 4 Credits, whichever channel you use.</P>
      <PolicyTable
        headers={["Action", "Credits"]}
        rows={[
          ["Search people or companies, view masked results", "0"],
          ["Email reveal", "1"],
          ["Phone reveal", "4"],
          ["Re-viewing a contact you already revealed (within [12] months)", "0"],
          ["Record refresh / re-verification", "[Confirm: 0 or same as reveal]"],
        ]}
      />
      <SubSection title="Credit rules">
        <BulletList items={[
          'Credits are deducted only when a reveal returns a result. [Confirm whether a "not found" or bounced email is refunded.]',
          "Plan Credits reset each billing cycle and do not roll over unless your plan says so. Credits have no cash value and cannot be transferred between accounts.",
          "Credits used by integrations, syncs and AI agents count against the same balance.",
        ]} />
      </SubSection>
      <SubSection title="Fair-use limits">
        <P>To keep the Service fast and the Data accurate for everyone, each account is subject to these limits regardless of Credit balance:</P>
        <PolicyTable
          headers={["Limit", "Default"]}
          rows={[
            ["Reveals per Authorized User per day", "[500]"],
            ["Search requests per user per minute", "[60]"],
            ["Rows per single export", "[10,000]"],
            ["Chrome extension reveals per user per day", "[200]"],
            ["Integration / MCP requests per minute per account", "[120]"],
          ]}
        />
        <P>We may agree higher limits in writing for Enterprise plans. Usage patterns that look automated, shared or resold may be reviewed even if they stay under these numbers.</P>
      </SubSection>
    </Section>

    <Section number={8} title="Enforcement">
      <P>We monitor usage to detect abuse and enforce this policy in stages:</P>
      <NumberedList items={[
        "Warning — we email the account owner describing the issue and ask you to fix it within [7] days.",
        "Throttling — if it continues, we may slow requests, pause reveals, exports or integrations, or cap daily usage.",
        "Suspension — if it still continues, we may suspend the affected users or the whole account until it is resolved.",
        "Termination — for repeated or serious breaches we may close the account without refund of unused Credits or fees.",
      ]} />
      <P>
        We may skip straight to suspension, without warning, where a breach involves fraud, spam complaints, resale of Data, security attacks, sanctions, harm to a person, or a request from a regulator or court.
      </P>
      <P>
        On suspension or termination you must stop using and delete all Data obtained in breach of this policy and confirm deletion in writing if we ask. We may also report unlawful activity to the authorities and recover our losses, including costs of third-party claims, under the <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
      </P>
      <P>If you think we acted in error, reply to the notice within [14] days and we will review it.</P>
    </Section>

    <Section number={9} title="Opt-outs and data subject requests">
      <P>
        Anyone can ask us to see, correct or delete their record, or to stop it being shown, at <a href="mailto:support@observenow.ai" className="text-primary hover:underline">support@observenow.ai</a> or <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-PCdgL-WlIfkLCFl9A6Dut6FMJykz_u4eVYuC45ISlCfwYw/viewformL" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">this request form</a>. When we remove a record, we will tell customers who revealed it in the previous [12] months where we can, and you must delete or suppress it within [30] days. If a Data Subject contacts you directly, you must handle the request yourself under the law that applies to you.
      </P>
    </Section>

    <Section number={10} title="Reporting violations">
      <P>
        Report misuse of ObserveNow Data, spam using our Data, or security issues to <a href="mailto:support@observenow.ai" className="text-primary hover:underline">support@observenow.ai</a>. Include the message headers or evidence where possible. We investigate every credible report.
      </P>
      <P>Grievance Officer (India): [Name], [designation], [email], [address]. We acknowledge complaints within 24 hours and aim to resolve them within 15 days.</P>
    </Section>

    <Section number={11} title="Changes to this policy">
      <P>
        We may update this policy to reflect changes in law or the Service. We will post the new version here and email account owners at least [15] days before material changes take effect. Continuing to use the Service after that date means you accept the change.
      </P>
    </Section>

    <Section number={12} title="Governing law">
      <P>
        This policy is governed by the laws of India. Courts at [Noida / Gautam Buddh Nagar, Uttar Pradesh] have exclusive jurisdiction, subject to any dispute-resolution clause in the <a href="/terms" className="text-primary hover:underline">Terms of Service</a>. Nothing here limits rights a Data Subject has under the law of their own country.
      </P>
    </Section>

    <Section number={13} title="Contact">
      <P>Adverbo Productions LLP (ObserveNow.ai), Noida, Uttar Pradesh, India · <a href="mailto:support@observenow.ai" className="text-primary hover:underline">support@observenow.ai</a></P>
    </Section>
  </div>
);

export default PolicySection;