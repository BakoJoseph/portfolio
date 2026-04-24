import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { useState, useEffect } from "react";

export default function ContactSection({ RevealSection, SectionLabel, GlassCard, InputField }) {
  const Reveal = RevealSection;
  const Label = SectionLabel;
  const Card = GlassCard;
  const Field = InputField;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSendMessage = () => {
    const subject = formData.subject.trim() || "Portfolio inquiry";
    const body = [
      `Name: ${formData.name.trim() || "-"}`,
      `Email: ${formData.email.trim() || "-"}`,
      "",
      formData.message.trim() || "Hi Olamide,",
    ].join("\n");

    window.location.href = `mailto:bakocodex@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
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
    <section id="contact" style={{ minHeight: "100vh", padding: isMobile ? "80px 4vw 60px" : isTablet ? "100px 4vw 70px" : "120px 5vw 80px", scrollMarginTop: 96 }}>
      <Reveal>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Label>Contact</Label>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? "clamp(24px,6vw,36px)" : "clamp(28px,4vw,48px)", marginBottom: 10, animation: "fadeInUp 0.5s both" }}>Let's Build Something</h2>
          <p style={{ maxWidth: isMobile ? 400 : 560, color: "rgba(210,180,255,0.58)", lineHeight: 1.75, marginBottom: isMobile ? 24 : 36, fontSize: isMobile ? 12 : 13, textAlign: "center" }}>Best way to reach me is by email. For everything else, use the quick links below or drop a short message.</p>
        </div>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 32 }}>
          <Card style={{ padding: isMobile ? "24px 20px" : isTablet ? "28px 24px" : "34px 30px", animation: "fadeInUp 0.5s 0.1s both", minHeight: 0 }} glow>
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 24 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: isMobile ? 6 : 8, padding: isMobile ? "4px 8px" : "6px 12px", borderRadius: 999, background: "rgba(104,211,145,0.09)", border: "1px solid rgba(104,211,145,0.2)", marginBottom: isMobile ? 12 : 18 }}>
                <div style={{ width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: "#68d391", boxShadow: "0 0 8px #68d391", animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 10, letterSpacing: 2, color: "#68d391" }}>{isMobile ? "OPEN" : "OPEN TO OPPORTUNITIES"}</span>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 18 : 24, fontWeight: 800, color: "#fff", marginBottom: 10 }}>Direct and simple works best.</h3>
              <p style={{ fontSize: isMobile ? 12 : 13, lineHeight: 1.8, color: "rgba(220,190,255,0.66)", marginBottom: isMobile ? 20 : 24 }}>If you have a role, project, or collaboration in mind, send a concise message with the scope, timeline, and stack. I usually reply fastest through email.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 10 : 12, marginBottom: isMobile ? 16 : 18 }}>
              {[
                { label: "Email", val: "bakocodex@gmail.com", href: "mailto:bakocodex@gmail.com", I: FiMail, c: "#c084fc" },
                { label: "GitHub", val: "BakoJoseph", href: "https://github.com/BakoJoseph", I: FiGithub, c: "#e9d8fd" },
                { label: "LinkedIn", val: "Olamide Bako", href: "https://www.linkedin.com", I: FiLinkedin, c: "#60a5fa" },
                { label: "Twitter", val: "@ba_codeX", href: "https://x.com", I: FiTwitter, c: "#38bdf8" },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noreferrer" : undefined} style={{ textDecoration: "none" }}>
                  <div style={{ padding: isMobile ? "12px 14px" : "14px 16px", borderRadius: 16, background: `${c.c}10`, border: `1px solid ${c.c}22`, display: "flex", alignItems: "center", gap: isMobile ? 10 : 12, minHeight: isMobile ? 56 : 68 }}>
                    <div style={{ width: isMobile ? 32 : 36, height: isMobile ? 32 : 36, borderRadius: "50%", background: `${c.c}18`, border: `1px solid ${c.c}2c`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <c.I size={isMobile ? 14 : 16} color={c.c} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 9, letterSpacing: 2, color: "rgba(170,130,255,0.5)", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 11 : 12, color: "#f3e8ff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.val}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 10, color: "rgba(220,190,255,0.56)", justifyContent: isMobile ? "center" : "flex-start" }}>
              <FiMapPin size={isMobile ? 13 : 15} color="#f472b6" />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 10 : 11, letterSpacing: 1 }}>Lagos, NG</span>
            </div>
          </Card>

          <Card style={{ padding: isMobile ? "24px 20px" : isTablet ? "28px 24px" : "32px 28px", animation: "fadeInUp 0.5s 0.18s both" }}>
            <div style={{ position: "relative", marginBottom: 18 }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 10, letterSpacing: 3, color: "rgba(180,120,255,0.48)", marginBottom: 6 }}>MESSAGE</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#fff", textAlign: "center" }}>{isMobile ? "Start Chat" : "Start the conversation"}</h3>
              </div>
              <div style={{ position: "absolute", top: 0, right: 0, fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 8 : 10, color: "rgba(180,120,255,0.45)", letterSpacing: 2 }}>{isMobile ? "24H" : "24H RESPONSE"}</div>
            </div>
            <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))", gap: isMobile ? 12 : 14, alignItems: "start" }}>
              <div>
                <Field label="Name" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <Field label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <Field label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="Message" multiline name="message" value={formData.message} onChange={handleChange} />
              </div>
              <button
                type="button"
                onClick={handleSendMessage}
                style={{ gridColumn: "1 / -1", justifySelf: "center", width: isMobile ? "70%" : "50%", padding: isMobile ? "12px" : "14px", borderRadius: 20, background: "linear-gradient(135deg,#7b2fff,#c084fc)", border: "none", color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 12 : 13, letterSpacing: 3, boxShadow: "0 0 30px rgba(140,60,255,0.28)", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 50px rgba(160,80,255,0.48)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(140,60,255,0.28)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <IoIosSend size={isMobile ? 14 : 16} /> {isMobile ? "SEND" : "MESSAGE"}
              </button>
            </div>
          </Card>
        </div>
      </Reveal>
    </section>
  );
}
