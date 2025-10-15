import React, { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { FaUsers, FaTrophy, FaSearch, FaMoon } from "react-icons/fa";
import { getSortedParticipants } from "../../data/progressboardData";
import "./Progressboard.css";

const ITEMS_PER_PAGE = 10;

function Progressboard() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState("");

  // Use sorted participants
  const sortedParticipants = useMemo(() => getSortedParticipants(), []);

  const filteredParticipants = useMemo(() => {
    return sortedParticipants.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, sortedParticipants]);

  const participantsToShow = filteredParticipants.slice(0, visibleCount);

  const totalParticipants = sortedParticipants.length;
  const highestScore = Math.max(...sortedParticipants.map((p) => p.score));

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  return (
    <div className="progressboard-page">
      <Container className="py-5">
        {/* Header Section */}
        <header className="progressboard-header d-flex justify-content-between align-items-start mb-4">
          <div>
            <h1 className="h4 fw-bold mb-0">GDG On Campus GCECT</h1>
            <p className="text-muted mb-2">Cloud Study Jams Progressboard</p>
            <p className="small text-muted">
              If your name is not on the list, contact an organizer.
            </p>
          </div>
        </header>

        {/* Stats Cards */}
        <Row className="mb-4">
          <Col md={6} className="mb-3 mb-md-0">
            <Card className="stat-card">
              <Card.Body>
                <FaUsers size={24} className="stat-icon" />
                <h5 className="mb-0">{totalParticipants}</h5>
                <p className="text-muted small mb-0">Total Participants</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="stat-card">
              <Card.Body>
                <FaTrophy size={24} className="stat-icon" />
                <h5 className="mb-0">{highestScore}</h5>
                <p className="text-muted small mb-0">Highest Score</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Search Bar */}
        <InputGroup className="mb-4">
          <Form.Control
            placeholder="Search participant by name (Press Enter)..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-primary">
            <FaSearch />
          </Button>
        </InputGroup>

        {/* Rankings Section */}
        <Card className="rankings-card">
          <Card.Header>
            <h5 className="mb-0">Cloud Study Jams Rankings</h5>
            <p className="small text-muted mb-0">
              Data from Google Sheets (updated daily)
            </p>
          </Card.Header>
          <Card.Body>
            {participantsToShow.map((participant) => (
              <div key={participant.id} className="participant-row">
                <div>
                  <h6 className="fw-bold mb-0">{participant.name}</h6>
                  <p className="small text-muted mb-0">
                    Score: {participant.score} • {participant.skillBadges} Skill
                    Badges + {participant.arcadeGames} Arcade Games
                  </p>
                </div>
                <Button variant="primary" size="sm">
                  More Details
                </Button>
              </div>
            ))}

            {/* Load More Section */}
            {visibleCount < filteredParticipants.length && (
              <div className="text-center mt-4">
                <Button
                  variant="primary"
                  className="btn-load-more"
                  onClick={loadMore}
                >
                  Load Next {ITEMS_PER_PAGE} Participants
                </Button>
                <p className="text-muted small mt-2">
                  Showing {visibleCount} of {filteredParticipants.length}{" "}
                  participants
                </p>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Progressboard;
