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
    const participants20Plus = participants.filter((p) => p.score >= 20).length;

    return {
      total: totalParticipants,
      participants20Plus: participants20Plus,
    };
  };

  const counts = getParticipantCounts();



  // Calculate progress percentage based on current position towards next milestone
  const getProgressPercentage = () => {
    const current = counts.participants20Plus;

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
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
      setTimeout(() => setIsAnimating(false), 1000); // Stop animation after 1 second
    }, 100); // Small delay before starting animation

    return () => clearTimeout(timer);
  }, [progressPercentage]);

  // Function to calculate next tier unlock message
  const getNextTierMessage = () => {
    // Find the next tier that needs to be unlocked
    const nextTier = tiers.find(
      (tier) => counts.participants20Plus < tier.requiredParticipants
    );

    if (!nextTier) {
      // All tiers unlocked
      return `All tiers unlocked! ${counts.participants20Plus} participants have 20+ scores`;
    }

    // Calculate how many more participants needed to unlock this tier
    const neededCount =
      nextTier.requiredParticipants - counts.participants20Plus;
    const tierNumber = nextTier.name.split(" ")[1];

    return `${neededCount} more completion${
      neededCount !== 1 ? "s" : ""
    } to unlock Tier ${tierNumber}`;
  };

  return (
    <div className="linear-tier-progress">
      <div className="progress-track">
        {/* Background progress line */}
        <div className="progress-line">
          {/* Progress fill based on participants with 20+ scores */}
          <div
            className={`progress-fill ${isAnimating ? "animating" : ""}`}
            style={{ width: `${animatedProgress}%` }}
          ></div>
        </div>

        {/* Tier markers */}
        {tiers.map((tier) => {
          const isUnlocked =
            counts.participants20Plus >= tier.requiredParticipants;

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
                <span className="tier-score">
                  {tier.requiredParticipants} needed
                </span>
              </div>
            </div>
          );
        })}

        {/* Current progress indicator for 20+ scores */}
        <div
          className={`current-score-indicator ${
            isAnimating ? "animating" : ""
          }`}
          style={{ left: `${Math.min(animatedProgress, 95)}%` }}
        >
          <div className="score-marker">
            <div className="score-dot"></div>
            <div className="score-label">
              <span className="score-text">{counts.participants20Plus}</span>
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
