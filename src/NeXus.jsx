import { createElement, useState, useEffect, useRef, useCallback } from "react";
import AboutSection from "./components/sections/AboutSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import GitHubSection from "./components/sections/GitHubSection.jsx";
import HomeSection from "./components/sections/HomeSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";

import { FiGlobe, FiServer, FiDatabase, FiActivity, FiMenu, FiX } from "react-icons/fi";
import {
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiTypescript,
  SiGraphql,
  SiRust,
  SiLinux,
  SiNginx,
  SiApachekafka,
  SiTerraform,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiMongodb,
} from "react-icons/si";
import { BsCloudArrowUp } from "react-icons/bs";

const throttle = (fn, ms) => {
  let last = 0;
  return (...a) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn(...a);
    }
  };
};

function HexGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let id;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const s = window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 26 : 32;
      const cols = Math.ceil(canvas.width / (s * 1.732)) + 2;
      const rows = Math.ceil(canvas.height / (s * 1.5)) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * s * 1.732 + (r % 2 === 0 ? 0 : s * 0.866);
          const y = r * s * 1.5;
          const wave = Math.sin(t * 0.015 + c * 0.4 + r * 0.3) * 0.5 + 0.5;
          const a = wave * 0.18 + 0.03;
          const strokeAlpha = a * 0.9;
          const fillAlpha = (wave - 0.92) * 1.4;

          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const ang = (Math.PI / 3) * i - Math.PI / 6;
            const px = x + s * Math.cos(ang) * 0.85;
            const py = y + s * Math.sin(ang) * 0.85;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(160,80,255,${strokeAlpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
          if (wave > 0.92) {
            ctx.fillStyle = `rgba(200,132,252,${fillAlpha})`;
            ctx.fill();
          }
        }
      }

      t++;
      id = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
    };
  }, []);

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.7 }} />;
}

const ParticleGrid = HexGrid;

function Orb({ size = 340, x = "50%", y = "50%", delay = 0, opacity = 0.18 }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const responsiveSize = isMobile ? size * 0.6 : size;
  
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%,-50%)",
        width: responsiveSize,
        height: responsiveSize,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, rgba(180,80,255,0.9), rgba(80,0,180,0.3) 60%, transparent 80%)",
        filter: isMobile ? "blur(40px)" : "blur(60px)",
        opacity,
        animation: `orbFloat 8s ease-in-out ${delay}s infinite alternate`,
        pointerEvents: "none",
      }}
    />
  );
}

function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2400);
    const t4 = setTimeout(() => onDone(), 3100);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#070010",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: phase === 3 ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: phase === 3 ? "none" : "all",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: isMobile ? 120 : 200,
          height: isMobile ? 120 : 200,
          borderRadius: "50%",
          border: "1px solid rgba(160,80,255,0.2)",
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 0.4s",
          animation: "spin3d 10s linear infinite",
        }}
      >
        <div style={{ position: "absolute", inset: isMobile ? 8 : 14, borderRadius: "50%", border: "1px dashed rgba(160,80,255,0.12)" }} />
      </div>
      <div style={{ position: "relative", display: "flex", alignItems: "center", userSelect: "none" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? "clamp(32px,8vw,64px)" : "clamp(52px,10vw,96px)", fontWeight: 700, color: "#fff", letterSpacing: 2, opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateX(0)" : `translateX(${isMobile ? -30 : -44}px)`, transition: "all 0.55s cubic-bezier(0.16,1,0.3,1)" }}>Ne</span>
        <span style={{
          fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? "clamp(32px,8vw,64px)" : "clamp(52px,10vw,96px)", fontWeight: 800,
          background: "linear-gradient(135deg,#c84fff,#7b2fff,#ff6af8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "scale(1) rotate(0deg)" : "scale(0.1) rotate(180deg)",
          transition: "all 0.65s cubic-bezier(0.34,1.56,0.64,1)",
          display: "inline-block",
          filter: phase >= 1 ? "drop-shadow(0 0 28px rgba(180,80,255,0.95))" : "none",
          letterSpacing: 2,
        }}>X</span>
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? "clamp(32px,8vw,64px)" : "clamp(52px,10vw,96px)", fontWeight: 700, color: "#fff", letterSpacing: 2, opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateX(0)" : `translateX(${isMobile ? 30 : 44}px)`, transition: "all 0.55s cubic-bezier(0.16,1,0.3,1)" }}>us</span>
      </div>
      <div style={{ marginTop: isMobile ? 12 : 16, fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 9 : 11, letterSpacing: isMobile ? 4 : 6, color: "rgba(200,140,255,0.55)", opacity: phase >= 2 ? 1 : 0, transition: "opacity 0.5s 0.3s" }}>{isMobile ? "FULL·STACK·DEV" : "FULL · STACK · DEVELOPER"}</div>
    </div>
  );
}

function Logo() {
  return (
    <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>
      Ne
      <span style={{ background: "linear-gradient(135deg,#c84fff,#7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 8px rgba(160,60,255,0.8))" }}>X</span>
      us
    </span>
  );
}

const NAV = ["Home", "About", "Skills", "Projects", "GitHub", "Contact"];

function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopExpanded, setDesktopExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const desktopNavItems = NAV.slice(1);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigate = useCallback((section) => {
    setActive(section);
    setMenuOpen(false);
    setDesktopExpanded(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [setActive]);

  useEffect(() => {
    const h = throttle(() => setScrolled(window.scrollY > 40), 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className="desktop-nav"
        style={{
          position: "fixed",
          top: scrolled ? 10 : 18,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 800,
          display: isMobile ? "none" : "flex",
          alignItems: "center",
          gap: 4,
          background: "rgba(12,4,30,0.6)",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          border: "1px solid rgba(160,80,255,0.2)",
          borderRadius: 999,
          padding: "10px 10px",
          boxShadow: "0 8px 40px rgba(100,0,200,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",
          animation: "navDrop 0.7s 3.1s both",
          transition: "top 0.3s",
          maxWidth: "90vw",
          overflow: "hidden",
        }}
        onMouseLeave={() => setDesktopExpanded(false)}
      >
        <div style={{ marginLeft: 8 }}>
          <Logo />
        </div>
        <div style={{ width: 1, height: 18, background: "rgba(160,80,255,0.2)", margin: "0 8px" }} />
        <button
          onClick={() => handleNavigate("Home")}
          style={{
            background: active === "Home" ? "rgba(140,60,255,0.2)" : "transparent",
            border: active === "Home" ? "1px solid rgba(160,80,255,0.32)" : "1px solid transparent",
            color: active === "Home" ? "#d4a0ff" : "rgba(200,170,240,0.6)",
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            letterSpacing: 1,
            padding: "6px 14px",
            borderRadius: 999,
            transition: "all 0.22s",
          }}
          onMouseEnter={(e) => {
            setDesktopExpanded(true);
            if (active !== "Home") {
              e.currentTarget.style.color = "#d4a0ff";
              e.currentTarget.style.background = "rgba(140,60,255,0.09)";
            }
          }}
          onMouseLeave={(e) => {
            if (active !== "Home") {
              e.currentTarget.style.color = "rgba(200,170,240,0.6)";
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          Home
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            overflow: "hidden",
            maxWidth: desktopExpanded ? 520 : 0,
            opacity: desktopExpanded ? 1 : 0,
            marginLeft: desktopExpanded ? 4 : 0,
            transition: "max-width 0.28s ease, opacity 0.2s ease, margin-left 0.28s ease",
            pointerEvents: desktopExpanded ? "auto" : "none",
          }}
        >
          {desktopNavItems.map((n) => (
            <button
              key={n}
              onClick={() => handleNavigate(n)}
              style={{
                background: active === n ? "rgba(140,60,255,0.2)" : "transparent",
                border: active === n ? "1px solid rgba(160,80,255,0.32)" : "1px solid transparent",
                color: active === n ? "#d4a0ff" : "rgba(200,170,240,0.6)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: 1,
                padding: "6px 14px",
                borderRadius: 999,
                transition: "all 0.22s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (active !== n) {
                  e.currentTarget.style.color = "#d4a0ff";
                  e.currentTarget.style.background = "rgba(140,60,255,0.09)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== n) {
                  e.currentTarget.style.color = "rgba(200,170,240,0.6)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </nav>

      <div className="mobile-nav-btn" style={{ position: "fixed", top: 14, right: 16, zIndex: 801, display: isMobile ? "block" : "none" }}>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "rgba(12,4,30,0.75)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(160,80,255,0.28)",
            borderRadius: 12,
            width: 44,
            height: 44,
            color: "#c084fc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 68,
            right: 16,
            left: 16,
            zIndex: 800,
            background: "rgba(12,4,30,0.88)",
            backdropFilter: "blur(28px)",
            border: "1px solid rgba(160,80,255,0.22)",
            borderRadius: 16,
            padding: 10,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            animation: "fadeInUp 0.25s both",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => handleNavigate(n)}
              style={{
                background: active === n ? "rgba(140,60,255,0.22)" : "transparent",
                border: "none",
                color: active === n ? "#d4a0ff" : "rgba(200,170,240,0.65)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                letterSpacing: 1,
                padding: "10px 20px",
                borderRadius: 10,
                textAlign: "left",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function TiltCard({ children, style = {}, intensity = 8 }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`;
  }, [intensity]);

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
  }, []);

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ transition: "transform 0.15s ease", willChange: "transform", ...style }}>
      {children}
    </div>
  );
}

function GlassCard({ children, style = {}, glow = false, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: "rgba(18,6,42,0.58)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        border: "1px solid rgba(160,80,255,0.17)",
        borderRadius: 20,
        boxShadow: glow
          ? "0 0 40px rgba(140,40,255,0.16), inset 0 1px 0 rgba(255,255,255,0.06)"
          : "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        ...style,
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

function RevealSection({ children, delay = 0, enabled = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div
      ref={ref}
      style={{
        opacity: enabled && visible ? 1 : 0,
        transform: enabled && visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function DelayedReveal({ show, delay = 0, children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [show, delay]);

  if (!show) return null;
  return children(visible);
}

const SKILLS_DATA = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#68d391", cat: "backend" },
  { name: "Go", Icon: SiGo, color: "#76e4f7", cat: "backend" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#90cdf4", cat: "backend" },
  { name: "Redis", Icon: SiRedis, color: "#fc8181", cat: "backend" },
  { name: "Docker", Icon: SiDocker, color: "#63b3ed", cat: "infra" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#76e4f7", cat: "infra" },
  { name: "AWS", Icon: FiGlobe, color: "#f6ad55", cat: "infra" },
  { name: "React", Icon: SiReact, color: "#76e4f7", cat: "frontend" },
  { name: "TypeScript", Icon: SiTypescript, color: "#90cdf4", cat: "frontend" },
  { name: "GraphQL", Icon: SiGraphql, color: "#fc8181", cat: "backend" },
  { name: "Rust", Icon: SiRust, color: "#f6ad55", cat: "backend" },
  { name: "Linux", Icon: SiLinux, color: "#68d391", cat: "infra" },
  { name: "Nginx", Icon: SiNginx, color: "#c6f6d5", cat: "infra" },
  { name: "Kafka", Icon: SiApachekafka, color: "#fbd38d", cat: "backend" },
  { name: "Terraform", Icon: SiTerraform, color: "#a78bfa", cat: "infra" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#e9d8fd", cat: "frontend" },
  { name: "Python", Icon: SiPython, color: "#fbd38d", cat: "backend" },
  { name: "Flask", Icon: SiFlask, color: "#90cdf4", cat: "backend" }
];

const SKILL_POSITIONS = [
  { x: "7%", y: "10%", z: 30, size: "lg", delay: 0 },
  { x: "70%", y: "7%", z: 20, size: "md", delay: 0.4 },
  { x: "53%", y: "20%", z: -10, size: "sm", delay: 0.8 },
  { x: "18%", y: "36%", z: 15, size: "md", delay: 0.2 },
  { x: "78%", y: "33%", z: 25, size: "lg", delay: 0.6 },
  { x: "4%", y: "53%", z: -5, size: "sm", delay: 1 },
  { x: "58%", y: "50%", z: 10, size: "md", delay: 0.3 },
  { x: "36%", y: "63%", z: 20, size: "lg", delay: 0.7 },
  { x: "83%", y: "58%", z: -15, size: "sm", delay: 0.5 },
  { x: "13%", y: "70%", z: 5, size: "md", delay: 0.9 },
  { x: "65%", y: "73%", z: 30, size: "lg", delay: 0.1 },
  { x: "40%", y: "83%", z: -10, size: "sm", delay: 1.2 },
  { x: "23%", y: "20%", z: -20, size: "sm", delay: 0.6 },
  { x: "88%", y: "78%", z: 10, size: "md", delay: 0.8 },
  { x: "46%", y: "38%", z: -5, size: "sm", delay: 1.4 },
  { x: "30%", y: "48%", z: 20, size: "md", delay: 0.3 },
  { x: "15%", y: "85%", z: 15, size: "lg", delay: 0.4 }, // Python
  { x: "75%", y: "88%", z: -8, size: "md", delay: 0.7 }, // Flask
];

function FloatingSkill({ name, Icon, color, delay, x, y, z, size }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const pad = size === "lg" ? (isMobile ? "8px 10px" : "12px 14px") : size === "md" ? (isMobile ? "6px 10px" : "10px 15px") : (isMobile ? "6px 8px" : "10px 15px");
  const fs = size === "lg" ? (isMobile ? 11 : 13) : size === "md" ? (isMobile ? 9 : 11) : (isMobile ? 8 : 10);
  const iSz = size === "lg" ? (isMobile ? 14 : 16) : size === "md" ? (isMobile ? 12 : 14) : (isMobile ? 10 : 12);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translateZ(${z}px)`,
        animation: `skillFloat ${4.5 + delay * 1.2}s ease-in-out ${delay}s infinite alternate`,
        zIndex: Math.round(z / 10) + 5,
      }}
    >
      <div
        className="floating-skill-chip"
        style={{
          background: "rgba(18,6,42,0.72)",
          backdropFilter: "blur(14px)",
          border: `1px solid ${color}44`,
          borderRadius: 999,
          padding: pad,
          fontFamily: "'DM Mono', monospace",
          fontSize: fs,
          color,
          boxShadow: `0 0 18px ${color}1a, inset 0 1px 0 rgba(255,255,255,0.05)`,
          whiteSpace: "nowrap",
          letterSpacing: 0.5,
          userSelect: "none",
          transition: "all 0.3s",
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 28px ${color}44, inset 0 1px 0 rgba(255,255,255,0.1)`;
          e.currentTarget.style.borderColor = `${color}77`;
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 18px ${color}1a, inset 0 1px 0 rgba(255,255,255,0.05)`;
          e.currentTarget.style.borderColor = `${color}44`;
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {createElement(Icon, { size: iSz, className: "floating-skill-icon" })}
        <span className="floating-skill-name">{name}</span>
      </div>
    </div>
  );
}

function GitHubGrid() {
  const weeks = 52;
  const days = 7;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateFallbackData = () => {
    const cells = [];
    let seed = 42;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) & 0xffffffff;
      return (seed >>> 0) / 0xffffffff;
    };

    for (let week = 0; week < weeks; week++) {
      const weekCells = [];
      for (let day = 0; day < days; day++) {
        const r = rand();
        const weekend = day === 0 || day === 6;
        const contributionCount = weekend
          ? (r < 0.8 ? 0 : r < 0.95 ? 1 : 2)
          : r < 0.85 ? 0 : r < 0.92 ? 1 : r < 0.97 ? 2 : r < 0.99 ? 3 : 4;
        weekCells.push(contributionCount);
      }
      cells.push(weekCells);
    }

    return cells;
  };

  // Initialize with fallback data immediately
  useEffect(() => {
    // Set initial fallback data immediately
    setContributions(generateFallbackData());
    setLoading(false);
  }, []);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Try to fetch real GitHub data, fallback to generated data
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/BakoJoseph/events');
        if (response.ok) {
          const events = await response.json();
          const contributionData = processGitHubEvents(events);
          setContributions(contributionData);
        } else {
          throw new Error('GitHub API request failed');
        }
      } catch (error) {
        console.log('Using fallback data due to GitHub API error:', error);
        const fallbackData = generateFallbackData();
        setContributions(fallbackData);
      }
      setLoading(false);
    };

    fetchGitHubData();
  }, []);

  const processGitHubEvents = (events) => {
    const contributionMap = {};
    const today = new Date();
    
    // Process events for the last year
    events.forEach(event => {
      const eventDate = new Date(event.created_at);
      const daysAgo = Math.floor((today - eventDate) / (1000 * 60 * 60 * 24));
      
      if (daysAgo <= 365) {
        const dateKey = eventDate.toISOString().split('T')[0];
        if (!contributionMap[dateKey]) {
          contributionMap[dateKey] = 0;
        }
        contributionMap[dateKey] += 1;
      }
    });

    // Generate contribution grid for the last year, week by week
    const cells = [];
    for (let week = 0; week < weeks; week++) {
      const weekCells = [];
      for (let day = 0; day < days; day++) {
        const date = new Date();
        const offset = (weeks - 1 - week) * days + (days - 1 - day);
        date.setHours(0, 0, 0, 0);
        date.setDate(today.getDate() - offset);
        const dateKey = date.toISOString().split('T')[0];
        const contributionCount = contributionMap[dateKey] || 0;
        
        weekCells.push(contributionCount);
      }
      cells.push(weekCells);
    }
    
    return cells;
  };

  const colors = ["rgba(30,10,60,0.5)", "rgba(100,30,200,0.38)", "rgba(130,50,220,0.62)", "rgba(160,80,255,0.78)", "rgba(200,120,255,1)"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const total = contributions.flat().reduce((sum, val) => sum + val, 0);

  return (
    <div style={{ borderRadius: 24, padding: isMobile ? "16px 12px 12px" : "20px 18px 16px", background: "linear-gradient(180deg, rgba(32,10,60,0.72), rgba(12,4,28,0.82))", border: "1px solid rgba(160,80,255,0.18)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 24px 60px rgba(0,0,0,0.28)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: isMobile ? 8 : 14, marginBottom: isMobile ? 12 : 18, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 10, letterSpacing: 3, color: "rgba(180,120,255,0.45)", marginBottom: 6 }}>ACTIVITY OVERVIEW</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 800, color: "#f3e8ff", lineHeight: 1.2 }}>{isMobile ? "12-Month Activity" : "Consistency over the last 12 months"}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 10, padding: isMobile ? "8px 12px" : "10px 14px", borderRadius: 16, background: "rgba(120,60,200,0.12)", border: "1px solid rgba(160,80,255,0.16)" }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#c084fc", lineHeight: 1 }}>
            {loading ? (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 16, height: 16, border: "2px solid rgba(160,80,255,0.3)", borderTop: "2px solid transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 10, color: "rgba(180,120,255,0.6)" }}>Loading GitHub data...</span>
              </div>
            ) : (
              <div>{contributions.flat().reduce((sum, val) => sum + val, 0)}</div>
            )}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 10, color: "rgba(200,160,255,0.54)", letterSpacing: 2, textTransform: "uppercase", lineHeight: 1.4 }}>{isMobile ? "Total" : "Total<br />activity"}</div>
        </div>
      </div>
      <div className="github-grid-scroll" style={{ overflowX: "auto", paddingBottom: 6, overflowY: "hidden" }}>
        <div style={{ minWidth: isMobile ? 600 : isTablet ? 700 : 780 }}>
          <div style={{ display: "flex", gap: isMobile ? 2 : 4, marginBottom: isMobile ? 6 : 10, paddingLeft: isMobile ? 24 : 34 }}>
            {months.map((m, i) => (
              <div key={m} style={{ flex: i === 11 ? 1 : "none", width: i === 11 ? "auto" : `${Math.round(weeks / 12) * (isMobile ? 10 : 14)}px`, fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 7 : 9, color: "rgba(200,160,255,0.48)", letterSpacing: 1.4, textTransform: "uppercase" }}>{isMobile && i % 2 === 1 ? "" : m}</div>
            ))}
          </div>
          <div style={{ display: "flex", gap: isMobile ? 2 : 4, marginBottom: isMobile ? 6 : 10, paddingLeft: isMobile ? 24 : 34 }}>
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 2 : 4 }}>
                {week.map((day, dayIndex) => {
                  const level = Math.max(0, Math.min(day, colors.length - 1));
                  const color = colors[level];

                  return (
                  <div 
                    key={dayIndex}
                    style={{ 
                      width: isMobile ? 10 : 14, 
                      height: isMobile ? 10 : 14, 
                      borderRadius: "50%", 
                      background: color, 
                      border: "1px solid rgba(160,80,255,0.1)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
                      boxShadow: day > 0 ? `0 0 14px ${color.replace(/[\d.]+\)$/, "0.18)")}` : "none",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.32)";
                      e.target.style.boxShadow = "0 0 16px rgba(192,132,252,0.35)";
                      e.target.style.borderColor = "rgba(236,210,255,0.34)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = day > 0 ? `0 0 14px ${color.replace(/[\d.]+\)$/, "0.18)")}` : "none";
                      e.target.style.borderColor = day > 0 ? "rgba(214,180,255,0.18)" : "rgba(70,24,110,0.42)";
                    }}
                  >
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 7 : 9, color: "rgba(200,160,255,0.72)" }}>{day}</span>
                  </div>
                )})}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 4 : 8, marginTop: isMobile ? 8 : 14, justifyContent: "flex-end", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 7 : 9, color: "rgba(180,120,255,0.4)", letterSpacing: 1 }}>Less</span>
        {colors.map((col, i) => (
          <div key={i} style={{ width: isMobile ? 8 : 12, height: isMobile ? 8 : 12, borderRadius: isMobile ? 2 : 4, background: col, border: "1px solid rgba(160,80,255,0.2)" }} />
        ))}
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 7 : 9, color: "rgba(180,120,255,0.4)", letterSpacing: 1 }}>More</span>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    name: "Insighta Profile API",
    Icon: FiServer,
    desc: "Demographic intelligence API with advanced filtering, pagination, and natural langagequery parsing.", 
    stack: [{ name: "Python", Icon: SiPython }, { name: "Flask", Icon: SiFlask }, { name: "MongoDB", Icon: SiMongodb }],
    stat: "< 0.8ms p99",
    color: "#9b4fff",
    github: "https://github.com/BakoJoseph/profile-api/tree/profile-api-II",
    live: "https://insighta-profile-api-production.up.railway.app",
  },
  {
    name: "Genderize API",
    Icon: FiServer,
    desc: "Predicts gender from a given name using statistical data",
    stack: [{ name: "Python", Icon: SiPython }, { name: "Flask", Icon: SiFlask }, { name: "MongoDB", Icon: SiMongodb }],
    stat: "< 0.8ms p99",
    color: "#c084fc",
    github: "https://github.com/BakoJoseph/genderize-api",
    live: "https://genderize-api-production-32f6.up.railway.app",
  },
  {
    name: "Profile API",
    Icon: FiServer,
    desc: "RESTful API that generates enriches user profiles from a name using external APIs and stores them in MongoDB",
    stack: [{ name: "Flask", Icon: SiFlask }, { name: "MongoDB", Icon: SiMongodb }, { name: "Python", Icon: SiPython }],
    stat: "< 0.8ms p99",
    color: "#818cf8",
    github: "https://github.com/BakoJoseph/profile-api/tree/main",
    live: "https://profile-api-production-da51.up.railway.app",
  },
];

function InputField({ label, type = "text", multiline = false }) {
  const [focus, setFocus] = useState(false);
  const style = {
    width: "100%",
    background: "rgba(15,5,40,0.5)",
    border: `1px solid ${focus ? "rgba(160,80,255,0.5)" : "rgba(120,60,200,0.18)"}`,
    borderRadius: 12,
    padding: "12px 16px",
    color: "#e9d8fd",
    fontFamily: "'DM Mono', monospace",
    fontSize: 13,
    outline: "none",
    resize: "none",
    letterSpacing: 0.5,
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focus ? "0 0 0 3px rgba(140,60,255,0.11)" : "none",
    display: "block",
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 3, color: "rgba(180,120,255,0.55)", marginBottom: 6, textTransform: "uppercase" }}>{label}</label>
      {multiline ? <textarea rows={5} style={style} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} /> : <input type={type} style={style} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />}
    </div>
  );
}

export default function NeXus({ navigateToProjects }) {
  const [intro, setIntro] = useState(true);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      const midpoint = window.innerHeight * 0.35;
      let current = "Home";

      for (const section of NAV) {
        const el = document.getElementById(section.toLowerCase());
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
          current = section;
          break;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {intro && <Intro onDone={() => setIntro(false)} />}
      <Nav active={active} setActive={setActive} />

      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <ParticleGrid />
        <Orb size={500} x="18%" y="28%" delay={0} opacity={0.13} />
        <Orb size={380} x="80%" y="14%" delay={2} opacity={0.1} />
        <Orb size={300} x="86%" y="72%" delay={4} opacity={0.08} />
        <Orb size={260} x="9%" y="77%" delay={1.5} opacity={0.07} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(80,0,160,0.1) 0%, transparent 70%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingBottom: active === "Home" ? 0 : 92 }}>
        <HomeSection intro={intro} active={active} RevealSection={RevealSection} DelayedReveal={DelayedReveal} />
        <AboutSection RevealSection={RevealSection} SectionLabel={SectionLabel} TiltCard={TiltCard} GlassCard={GlassCard} />
        <SkillsSection RevealSection={RevealSection} SectionLabel={SectionLabel} GlassCard={GlassCard} FloatingSkill={FloatingSkill} SKILLS_DATA={SKILLS_DATA} SKILL_POSITIONS={SKILL_POSITIONS} />
        <ProjectsSection RevealSection={RevealSection} SectionLabel={SectionLabel} TiltCard={TiltCard} GlassCard={GlassCard} PROJECTS={PROJECTS} />
        <GitHubSection RevealSection={RevealSection} SectionLabel={SectionLabel} TiltCard={TiltCard} GlassCard={GlassCard} GitHubGrid={GitHubGrid} PROJECTS={PROJECTS} navigateToProjects={navigateToProjects} />
        <ContactSection RevealSection={RevealSection} SectionLabel={SectionLabel} GlassCard={GlassCard} InputField={InputField} />

        <footer style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 700, borderTop: "1px solid rgba(120,60,200,0.13)", padding: "16px 4vw", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, background: "rgba(7,0,16,0.55)", backdropFilter: "blur(10px)", opacity: active === "Home" ? 0 : 1, pointerEvents: active === "Home" ? "none" : "auto", transform: active === "Home" ? "translateY(100%)" : "translateY(0)", transition: "opacity 0.25s ease, transform 0.25s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Logo />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, textAlign: "center" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: 1, color: "rgba(180,120,255,0.32)" }}>© 2026 NEXUS · BUILT WITH PRECISION</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FiServer size={10} color="rgba(155,79,255,0.45)" />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "rgba(155,79,255,0.45)", letterSpacing: 1, display: window.innerWidth < 480 ? "none" : "inline" }}>BACKEND · FOCUSED</span>
          </div>
        </footer>
      </div>
    </>
  );
}
