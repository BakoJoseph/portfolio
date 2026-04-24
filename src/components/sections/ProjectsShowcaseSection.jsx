import { useState, useEffect } from "react";
import { FiGithub, FiExternalLink, FiFilter, FiX, FiCode, FiLayout, FiLayers, FiChevronLeft, FiChevronUp } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiRedis, SiDocker, SiKubernetes, SiNextdotjs, SiGraphql, SiRust, SiGo } from "react-icons/si";

export default function ProjectsShowcaseSection({ RevealSection, SectionLabel, TiltCard, GlassCard }) {
  const Reveal = RevealSection;
  const Label = SectionLabel;
  const Tilt = TiltCard;
  const Card = GlassCard;
  
  const [filter, setFilter] = useState("all");
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

  const projects = [
    {
      id: 1,
      title: "HyperCache Engine",
      category: "backend",
      description: "Distributed in-memory cache with consistent hashing and sub-ms reads across 16 nodes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbcc31a?w=800&h=400&fit=crop",
      tech: [SiGo, SiRedis, SiDocker],
      techNames: ["Go", "Redis", "Docker"],
      color: "#9b4fff",
      github: "https://github.com/BakoJoseph/hypercache",
      live: "https://hypercache-demo.com",
      featured: true,
      stats: { latency: "< 0.8ms", nodes: "16", throughput: "1M ops/s" }
    },
    {
      id: 2,
      title: "StreamPulse",
      category: "backend",
      description: "Real-time event streaming pipeline processing 2B events/day with Kafka and schema registry.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tech: [SiRust, SiKubernetes, SiGraphql],
      techNames: ["Rust", "K8s", "GraphQL"],
      color: "#c084fc",
      github: "https://github.com/BakoJoseph/streampulse",
      live: "https://streampulse.io",
      featured: true,
      stats: { events: "2B/day", uptime: "99.99%", latency: "< 50ms" }
    },
    {
      id: 3,
      title: "Nexus Dashboard",
      category: "frontend",
      description: "Real-time analytics dashboard with D3.js visualizations and WebSocket streaming.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tech: [SiReact, SiTypescript, SiNextdotjs],
      techNames: ["React", "TypeScript", "Next.js"],
      color: "#818cf8",
      github: "https://github.com/BakoJoseph/nexus-dashboard",
      live: "https://nexus-dashboard.com",
      featured: true,
      stats: { charts: "12+", realtime: "WebSocket", fps: "60" }
    },
    {
      id: 4,
      title: "APIForge Gateway",
      category: "fullstack",
      description: "High-throughput API gateway with rate limiting, circuit breakers, and JWT authentication.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tech: [SiNodedotjs, SiPostgresql, SiGraphql],
      techNames: ["Node.js", "PostgreSQL", "GraphQL"],
      color: "#a78bfa",
      github: "https://github.com/BakoJoseph/apiforge",
      live: "https://apiforge.io",
      featured: false,
      stats: { req_per_sec: "80k", latency: "< 20ms", routes: "500+" }
    },
    {
      id: 5,
      title: "CloudNative Deploy",
      category: "fullstack",
      description: "GitOps-driven deployment platform with canary releases and automated rollback.",
      image: "https://images.unsplash.com/photo-1554469384-e58e5bee2f19?w=800&h=400&fit=crop",
      tech: [SiKubernetes, SiDocker, SiGo],
      techNames: ["Kubernetes", "Docker", "Go"],
      color: "#f6ad55",
      github: "https://github.com/BakoJoseph/cloudnative-deploy",
      live: "https://cloudnative-deploy.com",
      featured: false,
      stats: { deployments: "1000+", uptime: "99.99%", rollbacks: "< 1%" }
    },
    {
      id: 6,
      title: "DataFlow Analytics",
      category: "frontend",
      description: "Interactive data visualization platform with real-time collaboration and export features.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      tech: [SiReact, SiTypescript, SiNextdotjs],
      techNames: ["React", "TypeScript", "Next.js"],
      color: "#68d391",
      github: "https://github.com/BakoJoseph/dataflow-analytics",
      live: "https://dataflow-analytics.com",
      featured: false,
      stats: { users: "10k+", charts: "50+", export: "PDF,CSV" }
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", label: "All Projects", icon: FiLayers, color: "#9b4fff" },
    { id: "backend", label: "Backend", icon: FiCode, color: "#c084fc" },
    { id: "frontend", label: "Frontend", icon: FiLayout, color: "#818cf8" },
    { id: "fullstack", label: "Full Stack", icon: FiLayers, color: "#a78bfa" }
  ];

  return (
    <section id="projects-showcase" style={{ 
      minHeight: "100vh", 
      padding: isMobile ? "80px 4vw 60px" : isTablet ? "100px 4vw 70px" : "120px 5vw 80px", 
      scrollMarginTop: 96 
    }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
          <Label>Projects Showcase</Label>
          <h2 style={{ 
            fontFamily: "'Syne', sans-serif", 
            fontWeight: 800, 
            fontSize: isMobile ? "clamp(28px,6vw,42px)" : "clamp(36px,5vw,56px)",
            marginBottom: 16,
            background: "linear-gradient(135deg,#fff,#e9d8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Building Scalable Solutions
          </h2>
          <p style={{ 
            maxWidth: 600, 
            margin: "0 auto", 
            color: "rgba(210,180,255,0.6)", 
            fontSize: isMobile ? 13 : 14,
            lineHeight: 1.7,
            letterSpacing: 0.5
          }}>
            From distributed systems to modern web applications, explore my journey through innovative projects
            that push the boundaries of performance and user experience.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          gap: 12, 
          marginBottom: isMobile ? 32 : 48,
          animation: "fadeInUp 0.5s 0.2s both"
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: isMobile ? "8px 16px" : "10px 20px",
                borderRadius: 20,
                background: filter === cat.id 
                  ? `${cat.color}15` 
                  : "rgba(18,6,42,0.6)",
                border: `1px solid ${filter === cat.id ? cat.color : "rgba(160,80,255,0.2)"}`,
                color: filter === cat.id ? cat.color : "rgba(220,190,255,0.8)",
                fontFamily: "'DM Mono', monospace",
                fontSize: isMobile ? 11 : 12,
                letterSpacing: 1,
                fontWeight: filter === cat.id ? 500 : 400,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                if (filter !== cat.id) {
                  e.currentTarget.style.background = `${cat.color}08`;
                  e.currentTarget.style.borderColor = `${cat.color}40`;
                  e.currentTarget.style.color = cat.color;
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== cat.id) {
                  e.currentTarget.style.background = "rgba(18,6,42,0.6)";
                  e.currentTarget.style.borderColor = "rgba(160,80,255,0.2)";
                  e.currentTarget.style.color = "rgba(220,190,255,0.8)";
                }
              }}
            >
              <cat.icon size={isMobile ? 14 : 16} />
              {cat.label}
              {filter === cat.id && (
                <FiX size={12} style={{ marginLeft: 4 }} />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
          gap: isMobile ? 24 : 32,
          marginBottom: isMobile ? 40 : 60
        }}>
          {filteredProjects.map((project, index) => (
            <Tilt key={project.id} intensity={isMobile ? 2 : 5}>
              <Card 
                style={{ 
                  overflow: "hidden", 
                  padding: 0,
                  background: "rgba(18,6,42,0.8)",
                  border: "1px solid rgba(160,80,255,0.15)",
                  animation: `fadeInUp 0.5s ${0.3 + index * 0.1}s both`,
                  position: "relative"
                }}
              >
                {/* Project Image */}
                <div style={{ 
                  position: "relative", 
                  height: isMobile ? 180 : 220,
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.9
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 0%, rgba(7,0,16,0.8) 100%)`
                  }} />
                  
                  {/* Category Badge */}
                  <div style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    padding: "6px 12px",
                    borderRadius: 20,
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontWeight: 500
                  }}>
                    {project.category}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      padding: "4px 8px",
                      borderRadius: 12,
                      background: "rgba(251, 191, 36, 0.2)",
                      border: "1px solid rgba(251, 191, 36, 0.4)",
                      color: "#fbbf24",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      fontWeight: 600
                    }}>
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div style={{ padding: isMobile ? 20 : 24 }}>
                  <h3 style={{ 
                    fontFamily: "'Syne', sans-serif", 
                    fontSize: isMobile ? 18 : 20, 
                    fontWeight: 700, 
                    color: "#fff",
                    marginBottom: 12,
                    lineHeight: 1.3
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ 
                    color: "rgba(220,190,255,0.7)", 
                    fontSize: isMobile ? 12 : 13,
                    lineHeight: 1.6,
                    marginBottom: 16
                  }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: 8, 
                    marginBottom: 16 
                  }}>
                    {project.tech.map((TechIcon, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          padding: "4px 8px",
                          borderRadius: 12,
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}20`,
                          color: project.color,
                          fontSize: 10,
                          fontFamily: "'DM Mono', monospace"
                        }}
                      >
                        <TechIcon size={12} />
                        {project.techNames[i]}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(3, 1fr)", 
                    gap: 12, 
                    marginBottom: 16,
                    padding: "12px 0",
                    borderTop: "1px solid rgba(160,80,255,0.1)",
                    borderBottom: "1px solid rgba(160,80,255,0.1)"
                  }}>
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} style={{ textAlign: "center" }}>
                        <div style={{ 
                          fontSize: isMobile ? 14 : 16, 
                          fontWeight: 700, 
                          color: project.color,
                          fontFamily: "'Syne', sans-serif"
                        }}>
                          {value}
                        </div>
                        <div style={{ 
                          fontSize: 9, 
                          color: "rgba(180,120,255,0.5)",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          fontFamily: "'DM Mono', monospace"
                        }}>
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: 12,
                        background: "rgba(140,60,255,0.1)",
                        border: "1px solid rgba(140,60,255,0.3)",
                        color: "#e9d8fd",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        letterSpacing: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(140,60,255,0.2)";
                        e.currentTarget.style.borderColor = "rgba(140,60,255,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(140,60,255,0.1)";
                        e.currentTarget.style.borderColor = "rgba(140,60,255,0.3)";
                      }}
                    >
                      <FiGithub size={14} />
                      Code
                    </button>
                    
                    <button
                      onClick={() => window.open(project.live, "_blank")}
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: 12,
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}3a`,
                        color: project.color,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        letterSpacing: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${project.color}25`;
                        e.currentTarget.style.borderColor = project.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${project.color}15`;
                        e.currentTarget.style.borderColor = `${project.color}3a`;
                      }}
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </Card>
            </Tilt>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div style={{ 
            textAlign: "center", 
            padding: "60px 20px",
            color: "rgba(220,190,255,0.5)"
          }}>
            <FiFilter size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14 }}>
              No projects found in this category.
            </p>
          </div>
        )}
      </Reveal>
    </section>
  );
}
