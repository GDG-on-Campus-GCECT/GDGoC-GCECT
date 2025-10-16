import React, { useState, useEffect } from "react";
import { FaMedal, FaTrophy, FaCrown, FaUsers } from "react-icons/fa";

const LinearTierProgress = ({ participants = [] }) => {
  // Animation state
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Tier thresholds based on number of participants with 20+ scores
  const tiers = [
    {
      name: "Tier 3",
      requiredParticipants: 50,
      icon: FaMedal,
      position: 33.33,
      color: "#cd7f32",
      bgColor: "#f4e4bc",
    },
    {
      name: "Tier 2",
      requiredParticipants: 70,
      icon: FaTrophy,
      position: 66.66,
      color: "#c0c0c0",
      bgColor: "#f0f0f0",
    },
    {
      name: "Tier 1",
      requiredParticipants: 100,
      icon: FaCrown,
      position: 100,
      color: "#ffd700",
      bgColor: "#fff8dc",
    },
  ];

  // Calculate participant counts
  const getParticipantCounts = () => {
    const totalParticipants = participants.length;
    const participantsCompleted = participants.filter(
      (p) => p.allCompleted === "Yes"
    ).length;

    return {
      total: totalParticipants,
      participantsCompleted: participantsCompleted,
    };
  };

  const counts = getParticipantCounts();

  // Calculate progress percentage based on current position towards next milestone
  const getProgressPercentage = () => {
    const current = counts.participantsCompleted;

    // If we have 100 or more, show full progress
    if (current >= 100) return 100;

    // Find which tier segment we're in
    if (current >= 70) {
      // Between Tier 2 and Tier 1 (70-100)
      const segmentProgress = (current - 70) / (100 - 70);
      return 66.66 + segmentProgress * (100 - 66.66);
    } else if (current >= 50) {
      // Between Tier 3 and Tier 2 (50-70)
      const segmentProgress = (current - 50) / (70 - 50);
      return 33.33 + segmentProgress * (66.66 - 33.33);
    } else {
      // Between start and Tier 3 (0-50)
      const segmentProgress = current / 50;
      return segmentProgress * 33.33;
    }
  };

  const progressPercentage = getProgressPercentage();

  // Animation effect
  useEffect(() => {
    let initialTimer;
    let animationTimer;

    initialTimer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
      animationTimer = setTimeout(() => setIsAnimating(false), 1000); // Stop animation after 1 second
    }, 100); // Small delay before starting animation

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      if (animationTimer) clearTimeout(animationTimer);
    };
  }, [progressPercentage]);

  // Function to calculate next tier unlock message
  const getNextTierMessage = () => {
    // Find the next tier that needs to be unlocked
    const nextTier = tiers.find(
      (tier) => counts.participantsCompleted < tier.requiredParticipants
    );

    if (!nextTier) {
      // All tiers unlocked
      return `All tiers unlocked! ${counts.participantsCompleted} participants completed all badges & games`;
    }

    // Calculate how many more participants needed to unlock this tier
    const neededCount =
      nextTier.requiredParticipants - counts.participantsCompleted;
    const tierNumber = nextTier.name.split(" ")[1];

    return `${neededCount} more completion${
      neededCount !== 1 ? "s" : ""
    } to unlock Tier ${tierNumber}`;
  };

  return (
    <div className="linear-tier-progress">
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(progressPercentage)}
        aria-label={`Participants who completed all badges & games: ${counts.participantsCompleted} of 100 needed for all tiers`}
      >
        {/* Hybrid progress line - wavy for progress, straight for remaining */}
        <div className="hybrid-progress-container">
          {/* Background straight line */}
          <div className="progress-line">
            <div className="progress-bg"></div>

            {/* Wavy progress section - only up to current progress */}
            <div
              className={`wavy-progress-section ${
                isAnimating ? "animating" : ""
              }`}
              style={{ width: `${animatedProgress}%` }}
            >
              <svg
                className="wavy-svg"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 Q2.5,1 5,4 T10,4 T15,4 T20,4 T25,4 T30,4 T35,4 T40,4 T45,4 T50,4 T55,4 T60,4 T65,4 T70,4 T75,4 T80,4 T85,4 T90,4 T95,4 L100,4"
                  stroke="#34a853"
                  fill="none"
                  strokeLinecap="round"
                  className="wavy-line"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Tier markers */}
        {tiers.map((tier) => {
          const isUnlocked =
            counts.participantsCompleted >= tier.requiredParticipants;

          return (
            <div
              key={tier.name}
              className={`tier-marker ${isUnlocked ? "unlocked" : "locked"}`}
              style={{ left: `${tier.position}%` }}
            >
              <div
                className="tier-marker-icon"
                style={
                  isUnlocked
                    ? {
                        backgroundColor: tier.bgColor,
                        color: tier.color,
                        borderColor: tier.color,
                      }
                    : {}
                }
              >
                <tier.icon size={14} />
              </div>
              <div className="tier-marker-label">
                <span className="tier-name">{tier.name}</span>
                <span className="tier-score">{tier.requiredParticipants}</span>
              </div>
            </div>
          );
        })}

        {/* Current progress indicator for completed participants */}
        <div
          className={`current-score-indicator ${
            isAnimating ? "animating" : ""
          }`}
          style={{ left: `${Math.min(animatedProgress, 95)}%` }}
        >
          <div className="score-marker">
            <div className="score-dot"></div>
            <div className="score-label">
              <span className="score-text">{counts.participantsCompleted}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress info */}
      <div className="linear-progress-info">
        <div className="progress-stat">
          <FaUsers size={12} className="me-1" />
          <span>{getNextTierMessage()}</span>
        </div>
      </div>
    </div>
  );
};

export default LinearTierProgress;
