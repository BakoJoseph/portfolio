import { FiGlobe } from "react-icons/fi";
import { SiGo, SiNodedotjs, SiPostgresql, SiDocker, SiReact } from "react-icons/si";

export default function SkillsSection({ RevealSection, SectionLabel, GlassCard, FloatingSkill, SKILLS_DATA, SKILL_POSITIONS }) {
  const Reveal = RevealSection;
  const Label = SectionLabel;
  const Card = GlassCard;
  const Skill = FloatingSkill;

  return (
    <section id="skills" style={{ minHeight: "100vh", padding: "120px 5vw 80px", scrollMarginTop: 96 }}>
      <Reveal>
        <Label>Skills</Label>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", marginBottom: 8, animation: "fadeInUp 0.5s both" }}>Tech Arsenal</h2>
        {/* <p style={{ color: "rgba(200,160,255,0.5)", fontSize: 13, margin: "0 auto 44px", animation: "fadeInUp 0.5s 0.1s both", maxWidth: 440, textAlign: "center" }}>Hover any skill to illuminate it. Each floats at a unique depth.</p> */}
        <div className="skill-field" style={{ position: "relative", height: "clamp(440px,60vh,600px)", perspective: "600px", transformStyle: "preserve-3d", animation: "fadeInUp 0.6s 0.2s both", overflow: "hidden" }}>
          {SKILLS_DATA.map((s, i) => <Skill key={s.name} {...s} {...SKILL_POSITIONS[i]} />)}
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 22, flexWrap: "wrap", animation: "fadeInUp 0.5s 0.4s both" }}>
          {[{ label: "Backend", color: "#68d391" }, { label: "Frontend", color: "#76e4f7" }, { label: "Infra", color: "#f6ad55" }].map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(200,160,255,0.58)", letterSpacing: 2 }}>{c.label}</span>
            </div>
          ))}
        </div>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 36 }}>
          {[
            { name: "Go / Rust", I: SiGo, pct: 94, color: "#76e4f7" },
            { name: "Node.js / Bun", I: SiNodedotjs, pct: 96, color: "#68d391" },
            { name: "PostgreSQL / Redis", I: SiPostgresql, pct: 92, color: "#90cdf4" },
            { name: "Docker / Kubernetes", I: SiDocker, pct: 90, color: "#63b3ed" },
            { name: "AWS / GCP", I: FiGlobe, pct: 87, color: "#f6ad55" },
            { name: "React / Next.js", I: SiReact, pct: 82, color: "#76e4f7" },
          ].map((s, i) => (
            <Card key={s.name} style={{ padding: "16px 20px", animation: `fadeInUp 0.4s ${0.5 + i * 0.07}s both` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <s.I size={14} color={s.color} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(220,180,255,0.8)", letterSpacing: 0.5 }}>{s.name}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#c084fc" }}>{s.pct}%</span>
              </div>
              <div style={{ height: 4, background: "rgba(120,60,200,0.18)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${s.pct}%`, borderRadius: 8, background: `linear-gradient(90deg,#7b2fff,${s.color})`, boxShadow: `0 0 10px ${s.color}55`, animation: `fadeInUp 1.1s ${0.6 + i * 0.07}s both` }} />
              </div>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
