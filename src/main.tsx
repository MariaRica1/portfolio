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
  Play,
  RotateCcw,
  Mail,
  ChevronDown,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "E-Commerce Test Automation Suite",
    category: "Automation",
    description:
      "Reliable shopping journeys. From the first product click to a successful checkout.",
    tags: ["Playwright", "TypeScript", "GitHub Actions"],
    tests: "128 test cases",
    type: "commerce",
    details: [
      "End-to-end checkout, search, and cart scenarios across browsers.",
      "Reusable page objects, isolated test data, and CI regression runs.",
      "Sample outcome: 95% critical-journey coverage.",
    ],
  },
  {
    title: "Enterprise HR & Payroll Validation",
    category: "Functional",
    description:
      "Getting the details right where they matter most: people, payroll, and precision.",
    tags: ["SQL", "Jira", "Manual Testing"],
    tests: "86 test cases",
    type: "payroll",
    details: [
      "Role-based access, employee lifecycle, and payroll workflows.",
      "Boundary checks for deductions and salary calculations.",
      "Database reconciliation and traceable defect documentation.",
    ],
  },
  {
    title: "SIMS Inventory & Tax Logic Testing",
    category: "API & Database",
    description:
      "A closer look at inventory integrity, transaction accuracy, and tax calculations.",
    tags: ["API Testing", "SQL", "Postman"],
    tests: "64 test cases",
    type: "inventory",
    details: [
      "API contract validation for stock movements and transactions.",
      "SQL verification of inventory balances and calculated totals.",
      "Rounding, zero-value, and boundary scenarios for tax logic.",
    ],
  },
];
const skills = [
  {
    icon: Code2,
    title: "Test automation",
    body: "Scalable, maintainable tests that make every release more confident.",
    code: "await expect(page).toHaveTitle(/Ready/);",
    tags: "Playwright · TypeScript",
  },
  {
    icon: ShieldCheck,
    title: "Manual & functional",
    body: "Thoughtful exploration. Clear test cases. No detail left behind.",
    code: "Given → When → Then",
    tags: "Exploratory testing · Jira",
  },
  {
    icon: Braces,
    title: "API testing",
    body: "Validate the contracts and connections behind every experience.",
    code: "expect(response.status()).toBe(200);",
    tags: "Postman · REST APIs",
  },
  {
    icon: Database,
    title: "Database verification",
    body: "Follow the data. Verify accuracy, integrity, and business logic.",
    code: "SELECT accuracy FROM transactions;",
    tags: "SQL · Data validation",
  },
  {
    icon: GitBranch,
    title: "CI/CD pipelines",
    body: "Build quality into the pipeline, from commit to deployment.",
    code: "commit → build → test → release",
    tags: "GitHub Actions · Git",
  },
];
function Brand() {
  return (
    <a href="#about" className="brand" aria-label="Maria Rica Valenzuela, home">
      <span className="logo-crop">
        <img src="/logo.png" alt="" />
      </span>
      <span>
        Maria Rica Valenzuela
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
  return (
    <div className={"project-visual " + type}>
      {type === "commerce" ? (
        <div className="mini-browser">
          <div className="mini-toolbar">
            <span>● ● ●</span>
            <small>store / checkout.spec.ts</small>
            <Check size={12} />
          </div>
          <div className="commerce-body">
            <div className="product-placeholder">
              <Layers size={33} />
            </div>
            <div>
              <small>CHECKOUT VALIDATION</small>
              <div className="skeleton long" />
              <div className="skeleton" />
              <div className="mini-success">
                <Check size={11} /> All assertions passed
              </div>
            </div>
          </div>
          <div className="visual-bottom">
            <span>chromium</span>
            <span>✓ 128 / 128</span>
          </div>
        </div>
      ) : type === "payroll" ? (
        <div className="payroll-window">
          <div className="mini-toolbar">
            <span>
              <Database size={13} /> payroll_validation
            </span>
            <small>SQL</small>
          </div>
          <div className="table-head">
            <span>employee_id</span>
            <span>net_pay</span>
            <span>status</span>
          </div>
          {["EMP_001", "EMP_002", "EMP_003"].map((v, i) => (
            <div className="table-row" key={v}>
              <span>{v}</span>
              <span>{["28,450.00", "32,100.00", "26,750.00"][i]}</span>
              <CheckCheck size={14} />
            </div>
          ))}
        </div>
      ) : (
        <div className="api-window">
          <div className="api-url">
            <b>GET</b>
            <span>/api/v1/inventory</span>
            <em>200 OK</em>
          </div>
          <pre>
            {"{\n"} <span className="code-cyan">"status"</span>:{" "}
            <span className="code-green">"verified"</span>,{"\n"}{" "}
            <span className="code-cyan">"stock_integrity"</span>:{" "}
            <span className="code-orange">true</span>,{"\n"}{" "}
            <span className="code-cyan">"tax_accuracy"</span>:{" "}
            <span className="code-orange">100</span>
            {"\n}"}
          </pre>
        </div>
      )}
    </div>
  );
}
function App() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("All projects"),
    [selected, setSelected] = useState<number | null>(null),
    [metric, setMetric] = useState("E-Commerce"),
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
  const social = (name: string) =>
    window.open(
      name === "GitHub"
        ? "https://github.com/MariaRica1"
        : "https://ph.linkedin.com/in/maria-rica-valenzuela-176672285",
      "_blank",
      "noopener,noreferrer"
    );
  const numbers =
    metric === "E-Commerce"
      ? ["95%", "24", "3.2×"]
      : metric === "HR & Payroll"
      ? ["92%", "18", "2.5×"]
      : ["97%", "16", "2.8×"];
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
              ["metrics", "Test Metrics"],
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
              I’m Maria Rica. I turn complex requirements into
              <br className="wide-break" /> reliable experiences through
              thoughtful manual testing,
              <br className="wide-break" /> smart automation, and a detail-first
              mindset.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore projects <ArrowUpRight size={17} />
              </a>
              <button
                className="button secondary"
                onClick={() => social("GitHub")}
              >
                <Github size={17} /> View GitHub
              </button>
            </div>
            <div className="hero-meta">
              <span className="status-dot" /> Open to meaningful opportunities{" "}
              <span className="meta-divider" /> Based in the Philippines
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
              <Braces /> Postman
            </span>
            <span>
              <Database /> SQL
            </span>
            <span>
              <GitBranch /> GitHub Actions
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
              <span className="sample-label">ILLUSTRATIVE CASE STUDIES</span>
            </div>
            <div className="project-filters" aria-label="Filter projects">
              {[
                "All projects",
                "Automation",
                "Functional",
                "API & Database",
              ].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "selected" : ""}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === "All projects" && <span>03</span>}
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
        <section id="metrics" className="section-shell metrics-section">
          <div className="metrics-card">
            <div className="metrics-heading">
              <div>
                <div className="eyebrow">03 / QUALITY IN NUMBERS</div>
                <h2>Small details. Measurable impact.</h2>
              </div>
              <label className="metric-select">
                <span className="sr-only">Select sample project</span>
                <select
                  value={metric}
                  onChange={(e) => setMetric(e.target.value)}
                >
                  {["E-Commerce", "HR & Payroll", "SIMS Inventory"].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
                <ChevronDown size={14} />
              </label>
            </div>
            <div className="metrics-grid">
              {[
                {
                  title: "Test coverage",
                  desc: "Critical user journeys covered",
                  icon: ShieldCheck,
                },
                {
                  title: "Critical bugs caught",
                  desc: "Before reaching production",
                  icon: CheckCheck,
                },
                {
                  title: "Faster regression",
                  desc: "Compared to manual execution",
                  icon: Play,
                },
              ].map((m, i) => (
                <div className="metric" key={m.title}>
                  <m.icon size={20} />
                  <strong key={metric}>{numbers[i]}</strong>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  {i === 0 && (
                    <div className="coverage-bar">
                      <span style={{ width: numbers[0] }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="metrics-note">
              <span className="tiny-dot" /> Illustrative metrics from sample
              projects. Select a project to explore.
            </div>
          </div>
        </section>
        <section id="contact" className="section-shell contact-section">
          <div className="contact-copy">
            <div className="eyebrow">04 / LET’S CONNECT</div>
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
              <button onClick={() => social("LinkedIn")}>
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
              </button>
              <button onClick={() => social("GitHub")}>
                <Github size={18} /> GitHub <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="contact-note">
              <Mail size={17} />
              <span>
                A little curiosity goes a long way.
                <br />
                Let’s see what we can build.
              </span>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNotice(
                "Thanks for your interest! This frontend demo does not send messages yet. Connect an email or form service before publishing publicly."
              );
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
                Send message <ArrowUpRight size={16} />
              </button>
            </div>
            <p className="form-demo">
              Demo form · messages are not transmitted.
            </p>
          </form>
        </section>
      </main>
      <footer className="section-shell">
        <Brand />
        <span>© {new Date().getFullYear()} Maria Rica Valenzuela</span>
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
            <div className="eyebrow">SAMPLE CASE STUDY / 0{selected + 1}</div>
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
              Illustrative portfolio content. Replace with verified project
              details and repository links.
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
