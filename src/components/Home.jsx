import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useLang } from "../context/LanguageContext";

// --- DATA (images/icons untayi, only names translated) ---
const industryItems = [
  { nameKey: "ind_ems",         icon: "/assets/home/Pick And Place@3x.png", link: "#",customWidth: '65%' },
  { nameKey: "ind_robotics",    icon: "/assets/home/Asset 18@3x.png",link: "#", },
  { nameKey: "ind_3dprint",     icon: "/assets/home/3d print_1@3x.png", link: "#",customWidth: '80%' },
  { nameKey: "ind_ai",          icon: "/assets/home/Asset 14@3x.png", link: "#" },
  { nameKey: "ind_m2m",         icon: "/assets/home/Asset 11@3x.png", link: "#" },
  { nameKey: "ind_proddev",     icon: "/assets/home/product@3x.png", link: "#",customWidth: '85%' },
  { nameKey: "ind_allservices", icon: "/assets/home/Asset 15@3x.png", link: "/industries" },
];

const serviceTags = [
  { name: "Soldering & Rework",        icon: "/assets/home/SOLDERING@3x.png",media: "/assets/home/hero.mp4",type: "video" },
  { name: "PCB Design",                icon: "/assets/home/pcb design@3x.png",media: "/assets/home/pcb_image.jpg",type: "photo"   },
  { name: "Embedded Development",      icon: "/assets/home/icon3.png",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "OpenCPU",                   icon: "/assets/home/icon4.png",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "PCB Fabrication",           icon: "/assets/home/fabrication@3x.png",media: "/assets/home/pcb fabrications.png",type: "photo"  },
  { name: "Component Procurement",     icon: "/assets/home/PROCUREMENT@3x.png" ,media: "/assets/home/pcb_image.jpg",type: "photo" },
  { name: "EMS Assembly",              icon: "/assets/home/ems@3x.png",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "Testing & Debugging",       icon: "/assets/home/debug@3x.png" ,media: "/assets/home/pcb_image.jpg",type: "photo" },
  { name: "ESD Compliance Checklist",  icon: "/assets/home/Asset 17.svg",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "Mechanical CAD",            icon: "/assets/home/mcad@3x.png" ,media: "/assets/home/pcb_image.jpg",type: "photo" },
  { name: "3D Printing",               icon: "/assets/home/3d print.svg",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "Plastic Injection Molding", icon: "/assets/home/icon8.png",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "3D Printed Mold",           icon: "/assets/home/icon8.png",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "Fullstack Development",     icon: "/assets/home/fullstack@3x.png",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "Cloud Services",            icon: "/assets/home/cloud.svg" ,media: "/assets/home/pcb_image.jpg",type: "photo" },
  { name: "CI/CD & DevOps",            icon: "/assets/home/devops.svg",media: "/assets/home/pcb_image.jpg",type: "photo"  },
  { name: "Patent Filing Support",     icon: "/assets/home/patent@3x.png",media: "/assets/home/pcb_image.jpg",type: "photo" },
];
const makeAnythingData = [
  {
    // Index 0: Products
    hero: { titleKey: "home_rapid_title", descKey: "home_rapid_desc", linkKey: "home_watch_webinar", image: "/assets/home/bamboo lab1.jpeg" },
    grid: [
      { titleKey: "home_concept",    img: "/assets/home/img1.jpeg" },
      { titleKey: "home_looks",      img: "/assets/home/img2.jpeg" },
      { titleKey: "home_functional", img: "/assets/home/img3.jpeg" },
      { titleKey: "home_validation", img: "/assets/home/img4.jpeg" },
    ]
  },
  {
    // Index 1: Auxiliary Products
    hero: { titleKey: "aux_hero_title", descKey: "aux_hero_desc", linkKey: "aux_link", image: "/assets/home/aux_hero.jpg" },
    grid: [
      { titleKey: "aux_item1", img: "/assets/home/aux1.jpg" },
      { titleKey: "aux_item2", img: "/assets/home/aux2.jpg" },
      { titleKey: "aux_item3", img: "/assets/home/aux3.jpg" },
      { titleKey: "aux_item4", img: "/assets/home/aux4.jpg" },
    ]
  },
  {
    // Index 2: Giveaway Products
    hero: { titleKey: "giveaway_hero_title", descKey: "giveaway_hero_desc", linkKey: "giveaway_link", image: "/assets/home/giveaway_hero.jpg" },
    grid: [
      { titleKey: "giveaway_item1", img: "/assets/home/give1.jpg" },
      { titleKey: "giveaway_item2", img: "/assets/home/give2.jpg" },
      { titleKey: "giveaway_item3", img: "/assets/home/give3.jpg" },
      { titleKey: "giveaway_item4", img: "/assets/home/give4.jpg" },
    ]
  },
  {
    // Index 3: Laboratory And Farms
    hero: { titleKey: "lab_hero_title", descKey: "lab_hero_desc", linkKey: "lab_link", image: "/assets/home/lab_hero.jpg" },
    grid: [
      { titleKey: "lab_item1", img: "/assets/home/lab1.jpg" },
      { titleKey: "lab_item2", img: "/assets/home/lab2.jpg" },
      { titleKey: "lab_item3", img: "/assets/home/lab3.jpg" },
      { titleKey: "lab_item4", img: "/assets/home/lab4.jpg" },
    ]
  },
  {
    // Index 4: Skill Enhancement
    hero: { titleKey: "skill_hero_title", descKey: "skill_hero_desc", linkKey: "skill_link", image: "/assets/home/skill_hero.jpg" },
    grid: [
      { titleKey: "skill_item1", img: "/assets/home/skill1.jpg" },
      { titleKey: "skill_item2", img: "/assets/home/skill2.jpg" },
      { titleKey: "skill_item3", img: "/assets/home/skill3.jpg" },
      { titleKey: "skill_item4", img: "/assets/home/skill4.jpg" },
    ]
  }
];

export default function Home() {
  const { t } = useLang();
  const [activeService, setActiveService] = useState(serviceTags[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0); 
  

  const featureNews = {
    category: t("home_feature_cat"),
    title: t("home_feature_title"),
    desc: t("home_feature_desc"),
    image: "/assets/home/mysafeshutter scene.png"
  };

  const newsItems = [
    { categoryKey: "home_news1_cat", titleKey: "home_news1_title", image: "/assets/home/bamboo lab1.jpeg" },
    { categoryKey: "home_news2_cat", titleKey: "home_news2_title", image: "/assets/home/image_1_4k.png" },
    { categoryKey: "home_news3_cat", titleKey: "home_news3_title", image: "/assets/home/ERP.jpg" },
  ];

  return (
    <div className="home-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; overflow-x: hidden; background: #ffffff; font-family: 'DM Sans', sans-serif; -webkit-text-size-adjust: 100%; }
        .home-main { padding-top: 5.2rem; width: 100%; max-width: 100vw; display: flex; flex-direction: column; align-items: center; margin: 0 auto; }
        .hero-container { position: relative; width: 95%; height: 36.25rem; border-radius: 1.25rem; overflow: hidden; background: #000; display: flex; align-items: center; justify-content: center; text-align: center; color: #fff; }
        .hero-video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; opacity: 0.9; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.2); z-index: 2; }
        .hero-content { position: relative; z-index: 3; max-width: 56rem; padding: 0 1.2rem; }
        .hero-content h1 { font-size: clamp(2rem, 5.5vw, 4.5rem); font-weight: 700; line-height: 1.05; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: -1.5px; }
        .hero-content p { font-size: clamp(1.1rem, 2.2vw, 1.5rem); margin-bottom: 2.5rem; font-weight: 500; }
        .hero-btns { display: flex; gap: 0.9rem; justify-content: center; }
        .h-btn { padding: 1rem 2rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; cursor: pointer; text-transform: uppercase; display: flex; align-items: center; gap: 0.6rem; border: none; transition: 0.3s; }
        .btn-orange { background: #f4531c; color: #fff; }
        .btn-outline { background: transparent; color: #fff; border: 1.5px solid #fff; }
        .h-btn:hover { transform: translateY(-3px); box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.3); }
        .industry-grid { display: grid; grid-template-columns: repeat(7, 1fr); width: 95%; gap: 0.75rem; margin-top: 1.5rem; margin-bottom: 4rem; }
        .industry-card { background: #1a1a1a; border-radius: 0.75rem; padding: 1rem; text-decoration: none; color: #fff !important; aspect-ratio: 1/1; display: flex; flex-direction: column; transition: 0.3s ease; }
        .industry-card:hover { background: #000 !important; color: #fff !important; transform: translateY(-5px); }
        .industry-card span { font-size: 0.75rem; font-weight: 600; opacity: 0.9; margin-bottom: 0.6rem; }
        .icon-container { flex: 1; display: flex; align-items: center; justify-content: center; }
        .industry-icon { width: 50%; height: auto; object-fit: contain; opacity: 0.8; }
        .news-section { width: 90%; margin-bottom: 5rem; }
        .section-title { font-size: 2.375rem; font-weight: 600; color: #1a1a1a; margin-bottom: 2rem; }
        .news-feature-card { display: flex; background: #0f1113; border-radius: 1rem; margin-bottom: 1rem; height: auto; padding: 0.6rem; gap: 0.6rem; align-items: stretch; }
        .feature-img { width: 55%; height: 100%; object-fit: cover; border-radius: 0.75rem; }
        .feature-content { width: 45%; padding: 3rem; display: flex; flex-direction: column; justify-content: center; color: #fff; align-items: flex-start; text-align: left; background: rgba(255,255,255,0.02); border-radius: 0.75rem; }
        .news-cat { font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; color: #999; margin-bottom: 1rem; }
        .news-title { font-size: 1.75rem; font-weight: 500; line-height: 1.2; margin-bottom: 1.2rem; }
        .news-desc { font-size: 0.9rem; color: #ccc; line-height: 1.6; margin-bottom: 2rem; opacity: 0.8; }
        .learn-more-btn { background: #fff; color: #000; font-weight: 700; font-size: 0.7rem; padding: 0.6rem 1.2rem; border-radius: 0.25rem; border: none; cursor: pointer; text-transform: uppercase; }
        .news-sub-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
        .small-news-card { background: #0f1113; border-radius: 0.75rem; text-decoration: none; display: flex; flex-direction: column; padding: 0.5rem; }
        .small-news-img { width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; border-radius: 0.5rem; }
        .small-news-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .small-news-title { color: #fff; font-size: 0.95rem; font-weight: 500; line-height: 1.4; margin-top: 0.6rem; }
        .news-footer { display: flex; justify-content: center; margin-top: 2.5rem; }
        .all-news-btn { background: #f4531c; color: #fff; border: none; padding: 0.875rem 1.8rem; font-weight: 700; font-size: 0.75rem; border-radius: 0.25rem; cursor: pointer; text-transform: uppercase; }
        @media (max-width: 1150px) {
          .industry-grid { display: flex !important; overflow-x: auto !important; width: 100%; padding: 0 5% 1rem 5%; gap: 1rem; -ms-overflow-style: none; scrollbar-width: none; }
          .industry-grid::-webkit-scrollbar { display: none; }
          .industry-card { flex: 0 0 10rem; }
        }
        @media (max-width: 900px) {
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
          .news-footer { margin-top: 2rem; margin-bottom: 2rem; }
        }
        .materials-wrapper { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #1a1a1a; color: #fff; padding: 6rem 0; margin-top: 4rem; display: flex; justify-content: center; overflow: hidden; }
        .materials-inner { width: 90%; display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: center; }
        .materials-left { text-align: left; }
        .materials-left h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); line-height: 1.1; margin-bottom: 2rem; }
        .materials-left h2 span { color: #888; font-weight: 400; }
        .tag-cloud { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 2.5rem; }
        .m-tag { display: flex; align-items: center; gap: 6px; background: #0b0b0b; border: 1px solid #605a5a; padding: 0.3rem 0.6rem; height: 2.2rem; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #cdcccc; flex: 0 0 auto; }
        .m-tag img { width: 23px; height: 23px; object-fit: contain; }
        .m-tag:hover { background: #444; border-color: #f4531c; }
        .material-hero-card { background: #f4531c; border-radius: 1rem; overflow: hidden; width: 100%; }
        .m-hero-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
        .m-hero-footer { padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        @media (max-width: 900px) {
          .materials-inner { display: flex !important; flex-direction: column !important; text-align: center; gap: 3rem; }
          .materials-left { display: flex; flex-direction: column; align-items: center; width: 100%; }
          .tag-cloud { flex-wrap: nowrap !important; overflow-x: auto !important; width: 100vw !important; margin-left: 0; padding: 10px 20px; justify-content: flex-start !important; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .tag-cloud::-webkit-scrollbar { display: none; }
          .material-hero-card { width: 100%; }
        }
        .apps-wrapper { width: 90%; max-width: 1720px; margin: 6rem auto; text-align: left; }
        .apps-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; margin-bottom: 2rem; color: #1a1a1a; }
        .apps-title span { font-weight: 400; color: #666; }
        .apps-tabs { display: flex; gap: 1rem; margin-bottom: 3rem; overflow-x: auto; padding-bottom: 10px; }
        .app-tab { background: transparent; border: 1.5px solid #ddd; padding: 0.6rem 1.2rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600; white-space: nowrap; cursor: pointer; transition: 0.2s; }
        .app-tab.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
        .app-hero-card { display: flex; background: #fff; border: 1px solid #eee; border-radius: 1rem; overflow: hidden; height: auto; margin-bottom: 1.5rem; }
        .app-hero-img { width: 50%; aspect-ratio: 16/10; object-fit: cover; }
        .app-hero-content { width: 50%; padding: 4rem; display: flex; flex-direction: column; justify-content: center; }
        .app-hero-content h3 { font-size: 2.2rem; margin-bottom: 1.5rem; font-weight: 600; color: #1a1a1a; }
        .app-hero-content p { color: #666; line-height: 1.6; margin-bottom: 2.5rem; font-size: 15px; }
        .app-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
        .app-small-card { background: #fff; border: 1px solid #eee; border-radius: 0.8rem; overflow: hidden; transition: 0.3s; text-decoration: none; }
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
        .get-in-touch-banner { width: 100%; max-width: 1800px; height: 24rem; margin: 6rem auto 8rem auto; background: url('/assets/home/banner.png') center/cover no-repeat; border-radius: 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #fff; position: relative; overflow: hidden; }
        .get-in-touch-banner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.2); z-index: 1; }
        .get-in-touch-banner h2 { position: relative; z-index: 2; font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 800; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
        .git-btn-black { position: relative; z-index: 2; background: #000; color: #fff; padding: 1rem 2.5rem; border-radius: 9px; font-weight: 700; border: none; font-size: 0.65rem; cursor: pointer; text-transform: uppercase; }
        @media (max-width: 768px) { .get-in-touch-banner { width: 98% !important; height: 18rem; } }
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
            <h1>{t("home_hero_title")}</h1>
            <p>{t("home_hero_sub")}</p>
            <div className="hero-btns">
              <button className="h-btn btn-orange">{t("home_hero_btn1")} <span>&gt;</span></button>
              <button className="h-btn btn-outline">{t("home_hero_btn2")} <span>&gt;</span></button>
            </div>
          </div>
        </section>

        {/* 7 BOXES */}
        <section className="industry-grid">
          {industryItems.map((item, index) => (
            <Link key={index} to={item.link} className="industry-card">
              <span>{t(item.nameKey)}</span>
              <div className="icon-container">
               <img 
  src={item.icon} 
  alt={t(item.nameKey)} 
  className="industry-icon" 
  style={{ 
    width: item.customWidth || '50%', 
    opacity: item.customWidth ? 1 : 0.8 
  }} 
/>
                
              </div>
            </Link>
          ))}
        </section>

        {/* NEWS */}
        <section className="news-section">
          <h2 className="section-title">{t("home_latest_news")}</h2>
          <div className="news-feature-card">
            <img src={featureNews.image} alt="Feature" className="feature-img" />
            <div className="feature-content">
              <span className="news-cat">{featureNews.category}</span>
              <h3 className="news-title">{featureNews.title}</h3>
              <p className="news-desc">{featureNews.desc}</p>
              <button className="learn-more-btn">{t("learn_more_btn")}</button>
            </div>
          </div>

          <div className="news-sub-grid">
            {newsItems.map((item, idx) => (
              <a href="#" key={idx} className="small-news-card">
                <img src={item.image} alt={t(item.titleKey)} className="small-news-img" />
                <div className="small-news-content">
                  <span className="news-cat">{t(item.categoryKey)}</span>
                  <h4 className="small-news-title">{t(item.titleKey)}</h4>
                </div>
              </a>
            ))}
          </div>

          <div className="news-footer">
            <button className="all-news-btn">{t("home_read_all_news")}</button>
          </div>

          {/* Materials Section */}
          <section className="materials-wrapper">
            <div className="materials-inner">
              <div className="materials-left">
                <h2>{t("home_solve_title")} <span>{t("home_solve_sub")}</span></h2>
                <div className="tag-cloud">
                {serviceTags.map((tag, index) => (
  <div key={index} className="m-tag" onClick={() => setActiveService(tag)}>
    <img src={tag.icon} alt="" />
    {tag.name}
  </div>
))}
                </div>
                <button className="h-btn btn-orange">{t("home_explore_services")} <span>&gt;</span></button>
              </div>
             <div className="material-hero-card">
  {activeService.type === "video" ? (
    <video key={activeService.media} className="m-hero-img" autoPlay muted loop playsInline>
      <source src={activeService.media} type="video/mp4" />
    </video>
  ) : (
    <img src={activeService.media} className="m-hero-img" alt={activeService.name} />
  )}
                <div className="m-hero-footer">
                  <span style={{fontSize:'0.85rem',fontWeight:'700'}}>{t("home_biocompat")}</span>
                  <a href="#" style={{color:'#fff',fontWeight:'700',fontSize:'0.8rem',textDecoration:'none'}}>{t("learn_more_btn")} &gt;</a>
                </div>
              </div>
            </div>
          </section>

          {/* Make Anything Section */}
       <section className="apps-wrapper">
  <h2 className="apps-title">{t("home_make_anything")} <span>{t("home_make_anything_sub")}</span></h2>
  
  {/* Tabs Header */}
  <div className="apps-tabs">
    {[t("tab_products"), t("tab_auxiliary"), t("tab_giveaway"), t("tab_lab"), t("tab_skill")].map((nav, i) => (
      <button 
        key={i} 
        className={`app-tab ${activeTabIndex === i ? 'active' : ''}`}
        onClick={() => setActiveTabIndex(i)}
      >
        {nav}
      </button>
    ))}
  </div>
            <div className="app-hero-card">
    <img src={makeAnythingData[activeTabIndex].hero.image} className="app-hero-img" alt="Hero" />
    <div className="app-hero-content">
      <h3>{t(makeAnythingData[activeTabIndex].hero.titleKey)}</h3>
      <p>{t(makeAnythingData[activeTabIndex].hero.descKey)}</p>
      <div style={{display:'flex',gap:'2rem',alignItems:'center'}}>
        <button className="h-btn" style={{background:'#000',color:'#fff',padding:'12px 25px',fontSize:'11px'}}>{t("learn_more_btn")}</button>
        <a href="#" style={{fontWeight:'700',fontSize:'0.8rem',color:'#000',textDecoration:'none'}}>
          {t(makeAnythingData[activeTabIndex].hero.linkKey)}
        </a>
      </div>
    </div>
  </div>

  <div className="app-grid">
    {makeAnythingData[activeTabIndex].grid.map((item, idx) => (
      <a key={idx} href="#" className="app-small-card">
        <img src={item.img} className="app-small-img" alt={t(item.titleKey)} />
        <div className="card-footer">{t(item.titleKey)}</div>
      </a>
    ))}
  </div>
</section>

          {/* Get In Touch */}
          <section className="get-in-touch-banner">
            <h2>{t("home_get_in_touch")}</h2>
            <button className="git-btn-black">{t("find_reseller")}</button>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
