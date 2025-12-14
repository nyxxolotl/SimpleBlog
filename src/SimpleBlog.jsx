import { React, useState, useEffect, useRef } from "react";
import "./SimpleBlog.css";
import mari from "./pictures/asdffwww.png";
import 'animate.css'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function SimpleBlog() {
  const [showTop1Modal, setTop1Modal] = useState(false);
  const [showTop2Modal, setTop2Modal] = useState(false);
  const [showTop3Modal, setTop3Modal] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const tipsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const openTop1Modal = () => { setTop1Modal(true); }
  const closeTop1Modal = () => { setTop1Modal(false); }

  const openTop2Modal = () => { setTop2Modal(true); }
  const closeTop2Modal = () => { setTop2Modal(false); }

  const openTop3Modal = () => { setTop3Modal(true); }
  const closeTop3Modal = () => { setTop3Modal(false); }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "tips", ref: tipsRef }
      ];

      let currentSection = "home";

      sections.forEach(section => {
        if (
          section.ref.current &&
          scrollPosition >= section.ref.current.offsetTop
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling when any modal is open
  useEffect(() => {
    if (showTop1Modal || showTop2Modal || showTop3Modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showTop1Modal, showTop2Modal, showTop3Modal]);

  return (
    <div className="blog-page">
      <div className="header">
        <div className="navbar">
          <p
            className={activeSection === "home" ? "active" : ""}
            onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
          >
            Home
          </p>
          <p
            className={activeSection === "about" ? "active" : ""}
            onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
          >
            About
          </p>
          <p
            className={activeSection === "tips" ? "active" : ""}
            onClick={() => tipsRef.current.scrollIntoView({ behavior: "smooth" })}
          >
            Tips
          </p>
        </div>
      </div>
      <div className="hero" ref={homeRef}>
        <div className="hero-text">
          <h1>IT Habits</h1>
          <p className="moon-dance-text">101</p>
        </div>
      </div>
      <img src={mari} className="logo"/>
      <div className="about-section" ref={aboutRef}>
        <h1>About</h1>
        <div className="about-content">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p>IT Habits 101 is a blog for IT students who want to maintain mental stability while handling academic pressure, deadlines, and long hours of coding.</p>
            <p>Inspired by the idea that small habits lead to big change, this blog shares simple, practical tips to reduce stress, prevent burnout, and build a healthier mindset—one habit at a time.</p>
            <p>Because strong mental habits are just as important as strong technical skills.</p>
          </div>
          <div className="magenta-line"/>
        </div>
      </div>

      <div className="tips-section" ref={tipsRef}>
        <h1>Top 3 Habits for Mental Stability</h1>
        <div className="pink-line"/>
        <div className="tips-list">
          <div className="top-1">
            <h1>01</h1>
            <div>
              <h2>Build Small, Consistent Routines</h2>
              <p>Studying, coding, and learning are mentally demanding. Creating small daily routines—like a fixed study start time or a 5-minute planning habit—reduces decision fatigue and stress. Consistency matters more than intensity.</p>
              <button className="tips-bttn" onClick={openTop1Modal}>Tips <NavigateNextIcon /></button>
            </div>
          </div>
          <div className="top-2">
            <h1>02</h1>
            <div>
              <h2>Manage Screen Time and Take Intentional Breaks</h2>
              <p>Long hours in front of screens can lead to mental exhaustion and burnout. Short breaks, eye rest, and stepping away from devices help improve focus, memory, and emotional balance.</p>
              <button className="tips-bttn" onClick={openTop2Modal}>Tips <NavigateNextIcon /></button>
            </div>
          </div>
          <div className="top-3">
            <h1>03</h1>
            <div>
              <h2>Prioritize Mental Health Like a Technical Skill</h2>
              <p>Mental stability is not optional—it’s a foundation. Practicing mindfulness, getting enough sleep, and asking for help when overwhelmed improves problem-solving, learning efficiency, and long-term success in IT.</p>
              <button className="tips-bttn" onClick={openTop3Modal}>Tips <NavigateNextIcon /></button>
            </div>
          </div>
        </div>

        {/* NO 1 ------------- */}
        {showTop1Modal && (
          <div className="modal-overlay" onClick={closeTop1Modal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="close-modal-area"><span onClick={closeTop1Modal}>Close</span></div>
              <h3>1. Set a Fixed Start and Stop Time</h3>
              <p>Choose a regular time to start studying or coding—and more importantly, a time to stop. This helps prevent overworking and protects your personal time.</p>
              <h3>2. Break Tasks into Small Sessions</h3>
              <p>Instead of long, exhausting study hours, work in short sessions (25–50 minutes) with brief breaks. Small sessions are easier to maintain and reduce mental fatigue.</p>
              <h3>3. Add a Non-Academic Daily Habit</h3>
              <p>Include at least one habit unrelated to IT—like walking, stretching, listening to music, or journaling. This helps your mind reset and prevents burnout.</p>
              <h3>4. Use a Simple Daily Plan</h3>
              <p>List only 3–5 tasks per day. Keeping your plan small avoids overwhelm and makes progress feel achievable.</p>
              <h3>5. Create a “Shutdown” Routine</h3>
              <p>End your day with a short routine—review what you’ve done, prepare tasks for tomorrow, then step away from screens. This helps your brain rest and improves sleep quality.</p>
            </div>
          </div>
        )}

        {/* NO 2 ------------- */}
        {showTop2Modal && (
          <div className="modal-overlay" onClick={closeTop2Modal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="close-modal-area"><span onClick={closeTop2Modal}>Close</span></div>
              <h3>1. Use Time-Based Study Sessions</h3>
              <p>Study or code in short, focused blocks (25–50 minutes), then take a 5–10 minute break. This prevents mental fatigue and helps maintain concentration.</p>
              <h3>2. Set Break Reminders</h3>
              <p>Use alarms, timers, or productivity apps to remind yourself to stand up, stretch, or rest your eyes—especially during long coding sessions.</p>
              <h3>3. Take Active Breaks</h3>
              <p>Avoid staying on your phone during breaks. Instead, stretch, walk, drink water, or do light movement to help your body and mind recover.</p>
              <h3>4. Limit Non-Essential Screen Use</h3>
              <p>Reduce unnecessary screen time like excessive social media or gaming after long academic sessions. This helps your brain truly rest.</p>
              <h3>5. Protect Your Night Routine</h3>
              <p>Avoid screens at least 30–60 minutes before sleeping. This improves sleep quality and supports better mental stability the next day.</p>
            </div>
          </div>
        )}

        {/* NO 3 ------------- */}
        {showTop3Modal && (
          <div className="modal-overlay" onClick={closeTop3Modal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ width: "1000px"}}>
              <div className="close-modal-area"><span onClick={closeTop3Modal}>Close</span></div>
              <h3>1. Treat Mental Health as a Skill to Practice</h3>
              <p>Just like coding, mental health improves with practice. Set time to reflect, manage stress, and rest—these are skills, not weaknesses.</p>
              <h3>2. Normalize Asking for Help</h3>
              <p>Debugging alone is hard—and so is handling stress alone. Talk to friends, classmates, mentors, or counselors when things feel overwhelming.</p>
              <h3>3. Get Enough Sleep</h3>
              <p>Sleep directly affects focus, memory, and problem-solving. Protect your sleep schedule as seriously as you protect project deadlines.</p>
              <h3>4. Practice Mindfulness or Self-Check-Ins</h3>
              <p>Take a few minutes each day to check how you’re feeling. Simple breathing exercises or journaling can reduce anxiety and mental overload.</p>
              <h3>5. Set Realistic Expectations</h3>
              <p>Not every task has to be perfect. Learn to set achievable goals and accept progress over perfection to avoid burnout.</p>
              <h3>6. Separate Your Identity from Your Output</h3>
              <p>Your worth is not defined by grades, bugs, or failed projects. Mistakes are part of learning—not a reflection of your value.</p>
            </div>
          </div>
        )}
      </div>

      <div className="references-section">
        <div className="magenta-horizontal-line"/>
        <h1>References</h1>
        <div className="ref-list">
          <ul>
            <li>Clear, J. (2018). Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones. Avery Publishing.</li>
            <li>World Health Organization (WHO). (2022). Mental health at work.</li>
            <li>American Psychological Association (APA). (2020). Stress effects on the body and behavior.</li>
            <li>Harvard Medical School. (2019). The importance of breaks and mental rest for productivity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SimpleBlog;