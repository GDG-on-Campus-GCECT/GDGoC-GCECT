import React from "react";
import InteractiveGrid from "./InteractiveGrid";
import Button from "../common/Button";
import ColorfulTitle from "../common/ColorfulTitle";
import EventCountdown from "./EventCountdown";
import villagerImage from "../../assets/images/floating/prize.png";
import ToolManager from "./ToolManager"; // 👈 Import the ToolManager
import "./HeroSection.css"; // Ensure your CSS is here

function HeroSection() {
  return (
    <div className="hero-minecraft">
      <InteractiveGrid />
      <div className="hero-content text-center">
        <EventCountdown />
        <ColorfulTitle mainText="GDG ON CAMPUS" subText="GCECT" />

        <p className="lead text-muted my-4">
          By offering seminars, mentorship initiatives, and forums for
          exchanging insights, we strive to foster a community that embraces
          lifelong learning and the sharing of knowledge.
        </p>

        <a
          href="https://gdg.community.dev/gdg-on-campus-government-college-of-engineering-and-ceramic-technology-kolkata-india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="JOIN US" />
        </a>
      </div>
      <img
        src={villagerImage}
        alt="Floating Villager"
        className="floating-villager"
      />
      <ToolManager /> {/* 👈 Add the ToolManager here */}
    </div>
  );
}

export default HeroSection;
