import { createElement, useState, useEffect } from "react";
import { FiCode, FiGithub, FiLinkedin, FiTwitter, FiMail, FiClock, FiLayers, FiActivity, FiPackage, FiTrendingUp, FiServer, FiDatabase, FiGlobe, FiZap } from "react-icons/fi";
import { MdOutlineSpeed, MdApi, MdCloudDone } from "react-icons/md";
import { SiMongodb } from "react-icons/si";

export default function AboutSection({ RevealSection, SectionLabel, TiltCard, GlassCard }) {
  const Reveal = RevealSection;
  const Label = SectionLabel;
  const Tilt = TiltCard;
  const Card = GlassCard;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="about" style={{ minHeight: "100vh", padding: isMobile ? "80px 4vw 60px" : isTablet ? "100px 4vw 70px" : "120px 5vw 80px", scrollMarginTop: 96 }}>
      <Reveal>
        <Label>About</Label>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 32, marginTop: 24 }}>
          <Tilt>
            <Card style={{ padding: isMobile ? "24px" : isTablet ? "30px" : "36px" }} glow>
              <div style={{ marginBottom: 28, position: "relative", display: "inline-block" }}>
                <div style={{ width: isMobile ? 60 : 80, height: isMobile ? 60 : 80, borderRadius: "50%", background: "linear-gradient(135deg,#9b4fff,#c084fc)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(140,60,255,0.5)", animation: "pulse 4s ease-in-out infinite" }}>
                  <FiCode size={isMobile ? 24 : 34} color="#fff" />
                </div>
                <div style={{ position: "absolute", inset: isMobile ? -2 : -4, borderRadius: "50%", border: "1px solid rgba(160,80,255,0.32)", animation: "pulse 4s ease-in-out 0.5s infinite" }} />
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 22 : isTablet ? 25 : 28, fontWeight: 800, marginBottom: 8, color: "#fff" }}>Olamide Joseph</h2>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 9 : 11, letterSpacing: 3, color: "#9b4fff", marginBottom: 20 }}>{isMobile ? "Senior Backend Engineer" : "Senior Backend Engineer · 1+ yrs exp"}</p>
              <p style={{ fontSize: isMobile ? 12 : 13, lineHeight: 1.9, color: "rgba(220,190,255,0.68)" }}>I architect distributed systems that operate at planetary scale. My obsession is the space where performance meets reliability — building APIs that breathe, databases that sing, and pipelines that never sleep.</p>
              <p style={{ fontSize: isMobile ? 12 : 13, lineHeight: 1.9, color: "rgba(220,190,255,0.68)", marginTop: 14 }}>When I'm not designing consensus algorithms or chasing p99 latencies, I'm contributing to open-source infrastructure tools and writing about systems design.</p>
              <div style={{ display: "flex", gap: isMobile ? 8 : 12, marginTop: 24, justifyContent: isMobile ? "center" : "flex-start" }}>
                {[{ I: FiGithub, c: "#e9d8fd" }, { I: FiLinkedin, c: "#60a5fa" }, { I: FiTwitter, c: "#38bdf8" }, { I: FiMail, c: "#c084fc" }].map(({ I, c }, idx) => (
                  <div key={idx} style={{ width: isMobile ? 32 : 36, height: isMobile ? 32 : 36, borderRadius: "50%", background: "rgba(120,60,200,0.15)", border: "1px solid rgba(160,80,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(140,60,255,0.28)"; e.currentTarget.style.borderColor = "rgba(160,80,255,0.5)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(120,60,200,0.15)"; e.currentTarget.style.borderColor = "rgba(160,80,255,0.22)"; }}>
                    {createElement(I, { size: isMobile ? 14 : 16, color: c })}
                  </div>
                ))}
              </div>
            </Card>
          </Tilt>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "1fr 1fr", gap: isMobile ? 16 : 30 }}>
            {[
              { label: "Years Exp", value: "1+", I: FiClock, ic: "#c084fc" },
              { label: "APIs Built", value: "2", I: MdApi, ic: "#76e4f7" },
              { label: "Production Deployment", value: "1", I: MdCloudDone, ic: "#68d391" },
              { label: "Natural Language Search", value: "1", I: FiZap, ic: "#f6ad55" },
              { label: "External API integration", value: "3", I: FiGlobe, ic: "#fc8181" },
              { label: "Backend System", value: "1", I: FiDatabase, ic: "#a78bfa" },
            ].map((s, i) => (
              <Tilt key={s.label} intensity={5}>
                <Card style={{ padding: isMobile ? "16px 14px" : "22px 20px", textAlign: "center", animation: `fadeInUp 0.5s ${i * 0.08}s both` }}>
                  <div style={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40, borderRadius: "50%", margin: "0 auto 10px", background: `${s.ic}18`, border: `1px solid ${s.ic}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <s.I size={isMobile ? 14 : 18} color={s.ic} />
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? 18 : 24, color: "#c084fc", marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 9, letterSpacing: 2, color: "rgba(180,120,255,0.5)", textTransform: "uppercase" }}>{s.label}</div>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
        <div style={{ marginTop: isMobile ? 32 : 48 }}>
          <Label>Experience</Label>
          <div style={{ marginTop: 20, position: "relative", paddingLeft: isMobile ? 20 : 28 }}>
            <div style={{ position: "absolute", left: isMobile ? 6 : 8, top: 8, bottom: 8, width: 1, background: "linear-gradient(180deg,#9b4fff,transparent)" }} />
            {[
              { role: "Backend Intern (stage 1)", co: "HNG Internship", period: "2026 - Present", desc: "Implemented API integration with external services to genderize user profiles and store data in MongoDB." },
              { role: "Backend Intern (stage 2)", co: "HNG Internship", period: "2026 - Present", desc: "Extended the API with advanced filtering, pagination, and natural language query parsing." },
              { role: "Software Development Training", co: "NIIT", period: "2025 - 2026", desc: "Completed comprehensive training in software development methodologies and best practices." },
              { role: "Python & Flask Developer Training", co: "NIIT", period: "2025 - 2026", desc: "Completed comprehensive training in Python and Flask development methodologies and best practices." },

            ].map((e, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 24, animation: `fadeInUp 0.5s ${i * 0.1}s both` }}>
                <div style={{ position: "absolute", left: isMobile ? -16 : -24, top: 18, width: isMobile ? 8 : 10, height: isMobile ? 8 : 10, borderRadius: "50%", background: "#9b4fff", boxShadow: "0 0 10px rgba(155,79,255,0.8)" }} />
                <Card style={{ padding: isMobile ? "14px 16px" : "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: isMobile ? 13 : 15, color: "#e9d8fd" }}>{e.role}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 9 : 10, color: "#9b4fff", letterSpacing: 2 }}>{e.period}</span>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 10 : 11, color: "rgba(180,120,255,0.55)", marginBottom: 6, letterSpacing: 1 }}>{e.co}</div>
                  <p style={{ fontSize: isMobile ? 11 : 12, color: "rgba(220,190,255,0.62)", lineHeight: 1.7 }}>{e.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
