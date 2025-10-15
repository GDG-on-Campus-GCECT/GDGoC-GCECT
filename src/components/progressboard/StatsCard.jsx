import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaTrophy } from 'react-icons/fa';

const StatsCards = ({ total, highest }) => {
  return (
    <Row className="mb-4">
      <Col md={6} className="mb-3 mb-md-0">
        <Card className="stat-card">
          <Card.Body>
            <FaUsers size={24} className="stat-icon" />
            <div>
              <h5 className="mb-0">{total}</h5>
              <p className="text-muted small mb-0">Total Participants</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="stat-card">
          <Card.Body>
            <FaTrophy size={24} className="stat-icon" />
            <div>
              <h5 className="mb-0">{highest}</h5>
              <p className="text-muted small mb-0">Highest Score</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;
