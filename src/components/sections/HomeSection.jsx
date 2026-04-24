import { TbHexagon } from "react-icons/tb";

export default function HomeSection({ intro, active, RevealSection, DelayedReveal }) {
  const Reveal = RevealSection;
  const Delayed = DelayedReveal;

  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", scrollMarginTop: 96 }}>
      <Reveal enabled={!intro}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 5vw 60px" }}>
          <div style={{ textAlign: "center", animation: intro ? "none" : "fadeInUp 0.8s 0.2s both", zIndex: 2, width: "100%", maxWidth: 960, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(140,60,255,0.08)", border: "1px solid rgba(160,80,255,0.2)", borderRadius: 999, padding: "13px 18px", marginBottom: 20, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 4, color: "rgba(200,140,255,0.7)", animation: "borderGlow 3s infinite" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#68d391", boxShadow: "0 0 8px #68d391", animation: "pulse 2s infinite" }} />
              AVAILABLE FOR WORK · 2026
            </div>
            <div style={{ marginTop: 36, display: "inline-block", position: "relative" }}>
              <div style={{ width: 110, height: 110, borderRadius: "50%", border: "1px solid rgba(160,80,255,0.28)", boxShadow: "0 0 36px rgba(140,60,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", animation: "spin3d 12s linear infinite", position: "relative" }}>
                <div style={{ position: "absolute", inset: 10, borderRadius: "50%", border: "1px dashed rgba(160,80,255,0.18)" }} />
                <TbHexagon size={42} color="rgba(180,80,255,0.85)" style={{ filter: "drop-shadow(0 0 12px rgba(180,80,255,0.8))" }} />
              </div>
            </div>
            <Delayed show={!intro && active === "Home"} delay={1700}>
              {(nameVis) => (
                <div style={{ marginTop: 36, position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 4, color: "rgba(180,120,255,0.48)", marginBottom: 10, opacity: nameVis ? 1 : 0, transition: "opacity 0.5s" }}>DEVELOPER</div>
                  <div className="hero-name" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(54px,9vw,118px)", lineHeight: 0.9, letterSpacing: -2, overflow: "hidden", textAlign: "center", opacity: nameVis ? 1 : 0 }}>
                    <div style={{ overflow: "hidden" }}>
                      <span style={{ display: "inline-block", background: "linear-gradient(135deg,#fff 30%, rgba(200,140,255,0.8) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", willChange: "transform, opacity, filter", animation: nameVis ? "slideInLeftName 1.1s cubic-bezier(0.18,0.9,0.22,1) both" : "none" }}>OLAMIDE</span>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                      <span style={{ display: "inline-block", background: "linear-gradient(135deg,#c084fc,#9b4fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 28px rgba(160,80,255,0.5))", willChange: "transform, opacity, filter", animation: nameVis ? "slideInRightName 1.1s cubic-bezier(0.18,0.9,0.22,1) 0.2s both" : "none" }}>JOSEPH</span>
                    </div>
                  </div>
                  <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 10, opacity: nameVis ? 1 : 0, transition: "opacity 0.6s 0.6s" }}>
                    <div style={{ width: 28, height: 1, background: "rgba(160,80,255,0.38)" }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 3, color: "rgba(180,120,255,0.48)" }}>SCROLL TO EXPLORE</span>
                  </div>
                </div>
              )}
            </Delayed>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
