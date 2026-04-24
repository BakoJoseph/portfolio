import { createElement, useState, useEffect, useRef, useCallback } from "react";
import ProjectsShowcaseSection from "./components/sections/ProjectsShowcaseSection.jsx";
import { FiHome, FiX, FiChevronLeft } from "react-icons/fi";

// Reusable components (extracted from NeXus.jsx)
function RevealSection({ children, delay = 0, enabled = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return setVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, [enabled]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.17,0.84,0.44,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{ width: 24, height: 1, background: "linear-gradient(90deg,#9b4fff,transparent)" }} />
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 4, color: "#9b4fff", textTransform: "uppercase" }}>{children}</span>
      <div style={{ width: 24, height: 1, background: "linear-gradient(90deg,transparent,#9b4fff)" }} />
    </div>
  );
}

function TiltCard({ children, intensity = 8 }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / intensity;
    const y = (e.clientY - rect.top - rect.height / 2) / intensity;
    setTilt({ x, y });
  }, [intensity]);

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, style, glow }) {
  return (
    <div
      style={{
        background: "rgba(18,6,42,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(160,80,255,0.18)",
        borderRadius: 20,
        boxShadow: glow
          ? "0 8px 32px rgba(140,60,255,0.12), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function ProjectsPage({ navigateHome }) {
  return (
    <div style={{ minHeight: "100vh", background: "#070010", color: "#e9d8fd" }}>
      {/* Header */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(7,0,16,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(160,80,255,0.2)",
        padding: "16px 24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: 1
          }}>
            Ne<span style={{ 
              background: "linear-gradient(135deg,#c84fff,#7b2fff)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 8px rgba(160,60,255,0.8))" 
            }}>X</span>us Projects
          </div>
          
          <button
            onClick={() => navigateHome && navigateHome()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 12,
              background: "rgba(18,6,42,0.6)",
              border: "1px solid rgba(160,80,255,0.2)",
              color: "rgba(220,190,255,0.8)",
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: 1,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(140,60,255,0.15)";
              e.currentTarget.style.borderColor = "rgba(160,80,255,0.4)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(18,6,42,0.6)";
              e.currentTarget.style.borderColor = "rgba(160,80,255,0.2)";
              e.currentTarget.style.color = "rgba(220,190,255,0.8)";
            }}
          >
            <FiChevronLeft size={14} />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: "80px" }}>
        <ProjectsShowcaseSection 
          RevealSection={RevealSection}
          SectionLabel={SectionLabel}
          TiltCard={TiltCard}
          GlassCard={GlassCard}
        />
      </main>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(120,60,200,0.13)",
        background: "rgba(7,0,16,0.55)",
        backdropFilter: "blur(10px)"
      }}>
        <div style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: 1,
          marginBottom: 8
        }}>
          Ne<span style={{ 
            background: "linear-gradient(135deg,#c84fff,#7b2fff)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent" 
          }}>X</span>us
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          letterSpacing: 2,
          color: "rgba(180,120,255,0.32)"
        }}>
          © 2026 NEXUS · PROJECTS PORTFOLIO
        </div>
      </footer>
    </div>
  );
}
