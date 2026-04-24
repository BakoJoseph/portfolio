import { FiGitPullRequest, FiCheckCircle, FiFolder, FiStar, FiUsers, FiServer } from "react-icons/fi";
import { SiGithub, SiPython, SiFlask, SiMongodb } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function GitHubSection({ RevealSection, SectionLabel, TiltCard, GlassCard, GitHubGrid, PROJECTS, navigateToProjects }) {
  const Reveal = RevealSection;
  const Label = SectionLabel;
  const Tilt = TiltCard;
  const Card = GlassCard;
  const Graph = GitHubGrid;

  return (
    <section id="github" style={{ minHeight: "100vh", padding: "120px 5vw 80px", scrollMarginTop: 96 }}>
      <Reveal>
        <Label>GitHub</Label>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8, animation: "fadeInUp 0.5s both" }}>
          <SiGithub size={32} color="#c084fc" />
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)" }}>Contribution Graph</h2>
        </div>
        <p style={{ color: "rgba(200,160,255,0.5)", fontSize: 12, marginBottom: 36, letterSpacing: 1, animation: "fadeInUp 0.4s 0.1s both" }}>@BakoJoseph - 31 contributions in the last year</p>
        <Tilt intensity={3}>
          <div style={{ animation: "fadeInUp 0.5s 0.2s both" }}>
            <Graph />
          </div>
        </Tilt>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 20 }}>
          {[
            { label: "Total Commits", value: "31", I: VscTerminal, ic: "#c084fc" },
            { label: "Pull Requests", value: "94", I: FiGitPullRequest, ic: "#76e4f7" },
            { label: "Issues Closed", value: "203", I: FiCheckCircle, ic: "#68d391" },
            { label: "Repositories", value: "9", I: FiFolder, ic: "#f6ad55" },
            { label: "Stars Earned", value: "0", I: FiStar, ic: "#fbd38d" },
            { label: "Followers", value: "7", I: FiUsers, ic: "#a78bfa" },
          ].map((s, i) => (
            <Tilt key={s.label} intensity={5}>
              <Card style={{ padding: "20px", textAlign: "center", animation: `fadeInUp 0.4s ${0.3 + i * 0.06}s both` }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", margin: "0 auto 10px", background: `${s.ic}15`, border: `1px solid ${s.ic}28`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.I size={17} color={s.ic} />
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "#c084fc" }}>{s.value}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: 2, color: "rgba(180,120,255,0.48)", marginTop: 4, textTransform: "uppercase" }}>{s.label}</div>
              </Card>
            </Tilt>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <Label>Top Repositories</Label>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
            {[
              {
                name: "profile-api",
                desc: "RESTful API that generates enriched user profiles from name using external APIs and stores them in MongoDB",
                stack: [{ name: "Python", Icon: SiPython }, { name: "Flask", Icon: SiFlask }, { name: "MongoDB", Icon: SiMongodb }],
                stat: "99.99% uptime",
                color: "#818cf8",
                github: "https://github.com/BakoJoseph/profile-api",
                live: "https://profile-api-production-da51.up.railway.app"
              },
              {
                name: "genderize-api", 
                desc: "Predicts gender from a given name using statistical data",
                stack: [{ name: "Python", Icon: SiPython }, { name: "Flask", Icon: SiFlask }, { name: "MongoDB", Icon: SiMongodb }],
                stat: "< 0.8ms p99",
                color: "#c084fc",
                github: "https://github.com/BakoJoseph/genderize-api",
                live: "https://genderize-api-production-32f6.up.railway.app"
              },
              {
                name: "insighta-profile-api",
                desc: "Demographic intelligence API with advanced filtering, pagination, and natural language query parsing",
                stack: [{ name: "Python", Icon: SiPython }, { name: "Flask", Icon: SiFlask }, { name: "MongoDB", Icon: SiMongodb }],
                stat: "< 0.8ms p99",
                color: "#9b4fff",
                github: "https://github.com/BakoJoseph/profile-api/tree/profile-api-II",
                live: "https://insighta-profile-api-production.up.railway.app"
              }
            ].map((p, i) => (
              <Tilt key={p.name} intensity={5}>
                <Card key={p.name} style={{ padding: "18px 20px", animation: `fadeInUp 0.4s ${0.4 + i * 0.08}s both`, cursor: "pointer" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 50px ${p.color}2a, inset 0 1px 0 rgba(255,255,255,0.07)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <FiServer size={16} color={p.color} />
                      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "#e9d8fd" }}>{p.name.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <FiStar size={11} color="#fbd38d" />
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(180,120,255,0.5)" }}>{200 + i * 173}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(200,160,255,0.52)", lineHeight: 1.6, marginBottom: 10 }}>{p.desc.slice(0, 80)}...</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                    {p.stack.slice(0, 2).map((t) => (
                      <span key={t.name} style={{ fontSize: 9, padding: "2px 8px", borderRadius: 999, background: `${p.color}12`, border: `1px solid ${p.color}2a`, color: p.color, fontFamily: "'DM Mono', monospace", letterSpacing: 1, display: "flex", alignItems: "center", gap: 4 }}>
                        <t.Icon size={9} /> {t.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>

        <div id="explore-projects-button" style={{ marginTop: 48, textAlign: "center", animation: "fadeInUp 0.5s 0.8s both" }}>
          <button
            onClick={() => navigateToProjects && navigateToProjects()}
            style={{
              padding: "12px 24px",
              borderRadius: 20,
              background: "rgba(18,6,42,0.8)",
              border: "1px solid rgba(160,80,255,0.3)",
              color: "#e9d8fd",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              fontWeight: 400,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(140,60,255,0.15)";
              e.currentTarget.style.borderColor = "rgba(160,80,255,0.5)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(140,60,255,0.2), inset 0 1px 0 rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(18,6,42,0.8)";
              e.currentTarget.style.borderColor = "rgba(160,80,255,0.3)";
              e.currentTarget.style.color = "#e9d8fd";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
            }}
          >
            Explore Projects <FaArrowUpRightFromSquare size={14} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
