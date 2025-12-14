import { React, useState, useEffect } from "react";
import "./SimpleBlog.css";
import mari from "./pictures/asdffwww.png";
import 'animate.css'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function SimpleBlog() {
  const [showTop1Modal, setTop1Modal] = useState(false);
  const [showTop2Modal, setTop2Modal] = useState(false);
  const [showTop3Modal, setTop3Modal] = useState(false);

  const [showSubTop1Modal, setSubTop1Modal] = useState(false);
  const [showSubTop2Modal, setSubTop2Modal] = useState(false);
  const [showSubTop3Modal, setSubTop3Modal] = useState(false);

  const openTop1Modal = () => { setTop1Modal(true); }
  const openSubTop1Modal = () => { setSubTop1Modal(true); }
  const closeTop1Modal = () => { 
    setTop1Modal(false); 
    setSubTop1Modal(false);
  }

  const openTop2Modal = () => { setTop2Modal(true); }
  const openSubTop2Modal = () => { setSubTop2Modal(true); }
  const closeTop2Modal = () => { 
    setTop2Modal(false); 
    setSubTop2Modal(false);
  }

  const openTop3Modal = () => { setTop3Modal(true); }
  const openSubTop3Modal = () => { setSubTop3Modal(true); }
  const closeTop3Modal = () => { 
    setTop3Modal(false); 
    setSubTop3Modal(false);
  }

  // Lock scrolling when any modal is open
  useEffect(() => {
    if (showTop1Modal || showTop2Modal || showTop3Modal || showSubTop1Modal || showSubTop2Modal || showSubTop3Modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showTop1Modal, showTop2Modal, showTop3Modal, showSubTop1Modal, showSubTop2Modal, showSubTop3Modal]);

  return (
    <div className="blog-page">
      <div className="header">
        <div className="navbar">
          <p>Home</p>
          <p>About</p>
          <p>Tips</p>
          <p>References</p>
        </div>
      </div>
      <div className="hero">
        <div className="hero-text">
          <h1>IT Habits</h1>
          <p className="moon-dance-text">101</p>
        </div>
      </div>
      <img src={mari} className="logo"/>
      <div className="about-section">
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

      <div className="tips-section">
        <h1>Top 3 Habits for Mental Stability</h1>
        <div className="pink-line"/>
        <div className="tips-list">
          <div className="top-1">
            <h1>01</h1>
            <div>
              <h2>Build Small, Consistent Routines</h2>
              <p>Studying, coding, and learning are mentally demanding. Creating small daily routines—like a fixed study start time or a 5-minute planning habit—reduces decision fatigue and stress. Consistency matters more than intensity.</p>
              <button className="learn-more-bttn" onClick={openTop1Modal}>Learn more</button>
            </div>
          </div>
          <div className="top-2">
            <h1>02</h1>
            <div>
              <h2>Manage Screen Time and Take Intentional Breaks</h2>
              <p>Long hours in front of screens can lead to mental exhaustion and burnout. Short breaks, eye rest, and stepping away from devices help improve focus, memory, and emotional balance.</p>
              <button className="learn-more-bttn" onClick={openTop2Modal}>Learn more</button>
            </div>
          </div>
          <div className="top-3">
            <h1>03</h1>
            <div>
              <h2>Prioritize Mental Health Like a Technical Skill</h2>
              <p>Mental stability is not optional—it’s a foundation. Practicing mindfulness, getting enough sleep, and asking for help when overwhelmed improves problem-solving, learning efficiency, and long-term success in IT.</p>
              <button className="learn-more-bttn" onClick={openTop3Modal}>Learn more</button>
            </div>
          </div>
        </div>

        {/* NO 1 ------------- */}
        {showTop1Modal && (
          <div className="modal-overlay" onClick={closeTop1Modal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span onClick={closeTop1Modal}>Close</span>
              <h1>Build Small, Consistent Routines</h1>
              <p>Creating simple habits that protect your mental energy helps to avoid ending up overworking or burning out—especially as an IT student.</p>
              <button className="next-bttn" onClick={openSubTop1Modal}>
                Proceed to tips <NavigateNextIcon />
              </button>
            </div>
          </div>
        )}

        {showSubTop1Modal && (
          <div className="sub-modal-overlay" onClick={closeTop1Modal}>
            <div className="sub-modal-content" onClick={(e) => e.stopPropagation()}>
              <span onClick={closeTop1Modal}>Close</span>
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
              <p></p>
            </div>
          </div>
        )}

        {/* NO 2 ------------- */}
        {showTop2Modal && (
          <div className="modal-overlay" onClick={closeTop2Modal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span onClick={closeTop2Modal}>Close</span>
              <h1>Manage Screen Time and Take Intentional Breaks</h1>
              <p>Creating simple habits that protect your mental energy helps to avoid ending up overworking or burning out—especially as an IT student.</p>
              <button className="next-bttn" onClick={openSubTop2Modal}>
                Proceed to tips <NavigateNextIcon />
              </button>
            </div>
          </div>
        )}

        {showSubTop2Modal && (
          <div className="sub-modal-overlay" onClick={closeTop2Modal}>
            <div className="sub-modal-content" onClick={(e) => e.stopPropagation()}>
              <span onClick={closeTop2Modal}>Close</span>
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
              <p></p>
            </div>
          </div>
        )}

        {/* NO 3 ------------- */}
        {showTop3Modal && (
          <div className="modal-overlay" onClick={closeTop3Modal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span onClick={closeTop3Modal}>Close</span>
              <h1>Prioritize Mental Health Like a Technical Skill</h1>
              <p>Creating simple habits that protect your mental energy helps to avoid ending up overworking or burning out—especially as an IT student.</p>
              <button className="next-bttn" onClick={openSubTop3Modal}>
                Proceed to tips <NavigateNextIcon />
              </button>
            </div>
          </div>
        )}

        {showSubTop3Modal && (
          <div className="sub-modal-overlay" onClick={closeTop3Modal}>
            <div className="sub-modal-content" onClick={(e) => e.stopPropagation()}>
              <span onClick={closeTop3Modal}>Close</span>
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
              <p></p>
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