import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectsSection({ RevealSection, SectionLabel, TiltCard, GlassCard, PROJECTS }) {
  const Reveal = RevealSection;
  const Label = SectionLabel;
  const Tilt = TiltCard;
  const Card = GlassCard;

  return (
    <section id="projects" style={{ minHeight: "100vh", padding: "120px 5vw 80px", scrollMarginTop: 96 }}>
      <Reveal>
        <Label>Projects</Label>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", marginBottom: 40, animation: "fadeInUp 0.5s both" }}>Deployed Systems</h2>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 15 }}>
          {PROJECTS.map((p, i) => (
            <Tilt key={p.name} intensity={6} style={{ animation: `fadeInUp 0.5s ${i * 0.1}s both` }}>
              <Card style={{ padding: "30px 28px", height: "100%", cursor: "pointer", transition: "all 0.8s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 50px ${p.color}2a, inset 0 1px 0 rgba(255,255,255,0.07)`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p.color}18`, border: `1px solid ${p.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p.Icon size={24} color={p.color} />
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "4px 12px", borderRadius: 999, letterSpacing: 2, border: `1px solid ${p.color}44`, color: p.color, background: `${p.color}0f` }}>{p.stat}</div>
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 10 }}>{p.name}</h3>
                <p style={{ fontSize: 12, lineHeight: 1.85, color: "rgba(220,190,255,0.62)", marginBottom: 18 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {p.stack.map((t) => (
                    <span key={t.name} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 1, padding: "4px 10px", borderRadius: 999, background: "rgba(120,60,200,0.16)", border: "1px solid rgba(160,80,255,0.18)", color: "rgba(200,160,255,0.72)", display: "flex", alignItems: "center", gap: 5 }}>
                      <t.Icon size={11} /> {t.name}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button 
                    onClick={() => window.open(p.github, "_blank")}
                    style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 2, background: `${p.color}18`, border: `1px solid ${p.color}44`, color: p.color, padding: "7px 16px", borderRadius: 999, transition: "all 0.2s", cursor: "pointer" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = `${p.color}28`}
                    onMouseLeave={(e) => e.currentTarget.style.background = `${p.color}18`}
                  >
                    <FiGithub size={13} /> View Code
                  </button>
                  <button 
                    onClick={() => window.open(p.live, "_blank")}
                    style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 2, background: "transparent", border: "1px solid rgba(160,80,255,0.2)", color: "rgba(200,160,255,0.5)", padding: "7px 16px", borderRadius: 999, transition: "all 0.2s", cursor: "pointer" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(160,80,255,0.1)"; e.currentTarget.style.color = "rgba(200,160,255,0.8)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(200,160,255,0.5)"; }}
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </button>
                </div>
              </Card>
            </Tilt>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
