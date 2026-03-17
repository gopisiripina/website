import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

// --- DATA (images same, only text keys) ---
const strengthCards = [
  { titleKey: "about_strength1_title", descKey: "about_strength1_desc", img: "/assets/aboutus/game.webp" },
  { titleKey: "about_strength2_title", descKey: "about_strength2_desc", img: "/assets/aboutus/chess.webp" },
  { titleKey: "about_strength3_title", descKey: "about_strength3_desc", img: "/assets/aboutus/target.webp" },
];

const leaders = [
  { name: "Surya Tamarapalli", roleKey: "leader1_role", company: "MYACCESS", img: "/assets/aboutus/surya img.webp", pos: "center 85%", bioKey: "leader1_bio" },
  { name: "Naveen Gavara",     roleKey: "leader2_role", company: "MYACCESS", img: "/assets/aboutus/naveen1.webp",    pos: "center 22%", bioKey: "leader2_bio" },
];

const advisors = [
  { name: "DR. N CHANDRA SHEKAR", roleKey: "advisor1_role", bioKey: "advisor1_bio", img: "/assets/aboutus/a1.webp", detailedBioKey: "advisor1_detailed" },
  { name: "DR. B. T. KRISHNA",    roleKey: "advisor2_role", bioKey: "advisor2_bio", img: "/assets/aboutus/a2.webp", detailedBioKey: "advisor2_detailed" },
  { name: "DR. K. M. CHISTI",     roleKey: "advisor3_role", bioKey: "advisor3_bio", img: "/assets/aboutus/a3.webp", detailedBioKey: "advisor3_detailed" },
  { name: "DR. J BHASKAR RAO",    roleKey: "advisor4_role", bioKey: "advisor4_bio", img: "/assets/aboutus/a4.webp", detailedBioKey: "advisor4_detailed" },
];

const frontlineTeam = [
  { name: "Malla Jaideep",           roleKey: "ft1_role",  bioKey: "ft1_bio",  img: "/assets/aboutus/jaideep.webp",pos: "center 50%", moveX: "21px",moveY: "29px",  scale: 1.7 },
  { name: "Vemuri Sai Krishna",      roleKey: "ft2_role",  bioKey: "ft2_bio",  img: "/assets/aboutus/sai.webp" },
  { name: "Vemagiri Reshma",         roleKey: "ft3_role",  bioKey: "ft3_bio",  img: "/assets/aboutus/reshma1.webp", pos: "center 15%" },
  { name: "Jannela Chandana",        roleKey: "ft4_role",  bioKey: "ft4_bio",  img: "/assets/aboutus/chandana1.webp" },
  { name: "Kalla Viharika",          roleKey: "ft5_role",  bioKey: "ft5_bio",  img: "/assets/aboutus/kalla.webp",pos: "center 50%", moveX: "2px",moveY: "-31px",  scale: 1.6 },
  { name: "Kandi Anusha",            roleKey: "ft6_role",  bioKey: "ft6_bio",  img: "/assets/aboutus/anusha.webp" },
  { name: "Gandepalli Uma Maheswari",roleKey: "ft7_role",  bioKey: "ft7_bio",  img: "/assets/aboutus/uma1.webp" },
  { name: "Shaik Naseer Ali",        roleKey: "ft8_role",  bioKey: "ft8_bio",  img: "/assets/aboutus/ali.webp", pos: "center 15%", moveX: "-10px", scale: 1.1 },
  { name: "Siripina Gopi",           roleKey: "ft9_role",  bioKey: "ft9_bio",  img: "/assets/aboutus/gopi.webp", pos: "center 15%" },
];

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const elementRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    if (!started) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);
  return <span ref={elementRef}>{count}</span>;
};

export default function About() {
  const [selectedAdviser, setSelectedAdviser] = React.useState(null);
  const { t } = useLang();

  return (
    <div className="about-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }
        .about-main { padding-top: 100px; padding-bottom: 40px; width: 100%; display: flex; flex-direction: column; align-items: center; }
        .sec-wrap { width: 90vw; max-width: 1300px; margin-bottom: 80px; }
        .centered-text { text-align: center; max-width: 900px; margin: 0 auto 50px auto; }
        .centered-text h1, .centered-text h2 { font-size: clamp(28px, 4vw, 42px); font-weight: 600; line-height: 1.2; margin-bottom: 20px; }
        .intro-flex { display: flex; gap: 60px; align-items: center; }
        .intro-video { flex: 1.3; aspect-ratio: 16/9; background: #eee; border-radius: 4px; overflow: hidden; }
        .intro-text { flex: 1; font-size: 15px; line-height: 1.7; color: #333; }
        .intro-text p { margin-bottom: 25px; }
        .who-flex { display: flex; gap: 80px; align-items: center; }
        .who-text { flex: 1; }
        .who-text h2 { font-size: 48px; font-weight: 700; margin-bottom: 30px; }
        .who-img-side { flex: 1.2; position: relative; }
        .who-photo { width: 100%; border-radius: 4px; z-index: 2; position: relative; }
        .top-decor { position: absolute; width: 60px; height: 60px; background: #0056b3; top: -20px; left: -20px; z-index: 1; }
        .blue-decor { position: absolute; width: 100px; height: 100px; background: #0056b3; bottom: -20px; right: -20px; z-index: 3; }
        .awards-row { display: flex; justify-content: center; gap: 60px; align-items: center; margin-bottom: 40px; flex-wrap: wrap; }
        .award-img { height: 180px; opacity: 0.99; }
        .outline-pill { border: 1.5px solid #0056b3; color: #0056b3; padding: 12px 35px; border-radius: 25px; font-weight: 600; cursor: pointer; background: transparent; font-size: 13px; }
        .stats-bar { width: 100vw; background: #0056b3; color: white; padding: 10px 4%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-bottom: 100px; }
        .stat-item { text-align: center; }
        .stat-item h3 { font-size: clamp(48px, 8vw, 80px); font-weight: 500; margin-bottom: -7px; font-family: serif; }
        .stat-item p { font-size: 16px; font-weight: 500; color: #ffffff; text-transform: capitalize; }
        .strength-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 60px; }
        .strength-card { text-align: left; }
        .strength-card img { width: 100%; border-radius: 4px; margin-bottom: 20px; }
        .strength-card h4 { font-size: 20px; margin-bottom: 15px; color: #1a1a1a; font-weight: 500; }
        .strength-card p { font-size: 14px; line-height: 1.6; color: #333; }
        .strength-split { display: grid; grid-template-columns: 1fr 2.5fr; gap: 60px; align-items: flex-start; margin-top: 80px; }
        .strength-split h2 { font-size: 48px; font-weight: 700; }
        .strength-split p { font-size: 15.5px; line-height: 1.8; color: #1a1a1a; }
        .person-grid { display: flex; justify-content: center; gap: 30px; margin-bottom: 10px; flex-wrap: wrap; }
        .person-card { width: 270px; text-align: left; background: #fff; border-radius: 8px; padding: 15px 15px 30px 15px; display: flex; flex-direction: column; }
        .person-img { width: 100%; aspect-ratio: 1/1.2; border-radius: 4px; margin-bottom: 15px; object-fit: cover; }
        .person-name { font-size: 15px; font-weight: 700; margin-bottom: 5px; color: #1a1a1a; }
        .person-role { font-size: 13px; color: #666; font-weight: 500; margin-bottom: 4px; }
        .person-bio { font-size: 13px; line-height: 1.5; color: #444; margin-bottom: 15px; flex: 1; }
        .lm-link { font-size: 13px; color: #0056b3; font-weight: 700; text-decoration: none; }
        .section-header { font-size: 38px; font-weight: 700; text-align: center; margin-bottom: 50px; text-transform: uppercase; letter-spacing: 1px; }
        .frontline-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 50px; margin-bottom: 50px; text-align: left; }
        .frontline-header h2 { font-size: clamp(32px, 5vw, 52px); font-weight: 700; flex: 1.2; color: #1a1a1a; }
        .frontline-header p { flex: 1; font-size: 15.5px; line-height: 1.6; color: #333; margin-top: 10px; }
        .divider-line { width: 100%; height: 2px; background: repeating-linear-gradient(90deg, #000080, #000080 4px, transparent 4px, transparent 8px); margin-bottom: 60px; opacity: 0.3; }
        .frontline-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px 40px; width: 100%; }
        .frontline-card { display: flex; gap: 25px; align-items: center; }
        .frontline-img-wrap { width: 190px; height: 240px; flex-shrink: 0; clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); overflow: hidden; background: #f5f5f5; }
        .frontline-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .frontline-card:hover .frontline-img-wrap img { transform: scale(1.1); }
        .frontline-info { text-align: left; flex: 1; }
        .frontline-info h3 { color: #000080; font-size: 22px; font-weight: 700; margin-bottom: 5px; }
        .frontline-info .role { font-weight: 700; font-size: 18px; color: #1a1a1a; margin-bottom: 12px; }
        .frontline-info .bio { font-size: 14px; color: #444; line-height: 1.5; }
        .mv-section { display: flex; align-items: center; gap: 6rem; margin-bottom: 8rem; width: 90vw; max-width: 1300px; }
        .mv-section.reverse { flex-direction: row-reverse; }
        .mv-image-box { flex: 1.3; height: 400px; clip-path: polygon(15% 0, 100% 0, 85% 100%, 0 100%); overflow: hidden; background: #f5f5f5; }
        .mv-image-box img { width: 100%; height: 100%; object-fit: cover; }
        .mv-content { flex: 1; text-align: left; }
        .mv-content h2 { font-size: clamp(32px, 4vw, 48px); font-weight: 700; margin-bottom: 1.5rem; color: #1a1a1a; }
        .mv-content p { font-size: 1.1rem; line-height: 1.6; color: #444; }
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.7); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-card { background: #fff; width: 100%; max-width: 900px; padding: 50px; border-radius: 8px; position: relative; display: flex; gap: 40px; animation: fadeIn 0.3s ease; }
        .modal-close { position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 24px; cursor: pointer; color: #888; }
        .modal-img { width: 300px; height: 380px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }
        .modal-text { flex: 1; text-align: left; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .leader-card { width: 320px; text-align: center; background: #fff; padding-bottom: 20px; }
        .leader-img-box { width: 100%; aspect-ratio: 1/1.1; border-radius: 8px; overflow: hidden; margin-bottom: 25px; background: #f9f9f9; }
        .leader-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .leader-card:hover .leader-img-box img { transform: scale(1.05); }
        .leader-name { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 5px; }
        .leader-role { font-size: 14px; color: #f4531c; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .leader-divider { width: 30px; height: 2px; background: #ddd; margin: 15px auto; }
        .leader-bio { font-size: 14.5px; line-height: 1.6; color: #555; padding: 0 15px; }
        .leadership-section-gap { margin-bottom: 100px !important; display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
        @media (max-width: 1024px) {
          .intro-flex { flex-direction: column; display: flex; text-align: center; gap: 40px !important; }
          .intro-video { width: 100%; margin-bottom: 10px; }
          .who-flex { flex-direction: column; display: flex; text-align: center; gap: 60px !important; }
          .who-text { width: 100%; }
          .who-img-side { width: 85% !important; margin: 20px auto 0 auto !important; padding: 20px 0; }
          .strength-split { flex-direction: column; display: block; text-align: center; }
          .strength-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .frontline-header { flex-direction: column; gap: 20px; }
          .frontline-grid { grid-template-columns: 1fr; gap: 40px; }
          .mv-section, .mv-section.reverse { flex-direction: column; text-align: center; gap: 3rem; }
          .mv-content { text-align: center; }
          .mv-image-box { width: 100%; height: 300px; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); }
        }
        @media (max-width: 768px) {
          .strength-grid { grid-template-columns: 1fr; }
          .stats-bar { grid-template-columns: 1fr; }
          .strength-split h2 { font-size: 32px; margin-bottom: 20px; }
          .section-header { font-size: 26px; }
          .person-card { margin: 0 auto; }
          .modal-card { flex-direction: column; padding: 30px; height: 90vh; overflow-y: auto; }
          .modal-img { width: 100%; height: 300px; }
        }
        @media (max-width: 600px) {
          .frontline-card { flex-direction: column; text-align: center; }
          .frontline-info { text-align: center; }
          .frontline-img-wrap { width: 220px; height: 220px; }
        }
      `}</style>

      <Header />

      <main className="about-main">
        {/* Intro */}
        <section className="sec-wrap">
          <div className="centered-text">
            <h1>{t("about_intro_title")}</h1>
          </div>
          <div className="intro-flex">
            <div className="intro-video">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IT1uBUsOmUY?si=FJR6uzbjM-cmhvFQ" frameBorder="0" allowFullScreen title="About video"></iframe>
            </div>
            <div className="intro-text">
              <p>{t("about_intro_p1")}</p>
              <p>{t("about_intro_p2")}</p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="sec-wrap who-flex">
          <div className="who-text">
            <h2>{t("about_who_title")}</h2>
            <p>{t("about_who_desc")}</p>
          </div>
          <div className="who-img-side">
            <div className="top-decor"></div>
            <img src="/assets/aboutus/team1.webp" className="who-photo" alt="Who We Are" />
            <div className="blue-decor"></div>
          </div>
        </section>

        {/* Mission */}
        <section className="mv-section">
          <div className="mv-image-box">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" alt="Our Mission" />
          </div>
          <div className="mv-content">
            <h2>{t("about_mission_title")}</h2>
            <p>{t("about_mission_desc")}</p>
          </div>
        </section>

        {/* Vision */}
        <section className="mv-section reverse">
          <div className="mv-image-box">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Our Vision" />
          </div>
          <div className="mv-content">
            <h2>{t("about_vision_title")}</h2>
            <p>{t("about_vision_desc")}</p>
          </div>
        </section>

        {/* Awards */}
        <section className="sec-wrap" style={{textAlign:'center'}}>
          <div className="awards-row">
            <img src="/assets/aboutus/award1.webp" className="award-img" alt="Award" />
            <img src="/assets/aboutus/award2.webp" className="award-img" alt="Award" />
            <img src="/assets/aboutus/award3.webp" className="award-img" alt="Award" />
          </div>
          <button className="outline-pill">{t("about_see_awards")}</button>
        </section>

        {/* Stats */}
        <section className="stats-bar">
          <div className="stat-item"><h3><CountUp end={20} />+</h3><p>{t("stat_projects")}</p></div>
          <div className="stat-item"><h3><CountUp end={10} />+</h3><p>{t("stat_clients")}</p></div>
          <div className="stat-item"><h3><CountUp end={5} />+</h3><p>{t("stat_years")}</p></div>
        </section>

        {/* Strength */}
        <section className="sec-wrap">
          <div className="strength-grid">
            {strengthCards.map((c, i) => (
              <div key={i} className="strength-card">
                <img src={c.img} alt={t(c.titleKey)} />
                <h4>{t(c.titleKey)}</h4>
                <p>{t(c.descKey)} <strong>&rarr;</strong></p>
              </div>
            ))}
          </div>
          <div className="strength-split">
            <h2>{t("about_our_strength")}</h2>
            <p>{t("about_strength_desc")}</p>
          </div>
        </section>

        {/* Leadership */}
        <section className="sec-wrap" style={{marginBottom:'-40px'}}>
          <h2 className="section-header">{t("about_our_leadership")}</h2>
          <div className="leadership-section-gap">
            {leaders.map((p, i) => (
              <div key={i} className="leader-card">
                <div className="leader-img-box">
                  <img src={p.img} alt={p.name} style={{objectPosition: p.pos || 'center center'}} />
                </div>
                <div className="leader-name">{p.name}</div>
                <div className="leader-role">{t(p.roleKey)}</div>
                <div className="leader-divider"></div>
                <p className="leader-bio">{t(p.bioKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory */}
        <section className="sec-wrap">
          <h2 className="section-header">{t("about_advisory")}</h2>
          <div className="person-grid">
            {advisors.map((p, i) => (
              <div key={i} className="person-card">
                <img src={p.img} alt={p.name} className="person-img" />
                <div className="person-name">{p.name}</div>
                <div className="person-role">{t(p.roleKey)}</div>
                <p className="person-bio">{t(p.bioKey)}</p>
                <button onClick={() => setSelectedAdviser(p)} style={{background:'none',border:'none',padding:0,textAlign:'left',cursor:'pointer'}} className="lm-link">
                  {t("learn_more")} &gt;
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Frontline Team */}
        <section className="sec-wrap">
          <div className="frontline-header">
            <h2>{t("about_frontline_title")}</h2>
            <p>{t("about_frontline_desc")}</p>
          </div>
          <div className="divider-line"></div>
          <div className="frontline-grid">
            {frontlineTeam.map((m, i) => (
              <div key={i} className="frontline-card">
                <div className="frontline-img-wrap">
                  <img src={m.img} alt={m.name} style={{objectPosition: m.pos || 'center 15%', transform: `scale(${m.scale || 1}) translateX(${m.moveX || '0px'}) translateY(${m.moveY || '0px'}) `}} />
                </div>
                <div className="frontline-info">
                  <h3>{m.name}</h3>
                  <div className="role">{t(m.roleKey)}</div>
                  <p className="bio">{t(m.bioKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <section className="sec-wrap centered-text">
          <h2>{t("about_commitment_title")}</h2>
          <p>{t("about_commitment_desc")}</p>
          <div style={{marginTop:'40px'}}>
            <button className="outline-pill">{t("about_community_btn")}</button>
          </div>
        </section>

        {/* Modal */}
        {selectedAdviser && (
          <div className="modal-overlay" onClick={() => setSelectedAdviser(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedAdviser(null)}>&times;</button>
              <img src={selectedAdviser.img} alt={selectedAdviser.name} className="modal-img" />
              <div className="modal-text">
                <h2 style={{textTransform:'none',marginBottom:'5px'}}>{selectedAdviser.name}</h2>
                <div className="role" style={{fontSize:'13px',color:'#888',textTransform:'uppercase',marginBottom:'5px'}}>{t(selectedAdviser.roleKey)}</div>
                <p style={{fontSize:'14px',color:'#333',marginBottom:'25px'}}>
                  {t(selectedAdviser.detailedBioKey) || t(selectedAdviser.bioKey)}
                </p>
                <div style={{display:'flex',gap:'15px',alignItems:'center'}}>
                  <span style={{fontSize:'18px',cursor:'pointer'}}>🔗</span>
                  <span style={{fontSize:'18px',cursor:'pointer',fontWeight:'bold'}}>X</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
