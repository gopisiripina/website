import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

// --- DATA ---
const industryItems = [
  { name: "EMS", icon: "/assets/home/Asset 13@3x.png", link: "/EMS" },
  { name: "Robotics", icon: "/assets/home/Asset 18@3x.png", link: "/Robotics" },
  { name: "3D Print Farm", icon: "/assets/home/Asset 17@3x.png", link: "/3D Print Farm" },
  { name: "Artificial Intelligence", icon: "/assets/home/Asset 14@3x.png", link: "/Artificial Intelligence" },
  { name: "Machine to Machine", icon: "/assets/home/Asset 11@3x.png", link: "/Machine to Machine" },
  { name: "Product Development", icon: "/assets/home/Asset 12@3x.png", link: "/Product Development" },
  { name: "All Services", icon: "/assets/home/Asset 15@3x.png", link: "/industries" },
];
// 1. Replace the old string list with this object list
const serviceTags = [
  { name: "Soldering & Rework", icon: "/assets/home/Asset 1@3x.png" },
  { name: "PCB Design", icon: "/assets/home/Asset 18.svg" },
  { name: "Embedded Development", icon: "/assets/home/icon3.png" },
  { name: "OpenCPU", icon: "/assets/home/icon4.png" },
  { name: "PCB Fabrication", icon: "/assets/home/icon5.png" },
  { name: "Component Procurement", icon: "/assets/home/icon6.png" },
  { name: "EMS Assembly", icon: "/assets/home/icon7.png" },
  { name: "Testing & Debugging", icon: "/assets/home/test and debug.svg" },
  { name: "ESD Compliance Checklist", icon: "/assets/home/Asset 17.svg" },
  { name: "Mechanical CAD", icon: "/assets/home/icon8.png" },
  { name: "3D Printing", icon: "/assets/home/3d print.svg" },
  { name: "Plastic Injection Molding", icon: "/assets/home/icon8.png" },
  { name: "3D Printed Mold", icon: "/assets/home/icon8.png" },
  { name: "Fullstack Development", icon: "/assets/home/Asset 12.svg" },
  { name: "Cloud Services", icon: "/assets/home/cloud.svg" },
  { name: "CI/CD & DevOps", icon: "/assets/home/devops.svg" },
  { name: "Patent Filing Support", icon: "/assets/home/icon8.png" },
  
];

const featureNews = {
  category: "SMART SECURE SEAMLESS CONTROL SYSTEM",
  title: "Transforming Shutter Access with Automation",
  desc: "MySafeShutter is an automation system designed by MyAccess to improve the way rolling shutters are operated in shops, garages, and industrial spaces. By combining mechanical reliability with modern electronic control, the system enhances safety, convenience, and operational efficiency while supporting the growing need for automated access solutions.",
  image: "/assets/home/mysafeshutter scene.png" 
};

const newsItems = [
  { 
    category: "PROTOTYPE, PRINT, AND PRODUCE WITH PRECISION", 
    title: "3D Print Farm: Advanced 3D Printing For Prototyping And Production", 
    image: "/assets/home/bamboo lab1.jpeg" 
  },
  { 
    category: "CENTRALIZED CONTROL FOR CONNECTED DEVICES", 
    title: "Smart Kiosk: Digital Control Center For Environment Control", 
    image: "/assets/home/image_1_4k.png" 
  },
  { 
    category: "SMART WAY TO MANAGE BUSINESS IN ONE PLATFORM", 
    title: "Modular ERP: Structured Digital System For Business Management", 
    image: "/assets/home/ERP.jpg" 
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        

        html, body {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          -webkit-text-size-adjust: 100%;
        }

        .home-main {
          padding-top: 5.2rem; /* 90px */
          width: 100%;
          max-width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center; 
          margin: 0 auto;
        }

        /* --- HERO SECTION --- */
        .hero-container {
          position: relative;
          width: 95%; 
          height: 36.25rem; /* 580px */
          border-radius: 1.25rem; /* 20px */
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .hero-video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; opacity: 0.9; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); z-index: 2; }
        .hero-content { position: relative; z-index: 3; max-width: 56rem; padding: 0 1.2rem; }
        .hero-content h1 { font-size: clamp(2rem, 5.5vw, 4.5rem); font-weight: 700; line-height: 1.05; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: -1.5px; }
        .hero-content p { font-size: clamp(1.1rem, 2.2vw, 1.5rem); margin-bottom: 2.5rem; font-weight: 500; }
        
        .hero-btns { display: flex; gap: 0.9rem; justify-content: center; }
        .h-btn { padding: 1rem 2rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; cursor: pointer; text-transform: uppercase; display: flex; align-items: center; gap: 0.6rem; border: none; transition: 0.3s; }
        .btn-orange { background: #f4531c; color: #fff; }
        .btn-outline { background: transparent; color: #fff; border: 1.5px solid #fff; }
        .h-btn:hover { transform: translateY(-3px); box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.3); }

        /* --- INDUSTRY GRID --- */
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr); 
          width: 95%; 
          gap: 0.75rem;
          margin-top: 1.5rem;
          margin-bottom: 4rem;
        }
        .industry-card {
          background: #1a1a1a; 
          border-radius: 0.75rem; 
          padding: 1rem; 
          text-decoration: none; 
          color: #fff !important; /* Forces white text */
          aspect-ratio: 1 / 1; 
          display: flex; 
          flex-direction: column; 
          transition: 0.3s ease;
        }
        .industry-card:hover {
          background: #000000 !important; 
          color: #ffffff !important; 
          transform: translateY(-5px); 
        }
        .industry-card span { font-size: 0.75rem; font-weight: 600; opacity: 0.9; margin-bottom: 0.6rem; }
        .icon-container { flex: 1; display: flex; align-items: center; justify-content: center; }
        .industry-icon { width: 50%; height: auto; object-fit: contain; opacity: 0.8; }

        /* --- LATEST NEWS SECTION --- */
        .news-section {
          width: 90%;
          margin-bottom: 5rem;
        }
        .section-title { font-size: 2.375rem; font-weight: 600; color: #1a1a1a; margin-bottom: 2rem; }

        /* Feature Card (Island Look) */
        .news-feature-card {
          display: flex;
          background: #0f1113;
          border-radius: 1rem;
          margin-bottom: 1rem;
          height: auto; 
          padding: 0.6rem;
          gap: 0.6rem;
          align-items: stretch;
        }
        .feature-img { width: 55%; height: 100%; object-fit: cover; border-radius: 0.75rem; }
        .feature-content {
          width: 45%; padding: 3rem; display: flex; flex-direction: column;
          justify-content: center; color: #fff; align-items: flex-start; text-align: left;
          background: rgba(255,255,255,0.02); border-radius: 0.75rem;
        }
        .news-cat { font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; color: #999; margin-bottom: 1rem; }
        .news-title { font-size: 1.75rem; font-weight: 500; line-height: 1.2; margin-bottom: 1.2rem; }
        .news-desc { font-size: 0.9rem; color: #ccc; line-height: 1.6; margin-bottom: 2rem; opacity: 0.8; }
        .learn-more-btn { background: #fff; color: #000; font-weight: 700; font-size: 0.7rem; padding: 0.6rem 1.2rem; border-radius: 0.25rem; border: none; cursor: pointer; text-transform: uppercase; }

        /* Sub Grid */
        .news-sub-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
        .small-news-card { background: #0f1113; border-radius: 0.75rem; text-decoration: none; display: flex; flex-direction: column; padding: 0.5rem; }
           .small-news-img { 
          width: 100%; 
          height: auto; /* REMOVED FIXED HEIGHT */
          aspect-ratio: 16 / 9; /* MATCHES IMAGE RATIO */
          object-fit: cover; 
          border-radius: 0.5rem; 
        }
        .small-news-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .small-news-title { color: #fff; font-size: 0.95rem; font-weight: 500; line-height: 1.4; margin-top: 0.6rem; }

        .news-footer { display: flex; justify-content: center; margin-top: 2.5rem; }
        .all-news-btn { background: #f4531c; color: #fff; border: none; padding: 0.875rem 1.8rem; font-weight: 700; font-size: 0.75rem; border-radius: 0.25rem; cursor: pointer; text-transform: uppercase; }

        /* --- RESPONSIVE --- */
        @media (max-width: 1150px) {
          .industry-grid { display: flex !important; overflow-x: auto !important; width: 100%; padding: 0 5% 1rem 5%; gap: 1rem; -ms-overflow-style: none; scrollbar-width: none; }
          .industry-grid::-webkit-scrollbar { display: none; }
          .industry-card { flex: 0 0 10rem; }
        }

       @media (max-width: 900px) {
  /* 1. Fix Hero and News containers */
  .hero-container, .news-section { width: 92% !important; margin: 0 auto; }
  .hero-container { height: 30rem; }
  .hero-btns { flex-direction: column; width: 100%; max-width: 18rem; margin: 0 auto; }
  .h-btn { width: 100%; justify-content: center; }
          .news-feature-card { flex-direction: column !important; height: auto !important; }
          .feature-img { width: 100% !important; height: 15rem; }
          .feature-content { width: 100% !important; padding: 2rem 1.2rem; }
          .news-sub-grid { grid-template-columns: 1fr !important; gap: 1.25rem; }
          .small-news-img { height: 12.5rem; }
          .section-title { font-size: 1.75rem; }
           .news-footer {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
        }
 .materials-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #1a1a1a; 
  color: #fff;
  padding: 6rem 0; 
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden; /* Important to prevent horizontal scroll on the whole page */
}

/* DESKTOP VIEW (Default) */
.materials-inner {
  width: 90%;
  display: grid; /* Restore Grid for Desktop */
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

.materials-left { text-align: left; }
.materials-left h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); line-height: 1.1; margin-bottom: 2rem; }
.materials-left h2 span { color: #888; font-weight: 400; }

.tag-cloud { 
  display: flex; 
  flex-wrap: wrap; /* Tags wrap on Desktop */
  gap: 0.8rem; 
  margin-bottom: 2.5rem; 
}

.m-tag { 
  display: flex; align-items: center; gap: 6px;
  background: #0b0b0b; border: 1px solid #605a5a; 
  padding: 0.3rem 0.6rem; height: 2.2rem; 
  border-radius: 6px; font-size: 0.75rem; font-weight: 600; 
  cursor: pointer; color: #cdcccc;
  flex: 0 0 auto;
}

.m-tag img { width: 23px; height: 23px; object-fit: contain; }
.m-tag:hover { background: #444; border-color: #f4531c; }

.material-hero-card { background: #f4531c; border-radius: 1rem; overflow: hidden; width: 100%; }
.m-hero-img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
.m-hero-footer { padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; }
@media (max-width: 900px) {
  .materials-inner { 
    display: flex !important;
    flex-direction: column !important; /* Stack vertically on mobile */
    text-align: center;
    gap: 3rem;
  }

  .materials-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .tag-cloud { 
    flex-wrap: nowrap !important; /* Force scroll on mobile */
    overflow-x: auto !important; 
    width: 100vw !important; 
    margin-left: 0;
    padding: 10px 20px;
    justify-content: flex-start !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; 
  }
  .tag-cloud::-webkit-scrollbar { display: none; }

  .hero-container, .news-section { width: 92% !important; margin: 0 auto; }
  .material-hero-card { width: 100%; }
  
  .news-feature-card { flex-direction: column !important; }
  .feature-img { width: 100% !important; height: 15rem; }
  .feature-content { width: 100% !important; padding: 2rem 1.2rem; }
}
  /* --- MAKE ANYTHING (APPLICATIONS) STYLE --- */
.apps-wrapper {
  width: 90%;
  max-width: 1720px;
  margin: 6rem auto;
  text-align: left;
}

.apps-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; margin-bottom: 2rem; color: #1a1a1a; }
.apps-title span { font-weight: 400; color: #666; }

/* Sub-nav tabs */
.apps-tabs { display: flex; gap: 1rem; margin-bottom: 3rem; overflow-x: auto; padding-bottom: 10px; }
.app-tab { 
  background: transparent; border: 1.5px solid #ddd; padding: 0.6rem 1.2rem; 
  border-radius: 4px; font-size: 0.8rem; font-weight: 600; white-space: nowrap; 
  cursor: pointer; transition: 0.2s;
}
.app-tab.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }

/* Large Hero Card */
.app-hero-card { 
  display: flex; background: #fff; border: 1px solid #eee; 
  border-radius: 1rem; overflow: hidden; height: auto; margin-bottom: 1.5rem; 
}
.app-hero-img { width: 50%; aspect-ratio: 16/10; object-fit: cover; }
.app-hero-content { width: 50%; padding: 4rem; display: flex; flex-direction: column; justify-content: center; }
.app-hero-content h3 { font-size: 2.2rem; margin-bottom: 1.5rem; font-weight: 600; color: #1a1a1a; }
.app-hero-content p { color: #666; line-height: 1.6; margin-bottom: 2.5rem; font-size: 15px; }

/* Sub Grid */
.app-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
.app-small-card { 
  background: #fff; border: 1px solid #eee; border-radius: 0.8rem; 
  overflow: hidden; transition: 0.3s; text-decoration: none;
}
.app-small-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.app-small-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
.app-small-card .card-footer { padding: 1.5rem; font-weight: 600; font-size: 0.9rem; color: #1a1a1a; }

@media (max-width: 1024px) {
  .app-grid { grid-template-columns: repeat(2, 1fr); }
  .app-hero-card { flex-direction: column; }
  .app-hero-img, .app-hero-content { width: 100%; }
  .app-hero-content { padding: 2.5rem; }
}

@media (max-width: 600px) {
  .app-grid { grid-template-columns: 1fr; }
  .app-hero-content h3 { font-size: 1.8rem; }
}
 /* --- UPDATED: GET IN TOUCH BANNER --- */
.get-in-touch-banner {
  /* Increase width to 96% to fill more of the screen left & right */
  width: 100%; 
  max-width: 1800px;
  height: 24rem; /* ~380px */
  margin: 6rem auto 8rem auto;
  
  /* Replace color with your image from assets */
  background: url('/assets/home/banner.png') center/cover no-repeat;
  
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}

/* Add a dark overlay so the white text is easy to read against the image */
.get-in-touch-banner::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.2); /* Adjust opacity (0.2 to 0.5) if image is too bright */
  z-index: 1;
}

.get-in-touch-banner h2 {
  position: relative;
  z-index: 2;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.git-btn-black {
  position: relative;
  z-index: 2;
  background: #000;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 9px;
  font-weight: 700;
  border: none;
  font-size: 0.65rem;
  cursor: pointer;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .get-in-touch-banner {
    width: 98% !important; /* Almost zero white space on mobile */
    height: 18rem;
  }
}
      `}</style>

      <Header />

      <main className="home-main">
        {/* HERO */}
        <section className="hero-container">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/assets/home/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Reinventing Ideas for Sustainability</h1>
            <p>Where IoT, AI & Robotics Come Together</p>
            <div className="hero-btns">
              <button className="h-btn btn-orange">Explore Our Products <span>&gt;</span></button>
              <button className="h-btn btn-outline">EXplore Kiosk <span>&gt;</span></button>
            </div>
          </div>
        </section>

        {/* 7 SQUARE BOXES */}
        <section className="industry-grid">
          {industryItems.map((item, index) => (
            <Link key={index} to={item.link} className="industry-card">
              <span>{item.name}</span>
              <div className="icon-container">
                <img src={item.icon} alt={item.name} className="industry-icon" />
              </div>
            </Link>
          ))}
        </section>

        {/* NEWS */}
        <section className="news-section">
          <h2 className="section-title">Latest News</h2>
          <div className="news-feature-card">
            <img src={featureNews.image} alt="Feature" className="feature-img" />
            <div className="feature-content">
              <span className="news-cat">{featureNews.category}</span>
              <h3 className="news-title">{featureNews.title}</h3>
              <p className="news-desc">{featureNews.desc}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>

          <div className="news-sub-grid">
            {newsItems.map((item, idx) => (
              <a href="#" key={idx} className="small-news-card">
                <img src={item.image} alt={item.title} className="small-news-img" />
                <div className="small-news-content">
                  <span className="news-cat">{item.category}</span>
                  <h4 className="small-news-title">{item.title}</h4>
                </div>
              </a>
            ))}
          </div>

          <div className="news-footer">
            <button className="all-news-btn">READ ALL NEWS &gt;</button>
          </div>
          {/* Add this after Latest News section */}
{/* --- Step 2: Materials Section --- */}
<section className="materials-wrapper">
  <div className="materials-inner">
    <div className="materials-left">
      <h2>Solve Complex Challenges <span>with MyAccess expertise.</span></h2>
    {/* 3. Update the loop to use the new serviceTags object */}
<div className="tag-cloud">
  {serviceTags.map((tag, index) => (
    <div key={index} className="m-tag">
      {/* Icon appears before the name */}
      <img src={tag.icon} alt="" /> 
      {tag.name}
    </div>
  ))}
</div>
      <button className="h-btn btn-orange">Explore all Services <span>&gt;</span></button>
    </div>

   <div className="material-hero-card">
  {/* Replaced img with video tag */}
  <video 
    className="m-hero-img" 
    autoPlay 
    muted 
    loop 
    playsInline
  >
    <source src="/assets/home/hero.mp4" type="video/mp4" />
  </video>

  <div className="m-hero-footer">
    <span style={{fontSize: '0.85rem', fontWeight: '700'}}>BIOCOMPATIBLE Class I and Class II with Form 4B</span>
    <a href="#" style={{color: '#fff', fontWeight: '700', fontSize: '0.8rem', textDecoration: 'none'}}>LEARN MORE &gt;</a>
  </div>
</div>
  </div>
</section>
{/* --- Step 3: Make Anything (Applications) Section --- */}
<section className="apps-wrapper">
  <h2 className="apps-title">Make Anything <span>With MYACCESS Capabilities</span></h2>
  
  {/* Tab Navigation */}
  <div className="apps-tabs">
    {["Products", "Auxiliary Products", "Giveaway Products", "Laboratory And Farms", "Skill Enhancement"].map((nav, i) => (
      <button key={i} className={`app-tab ${i === 0 ? 'active' : ''}`}>{nav}</button>
    ))}
  </div>

  {/* Hero Application Box */}
  <div className="app-hero-card">
    <img src="/assets/home/bamboo lab.jpg.jpeg" className="app-hero-img" alt="App Hero" />
    <div className="app-hero-content">
      <h3>Rapid Prototyping</h3>
      <p>Turn your ideas into high-fidelity prototypes that look and work like final products within a day and bring better products to market faster.</p>
      <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
        <button className="h-btn" style={{background: '#000', color: '#fff', padding: '12px 25px', fontSize: '11px'}}>LEARN MORE</button>
        <a href="#" style={{fontWeight: '700', fontSize: '0.8rem', color: '#000', textDecoration: 'none'}}>WATCH THE WEBINAR NOW &gt;</a>
      </div>
    </div>
  </div>

  {/* 4-Column Grid Below */}
  <div className="app-grid">
    {[
      { title: "Concept Exploration", img: "/assets/home/img1.jpeg" },
      { title: "Looks-Like Prototyping", img: "/assets/home/img2.jpeg" },
      { title: "Functional Prototyping", img: "/assets/home/img3.jpeg" },
      { title: "Product Validation", img: "/assets/home/img4.jpeg" }
    ].map((item, idx) => (
      <a key={idx} href="#" className="app-small-card">
        <img src={item.img} className="app-small-img" alt={item.title} />
        <div className="card-footer">{item.title}</div>
      </a>
    ))}
  </div>
</section>
{/* --- Step 4: Get In Touch Section --- */}
<section className="get-in-touch-banner">
  <h2>Get In Touch</h2>
  <button className="git-btn-black">Find a Reseller</button>
</section>
        </section>
      </main>
      <Footer />
    </div>
  );
}