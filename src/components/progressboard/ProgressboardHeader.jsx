import React from "react";
import LinearTierProgress from "./LinearTierProgress";

const ProgressboardHeader = ({ participants }) => {
  return (
    <header className="progressboard-header mb-3">
      <div className="progressboard-header-with-progress">
        <div className="progressboard-header-text">
          <div className="progressboard-title-container">
            <h1 className="progressboard-elegant-title mb-1">
              Cloud Study Jams Progressboard
            </h1>
            <p className="text-muted mb-0">
              If your name is not on the list, contact the organizer.
            </p>
          </div>
        </div>
        <div className="progressboard-header-progress">
          <LinearTierProgress participants={participants} />
        </div>
      </div>
    </header>
  );
};

export default ProgressboardHeader;
