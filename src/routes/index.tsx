import { createFileRoute } from "@tanstack/react-router";
import carbonDashboard from "@/assets/carbon-dashboard.jpg";
import voiceRag from "@/assets/voice-rag.jpg";
import mediAlert from "@/assets/medialert.jpg";
import resumeAsset from "@/assets/vamshi_resume.pdf.asset.json";
import photoAsset from "@/assets/vamshi-photo.jpg.asset.json";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/b-vamshi-vardhan-33288b428",
  github: "https://github.com/bevaravamshi/eco-home-footprint-friend",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vamshi Vardhan | Data Visualization Portfolio" },
      { name: "description", content: "Portfolio of Bevara Vamshi Vardhan, a CSE undergraduate focused on data visualization, frontend development, and practical data projects." },
      { property: "og:title", content: "Vamshi Vardhan | Data Visualization Portfolio" },
      { property: "og:description", content: "Explore Vamshi Vardhan's projects, technical skills, internship experience, and education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skillGroups = [
  { label: "Programming & data", tone: "text-neon", skills: ["Python", "MySQL", "Tableau"] },
  { label: "Frontend & tools", tone: "text-teal", skills: ["React", "HTML", "CSS", "VS Code", "Android Studio"] },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-ink font-display text-paper antialiased selection:bg-neon selection:text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-mono text-sm" aria-label="Vamshi Vardhan, back to top">
            <span className="brand-dot size-2.5 rounded-full bg-neon" />
            vamshi<span className="text-neon">.</span>viz
          </a>
          <div className="hidden items-center gap-7 font-mono text-xs text-mute md:flex">
            <a href="#work" className="transition-colors hover:text-paper">Work</a>
            <a href="#skills" className="transition-colors hover:text-paper">Skills</a>
            <a href="#path" className="transition-colors hover:text-paper">Path</a>
            <a href="#contact" className="transition-colors hover:text-paper">Contact</a>
          </div>
          <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="rounded-md bg-neon px-3.5 py-2 font-mono text-xs font-bold text-ink transition-colors hover:bg-amber">Resume ↗</a>
        </nav>
      </header>

      <section id="top" className="hero-wash relative overflow-hidden">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="rise rise-1 mb-5 flex items-center gap-5">
              <img src={photoAsset.url} alt="Portrait of Bevara Vamshi Vardhan" width={786} height={1000} loading="eager" className="size-20 shrink-0 rounded-full border border-line object-cover shadow-panel sm:size-24" />
              <p className="flex items-center gap-2 font-mono text-xs uppercase text-teal">
                <span className="blink size-1.5 rounded-full bg-teal" /> Data Visualization
              </p>
            </div>
            <h1 className="rise rise-2 max-w-[20ch] text-5xl font-semibold leading-tight text-balance text-paper sm:text-7xl">
              Bevara Vamshi Vardhan
            </h1>
            <p className="rise rise-3 mt-6 max-w-[52ch] text-base leading-relaxed text-mute sm:text-lg">
              Computer Science undergraduate turning information into clear, meaningful insights through data, thoughtful interfaces, and practical software projects.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-md bg-neon px-5 py-3 font-mono text-sm font-bold text-ink transition-colors hover:bg-amber">View projects</a>
              <a href="mailto:vamshivardhan527@gmail.com" className="rounded-md border border-line px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-teal hover:text-teal">Get in touch</a>
            </div>
            <div className="rise rise-3 mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-mute">
              <span><span className="text-paper">Hyderabad</span> · Telangana</span>
              <a href="tel:+917013413797" className="text-amber hover:underline">+91 70134 13797</a>
              <a href="mailto:vamshivardhan527@gmail.com" className="text-teal hover:underline">vamshivardhan527@gmail.com</a>
            </div>
          </div>

          <div className="rise rise-3 lg:col-span-5" aria-label="Animated data visualization preview">
            <div className="rounded-lg border border-line bg-ink-2 p-5 shadow-panel">
              <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase">
                <span className="text-mute">Emissions · insight</span><span className="text-teal">CO₂</span>
              </div>
              <div className="flex h-32 items-end gap-1.5" aria-hidden="true">
                {[40, 62, 48, 78, 58, 88, 66, 96].map((height, index) => (
                  <span key={height} className={`bar flex-1 rounded-t ${index < 2 ? "bg-neon" : index < 4 ? "bg-amber" : index < 6 ? "bg-teal" : "bg-violet"}`} style={{ height: `${height}%`, animationDelay: `${0.1 + index * 0.08}s`, opacity: index % 2 ? 0.68 : 1 }} />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[['Insights','Clear','text-amber'],['Stack','React','text-teal'],['Focus','Data','text-neon']].map(([label, value, tone]) => (
                  <div key={label} className="min-w-0 rounded-md bg-ink-3 p-3">
                    <p className="font-mono text-[9px] uppercase text-mute">{label}</p>
                    <p className={`mt-1 truncate font-semibold sm:text-lg ${tone}`}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 flex items-end justify-between"><h2 className="text-3xl font-semibold sm:text-4xl">Selected work</h2><span className="font-mono text-xs text-mute">03 projects</span></div>
          <div className="grid gap-5 md:grid-cols-2">
            <ProjectCard accent="neon" eyebrow="Sustainability" title="Carbon Footprint Calculator" description="A web-based calculator that estimates individual carbon emissions and generates personalized sustainability insights." image={carbonDashboard} alt="Dark carbon footprint analytics dashboard with colorful charts" tags={["HTML", "CSS", "Data visualization"]} link={LINKS.github} linkLabel="GitHub ↗" />
            <ProjectCard accent="teal" eyebrow="Information retrieval" title="Voice RAG System" description="A voice-enabled information retrieval and question-answering project designed for natural interaction with knowledge." image={voiceRag} alt="Dark voice retrieval interface with a glowing audio waveform" tags={["Voice interface", "Retrieval", "Q&A"]} />
            <ProjectCard accent="violet" eyebrow="Upcoming" title="MediAlert — Smart Medicine Reminder System" description="A smart medicine reminder system in progress, designed to help users track doses, schedule medications, and never miss a dose with timely alerts." image={mediAlert} alt="Dark medicine reminder app dashboard with a weekly schedule and dose cards" tags={["Reminders", "Scheduling", "Health"]} />
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 border-t border-line bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-3xl font-semibold sm:text-4xl">Skills</h2>
          <p className="mb-8 mt-3 max-w-[48ch] text-sm text-mute">A growing toolkit for building clear interfaces and understanding data.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => <div key={group.label} className="rounded-lg border border-line bg-ink-2 p-5"><p className={`mb-3 font-mono text-[11px] uppercase ${group.tone}`}>{group.label}</p><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-md bg-ink-3 px-2.5 py-1 font-mono text-xs text-paper">{skill}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section id="path" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">The path</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <Timeline title="Experience" tone="amber" items={[{ date: "2 months · Online", heading: "Frontend Developer & Data Analyst", subheading: "1M1B", body: "Designed the Carbon Footprint Calculator interface, implemented emission calculations, developed visualizations, and analyzed user inputs using Vite, TypeScript, and React." }]} />
            <Timeline title="Education" tone="teal" items={[{ date: "2023 – 2027", heading: "B.Tech in Computer Science & Engineering", subheading: "DRK College of Engineering Science and Technology", body: "JNTUH · Hyderabad, Telangana" },{ date: "2023", heading: "Intermediate · 91.7%", subheading: "Geetha College", body: "Board of Intermediate Telangana" },{ date: "2020", heading: "Secondary School · 88.35%", subheading: "Geetha School", body: "Telangana Board of Secondary Education" }]} />
          </div>
          <div className="mt-14"><p className="mb-5 font-mono text-[11px] uppercase text-violet">Certifications</p><div className="grid gap-4 sm:grid-cols-2"><Certificate title="1M1B Green Internship" issuer="1M1B Green Skills Academy · AICTE & Salesforce" url="https://drive.google.com/file/d/1-MMnChcnMD-Sr-y7dd9kYD7FvNADh6Wt/view" /><Certificate title="AI Skills Passport" issuer="EY & Microsoft" url="https://drive.google.com/file/d/18FXxDsxDUbrMvJVSuilyLFzomjtI_jiA/view" /></div></div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div><h2 className="max-w-[16ch] text-4xl font-semibold leading-tight sm:text-5xl">Let’s make data <span className="text-neon">legible</span>.</h2><p className="mt-4 max-w-[44ch] text-mute">I’m seeking an entry-level data visualization opportunity where I can learn, contribute, and build useful data-driven experiences.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard label="Email" value="vamshivardhan527@gmail.com" href="mailto:vamshivardhan527@gmail.com" tone="text-neon" />
            <ContactCard label="Phone" value="+91 70134 13797" href="tel:+917013413797" tone="text-amber" />
            <ContactCard label="LinkedIn" value="in/b-vamshi-vardhan" href={LINKS.linkedin} tone="text-teal" />
            <ContactCard label="GitHub" value="bevaravamshi" href={LINKS.github} tone="text-violet" />
            <ContactCard label="Location" value="Hyderabad, Telangana" tone="text-teal" />
            <ContactCard label="Résumé" value="View PDF ↗" href={resumeAsset.url} tone="text-violet" />
          </div>
        </div>
      </section>

      <footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-mute sm:flex-row sm:px-8"><p>Bevara Vamshi Vardhan · Data Visualization</p><p>Hyderabad · 2026</p></div></footer>
    </main>
  );
}

function ProjectCard({ accent, eyebrow, title, description, image, alt, tags, link, linkLabel }: { accent: "neon" | "teal" | "violet"; eyebrow: string; title: string; description: string; image: string; alt: string; tags: string[]; link?: string; linkLabel?: string }) {
  const tone = accent === "neon" ? "text-neon" : accent === "teal" ? "text-teal" : "text-violet";
  const dot = accent === "neon" ? "bg-neon" : accent === "teal" ? "bg-teal" : "bg-violet";
  return <article className="group overflow-hidden rounded-lg border border-line bg-ink-2 transition-colors hover:border-line-strong"><div className="p-5"><div className="mb-3 flex items-center gap-2"><span className={`size-2 rounded-full ${dot}`} /><span className={`font-mono text-[11px] uppercase ${tone}`}>{eyebrow}</span></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-mute">{description}</p><div className="mt-4 flex flex-wrap gap-1.5">{tags.map((tag) => <span key={tag} className="rounded-md bg-ink-3 px-2 py-1 font-mono text-[11px] text-paper">{tag}</span>)}{link && <a href={link} target="_blank" rel="noopener noreferrer" className="rounded-md bg-ink-3 px-2 py-1 font-mono text-[11px] text-teal transition-colors hover:bg-teal hover:text-ink">{linkLabel ?? "Link ↗"}</a>}</div></div><img src={image} alt={alt} width={1024} height={640} loading="lazy" className="aspect-[16/10] w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.015]" /></article>;
}

function Timeline({ title, tone, items }: { title: string; tone: "amber" | "teal"; items: Array<{ date: string; heading: string; subheading: string; body: string }> }) {
  const color = tone === "amber" ? "text-amber" : "text-teal"; const bg = tone === "amber" ? "bg-amber" : "bg-teal";
  return <div><p className={`mb-5 font-mono text-[11px] uppercase ${color}`}>{title}</p><div className="space-y-8 border-l border-line pl-6">{items.map((item) => <div key={item.heading} className="relative"><span className={`absolute -left-[30px] top-1.5 size-3 rounded-full ${bg} ring-4 ring-ink`} /><p className="font-mono text-xs text-mute">{item.date}</p><h3 className="mt-1 text-lg font-semibold">{item.heading}</h3><p className={`mt-0.5 font-mono text-xs ${color}`}>{item.subheading}</p><p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-mute">{item.body}</p></div>)}</div></div>;
}

function Certificate({ title, issuer, url }: { title: string; issuer: string; url: string }) { return <a href={url} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-line bg-ink-2 p-5 transition-colors hover:border-violet"><p className="font-mono text-xs text-mute">2025</p><h3 className="mt-1 text-lg font-semibold underline-offset-4 group-hover:underline">{title} <span className="font-mono text-xs text-mute">↗</span></h3><p className="mt-1 font-mono text-xs text-violet">{issuer}</p></a>; }

function ContactCard({ label, value, href, tone }: { label: string; value: string; href?: string; tone: string }) {
  const content = <><p className="font-mono text-[11px] uppercase text-mute">{label}</p><p className={`mt-2 break-words font-mono text-sm ${tone}`}>{value}</p></>;
  return href ? <a href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined} rel="noreferrer" className="rounded-lg border border-line bg-ink-2 p-5 transition-colors hover:border-line-strong">{content}</a> : <div className="rounded-lg border border-line bg-ink-2 p-5">{content}</div>;
}