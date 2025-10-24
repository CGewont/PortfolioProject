import { useEffect, useState } from "react";

export default function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setHello(d.text))
      .catch(() => setHello(""));
  }, []);

  // --- Recent Work (horizontal rail) ---
  const projects = [
    {
      title: "Phishing Triage Automation",
      sub: "Detections + Playbooks",
      desc: "Header parsing & URL detonation; cut MTTR by ~40%.",
      date: "2025-09-10",
    },
    {
      title: "Zeek + Suricata Lab",
      sub: "Network Forensics",
      desc: "Repeatable lab; PCAP → Zeek logs → pivots; hunting queries.",
      date: "2025-07-01",
    },
    {
      title: "Sentinel Wi-Fi Anomalies",
      sub: "KQL + Workbook",
      desc: "Auth anomalies, AP/client drift visualizations and alerts.",
      date: "2025-05-22",
    },
  ].sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
  }

  function scrollByCards(el, dir = 1) {
    if (!el) return;
    const card = el.querySelector(".hcard");
    const step = card ? card.getBoundingClientRect().width + 20 : 520;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <>
      {/* NAV */}
      <nav className="nav container">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--urple-500)",
            }}
          />
          <strong className="accent">CG</strong>
        </div>
        <div>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="container">
        <div className="row row--2" style={{ alignItems: "center" }}>
          <div>
            <p className="muted">{hello || "Hello,"}</p>
            <h1
              style={{
                fontSize: "clamp(36px,5vw,56px)",
                lineHeight: 1.1,
                margin: "8px 0 12px",
              }}
            >
              <span className="accent">Christopher Gewont</span>
              <br />
              SOC Analyst
            </h1>
            <p className="muted" style={{ maxWidth: 620 }}>
              I believe growth comes from curiosity and respect. Everyone I meet
              knows something I don’t, and that’s what keeps me driven. My goal
              is to keep learning, share what I can, and never lose the humility
              that makes progress possible.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              <a href="#work" className="btn btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Hire Me
              </a>
            </div>
            <div
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}
            >
              {[
                "The Watcher",
                "Threat Hunter",
                "The Decoder",
                "Incident Responder",
                "Programmer",
                "Blue Team",
                "Investigator",
                "Researcher",
                "Mentor",
              ].map((x) => (
                <span key={x} className="chip">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="hero-wrap">
              <div className="hero-glow" />
              <img
                src="/profile.png"
                alt="Christopher Gewont"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </header>

      {/* WORK – Horizontal rail */}
      <section id="work" className="container">
        <h2 className="section-title" style={{ margin: "8px 0 12px" }}>
          Recent Work
        </h2>

        <div className="hrail-wrap">
          <div id="work-rail" className="hrail hrail-mask">
            {projects.map((p) => (
              <article key={p.title} className="hcard">
                <div>
                  <div className="hsub">{p.sub}</div>
                  <div className="htitle">{p.title}</div>
                  <div className="hdate">{formatDate(p.date)}</div>
                  <p className="hdesc">{p.desc}</p>
                </div>
                {/* <a className="btn btn-outline" href="#" target="_blank">Read more</a> */}
              </article>
            ))}
          </div>

          {/* Rail nav */}
          <button
            className="hnav hnav-left"
            aria-label="Scroll left"
            onClick={() =>
              scrollByCards(document.getElementById("work-rail"), -1)
            }
            title="Previous"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="hnav hnav-right"
            aria-label="Scroll right"
            onClick={() => scrollByCards(document.getElementById("work-rail"), 1)}
            title="Next"
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container">
        <h2 className="section-title" style={{ margin: "24px 0 12px" }}>
          Technical Skills
        </h2>

        <div className="row row--2">
          {/* Programming & Development */}
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Programming & Development</h3>
            <ul className="loose" style={{ listStyle: "none", paddingLeft: 18, margin: 0 }}>
              <li>
                <strong>Languages:</strong>
                <br />
                Python, C, C++, JavaScript, Go, Bash, OCaml, SQL, HTML, CSS
              </li>

              <li>
                <strong>Frameworks & Tools:</strong>
                <br />
                React, Vite, Node.js, Flask, Go (learning), Dune (OCaml), Git &amp;
                GitHub, GitHub Actions
              </li>

              <li>
                <strong>Scripting:</strong>
                <br />
                Bash automation for benchmarking, virtualization setup, file parsing,
                and network testing
              </li>

              <li>
                <strong>Version Control:</strong>
                <br />
                Git branching, commits, pull requests, and collaborative workflows via
                GitHub
              </li>
            </ul>
          </div>

          {/* Systems & Networking */}
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Systems & Networking</h3>
            <ul className="loose" style={{ listStyle: "none", paddingLeft: 18, margin: 0 }}>
              <li>
                <strong>Operating Systems:</strong>
                <br />
                Linux (Ubuntu, Kali), Windows
              </li>

              <li>
                <strong>Virtualization:</strong>
                <br />
                VirtualBox, KVM, Hyper-V, Chameleon Cloud, AWS EC2 (metal &amp; VM)
              </li>

              <li>
                <strong>Networking Tools:</strong>
                <br />
                Wireshark, tcpdump, iperf, Scapy, Zeek, nmap
              </li>

              <li>
                <strong>Protocols & Concepts:</strong>
                <br />
                TCP/IP, 802.11 Wi-Fi, NAT, VLANs, firewalls, QoS, DNS, DHCP
              </li>

              <li>
                <strong>Cloud Benchmarking:</strong>
                <br />
                sysbench, iperf3, disk/network performance scripting
              </li>
            </ul>
          </div>
        </div>

        <div className="row row--2" style={{ marginTop: 24 }}>
          {/* Cybersecurity */}
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Cybersecurity</h3>
            <ul className="loose" style={{ listStyle: "none", paddingLeft: 18, margin: 0 }}>
              <li>
                <strong>SIEM Platforms:</strong>
                <br />
                Azure Sentinel, IBM QRadar, Splunk
              </li>

              <li>
                <strong>Security Tools:</strong>
                <br />
                Nessus, OpenVAS, Metasploit, Nmap, Wireshark, Hashcat
              </li>

              <li>
                <strong>Threat Analysis:</strong>
                <br />
                Vulnerability scanning, incident triage, log correlation, NIST / ISO
                27001 alignment
              </li>

              <li>
                <strong>Endpoint & Network Security:</strong>
                <br />
                Firewall monitoring, port scanning, intrusion detection (Zeek, Snort
                basics)
              </li>

              <li>
                <strong>Frameworks:</strong>
                <br />
                NIST RMF, eMASS, MITRE ATT&amp;CK, ISO 27001
              </li>

              <li>
                <strong>Investigation Practices:</strong>
                <br />
                Event correlation, false-positive analysis, rule tuning, use-case
                creation
              </li>
            </ul>
          </div>

          {/* Other Interests */}
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Other Interests</h3>
            <ul className="loose" style={{ listStyle: "none", paddingLeft: 18, margin: 0 }}>
              <li>
                <strong>Areas of Focus:</strong>
                <br />
                Penetration testing, cloud infrastructure, wireless systems
              </li>
              <li>
                <strong>Additional Interests:</strong>
                <br />
                Data visualization, PC hardware builds
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="container" style={{ paddingBottom: 40 }}>
        <h2>Contact</h2>
        <p className="muted">
          Email:{" "}
          <a className="accent" href="mailto:CGewont03@outlook.com">
            CGewont03@outlook.com
          </a>
        </p>
      </footer>
    </>
  );
}
