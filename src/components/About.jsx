import React from "react";
import Header from "./header";
import Footer from "./Footer";

// --- DATA ---
const strengthCards = [
  { 
    title: "Strategy", 
    desc: "Prioritize fresh talent rather than early talent without any bias. Youth has the power to make or destroy the weapon called technology. Their mind is a variable and understands things from a broader perspective.",
    img: "/assets/aboutus/game.jpeg" 
  },
  { 
    title: "Tactic", 
    desc: "Lending hands in the educational sector is the best tactic to explore and inject thoughts into one’s mind. Change in technology may weaken people’s minds, but change in people’s minds can strengthen technology.", 
    img: "/assets/aboutus/chess.jpeg" 
  },
  { 
    title: "Goal", 
    desc: "The main goal is to provide you with experience and wisdom rather than knowledge. But your experience wouldn’t let you leave us.", 
    img: "/assets/aboutus/target.jpeg" 
  }
];

const leaders = [
  { 
    name: "Surya Tamarapalli", 
    role: "Founder", 
    company: "MYACCESS",
    img: "/assets/aboutus/surya img.jpeg" 
  },
  { 
    name: "Naveen Gavara", 
    role: "Co-Founder", 
    company: "MYACCESS",
    img: "/assets/aboutus/naveen img.jpg" 
  }
];

const advisors = [
  { 
    name: "DR. N CHANDRA SHEKAR", 
    role: "GPT Principal", 
    
    bio: "Dr. Shekar provides academic oversight and institutional guidance for cutting-edge research.",
    img: "/assets/aboutus/a1.png" ,
    detailedBio: "Principal of Government Polytechnic Pendurthi and seasoned Head of the Department at the Department of Technical Education, Andhra Pradesh, brings extensive expertise in Mechanical Engineering to MYACCESS Advisory Committee."
  },
  { 
    name: "DR. B. T. KRISHNA", 
    role: "Professor", 
    
    bio: "With decades of experience, Dr. Krishna advises on technological curricula and student strategies.",
    img: "/assets/aboutus/a2.png",
    detailedBio: "Dr. B.T. Krishna, a Professor of Electronics and Communication Engineering at UCEK, JNTUK, brings expertise in Nanoelectronics and Analog VLSI to our Advisory Committee. An acclaimed scholar and a fellow of IEEE and IETE, his guidance is pivotal in steering MYACCESS PRIVATE LIMITED’s innovative endeavors."

  },
  { 
    name: "DR. K. M. CHISTI", 
    role: "Assistant Professor", 
    
    bio: "Dr. Chisti focuses on AI implementation and automation logic for robust systems.",
    img: "/assets/aboutus/a3.png",
    detailedBio: "Md Khwaja Moinuddin Chishty, an esteemed Advisory Committee member at MYACCESS PRIVATE LIMITED and Assistant Professor at GITAM University, is an award-winning inventor and expert in AI, machine learning, and embedded systems."

  },
  { 
    name: "DR. J BHASKAR RAO", 
    role: "Associate Professor", 
    
    bio: "Dr. Rao leads our research initiatives in system optimization and sustainable technology.",
    img: "/assets/aboutus/a4.png",
    detailedBio: "Dr. Bhaskara Rao Jammu, an esteemed Advisory Committee member at MYACCESS PRIVATE LIMITED, is also an Associate Professor at GVP College of Engineering. Specializing in ASIC design and FPGA development."
 
  }
];
const frontlineTeam = [
  { name: "Malla Jaideep", role: "Frontend & Embedded Developer", bio: "Builds responsive and dynamic user interfaces using React and develops embedded solutions for smart devices, delivering seamless and interactive technology experiences across modern web and hardware systems", img: "/assets/aboutus/jaideep.webp" },
  { name: "Vemuri Sai Krishna", role: "Back-End Developer", bio: "Django to build robust, scalable web applications. His deep expertise in Django allows for efficient development of complex, data-driven systems.", img: "/assets/aboutus/sai.png", },
  { name: "Vemagiri Reshma", role: "Hardware  Engineer", bio: "Validates performance and durability of our electronic products through comprehensive stress and functionality tests.", img: "/assets/aboutus/reshma1.jpeg",pos: "center 15%" },
  { name: "Jannela Chandana", role: "Procurement Engineer ", bio: "Plays a crucial role in sourcing and managing the services that support our technological innovations. Ensures the timely acquisition of high-quality materials while maintaining strong and reliable relationships with suppliers.", img: "/assets/aboutus/chandana1.jpeg" },
  { name: "Kalla Viharika", role: "Electronics Engineer", bio: "Core of our product development. Designs and implements circuitry and systems that power our innovative devices.", img: "/assets/aboutus/kalla.jpeg" },
    { name: "Kandi Anusha", role: "Embedded Developer", bio: "Specializes in developing embedded systems, focusing on reliable hardware integration and efficient technology solutions.", img: "/assets/aboutus/anusha.webp" },
    { name: "Gandepalli Uma Maheswari", role: "EMS Technician", bio: "Handles electronic manufacturing and system assembly, ensuring precise component integration and reliable electronic solutions.", img: "/assets/aboutus/uma1.jpeg" },
      { name: "Shaik Naseer Ali", role: "Cloud Engineer", bio: "Builds and manages scalable cloud infrastructure, ensuring secure, reliable, and high-performance systems for modern applications.", img: "/assets/aboutus/ali.jpeg", pos: "center 15%", 
  // Use negative to move LEFT, positive to move RIGHT
  moveX: "-10px", 
  scale: 1.1},

  { name: "Siripina Gopi", role: "Front-End Developer", bio: "Creates modern, responsive web interfaces focused on performance, usability, and seamless user experience across different platforms.", img: "/assets/aboutus/gopi.png",pos: "center 15%" },


];
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
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
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export default function About() {
  const [selectedAdviser, setSelectedAdviser] = React.useState(null);
  return (
    <div className="about-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }

        .about-main { padding-top: 100px;  padding-bottom: 40px;width: 100%; display: flex; flex-direction: column; align-items: center; }

        /* General Section Helper */
        .sec-wrap { width: 90vw; max-width: 1300px; margin-bottom: 80px; }
        .centered-text { text-align: center; max-width: 900px; margin: 0 auto 50px auto; }
       .centered-text h1, .centered-text h2 { 
  font-size: clamp(28px, 4vw, 42px); 
  font-weight: 600; 
  line-height: 1.2; 
  /* Increase this to 60px to push the description text down */
  margin-bottom: 20px; 
}

        /* SECTION 1: Intro with Video */
        .intro-flex { display: flex; gap: 60px; align-items: center; }
        .intro-video { flex: 1.3; aspect-ratio: 16/9; background: #eee; border-radius: 4px; overflow: hidden; }
        .intro-text { flex: 1; font-size: 15px; line-height: 1.7; color: #333; }
        .intro-text p { margin-bottom: 25px; }

        /* SECTION 2: Who We Are */
        .who-flex { display: flex; gap: 80px; align-items: center; }
        .who-text { flex: 1; }
        .who-text h2 { font-size: 48px; font-weight: 700; margin-bottom: 30px; }
        .who-img-side { flex: 1.2; position: relative; }
        .who-photo { width: 100%; border-radius: 4px; z-index: 2; position: relative; }
        .top-decor { position: absolute; width: 60px; height: 60px; background: #0056b3; top: -20px; left: -20px; z-index: 1; }
        .blue-decor { position: absolute; width: 100px; height: 100px; background: #0056b3; bottom: -20px; right: -20px; z-index: 3; }

        /* SECTION 3: Awards */
        .awards-row { display: flex; justify-content: center; gap: 60px; align-items: center; margin-bottom: 40px; flex-wrap: wrap; }
        .award-img { height: 180px; opacity: 0.99; }
        .outline-pill { border: 1.5px solid #0056b3; color: #0056b3; padding: 12px 35px; border-radius: 25px; font-weight: 600; cursor: pointer; background: transparent; font-size: 13px; }

        /* SECTION 4: Blue Stats Bar */
        .stats-bar { width: 100vw; background: #0056b3; color: white; padding: 10px 4%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-bottom: 100px; }
        .stat-item { text-align: center; }
       .stat-item h3 { 
  font-size: clamp(48px, 8vw, 80px); /* Very large impact font */
  font-weight: 500; 
  margin-bottom: -7px; 
  font-family: serif; /* Matches the clean look in your image */
}

.stat-item p { 
  font-size: 16px; 
  font-weight: 500; 
  color: #ffffff; 
  text-transform: capitalize;
}

        /* SECTION 5: Strength Section */
        .strength-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 60px; }
        .strength-card { text-align: left; }
        .strength-card img { width: 100%; border-radius: 4px; margin-bottom: 20px; }
        .strength-card h4 { font-size: 20px; margin-bottom: 15px; color: #1a1a1a; font-weight: 500; }
        .strength-card p { font-size: 14px; line-height: 1.6; color: #333; }

        .strength-split { display: grid; grid-template-columns: 1fr 2.5fr; gap: 60px; align-items: flex-start; margin-top: 80px; }
        .strength-split h2 { font-size: 48px; font-weight: 700; }
        .strength-split p { font-size: 15.5px; line-height: 1.8; color: #1a1a1a; }

        /* SECTION 6: LEADERSHIP & ADVISORY (FIXED COMPACT SIZE) */
        .person-grid { display: flex; justify-content: center; gap: 30px; margin-bottom: 10px; flex-wrap: wrap; }
        
        .person-card {
          width: 270px; /* Small size kept as requested */
          text-align: left; /* Left align text for readability */
          background: #fff;
        /* border: 0.5px solid #ddd;*/
          border-radius: 8px;
          padding: 15px 15px 30px 15px; 
          display: flex;
          flex-direction: column;
        }
        
        .person-img {
          width: 100%; 
          aspect-ratio: 1 / 1.2; 
          border-radius: 4px;
          margin-bottom: 15px;
          object-fit: cover; 
        }
        
        .person-name { font-size: 15px; font-weight: 700; margin-bottom: 5px; color: #1a1a1a; }
        .person-role { font-size: 13px; color: #666; font-weight: 500; margin-bottom: 4px; }
        .person-company { font-size: 11px; font-weight: 700; color: #000; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 12px; }
        .person-bio { font-size: 13px; line-height: 1.5; color: #444; margin-bottom: 15px; flex: 1; }
        .lm-link { font-size: 13px; color: #0056b3; font-weight: 700; text-decoration: none; }

        .section-header { font-size: 38px; font-weight: 700; text-align: center; margin-bottom: 50px; text-transform: uppercase; letter-spacing: 1px; }

        /* RESPONSIVE */
       /* ════════════════════════════════════════
   UPDATED MOBILE RESPONSIVE FIXES
════════════════════════════════════════ */
@media (max-width: 1024px) {
  /* 1. Fix for Intro: Adds gap between YouTube video and text */
  .intro-flex { 
    flex-direction: column; 
    display: flex;
    text-align: center; 
    gap: 40px !important; /* Forces a clear gap below the video */
  }
  .intro-video {
    width: 100%;
    margin-bottom: 10px; /* Extra breathing room */
  }

  /* 2. Fix for Who We Are: Stops text from sitting on the image/decor */
  .who-flex { 
    flex-direction: column; 
    display: flex;
    text-align: center; 
    gap: 60px !important; /* Pushes the image container down away from text */
  }
  
  .who-text {
    width: 100%;
  }

  /* 3. Breathing room for the absolute blue decorative boxes */
  .who-img-side { 
    width: 85% !important; 
    margin: 20px auto 0 auto !important; 
    padding: 20px 0; /* Ensures decors have space */
  }

  .strength-split { flex-direction: column; display: block; text-align: center; }
  .strength-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
}
        @media (max-width: 768px) {
          .strength-grid { grid-template-columns: 1fr; }
          .stats-bar { grid-template-columns: 1fr; }
          .strength-split h2 { font-size: 32px; margin-bottom: 20px; }
          .section-header { font-size: 26px; }
          .person-card { margin: 0 auto; }
        }
          /* --- FRONTLINE TEAM SECTION --- */
.frontline-header { 
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start; 
  gap: 50px; 
  margin-bottom: 50px; 
  text-align: left;
}
.frontline-header h2 { font-size: clamp(32px, 5vw, 52px); font-weight: 700; flex: 1.2; color: #1a1a1a; }
.frontline-header p { flex: 1; font-size: 15.5px; line-height: 1.6; color: #333; margin-top: 10px; }

/* The blue dashed line under the header */
.divider-line { 
  width: 100%; 
  height: 2px; 
  background: repeating-linear-gradient(90deg, #000080, #000080 4px, transparent 4px, transparent 8px); 
  margin-bottom: 60px; 
  opacity: 0.3;
}

/* 2-Column Grid for the team members */
.frontline-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 60px 40px; 
  width: 100%;
}

.frontline-card { 
  display: flex; 
  gap: 25px; 
  align-items: center; 
}

/* This creates the slanted (parallelogram) frame for the photo */
/* 1. This container holds the slanted shape */
.frontline-img-wrap { 
  width: 190px;         /* Width */
  height: 240px;        /* Increased height to fit portrait photos */
  flex-shrink: 0; 
  /* Adjusted slant for the taller box */
  clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); 
  overflow: hidden; 
  background: #f5f5f5;
}

.frontline-img-wrap img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  /* We will set object-position dynamically in the JSX below */
  transition: transform 0.3s ease;
}

/* 3. Optional: Add a hover effect so users can see the whole photo */
.frontline-card:hover .frontline-img-wrap img {
  transform: scale(1.1);
}

.frontline-info { text-align: left; flex: 1; }
.frontline-info h3 { color: #000080; font-size: 22px; font-weight: 700; margin-bottom: 5px; }
.frontline-info .role { font-weight: 700; font-size: 18px; color: #1a1a1a; margin-bottom: 12px; }
.frontline-info .bio { font-size: 14px; color: #444; line-height: 1.5; }

/* RESPONSIVE FOR THIS SECTION */
@media (max-width: 1024px) {
  .frontline-header { flex-direction: column; gap: 20px; }
  .frontline-grid { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 600px) {
  .frontline-card { flex-direction: column; text-align: center; }
  .frontline-info { text-align: center; }
  .frontline-img-wrap { width: 220px; height: 220px; }
}
  /* --- MISSION & VISION SECTION --- */
.mv-section {
  display: flex;
  align-items: center;
  gap: 6rem; /* Large gap between image and text */
  margin-bottom: 8rem;
  width: 90vw;
  max-width: 1300px;
}

/* Flips the layout for the Vision section */
.mv-section.reverse {
  flex-direction: row-reverse;
}

/* Creates the slanted parallelogram frame */
.mv-image-box {
  flex: 1.3;
  height: 400px;
  clip-path: polygon(15% 0, 100% 0, 85% 100%, 0 100%);
  overflow: hidden;
  background: #f5f5f5;
}

.mv-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mv-content {
  flex: 1;
  text-align: left;
}

.mv-content h2 {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.mv-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
}

/* RESPONSIVE FOR THIS SECTION */
@media (max-width: 1024px) {
  .mv-section, .mv-section.reverse {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  .mv-content { text-align: center; }
  .mv-image-box { 
    width: 100%; 
    height: 300px; 
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); /* Slightly less tilt on mobile */
  }
}
  /* Modal Overlay */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.7); z-index: 2000;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}

/* Modal Card */
.modal-card {
  background: #fff; width: 100%; max-width: 900px; 
  padding: 50px; border-radius: 8px; position: relative;
  display: flex; gap: 40px; animation: fadeIn 0.3s ease;
}

.modal-close {
  position: absolute; top: 20px; right: 20px; 
  background: none; border: none; font-size: 24px; cursor: pointer; color: #888;
}

.modal-img { width: 300px; height: 380px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }
.modal-text { flex: 1; text-align: left; }
.modal-text h2 { font-size: 28px; margin-bottom: 5px; color: #1a1a1a; }
.modal-text .role { font-size: 16px; color: #666; margin-bottom: 20px; font-weight: 500; }
.modal-text p { line-height: 1.7; color: #444; font-size: 15px; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

/* Mobile Modal Adjustment */
@media (max-width: 768px) {
  .modal-card { flex-direction: column; padding: 30px; height: 90vh; overflow-y: auto; }
  .modal-img { width: 100%; height: 300px; }
}
      `}</style>

      <Header />

      <main className="about-main">
        {/* Intro */}
        <section className="sec-wrap">
          <div className="centered-text">
            <h1>MyAccess Builds Natural Technology That Turns Ideas into Meaningful Solutions</h1>
          </div>
          <div className="intro-flex">
            <div className="intro-video">
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IT1uBUsOmUY?si=FJR6uzbjM-cmhvFQ" frameBorder="0" allowFullScreen title="About video"></iframe>
            </div>
            <div className="intro-text">
                
                 <p>We want to change the perspective of technology to “Natural Technology”.Our works purely justify that technology doesn’t always kill nature.There is always at least a single problem to a solution. We find the problems even to our solutions and reshape the technology to its good side. </p>
                <p> In order to identify a problem, we first solve it in different ways and then identify different problems. This leaves a margin to gather problems and find an innovative solution that is ever-lasting.</p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="sec-wrap who-flex">
          <div className="who-text">
            <h2>Who We Are</h2>
            <p>We as a team don’t always have people. We also consider places, machines, thoughts, and things as a team because they help in completing us. We are a team in search of a community, who can lead their thoughts in serving every individual giving a broader scope of life to every individual and making technology the means to keep alive togetherness rather than distancing.</p>
          </div>
          <div className="who-img-side">
            <div className="top-decor"></div>
            <img src="/assets/aboutus/team1.jpg" className="who-photo" alt="Who We Are" />
            <div className="blue-decor"></div>
          </div>
        </section>
        {/* --- OUR MISSION SECTION --- */}
<section className="mv-section">
  <div className="mv-image-box">
    {/* Replace with your mission image */}
   <img 
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
      alt="Our Mission" 
    />
  </div>
  <div className="mv-content">
    <h2>Our Mission</h2>
    <p>Give each individual the quality of life and time they deserve for a lifetime.</p>
  </div>
</section>

{/* --- OUR VISION SECTION --- */}
<section className="mv-section reverse">
  <div className="mv-image-box">
    {/* Replace with your vision image */}
    <img 
      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
      alt="Our Vision" 
    />
  </div>
  <div className="mv-content">
    <h2>Our Vision</h2>
    <p>To be the world’s best company shaping the technology more to its silver lining.</p>
  </div>
</section>

        {/* Awards */}
        <section className="sec-wrap" style={{textAlign:'center'}}>
          <div className="awards-row">
            <img src="/assets/aboutus/award1.png" className="award-img" alt="Award" />
            <img src="/assets/aboutus/award2.png" className="award-img" alt="Award" />
            <img src="/assets/aboutus/award3.png" className="award-img" alt="Award" />
          </div>
          <button className="outline-pill">See More Awards</button>
        </section>

        {/* Stats */}
        {/* Stats Section with Count-Up Animation */}
<section className="stats-bar">
  <div className="stat-item">
    <h3><CountUp end={20} />+</h3>
    <p>Projects Completed</p>
  </div>
  
  <div className="stat-item">
    <h3><CountUp end={10} />+</h3>
    <p>Clients</p>
  </div>
  
  <div className="stat-item">
    <h3><CountUp end={5} />+</h3>
    <p>Years Experience</p>
  </div>
</section>

        {/* Strength Section */}
        <section className="sec-wrap">
          <div className="strength-grid">
            {strengthCards.map((c, i) => (
              <div key={i} className="strength-card">
                <img src={c.img} alt={c.title} />
                <h4>{c.title}</h4>
                <p>{c.desc} <strong>&rarr;</strong></p>
              </div>
            ))}
          </div>
          <div className="strength-split">
            <h2>Our Strength</h2>
            <p>At MYACCESS PRIVATE LIMITED, we believe every individual has the potential to make a significant impact, yet we embrace the power of teamwork, understanding that together, we achieve more. Our values are steadfast, guiding us reliably through all challenges. Our team is proactive and committed, always ready with a "We will" attitude, even if just one member takes the lead. We are deeply invested in the educational sector, providing support and resources to foster learning and innovation. Our hiring practices are fair and unbiased, ensuring diversity and inclusion at every level of the company. Above all, we celebrate a mindset that dares to think differently, understanding that a crazy idea today can become tomorrow's breakthrough.</p>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="sec-wrap">
          <h2 className="section-header">Our Leadership</h2>
          {/* Inside 'Our Leadership' Section */}
<div className="person-grid">
  {leaders.map((p, i) => (
    <div key={i} className="person-card" style={{textAlign: 'center'}}> {/* Added center align here */}
      <img src={p.img} alt={p.name} className="person-img" />
      <div className="person-name">{p.name}</div>
      <div className="person-role">{p.role}</div>
      {/* REMOVED: person-company, person-bio, and lm-link */}
    </div>
  ))}
</div>

          <h2 className="section-header">Our Advisory Committee</h2>
        <div className="person-grid">
  {advisors.map((p, i) => (
    <div key={i} className="person-card">
      <img src={p.img} alt={p.name} className="person-img" />
      <div className="person-name">{p.name}</div>
      <div className="person-role">{p.role}</div>
      <p className="person-bio">{p.bio}</p>
      
      {/* Update this link to be a button or onClick trigger */}
      <button 
        onClick={() => setSelectedAdviser(p)} 
        style={{background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer'}}
        className="lm-link"
      >
        Learn More &gt;
      </button>
    </div>
  ))}
</div>
        </section>
        {/* --- OUR FRONTLINE TEAM SECTION --- */}
<section className="sec-wrap">
  <div className="frontline-header">
    <h2>Our Frontline Team</h2>
    <p>
      At MYACCESS PRIVATE LIMITED, our team of experts leads the charge in technology innovation, 
      harnessing AI, IoT, and automation to improve everyday life. Explore the unique skills and 
      stories of our team members in their detailed profiles.
    </p>
  </div>
  
  <div className="divider-line"></div>

  <div className="frontline-grid">
    {frontlineTeam.map((m, i) => (
      <div key={i} className="frontline-card">
        <div className="frontline-img-wrap">
          <img src={m.img} alt={m.name}
          style={{ objectPosition: m.pos || 'center 15%',  transform: `scale(${m.scale || 1}) translateX(${m.moveX || '0px'})`
    }}/>
        </div>
        <div className="frontline-info">
          <h3>{m.name}</h3>
          <div className="role">{m.role}</div>
          <p className="bio">{m.bio}</p>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Commitment */}
        {/* Commitment Section */}
<section className="sec-wrap centered-text">
  <h2>Our Commitment</h2>
  <p>
    At MYACCESS PRIVATE LIMITED, we champion unconventional thinking, urging our team to "think crazy, not different" as we believe unique ideas drive progress. We prioritize identifying and solving problems, upholding a strong commitment to excellence and integrity in everything we do. Our ethos of service extends to all, fueling our deep-rooted patriotism and dedication to community upliftment. We recognize the importance of work-life balance, valuing impactful presence over mere attendance. When challenges arise, we stand ready to support each other, because giving up isn't an option here.

Commitment at MYACCESS means being fully engaged for at least 6 hours each day, ensuring productivity and personal well-being. We foster a culture of innovation through regular brainstorming sessions, knowing that one innovative thought can be more valuable than a thousand good ones. Furthermore, we believe in the importance of play, creating a workplace where fun and memories are integral to our shared success.
  </p>
  <div style={{ marginTop: '40px' }}>
    <button className="outline-pill">Explore Community and Impact Initiatives</button>
  </div>
</section>
{/* Modal Rendering */}
{selectedAdviser && (
  <div className="modal-overlay" onClick={() => setSelectedAdviser(null)}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedAdviser(null)}>&times;</button>
      
      <img src={selectedAdviser.img} alt={selectedAdviser.name} className="modal-img" />
      
      <div className="modal-text">
        <h2 style={{textTransform: 'none', marginBottom: '5px'}}>{selectedAdviser.name}</h2>
        <div className="role" style={{fontSize: '13px', color: '#888', textTransform: 'uppercase', marginBottom: '5px'}}>{selectedAdviser.role}</div>
        {/* <div style={{fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', letterSpacing: '1px'}}>MYACCESS</div> */}
        
        <p style={{fontSize: '14px', color: '#333', marginBottom: '25px'}}>
          {selectedAdviser.detailedBio || selectedAdviser.bio}
        </p>

        {/* Social Icons like in your image */}
        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
           <span style={{fontSize: '18px', cursor: 'pointer'}}>🔗</span>
           <span style={{fontSize: '18px', cursor: 'pointer', fontWeight: 'bold'}}>X</span>
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