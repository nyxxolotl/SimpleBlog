import React from "react";
import "./SimpleBlog.css";
import mari from "./pictures/asdffwww.png";
import 'animate.css'; 

function SimpleBlog() {
  return (
    <div className="blog-page">
      <div className="header">
        <p>Home</p>
        <p>About</p>
        <p>Tips</p>
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
              <button className="read-more-bttn">Read more</button>
            </div>
          </div>
          <div className="top-2">
            <h1>02</h1>
            <div>
              <h2>Manage Screen Time and Take Intentional Breaks</h2>
              <p>Long hours in front of screens can lead to mental exhaustion and burnout. Short breaks, eye rest, and stepping away from devices help improve focus, memory, and emotional balance.</p>
              <button className="read-more-bttn">Read more</button>
            </div>
          </div>
          <div className="top-3">
            <h1>03</h1>
            <div>
              <h2>Prioritize Mental Health Like a Technical Skill</h2>
              <p>Mental stability is not optional—it’s a foundation. Practicing mindfulness, getting enough sleep, and asking for help when overwhelmed improves problem-solving, learning efficiency, and long-term success in IT.</p>
              <button className="read-more-bttn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleBlog;