import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

const industries = [
  { nameKey: "ind_engineering",    img: "/assets/industry/engineer_3dprinter_4k.png" },
  { nameKey: "ind_manufacturing",  img: "/assets/industry/robotic_3dprinting_4k.png" },
  { nameKey: "ind_automotive",     img: "/assets/industry/car_factory_4k.png" },
  { nameKey: "ind_aerospace",      img: "/assets/industry/aircraft_wind_tunnel_4k.png" },
  { nameKey: "ind_dental",         img: "/assets/industry/dental_model_4k.png" },
  { nameKey: "ind_medical",        img: "/assets/industry/medical_team_4k.png" },
  { nameKey: "ind_education",      img: "/assets/industry/engineers_demo_4k.png" },
  { nameKey: "ind_entertainment",  img: "/assets/industry/statue_model_4k.png" },
  { nameKey: "ind_jewelry",        img: "/assets/industry/product_1_4k.png" },
  { nameKey: "ind_audio",          img: "/assets/industry/product_2_4k.png" },
];

export default function Industries() {
  const { t } = useLang();

  return (
    <div className="ind-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }
        .ind-main { padding-top: 100px; width: 100%; max-width: 100vw; display: flex; flex-direction: column; align-items: center; }
        .ind-intro { text-align: center; max-width: 850px; padding: 60px 20px; }
        .ind-intro h1 { font-size: clamp(28px, 4vw, 42px); font-weight: 700; line-height: 1.2; margin-bottom: 25px; color: #1a1a1a; }
        .ind-intro p { font-size: 16px; line-height: 1.6; color: #444; font-weight: 400; }
        .ind-grid-title { font-size: 28px; font-weight: 700; margin-bottom: 40px; color: #1a1a1a; }
        .ind-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; width: 90vw; max-width: 1300px; margin-bottom: 80px; }
        .ind-card { text-decoration: none; background: #f8f8f8; border-radius: 4px; overflow: hidden; transition: transform 0.3s ease; display: flex; flex-direction: column; }
        .ind-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .ind-card-img { width: 100%; height: 250px; object-fit: cover; }
        .ind-card-text { padding: 25px; background: #f8f8f8; }
        .ind-card-text h3 { font-size: 19px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; }
        .ind-card-text span { font-size: 13.5px; font-weight: 600; color: #0056b3; display: flex; align-items: center; gap: 5px; }
        .ind-banner { width: 90vw; max-width: 1300px; background: #f2f2f2; padding: 25px 40px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 100px; }
        .banner-left { display: flex; align-items: center; gap: 20px; }
        .banner-icon { width: 45px; height: 45px; background: #0056b3; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
        .banner-text h4 { font-size: 16px; margin-bottom: 5px; color: #1a1a1a; }
        .banner-text p { font-size: 14px; color: #666; }
        .banner-btn { background: #0056b3; color: white; border: none; padding: 12px 25px; border-radius: 25px; font-weight: 600; cursor: pointer; font-size: 13px; }
        .scaling-sec { text-align: center; padding: 60px 20px 0 20px; width: 100%; }
        .scaling-sec h2 { font-size: clamp(32px, 5vw, 56px); font-weight: 700; margin-bottom: 30px; max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.1; }
        .scaling-sec p { max-width: 700px; margin: 0 auto 40px auto; color: #444; line-height: 1.6; }
        .scaling-btns { display: flex; gap: 15px; justify-content: center; margin-bottom: 60px; }
        .scale-btn { padding: 14px 28px; border-radius: 25px; font-weight: 600; font-size: 14px; cursor: pointer; border: none; }
        .btn-blue { background: #0056b3; color: white; }
        .btn-outline { background: transparent; border: 1.5px solid #0056b3; color: #0056b3; }
        .product-hero-img { width: 85%; max-width: 1400px; height: auto; display: block; margin: 0 auto; }
        @media (max-width: 1100px) { .ind-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .ind-grid { grid-template-columns: 1fr; }
          .ind-banner { flex-direction: column; text-align: center; gap: 20px; }
          .banner-left { flex-direction: column; }
          .scaling-btns { flex-direction: column; align-items: center; }
          .scale-btn { width: 100%; max-width: 300px; }
          .product-hero-img { width: 95%; }
        }
      `}</style>

      <Header />

      <main className="ind-main">
        <section className="ind-intro">
          <h1>{t("ind_headline")}</h1>
          <p>{t("ind_subtext")}</p>
        </section>

        <h2 className="ind-grid-title">{t("select_industry")}</h2>
        <div className="ind-grid">
          {industries.map((item, idx) => (
            <a key={idx} href="#" className="ind-card">
              <img src={item.img} alt={t(item.nameKey)} className="ind-card-img" />
              <div className="ind-card-text">
                <h3>{t(item.nameKey)}</h3>
                <span>{t("learn_more")} &gt;</span>
              </div>
            </a>
          ))}
        </div>

        <div className="ind-banner">
          <div className="banner-left">
            <div className="banner-icon">📞</div>
            <div className="banner-text">
              <h4>{t("ind_banner_title")}</h4>
              <p>{t("ind_banner_sub")}</p>
            </div>
          </div>
          <button className="banner-btn">{t("find_reseller")}</button>
        </div>

        <section className="scaling-sec">
          <h2>{t("scaling_title")}</h2>
          <p>{t("scaling_sub")}</p>
          <div className="scaling-btns">
            <button className="scale-btn btn-blue">{t("explore_printers")}</button>
            <button className="scale-btn btn-outline">{t("find_reseller")}</button>
          </div>
          <img src="/assets/industry/product-lineup.png" alt="Products" className="product-hero-img" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
