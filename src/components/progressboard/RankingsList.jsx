import React from 'react';
import { Card, Button } from 'react-bootstrap';

/**
 * Determines the CSS class for the rank badge based on the rank number.
 * @param {number} rank - The participant's overall rank.
 * @returns {string} The CSS class for the rank badge.
 */
const getRankClass = (rank) => {
  if (rank === 1) return 'rank-gold';
  if (rank === 2) return 'rank-silver';
  if (rank === 3) return 'rank-bronze';
  return 'rank-default';
};

/**
 * Renders the main list of participants in the progressboard.
 * @param {object} props - The component props.
 * @param {Array} props.participants - The array of participant objects to display.
 * @param {Function} props.onShowDetails - The function to call when 'More Details' is clicked.
 */
const RankingsList = ({ participants, onShowDetails }) => {
  return (
    <Card className="rankings-card shadow-sm">
      <Card.Header>
        <h5 className="mb-0">Cloud Study Jams Rankings</h5>
        <p className="small text-muted mb-0">Data from Google Sheets (updated daily)</p>
      </Card.Header>
      <Card.Body>
        {participants.length > 0 ? (
          participants.map((participant) => (
            <div key={participant.id} className="participant-row">
              <div className="d-flex align-items-center">
                {/* Use participant.rank to show the correct rank and get the right class */}
                <span className={`rank-badge ${getRankClass(participant.rank)}`}>
                  {participant.rank}
                </span>
                <div>
                  <h6 className="fw-bold mb-0">{participant.name}</h6>
                  <p className="small text-muted mb-0">
                    Score: {participant.score} • {participant.skillBadges} Skill Badges + {participant.arcadeGames} Arcade Games
                  </p>
                </div>
              </div>
              <Button variant="primary" size="sm" onClick={() => onShowDetails(participant)}>
                More Details
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-3">No participants found.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default RankingsList;

