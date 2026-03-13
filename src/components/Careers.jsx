import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");

  const openRoles = [
    { title: "Technical Sales Executive - Trilingual (DE+EN+ES/IT/FR)", team: "Global Sales", loc: "Berlin, Germany", type: "Full-time" },
    { title: "Sales Manager - Dental Sector - Germany, Austria, Switzerland", team: "Global Sales", loc: "Berlin, Germany", type: "Full-time" },
    { title: "Technischer Vertriebsmitarbeiter (Berufseinstieg)", team: "Global Sales", loc: "Berlin, Germany", type: "Full-time" },
    { title: "Technical Sales Executive", team: "Global Sales", loc: "Frankfurt, Germany", type: "Full-time" },
    { title: "Dental Sales Representative - German speaking", team: "Global Sales", loc: "Berlin, Germany", type: "Full-time" },
  ];

  return (
    <div className="careers-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .careers-wrapper { font-family: 'DM Sans', sans-serif; background: #fff; color: #000; overflow-x: hidden; position: relative; }

        /* --- SCROLLABLE HEADER (Non-Fixed) --- */
        .car-header {
          position: absolute; /* Changed from fixed to absolute so it scrolls away */
          top: 0; width: 100%; height: 70px;
          
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 5%; z-index: 2000; color: #fff;
        }
        .header-brand { display: flex; align-items: center; gap: 12px; }
        .header-brand img { height: 18px; filter: brightness(0) invert(1); }
        .header-brand .divider { width: 1px; height: 20px; background: rgba(255,255,255,0.4); }
        .header-brand span { font-size: 16px; font-weight: 700; }
        
        .header-nav { display: flex; gap: 20px; align-items: center; }
        .header-nav a { color: #fff; text-decoration: none; font-size: 13px; font-weight: 500; transition: 0.3s; }
        .header-nav .back-link { font-weight: 700; border: 1px solid #fff; padding: 6px 12px; border-radius: 4px; }

        /* --- HERO --- */
        .car-hero {
          height: 80vh; min-height: 550px;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                      url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop') center/cover;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; color: #fff; padding: 70px 10% 0 10%;
        }
       /* --- HERO --- */
.car-hero h1 { 
  font-size: clamp(40px, 8vw, 50px); /* Increased size to match reference */
  font-weight: 700; 
  margin-bottom: 6px; 
}

.car-hero p { 
  font-size: clamp(20px, 3.5vw, 36px); /* Increased size for the sub-text */
  font-weight: 700; /* Made it bold to match image 1 */
  max-width: 1000px; 
  line-height: 1.2; 
  opacity: 1; /* Pure white look */
  margin-bottom: 30px; 
}
        .hero-play { display: flex; align-items: center; gap: 10px; font-weight: 700; cursor: pointer; }
        .play-btn { background: #f00; width: 50px; height: 35px; border-radius: 6px; display: flex; align-items: center; justify-content: center; }

        /* --- ROLES SECTION --- */
        .roles-section { padding: 80px 5% 20px 5%; max-width: 1400px; margin: 0 auto; text-align: center; }
        .roles-section h2 { font-size: clamp(28px, 5vw, 42px); margin-bottom: 40px; }
        
        .filter-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 50px; }
        .filter-grid input, .filter-grid select { 
          padding: 14px 20px; border-radius: 30px; border: 1px solid #ddd; background: #f9f9f9; outline: none; width: 100%;
        }

        .roles-table { width: 100%; border-collapse: collapse; text-align: left; }
        .roles-table thead tr { border-bottom: 3.5px solid #000; }
        .roles-table th { padding: 15px; font-weight: 700; font-size: 14px; }
        .roles-table td { padding: 25px 15px; border-bottom: 1px solid #eee; }
        .job-title-link { font-weight: 700; color: #000; text-decoration: none; font-size: 16px; }
        
        .disclaimer { font-size: 12px; color: #777; font-style: italic; text-align: left; margin-top: 30px; line-height: 1.6; }

        /* --- CULTURE VIDEOS --- */
        .video-sec { padding: 30px 5% 100px 5%; text-align: center; background: #fff; }
        .video-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1400px; margin: 40px auto; }
        .thumb-box { width: 100%; aspect-ratio: 16/9; border-radius: 6px; overflow: hidden; position: relative; background: #000; }
        .thumb-box img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
        .video-card h4 { margin-top: 15px; font-size: 16px; font-weight: 700; text-align: center; }

        /* --- HACKATHON --- */
        .hack-sec { display: flex; padding: 20px 5% 100px 5%; gap: 50px; align-items: center; max-width: 1400px; margin: 0 auto; }
        .hack-text { flex: 1; text-align: left; }
        .hack-text h2 { font-size: 36px; margin-bottom: 20px; font-weight: 700; }
        .hack-text p { font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 15px; }
        .hack-vid { flex: 1; border: 8px solid #0060d0; border-radius: 4px; overflow: hidden; }

        /* --- COMMUNITY --- */
        .comm-sec { padding: 80px 5%; text-align: center; background: #f9f9f9; }
        .comm-img { width: 100%; max-width: 900px; border-radius: 8px; margin: 30px 0; }
        .blue-pill { background: #0060d0; color: #fff; padding: 14px 40px; border-radius: 30px; text-decoration: none; font-weight: 700; display: inline-block; }

        /* --- CTA FOOTER --- */
        .car-cta { background: #000; color: #fff; padding: 80px 5%; display: flex; justify-content: space-between; align-items: center; }
        .cta-content h2 { font-size: clamp(24px, 5vw, 36px); max-width: 500px; margin-bottom: 30px; }
        .awards { display: flex; gap: 20px; }
        .awards-item { border: 1px solid #444; padding: 20px; font-size: 11px; font-weight: 700; width: 110px; opacity: 0.7; }

        /* --- MOBILE --- */
        @media (max-width: 1024px) {
          .video-grid { grid-template-columns: repeat(2, 1fr); }
          .filter-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .hack-sec { flex-direction: column; text-align: center; }
          .filter-grid { grid-template-columns: 1fr; }
          .car-cta { flex-direction: column; text-align: center; gap: 40px; }
          .video-grid { grid-template-columns: 1fr; }
          .roles-table thead { display: none; }
          .roles-table tr { display: block; margin-bottom: 20px; border: 1px solid #eee; padding: 15px; border-radius: 8px; text-align: left; }
          .roles-table td { display: block; border: none; padding: 5px 0; }
        }
      /* --- SOCIAL MEDIA ICONS --- */
.social-row {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}

.social-icon {
  width: 32px; /* Fixed size for the box */
  height: 32px;
  background-color: #ffffff; /* White background for the box */
  border-radius: 6px; /* Slightly rounded corners like the image */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  overflow: hidden; /* Ensures the image doesn't leak out */
  text-decoration: none;
}

.social-icon img {
  max-width: 100%; 
  height: auto;
  display: block;
}

.social-icon:hover {
  transform: translateY(-3px); /* Small lift effect on hover */
}

@media (max-width: 768px) {
  .social-row { justify-content: center; }
}
      `}</style>

      {/* NON-FIXED HEADER (Scrolls with page) */}
      <header className="car-header">
        <div className="header-brand">
          <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" />
          <div className="divider"></div>
          <span>Careers</span>
        </div>
        <nav className="header-nav">
          <a href="#teams">Our Teams</a>
          <a href="#locations">Locations</a>
          <a href="#roles">Open Roles</a>
          <Link to="/" className="back-link">Back To MYACCESS.com</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="car-hero">
        <h1>MYACCESS Careers</h1>
        <p>We build the tools that make it possible <br /> 
            for anyone to bring their ideas to life.</p>
      
      </section>

      {/* ROLES TABLE */}
      <section className="roles-section" id="roles">
        <h2>All Open Roles</h2>
        <div className="filter-grid">
          <input type="text" placeholder="Search for a role..." />
          <select><option>Filter By Team</option></select>
          <select><option>Filter By Location</option></select>
          <select><option>Filter By Type</option></select>
        </div>

        <table className="roles-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Team</th>
              <th>Location</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {openRoles.map((role, i) => (
              <tr key={i}>
                <td><a href="#" className="job-title-link">{role.title}</a></td>
                <td>{role.team}</td>
                <td>{role.loc}</td>
                <td>{role.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="disclaimer">
          To all recruitment agencies: MYACCESS does not accept agency resumes. Please do not forward resumes to our jobs alias or employees. MYACCESS is not responsible for any fees related to unsolicited resumes.
        </p>
      </section>

      {/* CULTURE SECTION */}
      <section className="video-sec">
        <h2>What's it like working at MYACCESS?</h2>
        <p>Hear what our team members have to say.</p>
        <div className="video-grid">
          {[
            { label: "Technical Management", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500" },
            { label: "Software R&D", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500" },
            { label: "Technical Sales", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500" },
            { label: "Product Management", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500" }
          ].map((item, i) => (
            <div key={i} className="video-card">
              <div className="thumb-box">
                <img src={item.img} alt="" />
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'red', padding:'5px 10px', borderRadius:'5px', color:'#fff'}}>▶</div>
              </div>
              <h4>{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* HACKATHON */}
      <section className="hack-sec">
        <div className="hack-text">
          <h2>MYACCESS Annual Hackathon</h2>
          <p>Innovate, collaborate, and create. Our annual hackathon is where the next generation of automation begins.</p>
          <p>Join teams from around the world to solve complex engineering challenges in 48 hours.</p>
        </div>
        <div className="hack-vid">
           <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" alt="Hackathon" style={{width:'100%', display:'block'}} />
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="comm-sec">
        <h2>Learn About our Community Initiatives</h2>
        <p>We are dedicated to expanding access to technology and education globally.</p>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" className="comm-img" alt="Community" />
        <br />
        <Link to="/community" className="blue-pill">Learn More</Link>
      </section>

      {/* CTA FOOTER */}
{/* CTA FOOTER */}
<footer className="car-cta">
  <div className="cta-content">
    <h2>Hear the latest on career opportunities and life at MYACCESS.</h2>
    <a href="#" className="blue-pill">Join our Talent Community</a>
    
    <div className="social-row">
      <a href="https://facebook.com" target="_blank" className="social-icon">
        <img src="/assets/carrers/facebook@3x.png" alt="Facebook" style={{ width: '30px' }} />
      </a>
      <a href="https://twitter.com" target="_blank" className="social-icon">
        <img src="/assets/carrers/twitter@3x.png" alt="X" style={{ width: '20px' }} />
      </a>
      <a href="https://instagram.com" target="_blank" className="social-icon">
        <img src="/assets/carrers/instagram@3x.png" alt="Instagram" style={{ width: '25px' }} />
      </a>
      <a href="https://youtube.com" target="_blank" className="social-icon">
        <img src="/assets/carrers/youtube@3x.png" alt="YouTube" style={{ width: '25px' }} />
      </a>
      <a href="https://linkedin.com" target="_blank" className="social-icon">
        <img src="/assets/carrers/Linked in @3x.png" alt="LinkedIn" style={{ width: '24px' }} />
      </a>
    </div>
  </div>

  <div className="awards">
     <div className="awards-item">GREAT PLACE TO WORK</div>
     <div className="awards-item">TOP 100 INSPIRING</div>
  </div>
</footer>
    </div>
  );
}