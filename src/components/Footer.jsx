import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { title: "3D Printers", links: ["Form 4", "Form 4B", "Form 4L", "Form 4BL", "Form Auto", "Fuse Series", "Resin 3D Printers", "Industrial 3D Printers", "Compare 3D Printers"] },
  { title: "Post-Processing", links: ["Wash + Cure", "Wash L + Cure L", "Fuse Sift + Fuse Blast", "Finishing Tools"] },
  { title: "Materials", links: ["SLA Resins", "SLS Powders", "General Purpose", "Engineering", "Dental", "Medical", "Casting", "Form X", "Open Material Mode"] },
  { title: "Software", links: ["PreForm", "Dashboard", "Fleet Control"] },
  { title: "Industries", links: ["Engineering", "Manufacturing", "Automotive", "Aerospace", "Dental", "Medical", "Education", "Entertainment", "Jewelry", "Audio"] },
  { title: "Learn", links: ["Applications", "Blog", "Resources", "Events", "ROI Calculator", "Forum"] },
  { title: "Company", links: ["About", "Careers", "Press", "Press Coverage", "Community & Impact", "Contact"] },
  { title: "Support", links: ["Support Resources", "Contact Support", "Accessibility"] },
  { title: "Sales", links: ["Find a Reseller"] },
];

export default function Footer() {
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

        .footer-container {
          display: flex;
          flex-direction: row;
          gap: 40px;
          margin-bottom: 40px;
        }

        /* LEFT SIDE: LOGO & EMAIL */
        .brand-side { flex: 0 0 280px; display: flex; flex-direction: column; gap: 30px; }
        .footer-logo img { height: 22px; filter: brightness(0) invert(1); }

        /* RIGHT SIDE: GRID */
        .links-side {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 20px;
        }

        .link-col h4 { font-size: 14px; font-weight: 700; margin-bottom: 20px; color: #fff; }
        .link-col ul { list-style: none; padding: 0; margin: 0; }
        .link-col li { margin-bottom: 10px; }
        .link-col a { color: #888; text-decoration: none; font-size: 13px; transition: color 0.2s; display: block; }
        .link-col a:hover { color: #fff; }

        /* EMAIL & SOCIALS */
        .email-section { margin-top: 20px; }
        .email-section p { font-size: 13px; font-weight: 500; margin-bottom: 12px; }
        .email-input-wrap {
          display: flex; align-items: center; border-bottom: 1px solid #444;
          padding-bottom: 8px; width: 100%; max-width: 250px;
        }
        .email-input-wrap input { background: transparent; border: none; color: #fff; font-size: 14px; width: 100%; outline: none; }
        .email-input-wrap button { background: transparent; border: none; color: #fff; cursor: pointer; font-size: 18px; }

        .social-row { display: flex; gap: 10px; margin-top: 25px; }
        .social-box {
          width: 32px; height: 32px; background: #fff; border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          color: #000; text-decoration: none; font-weight: 800; font-size: 14px;
        }

        /* BOTTOM SECTION - FIXED FOR DESKTOP ALIGNMENT */
        .footer-bottom {
          padding-top: 40px; 
          border-top: 1px solid #1a1a1a;
          color: #666; 
          font-size: 11px; 
          display: flex; 
          flex-direction: row; /* Horizontal on desktop */
          justify-content: space-between; /* Pulls apart copyright and links */
          align-items: center;
        }
        .legal-links { display: flex; gap: 15px; flex-wrap: wrap; }
        .legal-links a { color: #666; text-decoration: none; }
        .legal-links a:hover { color: #aaa; }

        /* ════════════════════════════════════════
           RESPONSIVE (MOBILE FIX)
        ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .footer-container { flex-direction: column; }
          .links-side { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 600px) {
          .footer-root { padding: 40px 20px; }
          
          /* Stacking the brand/email section at the bottom logic */
          .brand-side { width: 100%; order: 2; margin-top: 40px; }
          .links-side { order: 1; grid-template-columns: repeat(2, 1fr); gap: 30px 15px; }

          .email-input-wrap { max-width: 100%; }

          /* Stack the bottom bar items on mobile only */
          .footer-bottom { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: 20px; 
            border-top: none; 
          }
        }
      `}</style>

      <div className="footer-container">
        {/* BRAND SECTION */}
        <div className="brand-side">
          <div className="footer-logo">
            <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" />
          </div>
          
          <div className="email-section">
            <p>Enter your email address for updates</p>
            <div className="email-input-wrap">
              <input type="email" placeholder="Business email" />
              <button>→</button>
            </div>
            <div className="social-row">
              <a href="#" className="social-box">f</a>
              <a href="#" className="social-box">X</a>
              <a href="#" className="social-box">ig</a>
              <a href="#" className="social-box">yt</a>
              <a href="#" className="social-box">in</a>
            </div>
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="links-side">
          {footerLinks.map((item, idx) => (
            <div key={idx} className="link-col">
              <h4>{item.title}</h4>
              <ul>
  {item.links.map((link, i) => (
    <li key={i}>
      {link === "About" ? (
        <Link to="/about" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : link === "Contact" ? (
        /* Added this logic for the Contact page */
        <Link to="/contact" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : (
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
        <div className="copyright">© MYACCESS 2026</div>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contests and Sweepstakes</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </footer>
  );
}