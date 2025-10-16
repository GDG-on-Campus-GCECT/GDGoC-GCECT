import React from "react";
import LinearTierProgress from "./LinearTierProgress";

const ProgressboardHeader = ({ participants }) => {
  return (
    <header className="progressboard-header mb-4">
      <div className="progressboard-header-with-progress">
        <div className="progressboard-header-text">
          <h1 className="h4 fw-bold mb-0">GDG On Campus GCECT</h1>
          <p className="text-muted mb-2">Cloud Study Jams Progressboard</p>
          <p className="small text-muted">
            If your name is not on the list, contact an organizer.
          </p>
        </div>
        <div className="progressboard-header-progress">
          <LinearTierProgress participants={participants || []} />
        </div>
      </div>
    </header>
  );
};

export default ProgressboardHeader;
