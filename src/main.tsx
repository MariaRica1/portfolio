import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  CheckCheck,
  Code2,
  Database,
  GitBranch,
  Github,
  Linkedin,
  Menu,
  X,
  ShieldCheck,
  Terminal,
  Layers,
  Braces,
  RotateCcw,
  Mail,
  ChevronDown,
} from "lucide-react";
import "./styles.css";
import { profile, projects, skills, experience } from "./portfolio";

function Brand() {
  return (
    <a href="#about" className="brand" aria-label="Maria Rica Valenzuela, home">
      <span className="logo-crop">
        <img src="/logo.png" alt="" />
      </span>
      <span>
        {profile.name}
        <span className="brand-role">SOFTWARE QA ENGINEER</span>
      </span>
    </a>
  );
}
function TestConsole() {
  const [running, setRunning] = useState(false),
    [done, setDone] = useState(4);
  useEffect(() => {
    if (!running) return;
    setDone(0);
    let n = 0;
    const timer = window.setInterval(() => {
      n++;
      setDone(n);
      if (n === 4) {
        setRunning(false);
        window.clearInterval(timer);
      }
    }, 450);
    return () => window.clearInterval(timer);
  }, [running]);
  return (
    <div className="console-wrap">
      <div className="console-top-label">
        <span className="tiny-dot" /> QUALITY IS IN THE DETAILS{" "}
        <span>01 / 04</span>
      </div>
      <div className="test-console">
        <div className="console-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>
            <Terminal size={13} /> quality.spec.ts
          </span>
          <span className="ts-icon">TS</span>
        </div>
        <div className="console-code">
          <div>
            <b>01</b>
            <span className="code-purple">test</span>(
            <span className="code-green">'built to work. built to last.'</span>,
          </div>
          <div>
            <b>02</b> <span className="code-purple">async</span> ({"{"} page{" "}
            {"}"}) =&gt; {"{"}
          </div>
          <div>
            <b>03</b> <span className="code-purple">await</span> page.goto(
            <span className="code-green">'/possibilities'</span>);
          </div>
          <div>
            <b>04</b> <span className="code-purple">await</span>{" "}
            <span className="code-cyan">expect</span>(experience).
            <span className="code-cyan">toBe</span>({"{"}
          </div>
          <div>
            <b>05</b> reliable: <span className="code-orange">true</span>,
          </div>
          <div>
            <b>06</b> accessible: <span className="code-orange">true</span>,
          </div>
          <div>
            <b>07</b> readyToShip: <span className="code-orange">true</span>
          </div>
          <div>
            <b>08</b> {"}"});
          </div>
          <div>
            <b>09</b>
            {"}"});
          </div>
        </div>
        <div className="test-output">
          <div className="run-caption">
            <span>
              <span className="tiny-dot" />{" "}
              {running ? "RUNNING CHECKS" : "TEST RESULTS · DEMO"}
            </span>
            <button
              onClick={() => setRunning(true)}
              disabled={running}
              aria-label="Run sample tests again"
            >
              <RotateCcw size={13} />
            </button>
          </div>
          {[
            "User journeys validated",
            "Edge cases covered",
            "Data integrity verified",
            "Ready for a confident release",
          ].map((t, i) => (
            <div
              className={"test-row " + (done > i ? "complete" : "pending")}
              key={t}
            >
              <Check size={13} />
              <span>{t}</span>
              <small>{done > i ? `${[242, 186, 124, 96][i]}ms` : "…"}</small>
            </div>
          ))}
          <div className="test-summary" aria-live="polite">
            <span>{done === 4 ? "4 passed" : `${done} / 4 passed`}</span>
            <small>{running ? "Running…" : "648ms · all systems go"}</small>
          </div>
        </div>
      </div>
      <div className="console-foot">
        <ShieldCheck size={15} />
        <span>Thoughtful testing. Dependable software.</span>
        <span className="live-dot" />
      </div>
    </div>
  );
}
function ProjectVisual({ type }: { type: string }) {
  const project = projects.find(p => p.type === type)!;
  return <div className={'project-visual ' + type} aria-hidden="true">
    <div className="scope-window">
      <div className="scope-toolbar"><Layers size={13}/><span>{project.shortName.toLowerCase()} / testing focus</span></div>
      {project.areas.slice(0, 4).map((area, i) => <div className="scope-row" key={area}><span>0{i + 1}</span><span>{area}</span><ShieldCheck size={12}/></div>)}
      <div className="scope-caption">BUSINESS RULES · WORKFLOWS · VALIDATION</div>
    </div>
  </div>;
}
function App() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("All projects"),
    [selected, setSelected] = useState<number | null>(null),
    [metric, setMetric] = useState("HRIS"),
    [notice, setNotice] = useState(""),
    [active, setActive] = useState("about");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => o.observe(s));
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
  }, [selected]);
  const scopeProject = projects.find(p => p.shortName === metric)!;
  const scopeStats = [
    { title: 'Workflow areas', value: scopeProject.areas.length, desc: scopeProject.areas.join(' · '), icon: Layers },
    { title: metric === 'Inventory' ? 'Reusable components' : 'Validation focus', value: scopeProject.focus.length, desc: scopeProject.focus.join(' · '), icon: ShieldCheck },
    { title: metric === 'Recruitment' ? 'Testing methods' : metric === 'Inventory' ? 'Case design approaches' : 'QA activities', value: scopeProject.methods.length, desc: scopeProject.methods.join(' · '), icon: CheckCheck },
  ];
  return (
    <>
      <header>
        <div className="nav-inner">
          <Brand />
          <nav
            aria-label="Main navigation"
            className={menu ? "mobile-open" : ""}
          >
            {[
              ["about", "About"],
              ["expertise", "Expertise"],
              ["projects", "Projects"],
              ["experience", "Experience"],
              ["metrics", "Testing Scope"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                className={active === id ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section id="about" className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="tiny-dot" /> SOFTWARE QUALITY ASSURANCE ENGINEER
            </div>
            <h1>
              Ensuring digital
              <br />
              excellence through
              <br />
              <span>
                rigorous quality
                <br className="desktop-break" /> assurance.
              </span>
            </h1>
            <p>
              I’m Maria Rica, a Software Quality Assurance professional testing
              HRIS, recruitment, and inventory systems. I combine manual testing,
              clear documentation, and Playwright automation with TypeScript to
              validate business rules and resolve defects.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore projects <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> View GitHub</a>
            </div>
            <div className="hero-meta">
              <span className="status-dot" /> SQA at Intellismart Technology, Inc.
              <span className="meta-divider" /> Quezon City, Philippines
            </div>
          </div>
          <TestConsole />
        </section>
        <div className="tech-strip">
          <div className="section-shell tech-inner">
            <span className="tech-intro">A QUALITY-FIRST TOOLKIT</span>
            <span>
              <Code2 /> Playwright
            </span>
            <span className="tool-ts">
              TS <b>TypeScript</b>
            </span>
            <span>
              <Braces /> VS Code
            </span>
            <span>
              <Database /> SQL
            </span>
            <span>
              <GitBranch /> Agile / Scrum
            </span>
            <span>
              <Layers /> Jira
            </span>
          </div>
        </div>
        <section id="expertise" className="section-shell expertise">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / EXPERTISE</div>
              <h2>Quality, at every layer.</h2>
            </div>
            <p>
              From the interface to the database.
              <br />A complete approach to software confidence.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <article className="skill-card" key={s.title}>
                <div className="skill-top">
                  <s.icon size={23} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <code>{s.code}</code>
                <div className="skill-tags">{s.tags}</div>
              </article>
            ))}
            <a href="#contact" className="skill-card approach-card">
              <div className="approach-symbol">
                <CheckCheck size={35} />
              </div>
              <h3>
                Good software.
                <br />
                Even better confidence.
              </h3>
              <span>
                Let’s build it together <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </section>
        <section id="projects" className="projects-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="eyebrow">02 / SELECTED PROJECTS</div>
                <h2>Putting quality into practice.</h2>
              </div>
              <span className="sample-label">PROFESSIONAL PROJECT EXPERIENCE</span>
            </div>
            <div className="project-filters" aria-label="Filter projects">
              {[
                "All projects",
                "Automation",
                "Functional",
                "End-to-End",
              ].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "selected" : ""}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === "All projects" && <span>{String(projects.length).padStart(2, "0")}</span>}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {projects.map(
                (p, i) =>
                  (filter === "All projects" || filter === p.category) && (
                    <button
                      className="project-card"
                      key={p.title}
                      onClick={() => setSelected(i)}
                    >
                      <ProjectVisual type={p.type} />
                      <div className="project-content">
                        <div className="project-category">
                          {p.category}
                          <ArrowUpRight size={19} />
                        </div>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="project-tags">
                          {p.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                        <div className="project-footer">
                          <span>
                            <CheckCheck size={14} />
                            {p.tests}
                          </span>
                          <span>
                            View case study <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </button>
                  )
              )}
            </div>
          </div>
        </section>
        <section id="experience" className="section-shell experience-section">
          <div className="section-heading"><div><div className="eyebrow">03 / EXPERIENCE & EDUCATION</div><h2>A foundation in hands-on QA.</h2></div><p>Working with developers and stakeholders<br/>to turn requirements into tested workflows.</p></div>
          <div className="experience-layout"><div className="experience-timeline">{experience.map(role => <article className="experience-item" key={role.company}>
            <div className="role-heading"><div><h3>{role.title}</h3><p className="company-name">{role.company}</p></div>{role.current && <span className="current-badge">Current role</span>}</div>
            <p className="role-period">{role.period}</p><ul>{role.points.map(point => <li key={point}><Check size={14}/><span>{point}</span></li>)}</ul>
          </article>)}</div><aside className="education-card"><div className="eyebrow">EDUCATION</div><h3>Bachelor of Science in Information Technology</h3><p className="school-name">Mindoro State University</p><div className="education-divider"/><span className="award-label"><ShieldCheck size={17}/> Best in Capstone Project</span><h4>e-LogMo</h4><p>An IoT-Based River Water Level and Weather Monitoring System with Mobile Notification.</p><div className="education-divider"/><div className="eyebrow">ADDITIONAL SKILLS</div><div className="project-tags">{['HTML', 'CSS', 'Basic Web Development', 'Microsoft Office'].map(skill => <span key={skill}>{skill}</span>)}</div></aside></div>
        </section>
        <section id="metrics" className="section-shell metrics-section">
          <div className="metrics-card">
            <div className="metrics-heading">
              <div>
                <div className="eyebrow">04 / TESTING SCOPE</div>
                <h2>A closer look at the testing scope.</h2>
              </div>
              <label className="metric-select">
                <span className="sr-only">Select project testing scope</span>
                <select
                  value={metric}
                  onChange={(e) => setMetric(e.target.value)}
                >
                  {projects.map((p) => p.shortName).map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
                <ChevronDown size={14} />
              </label>
            </div>
            <div className="metrics-grid" aria-live="polite">
              {scopeStats.map(stat => <div className="metric" key={stat.title}><stat.icon size={20}/><strong key={metric}>{stat.value}</strong><h3>{stat.title}</h3><p>{stat.desc}</p></div>)}
            </div>
            <div className="metrics-note"><span className="tiny-dot"/> Counts summarize the scope described in my résumé. Select a project to explore.</div>
          </div>
        </section>
        <section id="contact" className="section-shell contact-section">
          <div className="contact-copy">
            <div className="eyebrow">05 / LET’S CONNECT</div>
            <h2>
              Great software starts
              <br />
              with a conversation.
            </h2>
            <p>
              Have a project in mind or a quality challenge to solve?
              <br />
              I’d love to hear about it.
            </p>
            <div className="social-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={14}/></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a>
            </div>
            <div className="contact-note">
              <Mail size={17} />
              <span>
                <a href={'mailto:' + profile.email}>{profile.email}</a>
                <br />
                {profile.location}
              </span>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = String(data.get('name') ?? '').trim();
              const email = String(data.get('email') ?? '').trim();
              const message = String(data.get('message') ?? '').trim();
              const subject = encodeURIComponent('Portfolio inquiry from ' + name);
              const body = encodeURIComponent(message + '\n\nFrom: ' + name + '\nReply to: ' + email);
              window.location.href = 'mailto:' + profile.email + '?subject=' + subject + '&body=' + body;
              setNotice('An email draft has been requested in your email app. Review it and send it there. If it does not open, email ' + profile.email + ' directly.');
            }}
          >
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  placeholder="Alex Morgan"
                  required
                  autoComplete="name"
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <label>
              What’s on your mind?
              <textarea
                name="message"
                placeholder="Tell me a little about your project…"
                required
                rows={4}
                maxLength={4000}
              />
            </label>
            <div className="form-bottom">
              <span>Let’s make something dependable.</span>
              <button type="submit" className="button primary">
                Open email draft <ArrowUpRight size={16} />
              </button>
            </div>
            <p className="form-demo">
              Opens your email app with a draft. Review and send it there.
            </p>
          </form>
        </section>
      </main>
      <footer className="section-shell">
        <Brand />
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#about">
          Built with care. Tested with purpose. <ArrowUpRight size={14} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        {selected !== null && (
          <div className="dialog-inner">
            <button
              className="dialog-close"
              onClick={() => dialog.current?.close()}
              aria-label="Close case study"
            >
              <X />
            </button>
            <div className="eyebrow">PROJECT EXPERIENCE / 0{selected + 1}</div>
            <h2>{projects[selected].title}</h2>
            <p>{projects[selected].description}</p>
            <h3>Testing approach</h3>
            <ul>
              {projects[selected].details.map((d) => (
                <li key={d}>
                  <Check size={16} />
                  {d}
                </li>
              ))}
            </ul>
            <div className="project-tags">
              {projects[selected].tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="dialog-note">
              Summary of my responsibilities as described in my résumé.
            </p>
            <button
              className="button primary"
              onClick={() => {
                dialog.current?.close();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discuss a similar project <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </dialog>
      {notice && (
        <div className="toast" role="status">
          <span>{notice}</span>
          <button
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
