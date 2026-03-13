import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const footerLinks = [
  { titleKey: "footer_3dprinters", links: ["Form 4", "Form 4B", "Form 4L", "Form 4BL", "Form Auto", "Fuse Series", "Resin 3D Printers", "Industrial 3D Printers", "Compare 3D Printers"] },
  { titleKey: "footer_postprocess", links: ["Wash + Cure", "Wash L + Cure L", "Fuse Sift + Fuse Blast", "Finishing Tools"] },
  { titleKey: "footer_materials", links: ["SLA Resins", "SLS Powders", "General Purpose", "Engineering", "Dental", "Medical", "Casting", "Form X", "Open Material Mode"] },
  { titleKey: "footer_software", links: ["PreForm", "Dashboard", "Fleet Control","Factory Solutions"] },
  { titleKey: "footer_industries", links: ["Engineering", "Manufacturing", "Automotive", "Aerospace", "Dental", "Medical", "Education", "Entertainment", "Jewelry", "Audio"] },
  { titleKey: "footer_learn", links: ["Applications", "Blog", "Resources", "Events", "ROI Calculator", "Forum"] },
  { titleKey: "footer_company", links: ["About", "Careers", "Press", "Press Coverage", "Community & Impact", "Contact"] },
  { titleKey: "footer_support", links: ["Support Resources", "Contact Support", "Accessibility"] },
  { titleKey: "footer_sales", links: ["Contact Sales","Find a Reseller"] },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer-root">
      <style>{`
        .footer-root {
          background: #000;
          color: #fff;
          padding: 60px 5% 40px 5%;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid #1a1a1a;
        }
        .footer-container { display: flex; flex-direction: row; gap: 40px; margin-bottom: 40px; }
        .brand-side { flex: 0 0 280px; display: flex; flex-direction: column; gap: 30px; }
        .footer-logo img { height: 22px; filter: brightness(0) invert(1); }
        .links-side { flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px 20px; }
        .link-col h4 { font-size: 14px; font-weight: 700; margin-bottom: 20px; color: #fff; }
        .link-col ul { list-style: none; padding: 0; margin: 0; }
        .link-col li { margin-bottom: 10px; }
        .link-col a { color: #888; text-decoration: none; font-size: 13px; transition: color 0.2s; display: block; }
        .link-col a:hover { color: #fff; }
        .email-section { margin-top: 20px; }
        .email-section p { font-size: 13px; font-weight: 500; margin-bottom: 12px; }
        .email-input-wrap { display: flex; align-items: center; border-bottom: 1px solid #444; padding-bottom: 8px; width: 100%; max-width: 250px; }
        .email-input-wrap input { background: transparent; border: none; color: #fff; font-size: 14px; width: 100%; outline: none; }
        .email-input-wrap button { background: transparent; border: none; color: #fff; cursor: pointer; font-size: 18px; }
        .social-row { display: flex; gap: 10px; margin-top: 25px; }
        .social-box { width: 32px; height: 32px; background: #fff; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #000; text-decoration: none; font-weight: 800; font-size: 14px; }
        .footer-bottom { padding-top: 40px; border-top: 1px solid #1a1a1a; color: #666; font-size: 11px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; }
        .legal-links { display: flex; gap: 15px; flex-wrap: wrap; }
        .legal-links a { color: #666; text-decoration: none; }
        .legal-links a:hover { color: #aaa; }
        @media (max-width: 1024px) {
          .footer-container { flex-direction: column; }
          .links-side { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .footer-root { padding: 40px 20px; }
          .brand-side { width: 100%; order: 2; margin-top: 40px; }
          .links-side { order: 1; grid-template-columns: repeat(2, 1fr); gap: 30px 15px; }
          .email-input-wrap { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 20px; border-top: none; }
        }
      .social-box img {
  /* Change width to max-width to allow individual overrides */
  max-width: 100%; 
  height: auto;
  display: block;
}
      `}</style>

      <div className="footer-container">
        {/* BRAND SECTION */}
        <div className="brand-side">
          <div className="footer-logo">
            <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" />
          </div>
          <div className="email-section">
            <p>{t("enter_email")}</p>
            <div className="email-input-wrap">
              <input type="email" placeholder={t("email_placeholder")} />
              <button>→</button>
            </div>
      <div className="social-row">
  <a href="https://facebook.com" className="social-box" target="_blank" rel="noreferrer">
    {/* Increased size for Facebook */}
    <img src="/assets/footer/facebook@3x.png" alt="Facebook" style={{ width: '30px' }} />
  </a>
  
  <a href="https://x.com" className="social-box" target="_blank" rel="noreferrer">
    <img src="/assets/footer/twitter@3x.png" alt="X" style={{ width: '18px' }} />
  </a>
  
  <a href="https://instagram.com" className="social-box" target="_blank" rel="noreferrer">
    {/* Increased size for Instagram */}
    <img src="/assets/footer/instagram@3x.png" alt="Instagram" style={{ width: '23px' }} />
  </a>
  
  <a href="https://youtube.com" className="social-box" target="_blank" rel="noreferrer">
    <img src="/assets/footer/youtube@3x.png" alt="YouTube" style={{ width: '25px' }} />
  </a>
  
  <a href="https://linkedin.com" className="social-box" target="_blank" rel="noreferrer">
    <img src="/assets/footer/Linked in @3x.png" alt="LinkedIn" style={{ width: '20px' }} />
  </a>
</div>
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="links-side">
          {footerLinks.map((item, idx) => (
            <div key={idx} className="link-col">
              <h4>{t(item.titleKey)}</h4>
              <ul>
                {item.links.map((link, i) => (
                  <li key={i}>
                    {link === "About" ? (
                      <Link to="/about" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
                    ) : link === "Contact" ? (
                      <Link to="/contact" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
                       ) : link === "Contact Sales" ? (
                      <Link to="/sales" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
                    ) : 
                     link === "Community & Impact" ? (
                      <Link to="/community" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
                    ) : 
                     link === "Careers" ? (
                      <Link to="/careers" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
                    ) :
                    (
                      <a href="#" style={{ color: '#888', textDecoration: 'none' }}>{link}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">{t("copyright")}</div>
        <div className="legal-links">
          <a href="#">{t("privacy")}</a>
          <a href="#">{t("terms")}</a>
          <a href="#">{t("faq")}</a>
        </div>
      </div>
    </footer>
  );
}
