import React from "react";
import {
  Modal,
  Button,
  ListGroup,
  Badge,
  Stack,
  Accordion,
} from "react-bootstrap";
import {
  FaTrophy,
  FaGamepad,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
} from "react-icons/fa"; // Import icons

const ParticipantDetailsModal = ({ participant, onHide }) => {
  // If no participant is selected, don't render anything
  if (!participant) {
    return null;
  }

  // Helper function to parse a pipe-separated string into a clean array
  const parseList = (listString) => {
    if (!listString || typeof listString !== "string") {
      return [];
    }
    // Split, trim whitespace, and filter out any empty strings
    return listString
      .split("|")
      .map((item) => item.trim())
      .filter((item) => item);
  };

  const skillBadgesList = parseList(participant.completedSkillBadges);
  const arcadeGamesList = parseList(participant.completedArcadeGames);

  return (
    <Modal show={true} onHide={onHide} centered size="lg" scrollable>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center flex-wrap gap-2">
          <span className="me-2">{participant.name}</span>
          <Badge bg="secondary">Rank: {participant.rank}</Badge>
          {participant.allCompleted === "Yes" && (
            <Badge bg="success" className="d-flex align-items-center">
              <FaStar className="me-1" size={12} />
              Completed
            </Badge>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Top Info Section */}
        <Stack direction="horizontal" gap={3} className="mb-3 flex-wrap">
          <div>
            <p className="mb-1 small text-muted">EMAIL</p>
            <p className="fw-bold mb-0">{participant.email}</p>
          </div>
          <div className="ms-auto text-end">
            <p className="mb-1 small text-muted">PROFILE STATUS</p>
            <Badge
              bg={
                participant.profileUrlStatus === "All Good"
                  ? "success"
                  : "warning"
              }
            >
              {participant.profileUrlStatus}
            </Badge>
          </div>
          <div className="vr" />
          {/* Access Code Redemption Status */}
          <div className="text-end">
            <p className="mb-1 small text-muted">CODE REDEEMED</p>
            <Badge
              bg={
                participant.accessCodeRedemptionStatus === "Yes"
                  ? "success"
                  : "danger"
              }
            >
              {participant.accessCodeRedemptionStatus === "Yes" ? (
                <FaCheckCircle />
              ) : (
                <FaTimesCircle />
              )}{" "}
              {participant.accessCodeRedemptionStatus}
            </Badge>
          </div>
          <div className="vr" />
          <div className="text-end">
            <p className="mb-1 small text-muted">TOTAL SCORE</p>
            <h5 className="fw-bold mb-0 text-primary">{participant.score}</h5>
          </div>
        </Stack>
        <hr />

        {/* Accordion for Badges and Games */}
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          {/* Skill Badges Section */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaTrophy className="me-2" />
              <strong>{participant.skillBadges} Skill Badges Completed</strong>
            </Accordion.Header>
            <Accordion.Body>
              {skillBadgesList.length > 0 ? (
                <ListGroup variant="flush">
                  {skillBadgesList.map((badge, index) => (
                    <ListGroup.Item key={`skill-${index}`}>
                      {badge}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-muted p-2">No skill badges to display.</p>
              )}
            </Accordion.Body>
          </Accordion.Item>

          {/* Arcade Games Section */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaGamepad className="me-2" />
              <strong>{participant.arcadeGames} Arcade Games Completed</strong>
            </Accordion.Header>
            <Accordion.Body>
              {arcadeGamesList.length > 0 ? (
                <ListGroup variant="flush">
                  {arcadeGamesList.map((game, index) => (
                    <ListGroup.Item key={`arcade-${index}`}>
                      {game}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-muted p-2">No arcade games to display.</p>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          href={participant.profileUrl}
          target="_blank"
          disabled={
            !participant.profileUrl ||
            participant.profileUrlStatus !== "All Good"
          }
        >
          View Cloud Skills Boost Profile
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ParticipantDetailsModal;
